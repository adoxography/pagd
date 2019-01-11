@php
    $required = isset($required) && $required ? 'true' : 'false';
@endphp

@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
    @slot('outer')
        <input type="hidden"
               name="{{ $name }}"
               v-model="data.{{ $name }}"
               v-validate="{ required: {{ $required }}}"
        />
    @endslot

	<wysiwyg id="{{ $name }}-input"
             v-model="data.{{ $name }}"

	         @isset($disabled)
	         :disabled="{{ $disabled }}"
	         @endisset
  ></wysiwyg>
@endcomponent
