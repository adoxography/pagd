@extends('components.form.field')

@php
$list = $list ?? str_plural($name);
$path = 'data';

if (isset($goesThrough)) {
    $path .= '.' . $goesThrough;
}
@endphp

@section('inner-field')
    <b-select v-model="{{ $path }}.{{ $name }}">
        <option v-for="(value, label) in lists.{{ $list }}" :value="value">
            @{{ label }}
        </option>
    </b-select>
@overwrite
