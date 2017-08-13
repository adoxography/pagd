<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['method', 'action', 'variables', 'initialValue'],

	data() {
		return {
			language: new Datalist,
			variable: new Datalist,
			selectedValue: ''
		};
	},

	computed: {
		values() {
			let variable = this.variables.find(variable => {
				return variable.id == this.variable.id;
			});

			if(variable) {
				return variable.values;
			} else {
				return [];
			}
		}
	},

	created() {
		if(this.initialValue) {
			this.selectedValue = this.initialValue;
		}
	}
}
</script>
