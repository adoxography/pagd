<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	data() {
		return {
			language: { text: '', id: '' },
			slot:     { text: '', id: '' },
			parent:   { text: '', id: '' },
			glosses: [],
			sources: []
		};
	}
};
</script>