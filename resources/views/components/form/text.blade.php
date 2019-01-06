@php
    $required = $required ?? 'false';
@endphp

@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
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
></b-input>
@endcomponent
