<?php

namespace Adoxography\VerbalExpressions;

use Exception;

class EndOfExpressionException extends Exception
{
    public function __toString()
    {
        return static::class . ": An expression cannot be added to after the end.";
    }
}
