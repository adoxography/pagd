@php
$list = $list ?? str_plural($name);
$path = 'data';

if (isset($goesThrough)) {
    $path .= '.' . $goesThrough;
}
@endphp

@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])

    <b-select v-model="{{ $path }}.{{ $name }}">
        <option v-for="(value, label) in lists.{{ $list }}" :value="value">
            @{{ label }}
        </option>
    </b-select>
@endcomponent
