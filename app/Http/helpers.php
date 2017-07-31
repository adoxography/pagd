<?php

use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use App\Language;
use App\Models\Morphology\Morpheme;
use App\Source;

function assessAllForms()
{
    $forms = \Algling\Words\Models\Form::all();
    foreach ($forms as $form) {
        $form->connectMorphemes();
    }
    return "Operation complete";
}

function indexAllModels() {
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

function parseTime($time) {
    return Carbon\Carbon::parse($time)->setTimezone('America/Winnipeg')->toDayDateTimeString();
}

function replaceTags($text, $id = 0) {
    return '<div class="content">' . actuallyReplaceTags($text, $id) . '</div>';
}

/**
 * Replaces all of the rules tags in a block of text
 * 
 * Tags are strings preceded by the $ symbol
 * 
 * @param string $text  the text to sort through
 * @param integer $id  the ID of the language whose rules to look for
 * @return string  the text with tags replaced
 */
function actuallyReplaceTags(string $text, $id = 0)
{
    $output = $text;

    // Check to see if there are any tags in the text
    $start = strpos($text, '#');

    if ($start) {

        // Find the end of the tag; that's the first whitespace that occurs after the tag
        // If no whitespace was found, it means that the tag ends the text
        if (preg_match("/[\s<]/", $text, $matches, PREG_OFFSET_CAPTURE, $start)) {
            $end = $matches[0][1];
        } else {
            $end = strlen($text);
        }

        // Get the parts of the text before and after the tag
        $firstPart = substr($text, 0, $start);
        $lastPart = substr($text, $end);

        // Get the tag, and look it up
        $tag = substr($text, $start + 1, $end - $start - 1);

        if(count(explode('.', $tag)) > 1) {

            $parts = explode('.', $tag);

            switch($parts[0]) {
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

            if(isset($model)) {
                $replacement = $model->present('stub');
            } else {
                $replacement = $tag;
            }
        } else {
            $rule = \App\Rule::where('abv', $tag)->where('language_id', $id)->first();

            // If it was found, replace the tag with it
            if ($rule && !$rule->isHidden()) {
                $replacement = "<a href='/rules/{$rule->id}'>{$rule->rule}</a>";
            } else {
                $replacement = $tag;
            }
        }

        $output = $firstPart.$replacement.replaceTags($lastPart, $id);
    }

    return $output;
}

function condenseString($str)
{
    $stripped = strip_tags($str);

    if(strlen($stripped) > 50) {
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

    for($i = 0; $i < count($arr); $i++) {
        if($i > 0) {
            if(count($arr) > 2) {
                $output .= ',';
            }

            $output .= ' ';

            if($i == count($arr) - 1) {
                $output .= 'and ';
            }
        }

        $output .= $arr[$i];
    }

    return $output;
}

function fixMorphemes()
{
    foreach(Morpheme::all() as $morpheme) {
        $morpheme->connectGlosses();
    }

    foreach(Algling\Words\Models\Form::whereHas('language')->get() as $form) {
        $form->connectMorphemes();
    }
}

function assignRoles()
{
    $users = App\User::all();

    foreach ($users as $user) {
        $roles = ['reader', 'contributor'];

        if ($user->userRoles_id == 1) {
            if ($user->id == 1) {
                $roles[] = 'developer';
            } else {
                $roles[] = 'leader'; 
            }  
        }

        $user->assignRole($roles);
    }
}