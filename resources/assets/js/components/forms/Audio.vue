<script>
import oldErrors from '../../mixins/OldErrors';
import { Datalist } from '../../Datalist';

export default {
	mixins: [oldErrors],

	data() {
		return {
			language: new Datalist
		}
	},

	methods: {
		onUpload(event) {
			this.$refs.name.value = event.name;
		}
	}
}
</script>