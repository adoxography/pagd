<alg-form method="{{ $method }}" action="{{ $action }}">
    <alg-model-form :lists="{languages: {{ $languages }}, features: {{ $arguments }}, classes: {{ $classes }}, orders: {{ $orders }}, modes: {{ $modes }}, definitenesses: ['absolute', 'objective', 'N/A'], parents: '/autocomplete/formParents' }"
                    :template="{{ App\Models\Verbs\Form::fieldTemplate() }}"
                    @isset($form)
                    :initial="{{ $form->toJson() }}"
                    @endisset
                    inline-template
                    :old-errors="{{ $errors->toJson() }}"
                    @if(old('data'))
                    :old-values="{{ old('data') }}"
                    @endif
                    v-cloak>
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

            {{--TODO: Definitenesses--}}

            {{--Morphemes--}}
            {{--@include('components.form.morpheme-tags', [--}}
                {{--'language' => 'data.language.id'--}}
            {{--])--}}

            {{--Parent--}}
            @include('components.form.autocomplete', [
                'name' => 'parent',
                'async' => true,
                'asyncParams' => '{language: data.language.id, type: "verbs"}'
            ])
        </div>
    </alg-model-form>
</alg-form>
