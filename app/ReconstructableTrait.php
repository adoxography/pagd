<?php

namespace App;

trait ReconstructableTrait {
    /**
     * Modifies a string to begin with an asterisk if the form is reconstructed
     *
     * @param string $value any string
     * @return string the input with an asterisk at the beginning
     */
    protected function modifyIfReconstructed($value)
    {
        if ($this->language && $this->language->reconstructed) {
            return "*$value";
        } else {
            return $value;
        }
    }
}