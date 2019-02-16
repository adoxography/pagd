<?php

namespace App\Presenters;

use App\Presenters\AlgPresenter;

class MorphemePresenter extends AlgPresenter
{
    use PhonemeablePresentation;

    public function name(string $format = '')
    {
        $name = parent::name($format);

        // Don't italicize single character capital morphemes
        if (preg_match('/^[A-Z∅]-|-[A-Z∅]$/', $name)) {
            return $name;
        }

        return "<em>$name</em>";
    }

    public function disambiguatedName(string $format = '')
    {
        $name = $this->name() . '<sup>' . $this->model->disambiguator . '</sup>';

        if (strlen($format) > 0) {
            $name = $this->format($name, $format);
        }

        return $name;
    }

    public function phonemicForm(string $format = '')
    {
        return $this->convertToPhonemes('name');
    }

    public function unique(string $method = 'name', string $format = '')
    {
        $modelHTML = $this->model->present($method);
        $glossNameHTML = $this->model->gloss->present();

        return "$modelHTML ($glossNameHTML)";
    }

    public function stub()
    {
        return $this->unique('name', 'coloured');
    }

    public function gloss(bool $colour = true, bool $showAlert = true)
    {
        $output = '';
        $glosses = explode('.', $this->model->gloss);
        $colourHTML = '';

        if ($colour) {
            $colourHTML = 'style="color:inherit;" ';
        }

        foreach ($glosses as $glossText) {
            if (strlen($output) > 0) {
                $output .= '.';
            }

            if (strlen($glossText) > 0) {
                if ($glossText{0} == '"') {
                    $currGloss = str_replace('"', '', $glossText);
                    $currGloss = str_replace(' ', '.', $currGloss);

                    $output .= $currGloss;
                } else {
                    $lookup = $this->model->glosses->where('abv', $glossText);

                    if (count($lookup) > 0) {
                        $currGloss = "<span class='gloss'><a href='/glosses/" . $lookup->first()->id . "' $colourHTML>" . $lookup->first()->abv . "</a></span>";
                    } else {
                        $currGloss = "<span class='gloss'>$glossText</span>";

                        if ($showAlert) {
                            $alertTitle = 'Gloss missing';
                            $alertBody = <<<HTML
<a href="/glosses/create?abv=$glossText">
    Add <span class="gloss">$glossText</span>
</a>
HTML;

                            $currGloss .= popupAlert($alertTitle, $alertBody);
                        }
                    }

                    $output .= $currGloss;
                }
            }
        }

        return $output;
    }
}
