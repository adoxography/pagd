<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	data() {
		return {
			language: new Datalist
		}
	}
}
</script>
