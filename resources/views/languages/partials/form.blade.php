<alg-form method="{{ $method }}" action="{{ $action }}">
    <alg-model-form :lists="{ groups: {{ $groups->toJson() }}, parents: {{ $parents->toJson() }} }"
                    :template="{{ App\Models\Language::fieldTemplate() }}"
                    @isset($language)
                    :initial="{{ $language->toJson() }}"
                    @endisset
                    inline-template
                    :old-errors="{{ $errors->toJson() }}"

                    @if(old('data'))
                    :old-values="{{ old('data') }}"
                    @endif
                    v-cloak>
        <div class="details">
            <tbody>
                {{--Name--}}
                <div class="detail-row">
                    <label class="detail-label" for="name-input">Name</label>
                    <div class="detail-value">
                        <b-field :type="{'is-danger': errors.has('name')}"
                            :message="errors.first('name')">
                            <b-input id="name-input"
                                     name="name"
                                     v-validate="'required'"
                                     v-model="data.name"
                                     required>
                            </b-input>
                        </b-field>
                    </div>
                </div>

                {{--Alternate names--}}
                <div class="detail-row">
                    <label class="detail-label" for="alternate-names-input">Alternate names</label>
                    <div class="detail-value">
                        <b-field :type="{'is-danger': errors.has('alternate_names')}"
                            :message="errors.first('alternate_names')">
                            <b-input id="alternate-names-input"
                                     name="alternate_names"
                                     v-model="data.alternate_names">
                            </b-input>
                        </b-field>
                    </div>
                </div>

                {{--Group--}}
                <div class="detail-row">
                    <label class="detail-label" for="group-input">Group</label>
                    <div class="detail-value">
                        <input type="hidden" name="group_id" v-model="data.group.id" />
                        <b-field :type="{'is-danger': errors.has('group')}"
                            :message="errors.first('group')">
                            <b-autocomplete id="group-input"
                                            name="group"
                                            v-validate="{ required: true, exists: [lists.groups, 'name'] }"
                                            autocomplete="new-password"
                                            :open-on-focus="true"
                                            :data="filteredLists.groups"
                                            @input="filterList('groups', $event)"
                                            field="name"
                                            v-model="data.group.name"
                                            @select="obj => data.group.id = obj.id"
                                            required>
                            </b-autocomplete>
                        </b-field>
                    </div>
                </div>

                {{--Parent--}}
                <div class="detail-row">
                    <label class="detail-label" for="parent-input">Parent</label>
                    <div class="detail-value">
                        <input type="hidden" name="parent_id" v-model="data.parent.id" />
                        <b-field :type="{'is-danger': errors.has('parent')}"
                            :message="errors.first('group')">
                            <b-autocomplete id="parent-input"
                                            name="parent"
                                            v-validate="{ exists: [lists.parents, 'name'] }"
                                            :open-on-focus="true"
                                            :data="filteredLists.parents"
                                            @input="filterList('parents', $event)"
                                            field="name"
                                            v-model="data.parent.name"
                                            @select="obj => data.parent.id = obj.id">
                            </b-autocomplete>
                        </b-field>
                    </div>
                </div>

                {{--ISO--}}
                <div class="detail-row">
                    <label class="detail-label" for="iso-input">ISO</label>
                    <div class="detail-value">
                        <b-field :type="{'is-danger': errors.has('iso')}"
                            :message="errors.first('iso')">
                            <b-input id="iso-input"
                                     name="iso"
                                     v-model="data.iso">
                            </b-input>
                        </b-field>
                    </div>
                </div>

                {{--Algonquianist code--}}
                <div class="detail-row">
                    <label class="detail-label" for="algo-code-input">Algonquianist code</label>
                    <div class="detail-value">
                        <b-field :type="{'is-danger': errors.has('algo_code')}"
                            :message="errors.first('algo_code')">
                            <b-input id="algo-code-input"
                                     name="algo_code"
                                     required
                                     v-model="data.algo_code">
                            </b-input>
                        </b-field>
                    </div>
                </div>

                {{--Status--}}
                <div class="detail-row">
                    <label class="detail-label" for="reconstructed-field">Status</label>
                    <div class="detail-value">
                        <b-field id="reconstructed-field" :type="{'is-danger': errors.has('reconstructed')}"
                            :message="errors.first('reconstructed')">
                            <b-radio v-model="data.reconstructed"
                                     name="reconstructed"
                                     :native-value="false">
                                Attested
                            </b-radio>
                            <b-radio v-model="data.reconstructed"
                                     name="reconstructed"
                                     :native-value="true">
                                Reconstructed
                            </b-radio>
                        </b-field>
                    </div>
                </div>

                {{--Notes--}}
                <div class="detail-row">
                    <label class="detail-label" for="notes-input">Notes</label>
                    <div class="detail-value">
                        <input type="hidden" name="notes" v-model="data.notes" />
                        <wysiwyg id="notes-input" v-model="data.notes"></wysiwyg>
                    </div>
                </div>

            {{--Location--}}
            <div class="detail-row">
                <label class="detail-label">Location</label>
                <div class="detail-value">
                    <input type="hidden" name="location[type]" v-model="data.location.type" />
                    <input type="hidden" name="location[position]" v-model="data.location.position" />
                    <alg-map :add-mode="true"
                             :markers="{{ $parents }}"

                             @isset($language)
                             :marker="{{ $language }}"
                             @endisset

                            v-on:marker-added="obj => data.location = obj">
                    </alg-map>
                </div>
            </div>

            <input type="hidden" name="data" v-model="stringifiedData" />
        </div>
    </alg-model-form>
</alg-form>
