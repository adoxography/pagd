<?php

namespace App\Search;

class SearchTable
{
    private $rowNames; // An array of the names of the rows (e.g. AI 1s)
    private $colNames; // An array of the names of the columns (i.e. the language, order, etc.)
    private $numRows;
    private $numCols;
    private $data;     // A two dimensional representation of the data

    public function __construct($forms)
    {
        $this->initialize();
        $this->load($forms);
    }//construct

    private function initialize()
    {
        $this->rowNames = array();
        $this->colNames = array();
        $this->numRows  = 0;
        $this->numCols  = 0;
        $this->data     = array();
    }//initialize

    private function load($forms)
    {
        foreach ($forms as $form) {
            //Get the header data
            $rowHeader = $form->getTableRow();
            $colHeader = $form->getTableCol();

            //Insert the headers and get an index back for where the form should go
            $rowPos = $this->insertRowHeader($rowHeader);
            $colPos = $this->insertColHeader($colHeader);

            //If this is the first form in that spot, put a new Cell object there
            if (!isset($this->data[$rowPos][$colPos])) {
                $this->data[$rowPos][$colPos] = new Cell();
            }//if

            //Add the form
            $this->data[$rowPos][$colPos]->add($form);
        }
    }

    public function toHTML()
    {
        $output = "<table class='table is-bordered'><thead><tr><td colspan = '2'>Verb Form</td>";
        foreach ($this->colNames as $colName) {
            $output .= $colName->toHTML();
        }
        $output .= '</tr></thead>';
        $output .= "<tbody>";
        for ($row = 0; $row < $this->numRows; $row++) {
            $output .= '<tr>' . $this->rowNames[$row]->toHTML();
            for ($col = 0; $col < $this->numCols; $col++) {
                if (isset($this->data[$row][$col])) {
                    $output .= $this->data[$row][$col]->toHTML();
                } else {
                    $output .= '<td></td>';
                }//else
            }
            $output .= '</tr>';
        }
        $output .= "</tbody></table>";
        return $output;
    }

    private function insertRowHeader($header)
    {
        //Check to see if the header is in the list already
        $pos = binarySearch($header, $this->rowNames);

        //If it's not, put it in the list
        if ($pos === -1) {
            $pos = ordInsert($header, $this->rowNames);
            $this->shuffleRows($pos); // The data in the table needs to be shuffled to match the new header arrangement
            $this->numRows++;
        }//if

        return $pos;
    }

    private function insertColHeader($header)
    {
        //Check to see if the header is in the list already
        $pos = binarySearch($header, $this->colNames);

        //If it's not, put it in the list
        if ($pos === -1) {
            $pos = ordInsert($header, $this->colNames);
            $this->shuffleCols($pos); // The data in the table needs to be shuffled to match the new header arrangement
            $this->numCols++;
        }//if

        return $pos;
    }
    
    private function shuffleRows($gapIndex)
    {
        for ($i = $this->numRows; $i > $gapIndex; $i--) {
            $this->data[$i] = $this->data[$i-1];
        }//for
        unset($this->data[$gapIndex]);
    }//shuffleRows

    private function shuffleCols($gapIndex)
    {
        foreach ($this->data as &$row) {
            for ($i = $this->numCols; $i > $gapIndex; $i--) {
                if (isset($row[$i-1])) {
                    $row[$i] = $row[$i-1];
                    unset($row[$i-1]);
                }//if
            }//for
        }//foreach
    }//shuffleCols
}//SearchTable Class

class Cell
{
    private $forms;

    public function __construct()
    {
        $this->forms = array();
    }

    public function add($new)
    {
        array_push($this->forms, $new);
    }

    public function toHTML()
    {
        $output = '<td>';
        foreach ($this->forms as $form) {
            $output .= $form->toHTML();
        }
        $output .= '</td>';
        return $output;
    }
}
