<template>
	<div class="alg-filter-list">
		<div class="control is-horizontal">
			<div class="control-label">
				<label class="label">Slot</label>
			</div>
			<div class="control">
				<span class="select is-fullwidth">
					<select v-model="selected" @change="filter">
						<option value="">All</option>
						<option v-for="option in parsedFilterOptions" :value="option.id">{{ option.abv }}</option>
					</select>
				</span>
			</div>
		</div>
		<alg-paginated-list :list="filteredList" ref="pages"></alg-paginated-list>
	</div>
</template>

<script>
	export default {
		props: ['list', 'filteroptions'],

		data() {
			return {
				parsedList: [],
				parsedFilterOptions: [],
				filteredList: [],
				selected: ''
			};
		},

		created() {
			this.parsedList = JSON.parse(this.list);
			this.parsedFilterOptions = JSON.parse(this.filteroptions);

			this.filteredList = this.parsedList;
		},

		methods: {
			filter() {
				// console.log(this.$refs.pages);
				this.$refs.pages.selected = 0;

				if(this.selected == '') {
					this.filteredList = this.parsedList;
				}
				else {
					this.filteredList = [];

					this.parsedList.forEach(item => {
						if(item.slot_id == this.selected) {
							this.filteredList.push(item);
						}
					});
				}
			}
		}
	}
</script>