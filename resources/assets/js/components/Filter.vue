<script>
class Filter {
	constructor(name, value, operator) {
		this.keys = name.split('.');
		this.operator = operator;

		if(typeof value === 'string') {
			this.value = value.toLowerCase();
		} else {
			this.value = value;
		}
	}

	allows(item) {
		let itemValue = this.getValue(item);
		let rc = false;

		if(!this.value) {
			rc = true;
		} else if(itemValue === null) {
			rc = false;
		} else if(this.value == 'null') {
			return typeof itemValue == 'undefined';
		} else if(this.operator == 'like') {
			if(itemValue.toLowerCase().includes(this.value)) {
				rc = true;
			}
		} else if(itemValue == this.value) {
			rc = true;
		}

		return rc;
	}

	update(newValue) {
		this.value = newValue;
	}

	getValue(item) {
		let found = true;

		for(let i = 0; i < this.keys.length && found; i++) {
			let key = this.keys[i];

			if(item.hasOwnProperty(key)) {
				item = item[key];
			} else {
				item = null;
				found = false;
			}
		}

		return item;
	}
}

export default {
	props: ["lists"],

	data() {
		return {
			filteredLists: [],
			filters: {}
		};
	},

	created() {
		this.filteredLists = this.lists;
	},

	methods: {
		onInput(event) {
			let name = event.target.name;
			let value = event.target.value;
			let operator = event.target.dataset.operator;

			if(this.filters[name]) {
				this.filters[name].update(value);
			} else {
				this.filters[name] = new Filter(name, value, operator);
			}

			this.filter();
		},

		filter() {
			let tempLists = {};

			_.each(this.lists, (list, key) => {

				if(Array.isArray(list)) {
					let tempList = [];

					list.forEach(item => {
						if (!this.isFiltered(item)) {
							tempList.push(item);
						}
					});

					tempLists[key] = tempList;
				}
			});

			this.filteredLists = tempLists;
		},

		isFiltered(item) {
			let rc = false;

			_.forEach(this.filters, filter => {
				if (!filter.allows(item)) {
					rc = true;
					return false;
				}				
			});

			return rc;
		}
	}
}
</script>