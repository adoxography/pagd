<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['oldMorphemes', 'oldForm'],

	data() {
		return {
			language: new Datalist,
			form:     new Datalist,
			parent:   new Datalist,
			morphemes: []
		};
	},

	methods: {
		onLanguageInput() {
			this.form.reset();
			this.morphemes = [];
			this.errors.clear('language');
		},

		onFormInput() {
			if(this.form.extra) {
				this.morphemes = Array.isArray(this.form.extra) ? this.form.extra : JSON.parse(this.form.extra);
			}
		}
	},

	mounted() {
		if (this.oldForm) {
			this.form = new Datalist(this.oldForm.text, this.oldForm.id, this.oldForm.extra);
		}

		if (this.oldMorphemes) {
			this.morphemes = this.oldMorphemes;
		}
	}
}
</script>
