<script>
import Form from '../Form';
import { Datalist } from '../../../Datalist.js';

export default {
    extends: Form,

    props: ['inventory'],

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

    mounted() {
        this.type = 'consonants';
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
