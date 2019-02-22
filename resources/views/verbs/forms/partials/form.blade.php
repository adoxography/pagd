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
            {{--Status--}}
            <div class="detail-row">
                <label class="detail-label">Status</label>
                <div class="detail-value">
                    <b-radio v-model="data.empty" :native-value="false">
                        Form exists
                    </b-radio>
                    <b-radio v-model="data.empty" :native-value="true">
                        Form does not exist
                    </b-radio>
                </div>
            </div>

            {{--Language--}}
            @include('components.form.autocomplete', [
                'name' => 'language',
                'required' => true
            ])

            {{--Surface form--}}
            @include('components.form.text', [
                'name' => 'name',
                'label' => 'Surface form',
                'required' => '!data.empty',
                'placeholder' => 'the form as written in a text',
                'disabled' => 'data.empty'
            ])

            {{--Phonemic form--}}
            @include('components.form.text', [
                'name' => 'phonemic_form',
                'placeholder' => 'the Algonquianist phonemic representation',
                'disabled' => 'data.empty'
            ])

            {{--Arguments--}}
            <div class="detail-row">
                <label class="detail-label">Arguments</label>
                <div class="detail-value argument-inputs">
                    <b-field grouped>
                        @include('components.form.autocomplete', [
                            'name' => 'subject',
                            'placeholder' => 'subject',
                            'required' => true,
                            'list' => 'features',
                            'goesThrough' => 'structure',
                            'standalone' => true
                        ])

                        @include('components.form.autocomplete', [
                            'name' => 'primary_object',
                            'placeholder' => 'primary object',
                            'list' => 'features',
                            'goesThrough' => 'structure',
                            'standalone' => true
                        ])

                        @include('components.form.autocomplete', [
                            'name' => 'secondary_object',
                            'placeholder' => 'secondary object',
                            'list' => 'features',
                            'goesThrough' => 'structure',
                            'standalone' => true
                        ])
                    </b-field>
                </div>
            </div>

            {{--Class--}}
            @include('components.form.autocomplete', [
                'name' => 'verb_class',
                'list' => 'classes',
                'goesThrough' => 'structure'
            ])

            {{--Order--}}
            @include('components.form.autocomplete', [
                'name' => 'order',
                'goesThrough' => 'structure'
            ])

            {{--Mode--}}
            @include('components.form.autocomplete', [
                'name' => 'mode',
                'goesThrough' => 'structure'
            ])

            {{--Submode--}}
            <div class="detail-row">
                <label class="detail-label">Submode</label>
                <div class="detail-value">
                    <b-checkbox v-model="data.structure.is_negative"
                                name="is_negative">
                        Negative
                    </b-checkbox>
                    <b-checkbox v-model="data.structure.is_diminutive"
                                name="is_diminutive">
                        Diminutive
                    </b-checkbox>
                </div>
            </div>

            {{--Definitenesses--}}
            @include('components.form.select', [
                'name' => 'is_absolute',
                'label' => 'definiteness',
                'list' => 'definitenesses',
                'goesThrough' => 'structure'
            ])

            {{--Head--}}
            @include('components.form.select', [
                'name' => 'head',
                'goesThrough' => 'structure'
            ])

            {{--Parent--}}
            @include('components.form.autocomplete', [
                'name' => 'parent',
                'async' => true,
                'asyncParams' => '{language: data.language.id, type: "verb", markup: false}',
            ])

            {{-- Change type --}}
            @include('components.form.autocomplete', [
                'name' => 'change_type'
            ])

            {{--Morphemes--}}
            @include('components.form.morpheme-tags')

            @include('components.form.sources', [
                'name' => 'sources'
            ])

            @include('components.form.textarea', [
                'name' => 'historical_notes',
                'label' => 'history'
            ])

            @include('components.form.textarea', [
                'name' => 'allomorphy_notes',
                'label' => 'allomorphy'
            ])

            @include('components.form.textarea', [
                'name' => 'usage_notes',
                'label' => 'usage'
            ])

            @include('components.form.textarea', [
                'name' => 'private_notes'
            ])
            <alg-floating-typewriter></alg-floating-typewriter>
        </div>
    </alg-model-form>
</alg-form>
