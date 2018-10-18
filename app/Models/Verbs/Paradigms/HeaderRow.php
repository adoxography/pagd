<?php

namespace App\Models\Verbs\Paradigms;

use Illuminate\Support\Collection;


class HeaderRow extends Collection {
    /**
     * The headers that should not be printed if they have been merged with
     * other headers. These headers are "default" cases, so they should only
     * appear if they are in a heading of their own - i.e. in opposition to
     * another header in complementary distribution.
     */
    private $ignore = ['Affirmative', 'Non-diminutive', 'Unmarked'];

    /**
     * Determines if this row will appear on the screen
     *
     * Scans all of the headers in the row to see if at least one of them has
     * a 'show' property.
     *
     * @return bool
     */
    public function isVisible() : bool
    {
        return !!$this->first(function ($header) {
            return $header['show'];
        });
    }

    /**
     * Generates HTML code for the complete row
     *
     * @param int $index       The 0-based index of this row in relation to the
     *                         others
     * @param int $numHeaders  The total number of header rows to be printed
     * @return string
     */
    public function render(int $index, int $numHeaders) : string
    {
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

    /**
     * Generates the HTML for the blank section in the upper left corner
     *
     * @param int $span  How many rows the blank section should take up
     *
     * @return string
     */
    private function generateBlankSection(int $span) : string
    {
        return "<th class=\"is-col-0\" rowspan=\"$span\" colspan=\"2\"></th>";
    }

    /**
     * Generates the headers overtop of the Y axis headers which just say
     * "class" and "arguments", respectively.
     *
     * @return string
     */
    private function generateLeftHeaders() : string
    {
        return '<th class="is-col-0">Class</th><th class="is-col-1">Arguments</th>';
    }

    /**
     * Generates the HTML for a single header cell
     *
     * @param Collection $cell  The data for the cell to render
     * @return string
     */
    private function generateCellHTML(Collection $cell) : string
    {
        return $this->generateCellOpeningTag($cell) . $this->generateCellText($cell) . '</th>';
    }

    /**
     * Generates the opening th tag for a single header cell
     *
     * @param Collection $cell  The data for the cell to render
     * @return string
     */
    private function generateCellOpeningTag(Collection $cell) : string
    {
        $colspan = $cell['colspan'];
        $rowspan = $cell['rowspan'];
        $class = $cell['bordered'] ? 'is-bordered-left' : '';

        return "<th colspan=\"$colspan\" rowspan=\"$rowspan\" class=\"$class\">";
    }

    /**
     * Generates the text (innerHTML) for a single header cell
     *
     * @param Collection $cell  The data for the cell to render
     * @return string
     */
    private function generateCellText(Collection $cell) : string
    {
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
