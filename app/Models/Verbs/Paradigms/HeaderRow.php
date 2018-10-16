<?php

namespace App\Models\Verbs\Paradigms;

use \Illuminate\Support\Collection;


class HeaderRow extends Collection {
    private $ignore = ['Affirmative', 'Non-diminutive', 'Unmarked'];

    public function isVisible() {
        return !!$this->first(function ($header) {
            return $header['show'];
        });
    }

    public function render($index, $numHeaders) {
        $html = '';

        if ($index == 0 && $numHeaders > 0) {
            $html .= $this->generateBlankSection($numHeaders);
        }

        if ($numHeaders == $index) {
            $html .= $this->generateLeftHeaders();
        }

        $html .= $this->filter(function ($cell) {
            return $cell['show'];
        })->map(function ($cell) {
            return $this->generateCellHTML($cell);
        })->implode('');

        return "<tr>$html</tr>";
    }

    private function generateBlankSection($span) {
        return "<th rowspan=\"$span\" colspan=\"2\"></th>";
    }

    private function generateLeftHeaders() {
        return '<th>Class</th><th>Arguments</th>';
    }

    private function generateCellHTML($cell) {
        return $this->generateCellOpeningTag($cell) . $this->generateCellText($cell) . '</th>';
    }

    private function generateCellOpeningTag($cell) {
        $colspan = $cell['colspan'];
        $rowspan = $cell['rowspan'];
        $class = $cell['bordered'] ? 'is-bordered-left' : '';

        return "<th colspan=\"$colspan\" rowspan=\"$rowspan\" class=\"$class\">";
    }

    private function generateCellText($cell) {
        $text = $cell['name'];
        $rowspan = $cell['rowspan'];

        if ($rowspan > 1) {
            $childHeader = $cell['subheaders']->first();

            for ($i = 1; $i < $rowspan; $i++) {
                if (!$childHeader['show'] && !in_array($childHeader['name'], $this->ignore)) {
                    $text .= ' ' . $childHeader['name'];
                }
                $childHeader = $childHeader['subheaders']->first();
            }
        }

        return $text;
    }
}
