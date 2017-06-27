<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	props: ['oldType'],

	data() {
		return {
			type: '',

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
	},

	watch: {
		language() {
			this.firstSegment =  { text: '', id: '' };
			this.secondSegment = { text: '', id: '' };
		}
	}
};
</script>