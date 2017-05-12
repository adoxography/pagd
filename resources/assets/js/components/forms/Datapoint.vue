<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],
	
	props: ['method', 'action', 'variables', 'initialValue'],

	data() {
		return {
			language: { text: '', id: '' },
			variable: { text: '', id: '' },
			sources: [],
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