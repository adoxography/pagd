<?php

namespace App\Search;

class RowHeader
{
    private $subject;
    private $primaryObject;
    private $secondaryObject;
    private $class;

    public function __construct($subject, $primaryObject, $secondaryObject, $class)
    {
        $this->subject = $subject;
        $this->primaryObject = $primaryObject;
        $this->secondaryObject = $secondaryObject;
        $this->class = $class;
    }

    public function toHTML()
    {
        $output = '<td>' . $this->class->name . '</td><td>' . $this->subject->name;
        if ($this->primaryObject) {
            $output .= ' - ' . $this->primaryObject->name;
        }
        if ($this->secondaryObject) {
            $output .= ' + ' . $this->secondaryObject->name;
        }
        $output .= '</td>';
        return $output;
    }

    public function compareTo(RowHeader $other)
    {
        $output = intcmp($this->class->id, $other->class->id);
        if ($output == 0) {
            $output = intcmp($this->subject->id, $other->subject->id);
            if ($output == 0) {
                $thisPO =
                $output = intcmp(
                    ($this->primaryObject  ? $this->primaryObject->id : null),
                    ($other->primaryObject ? $other->primaryObject->id : null)
                );
                if ($output == 0) {
                    $output = intcmp(
                        ($this->secondaryObject  ? $this->secondaryObject->id : null),
                        ($other->secondaryObject ? $other->secondaryObject->id : null)
                    );
                }
            }
        }
        return $output;
    }
}
