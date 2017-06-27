<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	data() {
		return {
			parent: { text: '', id: '' },
			sources: []
		};
	}
};
</script>