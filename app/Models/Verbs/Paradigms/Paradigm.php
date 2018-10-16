<?php

namespace App\Models\Verbs\Paradigms;

use Config;
use App\Models\Verbs\Paradigms\HeaderRow;
use Illuminate\Support\Collection;


/**
 * Takes a collection of forms and converts them into a format that can be rendered as a paradigm
 */
class Paradigm
{
    private $headers;
    private $rows;
    private $headerRows;
    private $numHeaders;

    /**
     * Construct the paradigm
     *
     * @param Collection The forms to be displayed
     */
    public function __construct(Collection $forms)
    {
        $this->headers    = $this->loadHeaders($forms);
        $this->headerRows = $this->extractHeaderRows($this->headers, 7);
        $this->numHeaders = $this->calculateNumHeaderRows($this->headerRows);

        $rows = $this->loadRows($forms);
        $this->rows = $this->filterRows($rows);

        $this->sources = $this->loadSources($forms);
    }

    //=======================================================================//
    //                           Loading methods                             //
    //        These methods are used to load new data into the object.       //
    //=======================================================================//

    /**
     * Builds up the headers of the table
     *
     * Extracts all of the language, order, mode, absolute, negative, and
     * abs/obj information from a collection of forms.
     *
     * @param Collection $forms
     * @return Collection
     */
    private function loadHeaders(Collection $forms) : Collection
    {
        $headerValues = $this->extractHeaderValues($forms);
        $headers = $this->mergeHeaders($headerValues);
        return $this->prepareHeaders($headers);
    }

    private function loadSources(Collection $forms) : Collection
    {
        return $forms->pluck('sources')
            ->flatten(1)
            ->unique('id')
            ->sortBy('disambiguator')
            ->sortByDesc('year')
            ->sortBy('name');
    }

    /**
     * Extracts the actual values for what will become the headers from a
     * collection of forms
     *
     * The header values for each form are put into a flat collection. A
     * collection of these collections is what will will be returned.
     *
     * @param Collection $forms
     * @return Collection
     */
    private function extractHeaderValues(Collection $forms) : Collection
    {
        return $forms->map(function ($form) {
            $structure = $form->structure;

            return collect([
                $form->language->name,
                $structure->order->name,
                $structure->mode->name,
                $structure->absoluteStatus,
                $structure->negativeStatus,
                $structure->diminutiveStatus
            ]);
        });
    }

    /**
     * Merges a collection of forms' headers into a hierarchical collection
     *
     * @param Collection $headerValues
     * @return Collection
     */
    private function mergeHeaders(Collection $headerValues) : Collection
    {
        $headers = collect();

        $headerValues->each(function ($fields) use ($headers) {
            $currentHeader = $headers;

            $fields->each(function ($field) use (&$currentHeader) {
                if (!$currentHeader->has($field)) {
                    $currentHeader[$field] = collect();
                }

                $currentHeader = $currentHeader[$field];
            });
        });

        return $headers;
    }

    /**
     * Sorts a collection of hierarchical headers
     *
     * Currently more or less brute force moves 'Objective' to the beginning
     *
     * @param Collection $headers
     * @return Collection
     */
    private function sortHeaders(Collection $headers) : Collection
    {
        if ($headers->has('Objective')) {
            $headers = $headers->sortBy(function ($a, $b) {
                if (strcmp($a, 'Objective') === 0) {
                    return 1;
                } elseif (strcmp($b, 'Objective') === 0) {
                    return -1;
                }
                return 0;
            });
        }

        return $headers;
    }

    /**
     * Prepares a hierarchical collection of headers into a format ready for
     * HTML printing
     *
     * @param Collection $headers
     * @param int $span
     * @param bool $bordered
     * @param bool $firstRow
     * @return Collection
     */
    private function prepareHeaders(Collection $headers, int $span=1,
        bool $bordered=true, bool $firstRow=true) : Collection
    {
        $preparedHeaders = collect();
        $rowspan = 1;
        $colspan = 1;
        $show = true;
        $subs = [];
        $firstTime = true;

        foreach ($headers as $header => $subheaders) {
            $subheaders = $this->sortHeaders($subheaders);

            if (!$firstRow && !$firstTime) {
                $bordered = false;
            }
            $firstTime = false;

            if (!$headers->isEmpty()) {
                $colspan = $this->calculateHeaderColspan($subheaders);
                $rowspan = $this->calculateHeaderRowspan($subheaders);
                $subs = $this->prepareHeaders($subheaders, $rowspan, $bordered, false);
            }

            if ($span > 1) {
                $show = false;
                $rowspan = $span - 1;
            }

            $preparedHeaders[$header] = collect([
                'rowspan'    => $rowspan,
                'colspan'    => $colspan,
                'subheaders' => $subs,
                'show'       => $show,
                'name'       => $header,
                'bordered'   => $bordered
            ]);
        }

        return $preparedHeaders;
    }

    /**
     * Finds the widest row of columns within a header column
     *
     * @param Collection $header
     * @return int
     */
    private function calculateHeaderColspan(Collection $header) : int
    {
        $max = 0;

        while (!$header->isEmpty()) {
            $max = max($max, $header->count());
            $header = $header->flatten(1);
        }

        return $max;
    }

    /**
     * Finds the number of non-branching headers below a header
     *
     * @param Collection $header
     * @return int
     */
    private function calculateHeaderRowspan(Collection $header) : int
    {
        $span = 1;

        if ($header != null && $header->count() == 1) {
            $span += $this->calculateHeaderRowspan(array_first($header));
        }

        return $span;
    }

    /**
     * Extracts a collection of $depth rows
     *
     * @param Collection $headers
     * @param int $depth
     * @return Collection
     */
    private function extractHeaderRows(Collection $headers, int $depth) : Collection
    {
        $rows = collect();

        for ($i = 0; $i < $depth; $i++) {
            $rows->push($this->collapseHeaderRow($headers, $i));
        }

        return $rows;
    }

    /**
     * Collapses a header row down to $depth
     *
     * For the following table, a collapse of depth 1 would turn this:
     *
     *       A       |       B
     *   C   |   D   |   E   |   F
     * G | H | I | J | K | L | M | N
     *
     * into this:
     *
     *   C   |   D   |   E   |   F
     * G | H | I | J | K | L | M | N
     *
     * @param Collection $row
     * @param int depth
     * @return HeaderRow
     */
    private function collapseHeaderRow(Collection $row, int $depth) : HeaderRow
    {
        $collapsedRow = new HeaderRow();

        if ($depth > 0) {
            $row->each(function ($headerData) use ($collapsedRow, $depth) {
                $subheaders = $headerData['subheaders'];
                $collapsedRow->push($this->collapseHeaderRow($subheaders, $depth - 1));
            });

            $collapsedRow = $collapsedRow->collapse();
        } else {
            $row->each(function ($headerData) use ($collapsedRow) {
                $collapsedRow->push($headerData);
            });
        }

        return $collapsedRow;
    }

    /**
     * Finds the number of visible rows in a set of header rows
     *
     * @param Collection $headerRows
     * @return int
     */
    private function calculateNumHeaderRows(Collection $headerRows) : int
    {
        for ($i = $headerRows->count() - 1; $i >= 0; $i--) {
            if ($headerRows[$i]->isVisible()) {
                return $i;
            }
        }

        return 0;
    }

    /**
     * Builds up the rows of the table
     *
     * Extracts the class and arguments from a collection of forms and saves
     * the form within them.
     *
     * @param Collection $forms
     * @return array
     */
    private function loadRows(Collection $forms) : array
    {
        // Load in the scaffolding to make sure everything comes out in the
        // right order
        $rows = Config::get('constants.paradigm_order');

        foreach ($forms as $form) {
            $structure = $form->structure;
            $rows[$structure->subclass][$structure->arguments][] = $form;
        }

        return $rows;
    }

    /**
     * Removes extraneous rows and merges where syncretism has taken place
     *
     * @param array $rows
     * @return array
     */
    private function filterRows(array $rows) : array
    {
        // Loop through each class
        foreach ($rows as $class => $argumentStructures) {
            $keys = array_keys($argumentStructures);
            $classHasForms = false;

            // Loop through each set of arguments
            for ($i = 0; $i < count($argumentStructures); $i++) {
                $arguments = $keys[$i];

                // If the search returned no results for this set of arguments, remove it
                if (count($argumentStructures[$arguments]) == 0) {
                    unset($rows[$class][$arguments]);
                } elseif (count($rows[$class][$arguments]) > 0) {
                    $classHasForms = true;

                    if ($this->hasNumberlessArgument($arguments) &&
                        $i < count($argumentStructures) - 1) {

                        $possibleMatches = $this->generatePossibleMatches($arguments);

                        // Find how many of those sets are next to this cell
                        $consecutive = $this->findConsecutiveRows($rows,
                            $class, $possibleMatches, $keys, $i);

                        // Move the forms into a row with an argument structure
                        // that does have a number if one exists in the data
                        // set
                        $rows = $this->moveRows($rows, $class, $arguments,
                            $possibleMatches, $consecutive);
                    }
                }
            }

            // If there are no forms in the class, remove the class
            if (!$classHasForms) {
                unset($rows[$class]);
            }
        }

        return $rows;
    }

    //=======================================================================//
    //                           Getter methods                              //
    //=======================================================================//

    /**
     * @return array The array of headers
     */
    public function getHeaders()
    {
        return $this->headers;
    }

    /**
     * @return array The array of rows of the table
     */
    public function getRows()
    {
        return $this->rows;
    }

    //=======================================================================//
    //                      Loading helper methods                           //
    //=======================================================================//

    /**
     * Finds the number of rows immediately after a given row that are the same but
     * for the number of one or more of the arguments
     *
     * @param array      $rows     The rows currently in the database
     * @param string     $class    The name of the class of the row in question
     * @param Collection $matches  Possible matches of the argument set in question
     * @param array      $args     An array of arguments present in the database
     * @param int        $start    The index of the row in question
     * @return int The number of consecutive matches after the row in question
     */
    private function findConsecutiveRows(array $rows, string $class, Collection $matches,
        array $args, int $start) : int
    {
        $consecutive = 0;

        for ($i = $start+1; $i < count($args); $i++) {
            $arg = $args[$i];

            if (count($rows[$class][$arg]) > 0) {
                if (!$matches->has($arg)) {
                    break;
                }

                $consecutive++;
            }
        }

        return $consecutive;
    }

    /**
     * Move any forms into a row with near identical arguments
     *
     * @param string     $class            The name of the class of the row in
     *                                     question
     * @param string     $arguments        The arguments of the row in question
     * @param Collection $possibleMatches  Possible matches of the arguments of
     *                                     The row in question
     * @param int        $consecutive      The number of matches that are
     *                                     consecutive immediately after this row
     * @return bool array
     */
    private function moveRows(array $rows, string $class, string $arguments,
        Collection $possibleMatches, int $consecutive) : array
    {
        $numMoved = 0;
        $shrunk = [];

        foreach ($possibleMatches as $possibleMatch) {
            if ($this->rowInUse($rows, $class, $possibleMatch)) {
                $formsToMove = $rows[$class][$arguments];
                $possibleMatchIDs = array_pluck($rows[$class][$possibleMatch], 'id');

                foreach ($formsToMove as $formToMove) {
                    if (!in_array($formToMove->id, $possibleMatchIDs)) {
                        if ($consecutive >= $numMoved) {
                            $formToMove->span = $consecutive;
                        } else {
                            $formToMove->distant = true;
                        }

                        if (!isset($formToMove->diffClass)) {
                            $formToMove->diffClass = $arguments;
                        }

                        $rows[$class][$possibleMatch][] = $formToMove;
                    } elseif (!in_array($formToMove->id, $shrunk)) {
                        $formToMove->span -= 1;
                        $shrunk[] = $formToMove->id;
                    }
                }

                $numMoved++;
            }
        }
        
        if ($numMoved > 0) {
            // If forms were moved, remove the now empty row
            unset($rows[$class][$arguments]);
        }

        return $rows;
    }

    /**
     * Determines if the row identified with a given class and argument
     * structure both exists and has members in a set of rows
     *
     * @param array  $rows
     * @param string $class
     * @param string $argStructure
     * @return bool
     */
    private function rowInUse(array $rows, string $class, string $argStructure) : bool
    {
        return isset($rows[$class][$argStructure]) &&
            count($rows[$class][$argStructure]) > 0;
    }

    /**
     * Determines whether at least one of the arguments in a set has no number
     *
     * @param string $argSeries
     * @return bool
     */
    private function hasNumberlessArgument(string $argSeries) : bool
    {
        $args = preg_split("/[—+]/u", $argSeries);

        foreach ($args as $arg) {
            if ($this->isNumberless($arg)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Determines whether an argument has no number
     *
     * Checks to see if the argument is followed by a number marker. An
     * exception is made for second person plural inclusive, which has an
     * implicit plural marker.
     *
     * @param string $arg
     * @return bool
     */
    private function isNumberless(string $arg) : bool
    {
        return $arg !== '21' && !in_array($arg{strlen($arg) - 1}, ['s', 'd', 'p']);
    }

    /**
     * Generates a list of possible alternate argument sets for a set of
     * arguments with at least one numberless argument
     *
     * @param string $args
     * @return Collection
     */
    private function generatePossibleMatches(string $args) : Collection
    {
        $args = '1—2+3';
        // The possible delimiters are the em dash and the plus
        $arguments = preg_split("/[—+]/u", $args);

        // An argument set is AI+O if it doesn't have a dash but does have a plus
        $isAIPlusO = !!preg_match("/^[^—]+\+/u", $args);

        return $this->recursivelyBuildPossibleMatches($arguments, $args, $isAIPlusO);
    }

    /**
     * Builds up a list of possible more specific subtypes for an argument in
     * context
     *
     * @param array  $args       The series of arguments (the context)
     * @param string $original   The original argument structure
     * @param bool   $isAIPlusO  Whether the original argument was AI+O
     * @param int    $index      The index of the current focused element
     * @return Collection
     */
    private function recursivelyBuildPossibleMatches(array $args, string $original,
        bool $isAIPlusO, int $index = 0) : Collection
    {
        $options = collect();
        $delimiter = ($index == 0 && !$isAIPlusO) ? '—' : '+';

        if ($index < count($args)) {
            $arg = $args[$index];
            $currSet = collect([$arg]);

            // If the argument is numberless, add all the possible numbers it
            // could take
            if ($this->isNumberless($arg)) {
                foreach (['s', 'd', 'p'] as $number) {
                    $currSet->push($arg.$number);
                }
            }

            $options = $currSet;

            $nextSet = $this->recursivelyBuildPossibleMatches(
                $args, $original, $isAIPlusO, $index+1
            );

            if (!$nextSet->isEmpty()) {
                $options = $currSet->crossJoin($nextSet)
                                   ->mapSpread(function ($a, $b) use ($delimiter) {
                                       return $a.$delimiter.$b;
                                   });
            }

            $options = $options->filter(function ($option) use ($original) {
                return $option != $original;
            });
        }

        return $options;
    }

    //=======================================================================//
    //                            Render methods                             //
    //=======================================================================//

    /**
     * Renders out the header section of the paradigm
     *
     * @return string The HTML for the header section
     */
    public function renderHeaders() : string
    {
        $html = '';

        for ($i = 0; $i < $this->headerRows->count(); $i++) {
            $row = $this->headerRows[$i];
            $html .= $row->render($i, $this->numHeaders);
        }

        return "<thead>$html</thead>";
    }

    public function renderBody()
    {
        $html = '';

        foreach ($this->rows as $class => $argumentStructures) {
            $html .= $this->renderClassRow($class, $argumentStructures);
        }

        return "<tbody>$html</tbody>";
    }

    public function renderSources()
    {
        return $this->sources->map(function ($source) {
            return $source->present('link')->__toString();
        })->implode('; ');
    }

    private function renderClassRow(string $class, array $argumentStructures) : string
    {
        $firstTime = true;
        $html = '';
        $numStructures = count($argumentStructures);

        foreach ($argumentStructures as $structure => $forms) {
            $html .= $this->renderStructureRow($class, $structure,
                $numStructures, collect($forms), $firstTime);
            $firstTime = false;
        }

        return $html;
    }

    private function renderStructureRow(string $class, string $structure,
        int $numStructures, Collection $forms, bool $firstTime) : string
    {
        $html = "<tr>";

        if ($firstTime) {
            $html = "<tr style=\"border-top: 2px solid #363636;\">";
            $html .= "<th rowspan=\"$numStructures\">$class</th>";
        }

        $html .= "<td><nobr>$structure</nobr></td>";

        foreach ($this->headers as $language) {
            $firstOrder = true;
            foreach ($language['subheaders'] as $order) {
                $firstMode = true;
                foreach ($order['subheaders'] as $mode) {
                    $firstAbsObj = true;
                    foreach ($mode['subheaders'] as $absobj) {
                        $firstPolarity = true;
                        foreach ($absobj['subheaders'] as $polarity) {
                            $firstDim = true;
                            foreach ($polarity['subheaders'] as $dim) {
                                $cellForms = $forms->filter(function ($form)
                                    use ($language, $order, $mode, $absobj, $polarity, $dim) {
                                    return $form->language->name == $language['name'] &&
                                        $form->structure->order->name == $order['name'] &&
                                        $form->structure->mode->name == $mode['name'] &&
                                        $form->structure->absoluteStatus == $absobj['name'] &&
                                        $form->structure->negativeStatus == $polarity['name'] &&
                                        $form->structure->diminutiveStatus == $dim['name'];
                                });

                                $bordered = $firstOrder && $firstMode && $firstAbsObj &&
                                    $firstPolarity && $firstDim;

                                $html .= $this->renderCell($cellForms, $bordered);

                                $firstDim = false;
                            }
                            $firstPolarity = false;
                        }
                        $firstAbsObj = false;
                    }
                    $firstMode = false;
                }
                $firstOrder = false;
            }
        }

        $html .= "</tr>";
        return $html;
    }

    private function renderCell(Collection $forms, bool $bordered) : string
    {
        $style = $bordered ? 'style="border-left: 2px solid #363636;"' : '';
        $html = "<td $style></td>";

        if (!$forms->isEmpty()) {
            $firstForm = $forms->first();

            if (!$firstForm->placed || $firstForm->distant) {
                $rowspan = $firstForm->span ?: 1;
                $html = "<td rowspan=\"$rowspan\" $style>";
                foreach ($forms as $form) {
                    $html .= $this->renderForm($form);
                    $form->placed = true;
                }
                $html .= "</td>";
            }
        }

        return $html;
    }

    private function renderForm($form) : string
    {
        $html = $form->present('link');

        if (isset($form->diffClass) && isset($form->structure->head)) {
            $html .= "<span style=\"margin-left: .25rem;\" class=\"alg-highlight\">";
            $html .= '<nobr>(' . $form->structure->present('arguments') . ')</nobr>';
            $html .= "</span>";
        }

        return "<p>$html</p>";
    }
}
