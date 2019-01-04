@extends('components.form.field')

@php
$list     = $list     ?? str_plural($name);
$required = $required ?? 'false';
$field    = $field    ?? 'name';
$path = 'data';
$placeholderSet = isset($placeholder);

if (isset($goesThrough)) {
    $path .= '.' . $goesThrough;
}
@endphp


@section('outer-field')
<input type="hidden" name="{{ $name }}_id" v-model="{{$path}}.{{ $name }}.id" />
@overwrite

@section('inner-field')
<b-autocomplete id="{{ $name }}-input"
                name="{{ $name }}"
                v-validate="{required: {{ $required }}, exists: [lists.{{ $list }}, '{{ $field }}']}"
                :open-on-focus="true"
                @select="obj => {{ $path }}.{{ $name }}.id = obj ? obj.id : 0"
                v-model="{{ $path }}.{{ $name }}.{{ $field }}"
                :data="filteredLists.{{ $list }}"
                field="{{ $field }}"

                @if($required && $required != 'false')
                required
                @endif

                @if($placeholderSet)
                placeholder="{{ $placeholder }}"
                @endif

                @input="filterList('{{ $list }}', $event)">
</b-autocomplete>
@overwrite
