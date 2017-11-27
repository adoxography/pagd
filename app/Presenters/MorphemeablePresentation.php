<?php

namespace App\Presenters;

use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use App\Models\Morphology\Morpheme;
use Auth;

trait MorphemeablePresentation
{
    public function morphemes(bool $alerts = true, string $format = '')
    {
        $morphemes = $this->model->morphemeList();
        $morphemeHTML = [];
        $index = 0;

        foreach ($morphemes as $morpheme) {
            $morphemeHTML[] = $this->getMorphemeHTML($morpheme, $index, $alerts);
            $index++;
        }

        $html = implode("<div class='column is-narrow hyphen'>-</div>", $morphemeHTML);
        return "<div class='columns morpheme-printout'>$html</div>";
    }

    protected function getMorphemeHTML($morpheme, int $index, bool $alerts)
    {
        if ($morpheme instanceof Morpheme) {
            $html = $this->getKnownMorphemeHTML($morpheme, $index, $alerts);
        } else {
            $html = $this->getUnknownMorphemeHTML($morpheme, $index, $alerts);
        }

        return "<div class='column is-narrow'>$html</div>";
    }

    protected function getKnownMorphemeHTML($morpheme, int $index, bool $alerts)
    {
        $morphemeHTML = str_replace(['-', '*'], '', $morpheme->name);
        $morphemeHTML = $this->formatMorpheme($morphemeHTML);
        $glossHTML = '';
        $colour = $morpheme->slot->colour;

        if (!$morpheme->isStem()) {
            $morphemeHTML = "<a href='/morphemes/{$morpheme->id}' style='color: $colour;'>$morphemeHTML</a>";
        }

        if ($morpheme->initialChanged()) {
            $glossHTML = 'IC.';
        }

        $glossHTML .= $morpheme->renderGloss();

        $morphemeHTML .= "<p style='color: $colour;'>$glossHTML</p>";

        if ($morpheme['assumed'] && $alerts) {
            [$title, $options] = $this->createMorphemeAssumptionAlert($morpheme, $index, $alerts);
            $morphemeHTML .= "<alg-morpheme-alert title='$title'>$options</alg-morpheme-alert>";
        }

        return $morphemeHTML;
    }

    protected function getUnknownMorphemeHTML($morpheme, int $index, bool $alerts)
    {
        $morphemeHTML = $this->formatMorpheme($morpheme['name']);

        if (auth()->user() && $alerts) {
            $morphemeHTML .= $this->createUnknownMorphemeAlert($morpheme, $index, $alerts);
        }

        return $morphemeHTML;
    }

    protected function formatMorpheme($morpheme)
    {
        return preg_replace('/[^A-Z]+/', '<i>$0</i>', $morpheme);
    }

    protected function createMorphemeAssumptionAlert($morpheme, int $index)
    {
        $model = $this->getModel();

        $title = 'Morpheme assumed';
        $options = "<form method='POST' action='/$model/{$this->model->id}/disambiguate'>".
                    "<input type='hidden' name='index' value='$index' />".
                    csrf_field().
                    method_field('PATCH').
                    "<input type='hidden' name='id' value='{$morpheme->id}' />".
                    "<button class='button is-text'>Confirm</button>".
                    "</form>";

        return [$title, $options];
    }

    protected function createUnknownMorphemeAlert($morpheme, int $index)
    {
        if (count($morpheme['possibilities']) > 0) {
            [$title, $options] = $this->createDisambiguationAlert($morpheme, $index);
        } else {
            [$title, $options] = $this->createMissingMorphemeAlert($morpheme, $index);
        }

        return "<alg-morpheme-alert title='$title'>$options</alg-morpheme-alert>";
    }

    protected function createDisambiguationAlert($morpheme, int $index)
    {
        $title = 'Disambiguation required';
        $model = $this->getModel();
        $options = '';

        foreach ($morpheme['possibilities'] as $possibility) {
            // Determine what the gloss should be
            $gloss = $possibility->gloss;

            // Create a button (disguised as a link) that will instruct the website to disambiguate the morpheme
            $options .= "<li>".
                "<form method='POST' action='/$model/{$this->model->id}/disambiguate'>".
                    "<input type='hidden' name='index' value='{$index}' />".
                    csrf_field().
                    method_field("PATCH").
                    "<input type='hidden' name='id' value='{$possibility->id}' />".
                    "<button class='button is-text'>".
                        "{$possibility->name}<sup>{$possibility->disambiguator}</sup> ($gloss)".
                    "</button>".
                "</form>".
            "</li>";
        }

        // Wrap everything in an unordered list
        $options = "<ul>$options</ul>";

        return [$title, $options];
    }

    protected function createMissingMorphemeAlert($morpheme, int $index)
    {
        if (count($this->model->morphemicForm) > 0) {
            $title = "Morpheme missing";
            $options = "<a href='/morphemes/create?name={$morpheme['name']}&language={$this->model->language->name}'>Add (-){$morpheme['name']}(-)</a>";
        } else {
            $title = "Morphemic form undeclared";
            $options = "<a href='/".strtolower(isset($this->model->uri) ? $this->model->uri : $this->model->table)."/{$this->model->id}/edit'>Declare a morphemic form</a>";
        }

        return [$title, $options];
    }

    protected function getModel()
    {
        $model = '';

        if ($this->model instanceof Form || is_subclass_of($this->model, Form::class)) {
            $model = "forms";
        } elseif ($this->model instanceof Example || is_subclass_of($this->model, Example::class)) {
            $model = "examples";
        }

        return $model;
    }
}
