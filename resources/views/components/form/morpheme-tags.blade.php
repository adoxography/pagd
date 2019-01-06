
@php
$name = $name ?? 'morphemes';
@endphp

@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
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

        v-model="data.morphemes"

        @isset ($placeholder)
            placeholder="{{ $placeholder }}"
        @endisset

        @isset ($rules)
            v-validate="'{{ $rules }}'"
        @endisset

        data-vv-value-path="tags"

        :tags="filteredLists.morphemes"
        ref="morphemes"

        @isset ($on)
            @foreach ($on as $event => $listener)
                {{ '@' . $event }}="{{ $listener }}"
            @endforeach
        @else
            @input="errors.clear('{{ $name }}')"
        @endisset
    ></alg-morpheme-tag-input>
@endcomponent
