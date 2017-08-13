<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['pronominalFeatures', 'nominalFeatures', 'paradigms', 'oldParadigm', 'oldNominalFeature', 'oldPronominalFeature'],

	data() {
		return {
			language:          new Datalist,
			pronominalFeature: new Datalist,
			nominalFeature:    new Datalist,
			paradigm:          new Datalist,
			mode:              new Datalist,
			parent:            new Datalist,
			translationRequired: true
		}
	},

	computed: {
		filteredParadigms() {
			return this.paradigms.filter(paradigm => {
				return paradigm.language_id == this.language.id;
			});
		}
	},

	watch: {
		language() {
			this.paradigm = new Datalist;
		},

		paradigm() {
			this.pronominalFeature = new Datalist;
			this.nominalFeature = new Datalist;

			if(this.paradigmHasPronominalFeature()) {
				this.$validator.attach('pronominalFeature', 'datalist_required|datalist_exists', { prettyName: 'pronominal feature' });
			} else {
				this.$validator.attach('pronominalFeature', '');
			}

			if(this.paradigmHasNominalFeature()) {
				this.$validator.attach('nominalFeature', 'datalist_required|datalist_exists', { prettyName: 'nominal feature' });
			} else {
				this.$validator.attach('nominalFeature', '');
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

		let temp = this.$refs.translation.value;
		this.morphemesUpdated(this.$refs.morphemes.tags);
		this.$refs.translation.value = temp;
	},

	methods: {
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

		getParadigm() {
			let id = this.paradigm.id;
			let lookup = null;

			if(id) {
				lookup = this.paradigms.find(paradigm => {
					return paradigm.id == id;
				});
			}

			return lookup;
		},

		morphemesUpdated(tags) {
			this.errors.clear('morphemes');
			console.log(tags);
			if(tags.length == 0 || !this.containsStem(tags)) {
				console.log('yup');
				this.translationRequired = true;

				if(tags.length == 0) {
					this.$validator.attach('translation', '');
				} else {
					this.$validator.attach('translation', 'required');
				}
			} else {
				console.log('nope');
				this.translationRequired = false;
				this.$validator.attach('translation', '');
				this.$refs.translation.value = '';
			}
		},

		containsStem(tags) {
			let stems = ['V', 'N'];

			let result = tags.find(item => {
				return stems.includes(item.name.replace(/[-*]/g, ''));
			});

			return typeof result !== 'undefined';
		}
	}
}
</script>
