@component('components.form.field', [
    'name' => 'morpheme_sequence',
    'label' => 'morphemes'
])
    @slot('outer')
        <input type="hidden"
               name="morphemic_form"
               :value="data.morpheme_sequence.map(m => (m.id || m.name.replace(/[*-]/g, '')) + (m.ic ? '.0' : '')).join('-')"
        />
    @endslot
    <alg-taginput v-model="data.morpheme_sequence"
                  class="morpheme-input"
                  :data="filteredLists.morphemes"
                  @keyup.native="getAsyncData('morphemes', $event, {language: data.language.id})"
                  field="name"
                  autocomplete
                  :open-on-focus="true"
                  :on-click-tag="tag => tag.ic = !tag.ic"
                  :allow-duplicates="true"
                  :allow-new="true"
                  :field="'name'"
                  :loading="asyncLoading.morphemes">
        <template slot-scope="{ option }">
            @{{ option.name }}
            (<span :class="{gloss: option.gloss[0]!=='{{ '"' }}'}">@{{ option.gloss }}</span>)
        </template>
        <template slot="tagDisplay"
                  slot-scope="{ tag }">
            @{{ tag.name }}@{{ tag.ic ? '.IC' : '' }}
            <span v-if="tag.gloss">
                (<span :class="{gloss: tag.gloss[0]!=='{{ '"' }}'}">@{{ tag.gloss }}</span>)
            </span>
        </template>
    </alg-taginput>
@endcomponent
