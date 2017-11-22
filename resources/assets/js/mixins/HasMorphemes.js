
export default {
    props: ['init-morphemes'],

    data() {
        return {
            morphemes: []
        }
    },

    created() {
        if (this.initMorphemes) {
            this.morphemes = this.initMorphemes;
        }
    }
}
