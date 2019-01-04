@php
    $required = $required ?? 'false';
@endphp

@extends('components.form.field')

@section('inner-field')
<b-input id="{{ $name }}-input"
         name="{{ $name }}"
         v-validate="{required: {{ $required }}}"
         v-model="data.{{ $name }}"
         @isset($placeholder)
         placeholder="{{ $placeholder }}"
         @endisset
         
         @isset($disabled)
         :disabled="{{ $disabled }}"
         @endisset

         @if($required && $required != 'false')
         required
         @endif
         >
</b-input>
@overwrite
