<script>
import Form from '../Form';
import { Datalist } from '../../../Datalist.js';

export default {
    extends: Form,

    props: ['inventory', 'preset'],

    data() {
        return {
            languages: [new Datalist],
            type: '',
            mode: 'inventory',
            phonemes: {},
            pa: {'text': 'Proto-Algonquian'}
        }
    },

    computed: {
        phones() {
            return this.inventory[this.type];
        }
    },

    watch: {
        type() {
            let phonemes = {}

            _.each(this.phones, phone => {
                phonemes[phone.id] = true
            });

            this.phonemes = phonemes;
        }
    },

    created() {
        if (this.preset) {
            this.mode = this.preset.mode;

            let languages = [];

            for (let i = 0; i < this.preset.languages.length; i += 2) {
                let name = this.preset.languages[i];
                let id = this.preset.languages[i + 1];

                if (name) {
                    languages.push(new Datalist(name, id));
                }
            }

            languages.push(this.languages[0]);
            this.languages = languages;
        }
    },

    mounted() {
        if (this.preset) {
            this.type = this.preset.type;
            Vue.nextTick(() => {
                _.each(this.phonemes, (_, key) => {
                    this.phonemes[key] = this.preset.phonemes.includes(key);
                });
            });
        } else {
            this.type = 'consonants';
        }
    },

    methods: {
        onInput(text, index) {
            if (text == '') {
                if (this.languages.length > 1) {
                    this.languages.splice(index, 1);
                }
            } else if (index == this.languages.length - 1) {
                this.languages.push(new Datalist);
            }
        },

        phoneName(phoneme) {
            return phoneme.algoName;
        },

        selectAll() {
            this.toggle(true);
        },

        selectNone() {
            this.toggle(false);
        },

        toggle(setting) {
            _.each(this.phonemes, (_, key) => {
                this.phonemes[key] = setting;
            });
        }
    }
}
</script>
