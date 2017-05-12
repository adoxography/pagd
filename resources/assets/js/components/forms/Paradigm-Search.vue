<template>
	<alg-tabs @tabChanged="onTabChanged($event)" :active="activeTab">
		<alg-tab name="Basic">
			<alg-basic-paradigm-search :languages="languages" ref="Basic">
			</alg-basic-paradigm-search>
		</alg-tab>
		<alg-tab name="Advanced">
			<alg-advanced-paradigm-search
				:orders="orders"
				:modes="modes"
				:languages="languages"
				:preset="preset"
				ref="Advanced"
			></alg-advanced-paradigm-search>
		</alg-tab>
	</alg-tabs>
</template>

<script>
export default {
	props: ['languages', 'orders', 'modes', 'preset', 'active'],

	data() {
		return {
			activeTab: ''
		};
	},

	methods: {
		onTabChanged(searchName) {
			let oldSearchName;
			let oldSearch;
			let newSearch;

			// Figure out which searches are which
			if(searchName === 'Basic') {
				oldSearchName = 'Advanced';
			}
			else {
				oldSearchName = 'Basic';
			}

			// Recall the searches
			oldSearch = this.$refs[oldSearchName];
			newSearch = this.$refs[searchName];

			// Load the data from the old search into the new one
			newSearch.importData(oldSearch.getData());
		}
	},

	created() {
		if(this.active) {
			this.activeTab = this.active;
		}
		else {
			this.activeTab = 'Basic';
		}
	}
}
</script>