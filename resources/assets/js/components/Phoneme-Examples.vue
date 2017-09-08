<template>
    <div>
        <div class="field">
            <span class="control">
                <alg-ajaxlist
                    v-model="lookup"
                    uri="/autocomplete/examples"
                    :with="autocompleteData"
                    ref="lookup"
                    @input="onUpdateLookup($event)"
                ></alg-ajaxlist>
            </span>
        </div>
            <div v-for="(example, index) in examples" class="field is-horizontal">
                <input
                    type="hidden"
                    v-model="example.id"
                    :name="'examples['+index+'][id]'"
                />
                <div class="field-label is-normal">
                    <label class="label">{{ example.name }}</label>
                </div>
                <div class="field-body">
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input
                                class="input"
                                type="text"
                                placeholder="Comments"
                                v-model="example.comments"
                                :name="'examples['+index+'][comments]'"
                            />
                        </p>
                        <span class="control">
                            <a class="button is-danger" @click="onDelete(index)">
                                <span class="icon">
                                    <i class="fa fa-times"></i>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Datalist } from '../Datalist.js';

export default {
    props: ['language', 'old'],

    data() {
        return {
            lookup: new Datalist,
            examples: []
        }
    },

    computed: {
        autocompleteData() {
            return {
                language: this.language ? this.language.id : null
            };
        }
    },

    methods: {
        onUpdateLookup(example) {
            if (example.text && this.$refs.lookup.showCheck) {
                this.examples.push({
                    name: example.text,
                    id: example.id,
                    comment: ''
                });

                this.$refs.lookup.reset();
            }
        },

        onDelete(index) {
            this.examples.splice(index, 1);
        }
    },

    created() {
        if (this.old) {
            this.old.forEach(example => {
                this.examples.push({
                    name: example.name,
                    id: example.id,
                    comments: example.pivot.comments
                });
            });
        }
    }
}
</script>
