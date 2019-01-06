@component('components.form.field', [
    'name' => $name ?? 'sources',
    'label' => $label ?? null,
    'standalone' => $standalone ?? null
])
<<<<<<< HEAD
<alg-sources v-model="data.{{ $name }}"></alg-sources>
=======
    <alg-sources value="{{ $value ?? '' }}"></alg-sources>
>>>>>>> Put remaining UI elements into verb form form
@endcomponent
