@component('components.form.field', [
    'name' => $name,
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
    @slot('outer')
    @endslot
    <b-taginput v-model="data.{{ $name }}"
                ellipsis>
    </b-taginput>
@endcomponent
