<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	data() {
		return {
			language: new Datalist,
			parent:   new Datalist,
			reflex:   new Datalist,
            deleted: false
		};
	},

    created() {
        this.deleted = this.oldDeleted == true
    }
};
</script>
