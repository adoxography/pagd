<template>
	<div class="field">
		<label class="label">Options</label>
		<div class="multi-select box">
			<div class="field">
				<p class="control">
					<input
						type="text"
						class="input"
						@keydown.enter="onEnter($event)"
						v-model="valueText"
						name="value-input"
						id="value-input"
						placeholder="Filter the options" />
				</p>
			</div>

			<div class="box" style="height: 200px; overflow: auto;">
				<p v-show="filteredValues.length == 0 && valueText.length > 0">
					<em>Press 'enter' to add '{{ valueText }}' as an option</em>
				</p>
				<div class="field" v-for="item in filteredValues">
					<p class="control">
						<label
							class="checkbox"
							:title="item.used ? 'This value cannot be removed because it is being used in a datapoint.' : ''">
							<input
								type="checkbox"
								name="values[]"
								:value="item.name"
								v-model="item.checked"
								:disabled="item.used">
							{{ item.name }}
						</label>
						<a
							class="delete is-small is-pulled-right"
							@click.prevent="removeValue(item.name)"
							v-show="item.id == 0">
						</a>
					</p>
				</div>
			</div>
			<span class="help is-danger"
				  v-show="selectedValues.length < 2">
				Variables must have at least two options
			</span>
		</div>

		<input v-for="value in usedValues" type="hidden" name="values[]" :value="value" />
	</div>
</template>

<script>
export default {
	props: ['list', 'initial'],

	data() {
		return {
			valueText: '',
			values: [],
			usedValues: []
		};
	},

	computed: {
		filteredValues() {
			let unchecked = [];
			let checked = [];

			this.values.forEach(value => {
				if(value.name.toLowerCase().includes(this.valueText.toLowerCase())) {

					if(value.checked) {
						checked.push(value);
					} else {
						unchecked.push(value);
					}
				}
			});

			return checked.concat(unchecked);
		},

		selectedValues() {
			let values = [];

			this.values.forEach(value => {
				if(value.checked) {
					values.unshift({
						id: value.id,
						name: value.name
					});
				}
			});

			return values;			
		}
	},

	created() {
		for(let i = 0; i < this.list.length; i++) {
			this.values.push({
				id: this.list[i].id,
				name: this.list[i].name,
				checked: false,
				used: false
			});
		}

		if(this.initial) {
			this.initial.forEach(value => {
				let index = this.selectItemInList(value.name, this.values);

				if(value.used) {
					this.values[index].used = true;
					this.usedValues.push(value.name);
				}
			});
		}
	},

	methods: {
		onEnter(event) {

			if(this.valueText.length > 0) {
				event.preventDefault();
				// this.errors.clear('values');

				if(this.selectItemInList(event.target.value, this.values) < 0) {
					this.values.push({
						id: 0,
						name: event.target.value,
						checked: true
					});
				}

				this.valueText = '';
			}
		},

		removeValue(name) {
			let index = this.values.findIndex(value => {
				return value.name == name;
			});

			this.values.splice(index, 1);
		},

		selectItemInList(lookup, array) {
			let found = -1;

			for(let i = 0; i < array.length && found < 0; i++) {
				if(array[i].name.toLowerCase() == lookup.toLowerCase()) {
					found = i;
					array[i].checked = true;
				}
			}

			return found;
		}
	}
}
</script>