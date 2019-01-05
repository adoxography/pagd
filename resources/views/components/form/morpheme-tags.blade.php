@extends('components.form.field')

@php
$name = $name ?? 'morphemes';
@endphp

@section("inner-field")
    <alg-morpheme-tag-input
        source="/autocomplete/morphemes"
        name="{{ $name }}"
        id="{{ $name }}-input"
        :classes="{'is-danger': errors.has('{{ $name }}')}"
        :language="{{ $language }}"
        :allow-duplicates="true"
        :allow-new="true"
        :allow-periods="false"
        :allow-hyphens="false"

        @isset ($placeholder)
            placeholder="{{ $placeholder }}"
        @endisset

        @isset ($rules)
            v-validate="'{{ $rules }}'"
        @endisset

        data-vv-value-path="tags"

        :tags="morphemes"
        ref="morphemes"

        @isset ($on)
            @foreach ($on as $event => $listener)
                {{ '@' . $event }}="{{ $listener }}"
            @endforeach
        @else
            @input="errors.clear('{{ $name }}')"
        @endisset
    ></alg-morpheme-tag-input>
@overwrite
