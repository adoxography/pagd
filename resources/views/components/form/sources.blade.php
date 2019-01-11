@component('components.form.field', [
    'name' => $name ?? 'sources',
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
<alg-sources v-model="data.{{ $name }}"></alg-sources>
@endcomponent
