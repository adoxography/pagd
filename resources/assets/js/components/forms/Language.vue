<script>
export default {
	props: ['oldErrors'],

	data() {
		return {
			group: {
				text: '',
				id: ''
			},
			parent: {
				text: '',
				id: ''
			},
		};
	},

	mounted() {
		if(this.oldErrors) {
			_.forEach(JSON.parse(this.oldErrors), (errors, field) => {
				field = field.split('_')[0];

				errors.forEach(message => {
					this.errors.add(field, message, 'database');
				});
			});
		}
	}
};
</script>