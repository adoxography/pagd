@component('components.form.field', [
    'name' => $name,
    'label' => $field ?? null,
    'standalone' => $standalone ?? null
])
    @slot('outer')
        <input type="hidden" name="{{ $name }}" v-model="data.{{ $name }}" />
    @endslot

	<wysiwyg id="{{ $name }}-input"
             v-model="data.{{ $name }}"

	         @isset($disabled)
	         :disabled="{{ $disabled }}"
	         @endisset
  ></wysiwyg>
@endcomponent
