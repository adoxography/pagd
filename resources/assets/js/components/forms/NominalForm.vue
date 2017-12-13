<script>
import Form from './Form';
import HasMorphemes from '../../mixins/HasMorphemes';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['pronominalFeatures', 'nominalFeatures', 'paradigms', 'oldParadigm', 'oldNominalFeature', 'oldPronominalFeature', 'oldTranslation'],

	mixins: [ HasMorphemes ],

	data() {
		return {
			language:          new Datalist,
			pronominalFeature: new Datalist,
			nominalFeature:    new Datalist,
			paradigm:          new Datalist,
			mode:              new Datalist,
			parent:            new Datalist,
			translation: '',
			validations: {
				nominalFeature: 'datalist_required|datalist_exists',
				pronominalFeature: 'datalist_required|datalist_exists'
			}
		}
	},

	computed: {
		filteredParadigms() {
			return this.paradigms.filter(paradigm => {
				return paradigm.language_id == this.language.id;
			});
		},

		translationRequired() {
			return this.morphemes.length == 0 || !this.morphemesContainStem;
		},

		translationRules() {
			if (this.morphemes.length == 0 || this.morphemesContainStem) {
				return '';
			}

			return 'required';
		},

		paradigmHasPronominalFeature() {
			let paradigm = this.getParadigm();
			let result = false;

			if(paradigm) {
				result = paradigm.type.hasPronominalFeature;
			}

			return result;
		},

		paradigmHasNominalFeature() {
			let paradigm = this.getParadigm();
			let result = false;

			if(paradigm) {
				result = paradigm.type.hasNominalFeature;
			}

			return result;
		},

		morphemesContainStem() {
			let stems = ['V', 'N'];

			let result = this.morphemes.find(item => {
				return stems.includes(item.name.replace(/[-*]/g, ''));
			});

			return typeof result !== 'undefined';
		}
	},

	watch: {
		language() {
			this.paradigm = new Datalist;
		},

		paradigm() {
			this.pronominalFeature = new Datalist;
			this.nominalFeature = new Datalist;

			if(this.paradigmHasPronominalFeature) {
				this.validations.pronominalFeature = 'datalist_required|datalist_exists';
			} else {
				this.validations.pronominalFeature = '';
			}

			if(this.paradigmHasNominalFeature) {
				this.validations.nominalFeature = 'datalist_required|datalist_exists';
			} else {
				this.validations.nominalFeature = '';
			}
		},

		translationRequired(value) {
			if (!value) {
				this.translation = '';
			}
		}
	},

	mounted() {
		if(this.oldParadigm) {
			Vue.nextTick(() => {
				this.$refs.paradigm.update(this.oldParadigm);
				if(this.oldPronominalFeature) {
					Vue.nextTick(() => {
						this.$refs.pronominalFeature.update(this.oldPronominalFeature);
					});
				}

				if(this.oldNominalFeature) {
					Vue.nextTick(() => {
						this.$refs.nominalFeature.update(this.oldNominalFeature);
					});
				}
			});
		}
	},

	created() {
		if (this.oldTranslation) {
			this.translation = this.oldTranslation;
		}
	},

	methods: {
		getParadigm() {
			let id = this.paradigm.id;
			let lookup = null;

			if(id) {
				lookup = this.paradigms.find(paradigm => {
					return paradigm.id == id;
				});
			}

			return lookup;
		}
	}
}
</script>
