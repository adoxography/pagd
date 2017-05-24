<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	props: ['pronominalFeatures', 'nominalFeatures', 'paradigms', 'oldParadigm', 'oldNominalFeature', 'oldPronominalFeature'],

	data() {
		return {
			language:          { id: '', text: '' },
			pronominalFeature: { id: '', text: '' },
			nominalFeature:    { id: '', text: '' },
			paradigm:          { id: '', text: '' },
			mode:              { id: '', text: '' },
			parent:            { id: '', text: '' },
			sources: []
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
			this.paradigm = { id: '', text: '' };
		},

		paradigm() {
			this.pronominalFeature = { id: '', text: '' };
			this.nominalFeature = { id: '', text: '' };

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
		},
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
		}
	}
}
</script>