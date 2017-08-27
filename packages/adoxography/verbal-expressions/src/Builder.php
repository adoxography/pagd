<?php

namespace Adoxography\VerbalExpressions;

class Builder
{
    protected $pattern = '';
    public $endOfLine = false;

    public function find($param, $capture = false)
    {
        $this->appendGroup($param, $capture);
    }

    public function then($param, $capture = false)
    {
        return $this->find($param, $capture);
    }

    public function maybe($param, bool $capture = false)
    {
        $this->appendGroup($param, $capture);
        $this->append('?');
    }

    public function oneOf(array $options, bool $capture = false)
    {
        if (count($options) == 0) {
            throw new Exception;
        }

        $str = '';

        foreach ($options as $option) {
            if (strlen($str) > 0) {
                $str .= '|';
            }

            $str .= $this->convertToString($option);
        }

        $this->appendGroup($str, $capture);
    }

    public function maybeOneOf(array $options, bool $capture = false)
    {
        $this->oneOf($options, $capture);

        $this->append('?');
    }

    public function anything()
    {
        $this->append('.');
    }

    public function anythingBut($param)
    {
        $this->append(['[^',$param,']']);
    }

    public function startOfLine()
    {
        $this->append('^');
    }

    public function endOfLine()
    {
        $this->append('$');

        $this->endOfLine = true;
    }

    public function __toString()
    {
        return $this->pattern;
    }

    protected function append($values)
    {
        $method = is_array($values) ? 'appendArray' : 'appendValue';

        $this->$method($values);
    }

    protected function appendGroup($value, bool $capture)
    {
        $value = $this->convertToString($value);

        if ((strlen($value) == 1 || strlen($value) == 2 && $value{1} == '?') && !$capture) {
            return $this->append($value);
        }

        $left = $capture ? '(' : '(?:';
        $right = ')';

        $this->append([$left, $value, $right]);
    }

    protected function appendArray(array $values)
    {
        foreach ($values as $value) {
            $this->appendValue($value);
        }
    }

    protected function appendValue($value)
    {
        $this->pattern .= $this->convertToString($value);
    }

    protected function convertToString($value)
    {
        if ($value instanceof Expression) {
            return $value->getRaw();
        }

        return $value;
    }
}
