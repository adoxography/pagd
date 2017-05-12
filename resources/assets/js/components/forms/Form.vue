<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	props: ['isEmpty'],

	data() {
		return {
			empty: false,
			language:        { text: '', id: '' },
			subject:         { text: '', id: '' },
			primaryObject:   { text: '', id: '' },
			secondaryObject: { text: '', id: '' },
			verbClass:       { text: '', id: '' },
			order:           { text: '', id: '' },
			mode:            { text: '', id: '' },
			parent:          { text: '', id: '' },
			sources: []
		};
	},

	created() {
		if(this.isEmpty) {
			this.empty = this.isEmpty;
		}
	}
}
</script>