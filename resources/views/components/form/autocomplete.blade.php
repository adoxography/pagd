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

                @if($placeholderSet)
                placeholder="{{ $placeholder }}"
                @endif

></b-autocomplete>
@endcomponent
