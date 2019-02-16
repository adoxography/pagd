<alg-form method="{{ $method }}" action="{{ $action }}">
    <alg-model-form :lists="{{ $lists }}"
                    :async-routes="{{ $asyncRoutes }}"
                    :prefetch="{
                        languages: {
                            morphemes: vm => {return {language: vm.data.language.id}}
                        }
                    }"
                    :template="{{ $template }}"
                    :filter-proto="[ 'name', 'phonemic_form' ]"

                    inline-template
                    v-cloak

                    :old-errors={{ $errors }}
                    @isset($example) :initial="{{ $example }}" @endisset
                    @if(old('data')) :old-values="{{ old('data') }}" @endif
    >
        <div class="details">
            {{-- Language --}}
            @include('components.form.autocomplete', [
                'name' => 'language',
                'required' => true
            ])

            {{-- Shape --}}
            @include('components.form.text', [
                'name' => 'name',
                'label' => 'Shape',
                'placeholder' => 'The example as written in a text'
            ])

            {{-- Shape --}}
            @include('components.form.text', [
                'name' => 'phonemic_form',
                'label' => 'Phonemic representation'
            ])

            {{-- Translation --}}
            @include('components.form.text', [
                'name' => 'translation'
            ])

            {{-- Form --}}
            @include('components.form.autocomplete', [
                'name' => 'form',
                'async' => true,
                'field' => 'uniqueName',
                'disabled' => '!data.language.id',
                'asyncParams' => '{language: data.language.id, markup: false}'
            ])

            {{-- Morphemes --}}
            @include('components.form.morpheme-tags')

            {{--Parent--}}
            @include('components.form.autocomplete', [
                'name' => 'parent',
                'async' => true,
                'disabled' => '!data.language.id',
                'asyncParams' => '{language: data.language.id, markup: false}',
            ])

            {{-- Sources --}}
            @include('components.form.sources', [
                'name' => 'sources'
            ])

            {{-- Public notes --}}
            @include('components.form.textarea', [
                'name' => 'public_notes'
            ])

            {{-- Private notes --}}
            @include('components.form.textarea', [
                'name' => 'private_notes'
            ])
        </div>
    </alg-model-form>
</alg-form>
