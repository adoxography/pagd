@extends('layout', ['title' => 'Phoneme search'])

@section('title')
    Phoneme search
@endsection

@section('content')
    <form method="GET" action="/phonemes/search/results">
        <alg-phoneme-search
            inline-template
            v-cloak
            :old-errors="{{ json_encode($errors->messages()) }}"
            :inventory="{{ $inventory->toJson() }}"
            @isset ($params)
                :preset="{{ $params }}"
            @endisset
        >
            <div>
                <div class="field">
                    <label class="label">Search mode:</label>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="mode" value="inventory" v-model="mode" />
                            Inventory
                        </label>
                        <label class="radio">
                            <input type="radio" name="mode" value="reflex" v-model="mode" />
                            Reflex
                        </label>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Phone type:</label>
                    <div class="control">
                        @foreach ($types as $type)
                            <label class="radio">
                                <input type="radio" name="type" value="{{ $type }}" v-model="type" />
                                {{ ucfirst($type) }}
                            </label>
                        @endforeach
                    </div>
                </div>

                <div class="field" v-show="mode == 'reflex'">
                    <label class="label">Phones:</label>
                    <em v-if="type == ''">Select a phone type first</em>
                    <div v-else>
                        <div>
                            <span class="control" v-for="phone, in phones" style="margin-right: 1rem">
                                <label class="checkbox">
                                    <input type="checkbox" :value="phone.id" v-model="phonemes[phone.id]" name="phonemes[]">
                                    @{{ phoneName(phone) }}
                                </label>
                            </span>
                        </div>
                        <a class="button" @click="selectAll">Select all</a>
                        <a class="button" @click="selectNone">Select none</a>
                    </div>
                </div>

                <label class="label">Languages:</label>
                <div class="field">
                    <div class="control">
                        <alg-datalist
                            v-model="pa"
                            :list="[]"
                            :disabled="true"
                        ></alg-datalist>
                    </div>
                </div>

                <div class="field" v-for="language, i in languages">
                    <div class="control">
                        <alg-datalist
                            v-model="languages[i]"
                            :list="{{ $languages }}"
                            @input="onInput($event.text, i)"
                            name="languages[]"
                        ></alg-datalist>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-success">Search</button>
                    </div>
                </div>
            </div>
        </alg-phoneme-search>
    </form>
@endsection
