export default {
	props: ['oldErrors'],

	mounted() {
		if(this.oldErrors) {
      _.forEach(this.oldErrors, (errors, field) => {
        errors.forEach(message => this.$root.errors.add({field: field, msg: message}));
      });
    };
	}
}
