<script>
export default {
	props: ['method', 'action', 'oldErrors', 'oldSources'],

	data() {
		return {
			empty: false,
			language:        { text: '', id: '' },
			subject:         { text: '', id: '' },
			primaryObject:   { text: '', id: '' },
			secondaryObject: { text: '', id: '' },
			verbClass:       { text: '', id: '' },
			order:           { text: '', id: '' },
			mode:            { text: '', id: '' },
			parent:          { text: '', id: '' },
			sources: []
		};
	},

	created() {
		if(this.oldSources) {
			JSON.parse(this.oldSources).forEach(source => {
				this.sources.push({
					short:     source.display,
					id:        source.id,
					long:      source.long,
					extraInfo: source.pivot.extraInfo
				});
			})
		}
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
}
</script>