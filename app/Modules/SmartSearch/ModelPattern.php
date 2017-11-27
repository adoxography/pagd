<?php

namespace App\Modules\SmartSearch;

use Illuminate\Support\Collection;

class ModelPattern
{
    public $elements;

    /**
     * Initializes the ModelPattern
     *
     * @param array $elements  The elements to initialize the pattern with
     */
    public function __construct(array $elements = [])
    {
        $this->elements = [];

        foreach ($elements as $element) {
            $this->store($element);
        }
    }

    /**
     * Static constructor for a ModelPattern
     *
     * @param Colection $collection
     * @param array $alternates
     * @param bool $words
     * @return string  The pattern resulting from the input
     */
    public static function generate(Collection $collection, array $alternates = [], bool $words = true) : string
    {
        $pattern = new ModelPattern;

        if ($collection->first()->getAttribute('aliases')) {
            $alternates[] = 'aliases';
        }

        foreach ($collection as $item) {
            $pattern->store($item->name);

            foreach ($alternates as $alternate) {
                if ($item->$alternate) {
                    $alt = preg_split('`[,/]`', $item->$alternate);

                    foreach ($alt as $name) {
                        $pattern->store(trim(strtolower($name)));
                    }
                }
            }
        }

        $pattern->sort();

        return $pattern->present();
    }

    /**
     * Stores an element in the list of elements. Escapes regex special characters.
     *
     * @param string $element  The element to add
     */
    public function store(string $element)
    {
        if (!in_array($element, $this->elements)) {
            $this->elements[] = preg_quote($element);
        }
    }

    /**
     * Sorts the elements in descending order of their length
     */
    public function sort()
    {
        usort($this->elements, function ($a, $b) {
            $lenA = strlen($a);
            $lenB = strlen($b);

            if ($lenA == $lenB) {
                return 0;
            }

            return $lenA < $lenB ? 1 : -1;
        });
    }

    /**
     * Converts the stored elements to a disjoined pattern
     *
     * @param bool $words  Whether the pattern should require word delimiters on either side of the match
     * @return string      The pattern generated from the elements
     */
    public function present(bool $words = true) : string
    {
        $pattern = '';

        foreach ($this->elements as $element) {
            if (strlen($pattern) > 0) {
                $pattern .= '|';
            }

            $pattern .= $element;
        }

        $pattern = '(' . $pattern . ')';

        if ($words) {
            $pattern = '`(?<=[ ])' . $pattern . '(?=[, ])`i';
        }

        return $pattern;
    }
}
