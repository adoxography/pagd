<<<<<<< HEAD
<<<<<<< HEAD
=======
@extends('components.form.field')

>>>>>>> Replace verb form form template with blade components
=======
>>>>>>> Put remaining UI elements into verb form form
@php
use Illuminate\Support\Str;
$list     = $list     ?? Str::plural($name);
$required = $required ?? 'false';
$field    = $field    ?? 'name';
$async    = $async    ?? false;
$filter   = $filter   ?? 'null';
$additionalFields = $additionalFields ?? [];
$asyncParams = $asyncParams ?? '{}';
$path = 'data';
$placeholderSet = isset($placeholder);

if (isset($goesThrough)) {
    $path .= '.' . $goesThrough;
}
@endphp


@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])

@slot('outer')
<input type="hidden" name="{{ $name }}_id" v-model="{{$path}}.{{ $name }}.id" />
@endslot

<b-autocomplete id="{{ $name }}-input"
                name="{{ $name }}"
                :open-on-focus="true"

                @select="obj => {
                    {{ $path }}.{{ $name }}.id = obj ? obj.id : 0;

                    @foreach($additionalFields as $additionalField)
                    {{ $path }}.{{ $name }}.{{ $additionalField }} = obj ? obj.{{ $additionalField }} : null;
                    @endforeach
                }"

                v-model="{{ $path }}.{{ $name }}.{{ $field }}"
                field="{{ $field }}"

                :data="filteredLists.{{ $list }}"

                @if($async)
                @keyup.native="getAsyncData('{{ $list }}', $event, {{ $asyncParams }})"
                :loading="asyncLoading.{{ $list }}"
                v-validate="{required: {{ $required }}}"
                @else
                @input="filterList('{{ $list }}', $event, {{ $filter }})"
                @focus="filterList('{{ $list }}', $event.target.value, {{ $filter }})"
                v-validate="{required: {{ $required }}, exists: [lists.{{ $list }}, '{{ $field }}']}"
                @endif

                @if($placeholderSet)
                placeholder="{{ $placeholder }}"
                @endif

                @isset($disabled)
                :disabled="{{ $disabled }}"
                @endisset
>
</b-autocomplete>
@endcomponent
