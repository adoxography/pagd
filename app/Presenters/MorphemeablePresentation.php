<?php

namespace App\Presenters;

use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Models\Morphology\Morpheme;
use Auth;

trait MorphemeablePresentation
{
    public function morphemes(bool $alerts = true, string $format = '')
    {
        $morphemes = $this->model->morphemeList();
        $morphemeHTML = [];
        $index = 0;
        $alerts = $alerts && auth()->user();

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
            $morphemeHTML .= $this->createMorphemeAssumptionAlert($morpheme, $index);
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

    protected function createMorphemeAlert($title, $body)
    {
        return <<<HTML
<v-popover trigger="hover">
    <a class="icon is-danger">
        <span class="icon is-small">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
    </a>
    <template slot="popover">
        <p>$title</p>
        $body
    </template>
</v-popover>
HTML;
    }

    protected function createMorphemeAssumptionAlert($morpheme, int $index)
    {
        $model = $this->getModel();

        $csrfField = csrf_field();
        $methodField = method_field('PATCH');

        $title = 'Morpheme assumed';
        $body = <<<HTML
<form method="POST" action="/$model/{$this->model->id}/disambiguate">
    $csrfField
    $methodField
    <input type="hidden" name="index" value="$index" />
    <input type="hidden" name="id" value="{$morpheme->id}/disambiguate" />
    <button class="button is-text">Confirm</button>
</form>
HTML;

        return $this->createMorphemeAlert($title, $body);
    }

    protected function createUnknownMorphemeAlert($morpheme, int $index)
    {
        if (count($morpheme['possibilities']) > 0) {
            return $this->createDisambiguationAlert($morpheme, $index);
        }
        return $this->createMissingMorphemeAlert($morpheme, $index);
    }

    protected function createDisambiguationAlert($morpheme, int $index)
    {
        $csrfField = csrf_field();
        $methodField = method_field('PATCH');
        $model = $this->getModel();

        $title = 'Disambiguation required';
        $body = '';

        foreach ($morpheme['possibilities'] as $possibility) {
            // Determine what the gloss should be
            $gloss = $possibility->gloss;

            // Create a button (disguised as a link) that will instruct the website to disambiguate the morpheme
            $option = <<<HTML
<li>
    <form method="POST" action="/$model/{$this->model->id}/disambiguate">
        <input type="hidden" name="index" value="$index" />
        $csrfField
        $methodField
        <input type="hidden" name="id" value="{$possibility->id}" />
        <button class="button is-text">
            {$possibility->name}<sup>{$possibility->disambiguator}</sup> ($gloss)
        </button>
    </form>
</li>
HTML;

            $body .= $option;
        }

        $body = "<ul>$body</ul>";

        return $this->createMorphemeAlert($title, $body);
    }

    protected function createMissingMorphemeAlert($morpheme, int $index)
    {
        if ($this->model->morphemic_form && $this->model->morphemic_form != '') {
            $title = "Morpheme missing";
            $body = "<a href='/morphemes/create?name={$morpheme['name']}&language={$this->model->language->name}'>Add (-){$morpheme['name']}(-)</a>";
        } else {
            $title = "Morphemic form undeclared";
            $body = "<a href='/".strtolower(isset($this->model->uri) ? $this->model->uri : $this->model->table)."/{$this->model->id}/edit'>Declare a morphemic form</a>";
        }

        return $this->createMorphemeAlert($title, $body);
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
