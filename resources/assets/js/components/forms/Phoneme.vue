<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	props: ['oldType', 'oldIsArchiphoneme'],

	data() {
		return {
			type: '',
			isArchiphoneme: false,
			requiredFields: ['place', 'manner', 'height', 'backness'],

			language: { text: '', id: '' },

			// Consonant features
			place:   { text: '', id: '' },
			manner:  { text: '', id: '' },
			voicing: { text: '', id: '' },

			// Vowel features
			height:   { text: '', id: ''},
			backness: { text: '', id: ''},
			length:   { text: '', id: ''},

			// Cluster features
			firstSegment:  { text: '', id: ''},
			secondSegment: { text: '', id: ''},

			sources: []
		};
	},

	created() {
		if(this.oldType) {
			this.type = this.oldType;
		}

		if(this.oldIsArchiphoneme) {
			this.isArchiphoneme = this.oldIsArchiphoneme;
		}

		let dict = {
			en: {
				custom: {
					phonemeable_type: {
						not_in: 'Clusters cannot be archiphonemes'
					}
				}
			}
		}

		this.$validator.updateDictionary(dict);
	},

	watch: {
		language() {
			this.firstSegment =  { text: '', id: '' };
			this.secondSegment = { text: '', id: '' };
		},

		isArchiphoneme($value) {
			let validators = $value ? 'datalist_exists' : 'datalist_required|datalist_exists';

			this.requiredFields.forEach(field => {
				this.$validator.attach(field, validators);
			});

			this.$validator.attach('archiphonemeDescription', $value ? 'required' : '', { prettyName: 'description' });
			this.$validator.attach('phonemeable_type', 'required' + ($value ? '|not_in:clusterTypes' : ''), { prettyName: 'type' });
		}
	}
};
</script>