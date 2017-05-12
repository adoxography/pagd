<script>
import oldErrors from '../../mixins/OldErrors';

export default {
	mixins: [oldErrors],

	data() {
		return {
			group: { text: '', id: '' },
			parent: { text: '', id: '' },
		};
	}
};
</script>