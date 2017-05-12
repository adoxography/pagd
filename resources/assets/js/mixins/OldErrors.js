export default {
	props: ['oldErrors'],

	mounted() {
		if(this.oldErrors) {
			_.forEach(this.oldErrors, (errors, field) => {
				field = field.split('_')[0];

				errors.forEach(message => {
					this.errors.add(field, message, 'database');
				});
			});
		}		
	}
}