<alg-form method="{{ $method}}" action="{{ $action }}">
    <alg-model-form :lists="{}"
                    :template="{{ App\Models\Source::fieldTemplate() }}"
                    @isset($source) :initial="{{ $source }}" @endisset
                    inline-template
                    :old-errors="{{ $errors }}"
                    @if(old('data')) :old-values="{{ old('data') }}" @endif
                    v-cloak>
        <div class="details">
            @include('components.form.text', [
                'name' => 'author',
                'required' => true
            ])

            @include('components.form.text', [
                'name' => 'year',
                'required' => true
            ])

            @include('components.form.textarea', [
                'name' => 'long',
                'label' => 'Full citation',
                'required' => true
            ])

            @include('components.form.text', [
                'name' => 'url',
                'label' => 'URL'
            ])

            @include('components.form.textarea', [
                'name' => 'summary',
            ])

            @include('components.form.textarea', [
                'name' => 'notes',
            ])
        </div>
    </alg-model-form>
</alg-form>
