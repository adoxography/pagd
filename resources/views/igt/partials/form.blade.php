<alg-sandbox inline-template
             v-cloak
             :old-errors="{{ json_encode($errors->messages()) }}"
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
                <div class="field is-grouped">
                    <div class="control">
                        <div class="select">
                            <select v-model="line.type">
                                <option v-for="lineType in lineTypes" :value="lineType" v-text="lineType.name"></option>
                            </select>
                            <input type="hidden" v-model="line.type.name" :name="'lines['+i+'][type]'" />
                        </div>
                    </div>
                    <div class="control is-expanded">
                        <input class="input"
                               :class="{'is-monospace': line.type.align}"
                               type="text"
                               :name="'lines['+i+'][text]'"
                               v-model="line.text"
                               @keydown.enter.shift.prevent="addLine(i)"
                               @keydown.backspace.shift="removeLine(i)"
                               :ref="'line-'+i"
                        />
                    </div>
                    <p class="control">
                        <a class="button is-success"
                           @click="addLine(i)"
                           title="Add line after (Shift+Enter)"
                        ><i class="fa fa-plus"></i></a>
                    </p>
                    <p class="control">
                        <a class="button is-danger"
                           @click="removeLine(i)"
                           :disabled="lines.length <= 1"
                           title="Remove line (Shift+Backspace)"
                        ><i class="fa fa-minus"></i></a>
                    </p>
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
</alg-sandbox>
