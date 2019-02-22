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
                    
                    :old-errors="{{ $errors }}"
                    @isset($form) :initial="{{ $form }}" @endisset
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
                'required' => true,
                'placeholder' => 'the form as written in a text'
            ])

            {{-- Translation --}}
            @include('components.form.text', [
                'name' => 'translation',
                'placeholder' => 'Only required for stemless forms',
                'disabled' => 'data.name.length > 0 && data.name.match(/(^|-)N($|-)/)'
            ])

            {{-- Phonemic representation --}}
            @include('components.form.text', [
                'name' => 'phonemic_form',
                'label' => 'Phonemic representation',
                'placeholder' => 'the Algonquianist phonemic representation'
            ])

            {{-- Paradigm --}}
            @include('components.form.autocomplete', [
                'name' => 'paradigm',
                'additionalFields' => ['type'],
                'required' => true,
                'disabled' => '!data.language.id',
                'filter' => 'opt => opt.language_id === data.language.id',
                'goesThrough' => 'structure'
            ])

            {{-- Pronominal feature --}}
            @include('components.form.autocomplete', [
                'name' => 'pronominal_feature',
                'goesThrough' => 'structure',
                'disabled' => '!data.language.id || !data.structure.paradigm.id || !data.structure.paradigm.type.has_pronominal_feature'
            ])

            {{-- Nominal feature --}}
            @include('components.form.autocomplete', [
                'name' => 'nominal_feature',
                'goesThrough' => 'structure',
                'disabled' => '!data.language.id || !data.structure.paradigm.id || !data.structure.paradigm.type.has_nominal_feature'
            ])

            {{-- Parent --}}
            @include('components.form.autocomplete', [
                'name' => 'parent',
                'async' => true,
                'asyncParams' => '{language: data.language.id, type: "nominal", markup: false}',
                'disabled' => '!data.language.id'
            ])

            {{-- Change type --}}
            @include('components.form.autocomplete', [
                'name' => 'change_type'
            ])

            {{--Morphemes--}}
            @include('components.form.morpheme-tags')

            {{-- Sources --}}
            @include('components.form.sources', [
                'name' => 'sources'
            ])

            {{-- History --}}
            @include('components.form.textarea', [
                'name' => 'historical_notes',
                'label' => 'history'
            ])

            {{-- Allomorphy --}}
            @include('components.form.textarea', [
                'name' => 'allomorphy_notes',
                'label' => 'allomorphy'
            ])

            {{-- Usage --}}
            @include('components.form.textarea', [
                'name' => 'usage_notes',
                'label' => 'usage'
            ])

            {{-- Private notes --}}
            @include('components.form.textarea', [
                'name' => 'private_notes'
            ])
            <alg-floating-typewriter></alg-floating-typewriter>
        </div>
    </alg-model-form>
</alg-form>
