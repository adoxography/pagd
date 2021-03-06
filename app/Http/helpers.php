<?php

use Adoxography\VerbalExpressions\Expression;
use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Models\Language;
use App\Models\Morphology\Morpheme;
use App\Models\Source;
use App\Models\Users\User;

function verEx($init = null, $capture = false)
{
    $verEx = new Expression;

    if ($init) {
        $verEx->find($init, $capture);
    }

    return $verEx;
}

// From https://stackoverflow.com/questions/4133859/round-up-to-nearest-multiple-of-five-in-php
function roundUpTo($n, $x)
{
    return (round($n)%$x === 0) ? round($n) : round(($n+$x/2)/$x)*$x;
}

function assessAllForms()
{
    $forms = \App\Models\Words\Form::all();
    foreach ($forms as $form) {
        $form->connectMorphemes();
    }
    return "Operation complete";
}

function indexAllModels()
{
    $models = [
        Language::class,
        Morpheme::class,
        Form::class,
        Example::class,
        Source::class
    ];

    foreach ($models as $model) {
        $model->clearIndices();
        $model->reindex();
    }
}

function parseTime($time)
{
    return Carbon\Carbon::parse($time)->setTimezone('America/Winnipeg')->toDayDateTimeString();
}

function replaceTags(string $text, int $languageId = 0) : string
{
    $replaced = preg_replace_callback('/(#)([a-zA-Z0-9\.]+)/', function ($matches) use ($languageId) {
        return matchTag($matches[2], $languageId);
    }, $text);

    return "<div class=\"content\">$replaced</div>";
}

function matchTag(string $tag, int $id)
{
    $parts = explode('.', $tag);
    $replacement = $tag;

    if (count($parts) > 1) {
        switch ($parts[0]) {
            case 'l':
                $model = Language::find($parts[1]);
                break;
            case 'f':
                $model = Form::find($parts[1]);
                break;
            case 'e':
                $model = Example::find($parts[1]);
                break;
            case 'm':
                $model = Morpheme::find($parts[1]);
                break;
            default:
                break;
        }

        if (isset($model)) {
            $replacement = $model->present('stub');
        }
    } else {
        $rule = \App\Models\Rules\Rule::where('abv', $tag)->where('language_id', $id)->first();

        // If it was found, replace the tag with it
        if ($rule) {
            $replacement = "<a href='/rules/{$rule->id}'>{$rule->rule}</a>";
        }
    }

    return $replacement;
}

function condenseString($str)
{
    $stripped = strip_tags($str);

    if (strlen($stripped) > 50) {
        $output = substr($stripped, 0, 50) . '...';
        $title = str_replace('"', '\'', $stripped);
        $output = "<span title=\"$title\">$output</span>";
    } else {
        $output = $stripped;
    }

    return $output;
}

function flash($message, $level = 'info')
{
    session()->flash('flashMessage', $message);
    session()->flash('flashLevel', $level);
}

function intcmp($n1, $n2)
{
    $output = 0;

    //Handle cases where one or both are null
    if ($n1 === null || $n2 === null) {
        if ($n1) {
            $output = 1;
        } elseif ($n2) {
            $output = -1;
        }
    } else {
        if ($n1 < $n2) {
            $output = -1;
        } elseif ($n1 > $n2) {
            $output = 1;
        }
    }
    return $output;
}

function validDatabaseInput($val)
{
    return !is_null($val) && $val !== '';
}

function array_toString($arr, string $delimiter = ', ') : string
{
    $output = '';

    for ($i=0; $i < count($arr); $i++) {
        if ($i > 0) {
            $output .= $delimiter;
        }

        $output .= $arr[$i];
    }

    return $output;
}

function array_toList($arr) : string
{
    $output = '';

    for ($i = 0; $i < count($arr); $i++) {
        if ($i > 0) {
            if (count($arr) > 2) {
                $output .= ',';
            }

            $output .= ' ';

            if ($i == count($arr) - 1) {
                $output .= 'and ';
            }
        }

        $output .= $arr[$i];
    }

    return $output;
}

function tagExamples($languageId, $morphemeString, $morphemeReplacement) {
    Auth::login(User::first());
    $examples = Example::whereNull('morphemicForm')
                       ->where('name', 'LIKE', "%$morphemeString%")
                       ->where('language_id', $languageId)
                       ->whereHas('form', function ($query) {
                           $query->whereNotNull('morphemicForm');
                       })
                       ->get();

    $placeholder = Morpheme::where('name', 'V-')
                           ->where('language_id', $languageId)
                           ->first();
    $placeholderId = $placeholder->id;

    $newMorphemeId = $morphemeReplacement->id;

    foreach ($examples as $example) {
        $morphemes = explode('-', $example->form->morphemicForm);
        $newMorphemes = [];

        foreach ($morphemes as $morpheme) {
            if ((int)$morpheme == $placeholderId) {
                $newMorphemes[] = $newMorphemeId;
            } else {
                $newMorphemes[] = $morpheme;
            }
        }

        $example->morphemicForm = implode('-', $newMorphemes);
        $example->save();
    }
}

function replaceEmDashes()
{
    foreach (\App\Models\Verbs\Structure::whereNotNull('subclass')->get() as $structure) {
        $subclass = $structure->subclass;
        $subclass = str_replace('—', '→', $subclass);

        if ($subclass === 'TA Obviative (mixed 3\'–1/2)') {
            $subclass = 'TA Obviative (mixed 3\'→1/2)';
        } elseif ($subclass === 'TA Obviative (mixed 1/2–3\')') {
            $sublass = 'TA Obviative (mixed 1/2→3\')';
        }

        $structure->update(['subclass', $subclass]);
    }
}
