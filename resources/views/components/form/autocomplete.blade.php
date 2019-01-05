@extends('components.form.field')

@php
$list     = $list     ?? str_plural($name);
$required = $required ?? 'false';
$field    = $field    ?? 'name';
$async    = $async    ?? false;
$asyncParams = $asyncParams ?? '{}';
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
                :open-on-focus="true"
                @select="obj => {{ $path }}.{{ $name }}.id = obj ? obj.id : 0"
                v-model="{{ $path }}.{{ $name }}.{{ $field }}"
                field="{{ $field }}"

                :data="filteredLists.{{ $list }}"

                @if($async)
                @keyup.native="getAsyncData('{{ $list }}', $event, {{ $asyncParams }})"
                :loading="asyncLoading.{{ $list }}"
                v-validate="{required: {{ $required }}}"
                @else
                @input="filterList('{{ $list }}', $event)"
                v-validate="{required: {{ $required }}, exists: [lists.{{ $list }}, '{{ $field }}']}"
                @endif

                @if($required && $required != 'false')
                required
                @endif

                @if($placeholderSet)
                placeholder="{{ $placeholder }}"
                @endif

></b-autocomplete>
@overwrite
