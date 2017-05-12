export default {
	props: ['oldSources'],

	created() {
		if(this.oldSources) {
			this.oldSources.forEach(source => {
				this.sources.push({
					short:     source.display ? source.display : source.short,
					id:        source.id,
					long:      source.long,
					extraInfo: source.pivot ? source.pivot.extraInfo : source.extraInfo
				});
			})
		}
	}
}