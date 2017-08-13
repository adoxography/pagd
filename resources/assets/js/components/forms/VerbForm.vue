<script>
import Form from './Form'
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['isEmpty'],

	data() {
		return {
			empty: false,
			language:        new Datalist,
			subject:         new Datalist,
			primaryObject:   new Datalist,
			secondaryObject: new Datalist,
			verbClass:       new Datalist,
			order:           new Datalist,
			mode:            new Datalist,
			parent:          new Datalist
		};
	},

	created() {
		if(this.isEmpty) {
			this.empty = this.isEmpty;
		}
	}
}
</script>
