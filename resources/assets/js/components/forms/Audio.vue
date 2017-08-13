<script>
import Form from './Form';
import { Datalist } from '../../Datalist';

export default {
	extends: Form,

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
