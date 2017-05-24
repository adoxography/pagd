<?php

define("NOT_FOUND", -1);

function initializeNominals() {
    \Algling\Morphemes\Models\Gloss::create(['abv' => 'N', 'name' => 'noun stem']);

    $languages = \App\Language::withTrashed()->orderBy('parent_id')->get();

    foreach($languages as $language) {
        $language->createNStem();

        if($language->nominalParadigms()->count() == 0) {
            $language->createInitialParadigms();
        }
    }
}

function assessAllForms()
{
    $forms = \App\Form::all();
    foreach ($forms as $form) {
        $form->connectMorphemes();
    }
    return "Operation complete";
}

function indexAllModels() {
    \App\Language::clearIndices();
    \App\Morpheme::clearIndices();
    \App\Form::clearIndices();
    \App\Example::clearIndices();
    \App\Source::clearIndices();

    \App\Language::reindex();
    \App\Morpheme::reindex();
    \App\Form::reindex();
    \App\Example::reindex();
    \App\Source::reindex();
}

/**
 * Replaces all of the rules tags in a block of text
 * 
 * Tags are strings preceeded by the $ symbol
 * 
 * @param string The text to sort through
 * @param integer The ID of the language whose rules to look for
 * @return string The text with tags replaced
 */
function replaceTags($text, $id = 0)
{
    $output = $text;
    $start;
    $end;
    $replacement;
    $model;

    // Check to see if there are any tags in the text
    $start = strpos($text, '#');

    if ($start) {

        // Find the end of the tag; that's the first whitespace that occurs after the tag
        // If no whitespace was found, it means that the tag ends the text
        $end = strpos($text, ' ', $start);
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

        if(is_numeric($tag{0})) { // Special case for hex codes
            $replacement = "#$tag";
        } elseif ($tag{0} == ' ') {
            $replacement = '#';
        }

        if(count(explode('.', $tag)) > 1) {

            $parts = explode('.', $tag);

            switch($parts[0]) {
                case 'l':
                    $model = \App\Language::find($parts[1]);
                    break;
                case 'f':
                    $model = \Algling\Verbals\Models\Form::find($parts[1]);
                    break;
                case 'e':
                    $model = \Algling\Words\Models\Example::find($parts[1]);
                    break;
                case 'm':
                    $model = \Algling\Morphemes\Models\Morpheme::find($parts[1]);
                default:
                    break;
            }

            if(isset($model)) {
                if(method_exists($model, 'renderInNotes')) {
                    $replacement = $model->renderInNotes();
                } else {
                    $replacement = $model->renderHTML();
                }
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

function binarySearch($item, $list)
{
    $hi = count($list)-1;
    $lo = 0;
    $mid;
    $spot = NOT_FOUND;
    $comparison;
        
    while ($hi >= $lo && $spot < 0) {
        $mid = floor(($hi + $lo)/2);
        $comparison = $list[$mid]->compareTo($item);

        if ($comparison == 0) {
            $spot = $mid;
        }//if
        elseif ($comparison < 0) {
            $lo = $mid + 1;
        }//if
        else {
            $hi = $mid - 1;
        }//else
    }//while

    return $spot;
}//binarySearch

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
