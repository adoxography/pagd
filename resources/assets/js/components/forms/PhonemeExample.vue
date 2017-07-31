<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';
import { Datalist } from '../../Datalist.js';

export default {
	mixins: [oldErrors, oldSources],

	data() {
		return {
			language: new Datalist,
			sources: []
		}
	}
}
</script>