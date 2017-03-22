<?php

namespace App;

use App\Argument;
use Illuminate\Support\Facades\Config;

/**
 * Takes a collection of forms and converts them into a format that can be rendered as a paradigm
 */
class Paradigm
{
    private $headers;
    private $rows;

    /**
     * Construct the paradigm
     *
     * @param Illuminate\Database\Eloquent\Collection The forms to be displayed
     */
    public function __construct($forms)
    {
        // Load in the data
        $this->loadHeaders($forms);
        $this->loadRows($forms);

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
     * @param Illuminate\Database\Eloquent\Collection The forms to be displayed
     * @return void
     */
    private function loadHeaders($forms)
    {
        $this->headers = [];
        foreach ($forms as $form) {
            // Extract the formType for more efficient reference
            $formType = $form->formType;

            // What we're really worried about here is the keys, so no data actually needs to be assigned to the end of the array
            $this->headers[$form->language->name][$formType->order->name][$formType->mode->name][$formType->absoluteStatus][$formType->negativeStatus][$formType->diminutiveStatus] = null;
        }
    }

    /**
     * Builds up the rows of the table
     *
     * Extracts the class and arguments from a collection of forms and saves the form within them.
     *
     * @param Illuminate\Database\Eloquent\Collection The forms to be displayed
     * @return void
     */
    private function loadRows($forms)
    {
        // Load in the scaffolding to make sure everything comes out in the right order
        $this->rows = Config::get('constants.paradigm_order');

        foreach ($forms as $form) {
            // Extract the formType for more efficient reference
            $formType = $form->formType;

            $this->rows[$formType->subclass][$formType->arguments][] = $form;
        }
    }

    /**
     * Removes extraneous rows and merges where syncretism has taken place
     *
     * @return void
     */
    private function filterRows()
    {
        $keys;
        $classHasForms;
        $arguments;
        $possibleMatches;
        $consecutive;

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
     * @param string The name of the class of the row in question
     * @param array Possible matches of the argument set in question
     * @param array An array of arguments present in the database
     * @param integer The index of the row in question
     * @return integer The number of consecutive matches after the row in question
     */
    private function findConsecutiveRows($class, $matches, $arguments, $start)
    {
        $consecutive = 0;
        $i = $start + 1;
        $continue = true;

        // dd(\App\Form::where('id', 33)->with(['formType', 'formType.subject', 'formType.primaryObject', 'formType.secondaryObject'])->first());
        // dd($this->generatePossibleMatches(\App\Form::find(33)->formType->arguments));

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
     * @param string The name of the class of the row in question
     * @param string The arguments of the row in question
     * @param array Possible matches of the arguments of the row in question
     * @param integer The number of matches that are consecutive immediately after this row
     * @return boolean True if at least one form was moved, and false otherwise
     */
    private function moveRows($class, $arguments, $possibleMatches, $consecutive)
    {
        $numMoved = 0;
        $shrunk = [];

        foreach ($possibleMatches as $possibleMatch) {
            if (isset($this->rows[$class][$possibleMatch]) && count($this->rows[$class][$possibleMatch]) > 0) {
                foreach ($this->rows[$class][$arguments] as $moving) {

                    if(!in_array($moving->id, array_pluck($this->rows[$class][$possibleMatch], 'id'))) {
                        if ($consecutive >= $numMoved) {
                            $moving->span = $consecutive;
                        } else {
                            $moving->distant = true;
                        }

                        if(!isset($moving->diffClass)) {
                            $moving->diffClass = $arguments;
                        }

                        $this->rows[$class][$possibleMatch][] = $moving;
                    } else {
                        if(!in_array($moving->id, $shrunk)) {
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
     * @param string The arguments
     * @return boolean True if there is at least one numberless argument, and false otherwise
     */
    public function hasNumberlessArgument($args)
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
     * @param string The argument
     * @return boolean True if the argument is numberless and false otherwise
     */
    protected function isNumberless($arg)
    {
        // Check to see if the argument is followed by a number marker
        // An exception is made for second person plural inclusive, which has an implicit plural marker
        return $arg !== '21' && !in_array($arg{strlen($arg) - 1}, ['s', 'd', 'p']);
    }

    /**
     * Generates a list of possible alternate argument sets for a set of arguments with at least one numberless argument
     *
     * @param string The arguments
     * @return array A list of possible matches
     */
    protected function generatePossibleMatches(string $args)
    {
        $options = [];
        $arguments = preg_split("/[—+]/u", $args);

        return $this->recursivelyBuildPossibleMatches($arguments, $args);
    }

    protected function recursivelyBuildPossibleMatches(array $args, string $original, $currIndex = 0)
    {
        $options = [];
        $currSet = [];

        if($currIndex < count($args)) {

            if($this->isNumberless($args[$currIndex])) {
                foreach(['', 's', 'd', 'p'] as $number) {
                    $currSet[] = $args[$currIndex].$number;
                }
            } else {
                $currSet[] = $args[$currIndex];
            }

            $nextSet = $this->recursivelyBuildPossibleMatches($args, $original, $currIndex+1);

            if(count($nextSet) > 0) {
                foreach($currSet as $currOption) {
                    foreach($nextSet as $nextOption) {
                        if($currOption.'—'.$nextOption != $original)
                            $options[] = $currOption.'—'.$nextOption;
                    }
                }
            } else {
                $options = $currSet;
            }
        }

        return $options;
    }

    /**
     * Takes an array of arguments and restores them to an argument set
     *
     * Modifications will have to be made to this method once AI + O forms are in the database, since the secondary object appears in the second position
     *
     * @param array The array of arguments
     * @return string A string version of a set of arguments
     */
    protected function repair($tokens)
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
     * @param integer The number of normal headers - this excludes the final combined header
     * @return string The HTML for the header section
     */
    public function renderHeaders($numHeaders)
    {
        $html = '';
        $row = '';
        $firstTime = true;

        for($i = 0; $i <= $numHeaders; $i++) {

            // For all but the last row, render normally
            if($i < $numHeaders) {
                $row = $this->renderHeaderLevel($i);

                // The first row needs to include the code for the empty space in the top left corner
                if($firstTime) {
                    $row  = "<th rowspan='$numHeaders' colspan='2'></th>$row";
                    $firstTime = false;
                }

                $html .= "<tr>$row</tr>";
            } else {
                // The final combined row needs the class and argument headers as well
                $html .= '<tr><th>Class</th><th>Arguments</th>'.$this->renderHeaderLevel($numHeaders, true).'</tr>';
            }
        }

        return "<thead>$html</thead>";
    }

    /**
     * Renders out a single header row
     * 
     * Calls itself recursively to find the correct row
     * 
     * @param integer The level to render
     * @param boolean Renders a final header if true
     * @param integer The row we're on
     * @param array|null The array of headers; will be assigned the object's headers variable if null
     * @param boolean True if this is the first row of a language and false otherwise
     * @return string The HTML for a row of headers
     */
    public function renderHeaderLevel($level, $final = false, $index = 0, $currArray = null, $firstRow = true)
    {
        $html = '';

        // Assign the object's headers instance variable if no array was provided
        $array = isset($currArray) ? $currArray : $this->headers;

        if($level == $index) {
            // Base case: We've found the right row

            if(!$final) {
                $html .= $this->renderNonFinalHeader($array, $firstRow);
            } else {
                $html .= $this->renderFinalHeader($array, $firstRow);
            }
        } else {
            // Recursive case: keep looking for the row
            foreach($array as $key => $value) {
                $html .= $this->renderHeaderLevel($level, $final, $index + 1, $value, $firstRow || $index == 0);

                $firstRow = false;
            }
        }

        return $html;
    }

    /**
     * Renders a non-final header row
     * 
     * @param array The array to pull the headers from
     * @param boolean True if this falls in the first column of a language
     * @return string The HTML for a non-final header row
     */
    private function renderNonFinalHeader($array, $firstRow) {
        $html = '';
        $firstTime = true;
        $style = '';

        foreach($array as $key => $value) {

            // If this is the first column of a language, it needs to have a solid left border
            if($firstTime && $firstRow) {
                $style = "style='border-left: .2em solid #363636;'";
                $firstTime = false;
            } else {
                $style = '';
            }

            // This row needs to span all of its children
            $span = count(array_flatten($value));

            $html .= "<th colspan='$span' $style>$key</th>";
        }

        return $html;
    }

    /**
     * Renders a final header row
     * 
     * @param array The array to pull the headers from
     * @param boolean True if this falls in the first column of a language
     * @return string The HTML for a final header row
     */
    private function renderFinalHeader($array, $firstRow) {
        $html = '';
        $firstTime = true;
        $style = '';

        // The final header is actually three headers glued together
        foreach($array as $key1 => $value1) {
            foreach($value1 as $key2 => $value2) {
                foreach($value2 as $key3 => $value3) {

                    // If this is the first column of a language, it needs to have a solid left border
                    if($firstTime && $firstRow) {
                        $style = "style='border-left: .2em solid #363636;'";
                        $firstTime = false;
                    } else {
                        $style = '';
                    }  

                    // Create the label
                    $label = trim("$key1 $key2 $key3");
                    
                    $html .= "<th $style>$label</th>";
                }
            }
        }

        return $html;
    }
}
