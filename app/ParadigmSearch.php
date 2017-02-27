<?php

namespace App;

use App\Argument;
use Illuminate\Support\Facades\Config;

class ParadigmSearch {
	private $headers;
	private $rows;

	public function __construct($forms)
	{
		$this->loadHeaders($forms);
		$this->loadRows($forms);

		$this->filterRows();
	}

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
        foreach($forms as $form) {
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

        foreach($forms as $form) {
        	// Extract the formType for more efficient reference
            $formType = $form->formType;

            $this->rows[$formType->subClass][$formType->arguments][] = $form;
        }
    }

	/**
	 * Removes extraneous rows and merges where syncretism has taken place
	 * 
	 * @return void
	 */
	private function filterRows() {
		$keys;
		$classHasForms;
		$arguments;
		$possibleMatches;
		$consecutive;

		// Loop through each class
        foreach($this->rows as $class => $argumentStructures) {
            $keys = array_keys($argumentStructures);
            $classHasForms = false;

            // Loop through each set of arguments
            for($i = 0; $i < count($argumentStructures); $i++) {
                $arguments = $keys[$i];

                // If the search returned no results for this set of arguments, remove it
                if(count($argumentStructures[$arguments]) == 0) {
                	unset($this->rows[$class][$arguments]);

                } elseif(count($this->rows[$class][$arguments]) > 0) {
                    $classHasForms = true;

                    // If the there is an argument without a number in the set...
                    if($this->hasNumberlessArgument($arguments) && $i < count($argumentStructures) - 1) {

                    	// Generate a list of possible argument sets that this set could merge with
                    	$possibleMatches = $this->generatePossibleMatches($arguments);

                    	// Find how many of those sets are next to this cell
                    	$consecutive = $this->findConsecutiveRows($class, $possibleMatches, $keys, $i);

                    	// Move the forms into a row with an argument structure that does have a number
                    	// if one exists in the data set
                        if($this->moveRows($class, $arguments, $possibleMatches, $consecutive)) {
                        	// If forms were moved, remove the now empty row
                            unset($this->rows[$class][$arguments]);
                        }
                    }
                }
            }

            // If there are no forms in the class, remove the class
            if(!$classHasForms) {
                unset($this->rows[$class]);
            }
        }
	}

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

	/**
	 * Finds the number of rows immediately after a given row that are the same but
	 * for the number of one or more of the arguments
	 * 
	 * @param string The name of the class of the row in question
	 * @param array Possible matches of the argument set in question
	 * @param arguments An array of arguments present in the database
	 * @param start The index of the row in question
	 * @return integer The number of consecutive matches after the row in question
	 */
    private function findConsecutiveRows($class, $matches, $arguments, $start) {
        $consecutive = 0;
		$i = $start + 1;
        $continue = true;

       	while($i < count($arguments) && $continue) {

            if(count($this->rows[$class][$arguments[$i]]) > 0) {
                if(in_array($arguments[$i], $matches)) {
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
    private function moveRows($class, $arguments, $possibleMatches, $consecutive) {
    	$numMoved = 0;

        foreach($possibleMatches as $possibleMatch) {
            if(isset($this->rows[$class][$possibleMatch]) && count($this->rows[$class][$possibleMatch]) > 0) {

                foreach($this->rows[$class][$arguments] as $moving) {

                    $moving->diffClass = $arguments;

                    if($consecutive > $numMoved) {
                        $moving->span = $consecutive;
                    } else {
                        $moving->distant = true;
                    }

                    $this->rows[$class][$possibleMatch][] = $moving;
                }

                $numMoved++;
            }
        }

        return $numMoved > 0;
    }

    public function hasNumberlessArgument($args)
    {
        $arguments = preg_split("/[—+]/u", $args);
        $found = false;

        for($i = 0; $i < count($arguments) && !$found; $i++) {
            $found = $this->isNumberless($arguments[$i]);
        }

        return $found;
    }

    protected function isNumberless($arg)
    {
        return !in_array($arg{strlen($arg) - 1}, ['s', 'd', 'p']);
    }

    protected function generatePossibleMatches($args)
    {
        $options = [];
        $arguments = preg_split("/[—+]/u", $args);

        for($i = 0; $i < count($arguments); $i++) {
            if($this->isNumberless($arguments[$i])) {
                foreach(['s', 'd', 'p'] as $number) {
                    $clone = $arguments;
                    $clone[$i] .= $number;

                    $options[] = $this->repair($clone);
                }
            }
        }

        return $options;
    }

    protected function repair($tokens)
    {
        $output = $tokens[0];
        if(isset($tokens[1])) {
            $output .= "—".$tokens[1];
        }
        if(isset($tokens[2])) { // DOESN'T ACCOUNT FOR AI + O
            $output .= "+".$tokens[2];
        }
        return $output;
    }
}