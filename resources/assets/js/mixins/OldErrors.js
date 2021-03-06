export default {
	props: ['oldErrors'],

	mounted() {
		if(this.oldErrors) {
		    Vue.nextTick(() => {
                _.forEach(this.oldErrors, (errors, field) => {
                    field = field.split('_')[0];

                    errors.forEach(message => {
                        this.errors.add(field, message, 'database');
                    })
                });
            });
        }
	},

	methods: {
		validateBeforeSubmit(event) {
			this.$validator.validateAll();

			if(this.errors.any()) {
				event.preventDefault();
			}
		}
	}
}