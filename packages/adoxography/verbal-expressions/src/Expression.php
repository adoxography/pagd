<?php

namespace Adoxography\VerbalExpressions;

use BadMethodCallException;

class Expression
{
    protected $builder;

    public function __construct()
    {
        $this->builder = new Builder;
    }

    public function __call(string $method, array $args)
    {
        $this->guardAgainstEndOfLine();

        if (is_callable([$this->builder, $method])) {
            call_user_func_array([$this->builder, $method], $args);

            return $this;
        }

        throw new BadMethodCallException("Method $method is not callable.");
    }

    public function test(String $param)
    {
        if (preg_match($this->getPattern(), $param, $matches)) {
            return $matches[0];
        }

        return false;
    }

    public function match(String $param)
    {
        preg_match($this->getPattern(), $param, $matches);

        return $matches;
    }

    public function getPattern()
    {
        return '/' . $this->builder->__toString() . '/';
    }

    public function getRaw()
    {
        return $this->builder->__toString();
    }

    public function guardAgainstEndOfLine()
    {
        if ($this->builder->endOfLine) {
            throw new EndOfExpressionException;
        }
    }
}
