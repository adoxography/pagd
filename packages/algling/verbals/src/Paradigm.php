<?php

namespace Algling\Verbals;

use Config;

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
     * @param \Illuminate\Database\Eloquent\Collection The forms to be displayed
     */
    public function __construct($forms)
    {
        // Load in the data
        $this->loadHeaders($forms);
        $this->loadRows($forms);

        $this->splitHeaders(7);
        $this->calculateNumHeaders();
        // Filter out the unnecessary data and deal with syncretism
        $this->filterRows();
    }

    //========================================================================================================//
    //                                          Loading methods                                               //
    //                      These methods are used to load new data into the object.                          //
    //========================================================================================================//

    /**
     * Builds up the headers of the table
     *
     * Extracts all of the language, order, mode, absolute, negative, and abs/obj information
     * from a collection of forms. Takes advantage of the fact that PHP implements associative arrays as hash tables
     *
     * @param \Illuminate\Database\Eloquent\Collection The forms to be displayed
     * @return void
     */
    private function loadHeaders($forms)
    {
        $this->headers = [];
        foreach ($forms as $form) {
            // Extract the structure for more efficient reference
            $structure = $form->structure;

            // What we're really worried about here is the keys, so no data actually needs to be assigned to the end of the array
            $this->headers[$form->language->name][$structure->order->name][$structure->mode->name][$structure->absoluteStatus][$structure->negativeStatus][$structure->diminutiveStatus] = null;
        }

        $this->headers = $this->mergeHeaders();
    }

    private function mergeHeaders($headers = null, $span = 1, $bordered = true, $firstRow = true)
    {
        $output = [];
        $rowspan = 1;
        $colspan = 1;
        $show = true;
        $subs = [];
        $firstTime = true;

        if (!isset($headers)) {
            $headers = $this->headers;
        }

        if ($headers !== null) {
            foreach ($headers as $header => $subheaders) {
                if ($firstTime) {
                    $firstTime = false;
                } elseif (!$firstRow) {
                    $bordered = false;
                }

                if (array_first($headers) !== null) {
                    $colspan = count(array_flatten($subheaders));
                    $rowspan = $this->calculateHeaderColspan($subheaders);
                    $subs = $this->mergeHeaders($subheaders, $rowspan, $bordered, false);
                }

                if ($span > 1) {
                    $show = false;
                    $rowspan = $span - 1;
                }

                $output[$header] = [
                    'rowspan'    => $rowspan,
                    'colspan'    => $colspan,
                    'subheaders' => $subs,
                    'show'       => $show,
                    'name'       => $header,
                    'bordered'   => $bordered
                ];
            }
        }

        return $output;
    }

    protected function splitHeaders($numHeaders)
    {
        $output = [];

        for ($i = 0; $i < $numHeaders; $i++) {
            $output[] = $this->splitHeaderRow($this->headers, $i);
        }

        $this->headerRows = $output;
    }

    protected function calculateNumHeaders()
    {
        $numHeaders = 0;

        for ($i = 0; $i < count($this->headerRows); $i++) {
            $found = false;

            for ($j = 0; $j < count($this->headerRows[$i]) && !$found; $j++) {
                if ($this->headerRows[$i][$j]['show']) {
                    $found = true;
                    $numHeaders = $i;
                }
            }
        }

        $this->numHeaders = $numHeaders;
    }

    protected function splitHeaderRow($array, $index)
    {
        $output = [];

        if ($index > 0) {
            foreach ($array as $data) {
                $output[] = $this->splitHeaderRow($data['subheaders'], $index - 1);
            }

            $output = array_collapse($output);
        } else {
            foreach ($array as $data) {
                $output[] = $data;
            }
        }

        return $output;
    }

    private function calculateHeaderColspan($header)
    {
        $span = 1;

        if ($header != null && count($header) == 1) {
            $span += $this->calculateHeaderColspan(array_first($header));
        }

        return $span;
    }

    /**
     * Builds up the rows of the table
     *
     * Extracts the class and arguments from a collection of forms and saves the form within them.
     *
     * @param \Illuminate\Database\Eloquent\Collection The forms to be displayed
     * @return void
     */
    private function loadRows($forms)
    {
        // Load in the scaffolding to make sure everything comes out in the right order
        $this->rows = Config::get('constants.paradigm_order');

        foreach ($forms as $form) {
            // Extract the structure for more efficient reference
            $structure = $form->structure;

            $this->rows[$structure->subclass][$structure->arguments][] = $form;
        }
    }

    /**
     * Removes extraneous rows and merges where syncretism has taken place
     *
     * @return void
     */
    private function filterRows()
    {
        // Loop through each class
        foreach ($this->rows as $class => $argumentStructures) {
            $keys = array_keys($argumentStructures);
            $classHasForms = false;

            // Loop through each set of arguments
            for ($i = 0; $i < count($argumentStructures); $i++) {
                $arguments = $keys[$i];

                // If the search returned no results for this set of arguments, remove it
                if (count($argumentStructures[$arguments]) == 0) {
                    unset($this->rows[$class][$arguments]);
                } elseif (count($this->rows[$class][$arguments]) > 0) {
                    $classHasForms = true;

                    // If the there is an argument without a number in the set...
                    if ($this->hasNumberlessArgument($arguments) && $i < count($argumentStructures) - 1) {

                        // Generate a list of possible argument sets that this set could merge with
                        $possibleMatches = $this->generatePossibleMatches($arguments);

                        // Find how many of those sets are next to this cell
                        $consecutive = $this->findConsecutiveRows($class, $possibleMatches, $keys, $i);

                        // Move the forms into a row with an argument structure that does have a number
                        // if one exists in the data set
                        if ($this->moveRows($class, $arguments, $possibleMatches, $consecutive)) {
                            // If forms were moved, remove the now empty row
                            unset($this->rows[$class][$arguments]);
                        }
                    }
                }
            }

            // If there are no forms in the class, remove the class
            if (!$classHasForms) {
                unset($this->rows[$class]);
            }
        }
    }

    //========================================================================================================//
    //                                          Getter methods                                                //
    //========================================================================================================//

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

    //========================================================================================================//
    //                                          Loading helper methods                                        //
    //========================================================================================================//

    /**
     * Finds the number of rows immediately after a given row that are the same but
     * for the number of one or more of the arguments
     *
     * @param string $class the name of the class of the row in question
     * @param array $matches possible matches of the argument set in question
     * @param array $arguments an array of arguments present in the database
     * @param integer $start the index of the row in question
     * @return integer The number of consecutive matches after the row in question
     */
    private function findConsecutiveRows(string $class, array $matches, array $arguments, int $start)
    {
        $consecutive = 0;
        $i = $start + 1;
        $continue = true;

        while ($i < count($arguments) && $continue) {
            if (count($this->rows[$class][$arguments[$i]]) > 0) {
                if (in_array($arguments[$i], $matches)) {
                    $consecutive++;
                } else {
                    $continue = false;
                }
            }
            $i++;
        }

        return $consecutive;
    }

    /**
     * Move any forms into a row with near identical arguments
     *
     * @param string $class the name of the class of the row in question
     * @param string $arguments the arguments of the row in question
     * @param array $possibleMatches possible matches of the arguments of the row in question
     * @param integer $consecutive the number of matches that are consecutive immediately after this row
     * @return boolean true if at least one form was moved, and false otherwise
     */
    private function moveRows(string $class, string $arguments, array $possibleMatches, int $consecutive)
    {
        $numMoved = 0;
        $shrunk = [];

        foreach ($possibleMatches as $possibleMatch) {
            if (isset($this->rows[$class][$possibleMatch]) && count($this->rows[$class][$possibleMatch]) > 0) {
                foreach ($this->rows[$class][$arguments] as $moving) {
                    if (!in_array($moving->id, array_pluck($this->rows[$class][$possibleMatch], 'id'))) {
                        if ($consecutive >= $numMoved) {
                            $moving->span = $consecutive;
                        } else {
                            $moving->distant = true;
                        }

                        if (!isset($moving->diffClass)) {
                            $moving->diffClass = $arguments;
                        }

                        $this->rows[$class][$possibleMatch][] = $moving;
                    } else {
                        if (!in_array($moving->id, $shrunk)) {
                            $moving->span -=1;
                            $shrunk[] = $moving->id;
                        }
                    }
                }

                $numMoved++;
            }
        }

        return $numMoved > 0;
    }

    /**
     * Determines whether at least one of the arguments in a set has no number
     *
     * @param string $args the arguments
     * @return boolean True if there is at least one numberless argument, and false otherwise
     */
    public function hasNumberlessArgument(string $args)
    {
        $arguments = preg_split("/[—+]/u", $args);
        $found = false;

        for ($i = 0; $i < count($arguments) && !$found; $i++) {
            $found = $this->isNumberless($arguments[$i]);
        }

        return $found;
    }

    /**
     * Determines whether an argument has no number
     *
     * @param string $arg
     * @return boolean True if the argument is numberless and false otherwise
     */
    protected function isNumberless(string $arg)
    {
        // Check to see if the argument is followed by a number marker
        // An exception is made for second person plural inclusive, which has an implicit plural marker
        return $arg !== '21' && !in_array($arg{strlen($arg) - 1}, ['s', 'd', 'p']);
    }

    /**
     * Generates a list of possible alternate argument sets for a set of arguments with at least one numberless argument
     *
     * @param string $args
     * @return array A list of possible matches
     */
    protected function generatePossibleMatches(string $args)
    {
        $arguments = preg_split("/[—+]/u", $args);

        return $this->recursivelyBuildPossibleMatches($arguments, $args);
    }

    protected function recursivelyBuildPossibleMatches(array $args, string $original, $currIndex = 0, $isAIplusO = false)
    {
        $options = [];
        $currSet = [];

        if ($currIndex < count($args)) {
            if ($this->isNumberless($args[$currIndex])) {
                foreach (['', 's', 'd', 'p'] as $number) {
                    $currSet[] = $args[$currIndex].$number;
                }
            } else {
                $currSet[] = $args[$currIndex];
            }

            $nextSet = $this->recursivelyBuildPossibleMatches($args, $original, $currIndex+1);

            if (count($nextSet) > 0) {

                // Set the delimiter
                if ($currIndex == 0 && !$isAIplusO) {
                    $delimiter = '—';
                } else {
                    $delimiter = '+';
                }

                foreach ($currSet as $currOption) {
                    foreach ($nextSet as $nextOption) {
                        $option = $currOption.$delimiter.$nextOption;

                        if ($option != $original) {
                            $options[] = $option;
                        }
                    }
                }
            } else {
                foreach ($currSet as $currOption) {
                    if ($currOption != $original) {
                        $options[] = $currOption;
                    }
                }
            }
        }

        return $options;
    }

    /**
     * Takes an array of arguments and restores them to an argument set
     *
     * Modifications will have to be made to this method once AI + O forms are in the database, since the
     * secondary object appears in the second position
     *
     * @param array $tokens  The array of arguments
     * @return string A string version of a set of arguments
     */
    protected function repair(array $tokens)
    {
        $output = $tokens[0];
        if (isset($tokens[1])) {
            $output .= "—".$tokens[1];
        }
        if (isset($tokens[2])) { // DOESN'T ACCOUNT FOR AI + O
            $output .= "+".$tokens[2];
        }
        return $output;
    }

    //========================================================================================================//
    //                                          Render methods                                                //
    //========================================================================================================//

    /**
     * Renders out the header section of the paradigm
     *
     * @return string The HTML for the header section
     */
    public function renderHeaders()
    {
        $html = '';
        $firstTime = true;
        $index = 0;

        foreach ($this->headerRows as $row) {
            $rowHTML = '';

            if ($firstTime && $this->numHeaders > 0) {
                $rowHTML .= '<th rowspan="'. ($this->numHeaders) .'" colspan="2"></th>';
                $firstTime = false;
            }

            if ($this->numHeaders == $index) {
                $rowHTML .= '<th>Class</th><th>Arguments</th>';
            }

            foreach ($row as $cell) {
                if ($cell['show']) {
                    if ($cell['bordered']) {
                        $style = 'style="border-left: 2px solid #363636;"';
                    } else {
                        $style = '';
                    }

                    $rowHTML .= '<th colspan='.$cell['colspan'].' rowspan='.$cell['rowspan']." $style>";
                    $rowHTML .= $cell['name'];

                    if ($cell['rowspan'] > 1) {
                        $temp = array_first($cell['subheaders']);

                        for ($i = 0; $i < $cell['rowspan']; $i++) {
                            if (!$temp['show'] && $temp['name'] != 'Affirmative' && $temp['name'] != 'Non-diminutive' && $temp['name'] != 'Unmarked') {
                                $rowHTML .= ' '. $temp['name'];
                            }
                            $temp = array_first($temp['subheaders']);
                        }
                    }

                    $rowHTML .= '</th>';
                }
            }

            $index++;

            $html .= "<tr>$rowHTML</tr>";
        }

        return "<thead>$html</thead>";
    }
}
