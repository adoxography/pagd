<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
	mixins: [oldErrors, oldSources],

	data() {
		return {
			language: { text: '', id: '' },
			form: { text: '', id: '', extra: '' },
			morphemicForm: '',
			sources: []
		};
	},

	watch: {
		language() {
			this.errors.clear('language');
			this.morphemicForm = '';
			this.form = { text: '', id: ''};
		},

		form() {
			Vue.nextTick(() => {
				if(this.$refs.form.showCheck) {
					if(this.form.extra) {
						this.morphemicForm = this.form.extra;
						this.$refs.morphemicForm.focus();
					}
					else {
						this.morphemicForm = "None supplied in form";
					}
				}
			});			
		}
	}

}
</script>