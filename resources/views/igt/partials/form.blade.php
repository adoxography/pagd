<alg-igt-form inline-template
              v-cloak
              :old-errors="{{ json_encode($errors->messages()) }}"
              :line-types="{{ $lineTypes->toJson() }}"

              @isset($igt)
              :old-lines="{{ $igt->lines->toJson() }}"
              @endisset
>
    @component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
        {{--Language--}}
        @component('components.form.datalist', [
            'name'  => 'language',
            'list'  => $languages,
            'rules' => 'required|exists'
        ])
            @slot('value')
                @if(isset($igt))
                    {{ $igt->language->name }}
                @endif
            @endslot
        @endcomponent

        {{--IGT--}}
        <hr />
        <h4 class="subtitle is-4">IGT</h4>
        <ul class="field">
            <li class="igt-line" v-for="(line, i) in lines">
                <div class="field is-horizontal">
                    <div class="field-body">

                    <div class="field is-narrow">
                        <div class="control">
                            <div class="select">
                                <select v-model="line.type">
                                    <option v-for="lineType in lineTypes" :value="lineType" v-text="lineType.name"></option>
                                </select>
                                <input type="hidden" v-model="line.type.id" :name="'lines['+i+'][type_id]'" />
                            </div>
                        </div>
                    </div>


                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <alg-typewriter :disabled="!line.type.align" :start-hidden="true" :typewriter-id='i'>
                                    <input class="input"
                                           :class="{'is-monospace': line.type.align}"
                                           type="text"
                                           :name="'lines['+i+'][text]'"
                                           v-model="line.text"
                                           @keydown.enter.shift.prevent="addLine(i)"
                                           @keydown.backspace.shift="removeLine(i)"
                                           :ref="'line-'+i"
                                           autocomplete="off"
                                    />
                                </alg-typwriter>
                            </div>
                            <p class="control">
                                <portal-target :name="'typewriter-toggle-'+i"></portal-target>
                            </p>
                        </div>
                    </div>

                    <div class="field is-narrow">
                        <p class="control">
                            <a class="button is-success"
                               @click="addLine(i)"
                               title="Add line after (Shift+Enter)"
                            ><i class="fa fa-plus"></i></a>
                        </p>
                    </div>

                    <div class="field is-narrow">
                        <p class="control">
                            <a class="button is-danger"
                               @click="removeLine(i)"
                               :disabled="lines.length <= 1"
                               title="Remove line (Shift+Backspace)"
                            ><i class="fa fa-minus"></i></a>
                        </p>
                    </div>


                    </div>

                </div>
            </li>
        </ul>
        <div class="field">
            <p class="control has-text-right">
                <a class="button is-primary" @click="align()">Align</a>
            </p>
        </div>

        <hr>
        <alg-sources v-model="sources"></alg-sources>

        <hr>
        <h4 class="subtitle is-4">Notes</h4>
        <div class="columns">
            <div class="column">
                @component('components.form.textarea', [
                    'name'        => 'publicNotes',
                    'label'       => 'public notes',
                    'placeholder' => 'Notes to be displayed to the public'
                ])
                    @slot('value')
                        @if(isset($igt))
                            {{ $igt->publicNotes }}
                        @endif
                    @endslot
                @endcomponent
            </div>
            <div class="column">
                @component('components.form.textarea', [
                    'name'        => 'privateNotes',
                    'label'       => 'private notes',
                    'placeholder' => 'Internal notes'
                ])
                    @slot('value')
                        @if(isset($igt))
                            {{ $igt->privateNotes }}
                        @endif
                    @endslot
                @endcomponent
            </div>
        </div>
    @endcomponent
</alg-igt-form>
