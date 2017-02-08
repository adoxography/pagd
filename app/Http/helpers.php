<?php

define("NOT_FOUND", -1);

function addAlternateNamesToVStems() {
    $morphemes = \App\Morpheme::where('name', 'V')->get();

    foreach($morphemes as $morpheme) {
        $morpheme->alternateName = "IC.V";
        $morpheme->save();
    }

    return "Operation complete";
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

function getOptions($collection, $field = 'name'){
    $options = array();

    foreach($collection as $item){
        $options[] = ['value' => $item->$field];
    }

    return $options;
}

function organizeForDropdown($collection){
    $output = [];

    foreach($collection as $item){
        $output += [$item->id => $item->name];
    }

    return $output;
}

function flash($message, $level = 'info'){
    session()->flash('flashMessage',$message);
    session()->flash('flashLevel',$level);
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

function linearSearch($item, $list)
{
    $pos = NOT_FOUND;
    for ($i=0; $i<count($list) && $pos === NOT_FOUND; $i++) {
        // if (isset($list[$i]) && $list[$i]->compareTo($item) == 0) {
        //     $pos = $i;
        // }
        if(isset($list[$i]) && $list[$i] === $item){
            $pos = $i;
        }
    }//for
    return $pos;
}//findInList

function ordInsert($item, &$list)
{
    $spotFound = false;
    $index = count($list);
        
    while ($index > 0 && !$spotFound) {
        if ($list[$index-1]->compareTo($item) <= 0) {
            $spotFound = true;
        } else {
            $list[$index] = $list[$index-1];
            $index--;
        }//else
    }//while

    $list[$index] = $item;
        
    return $index;
}//ordInsert

function printOptions($items, $preset = null, $presetField = null, $display = 'name')
{
    foreach ($items as $item) {
        if (old($presetField) === $item->id || (isset($preset[$presetField]) && $preset[$presetField] === $item->id)) {
            echo "<option value = '" . $item->id . "' selected = 'selected'>" . $item->getAttribute($display) . '</option>';
        }//if
        else {
            echo "<option value = '" . $item->id . "'>" . $item->getAttribute($display) . '</option>';
        }
    }
}

function validDatabaseInput($val){
    return !is_null($val) && $val !== '';
}
