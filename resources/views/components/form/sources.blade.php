@component('components.form.field', [
    'name' => $name ?? 'sources',
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
    <alg-sources value="{{ $value ?? '' }}"></alg-sources>
@endcomponent
