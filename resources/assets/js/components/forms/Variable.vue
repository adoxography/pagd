<template>
	<form
		class="box"
		@submit.prevent="onSubmit"
		@keydown="form.errors.clear($event.target.name)">
		<alg-tabs>
			<alg-tab name="Basic details" selected="selected">

				<div class="columns">
					<div class="column is-8">
						<div class="field">
							<label for="name" class="label">Name</label>
							<p class="control">
								<input
									type="text"
									class="input"
									v-model="form.name"
									name="name"
									id="name"
									:disabled="loading"
									autofocus="autofocus" />
							</p>
							<span class="help is-danger"
								  v-show="form.errors.has('name')"
								  v-text="form.errors.get('name')">
							</span>
						</div>

						<div class="field">
							<label for="type_id" class="label">Type</label>
							<p class="control">
								<span class="select">
									<select
										v-model="form.type_id"
										name="type_id"
										id="type_id"
										:disabled="loading"
										@input="form.errors.clear('type_id')">
										<option v-for="type in typeArray" :value="type.id">{{ type.name }}</option>
									</select>
								</span>
							</p>
							<span class="help is-danger"
								  v-show="form.errors.has('type_id')"
								  v-text="form.errors.get('type_id')">
							</span>
						</div>

						<div class="field">
							<label for="description" class="label">Description</label>
							<p class="control">
								<input
									type="text"
									class="input"
									v-model="form.description"
									name="description"
									id="description"
									:disabled="loading" />
							</p>
							<span class="help is-danger"
								  v-show="form.errors.has('description')"
								  v-text="form.errors.get('description')">
							</span>
						</div>
					</div>

					<div class="column">
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
									<p v-show="filteredValueArray.length == 0 && valueText.length > 0">
										<em>Press 'enter' to add '{{ valueText }}' as an option</em>
									</p>
									<div class="field" v-for="item in filteredValueArray">
										<p class="control">
											<label
												class="checkbox"
												:title="item.used ? 'This value cannot be removed because it is being used in a datapoint.' : ''">
												<input
													type="checkbox"
													v-model="item.checked"
													:disabled="loading || item.used">
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
						</div>
					</div>
				</div>

				<hr />
				<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>
			</alg-tab>

			<alg-tab name="Essay">
				<div class="field">
					<alg-textarea v-model="form.essay"
								  :disabled="loading"
								  name="essay"
								  height="500">
					</alg-textarea>
				</div>
				<br />
			</alg-tab>
		</alg-tabs>

		<div class="field">
			<button
				type="submit"
				class="button is-primary"
				:class="{'is-loading': loading, 'is-disabled': form.errors.any() || loading || selectedValues.length < 2 }">
					Submit
			</button>
		</div>
	</form>
</template>

<script>
export default {
	props: ['types', 'values', 'method', 'action', 'variable'],

	data() {
		return {
			form: new Form({
				name: '',
				type_id: '',
				essay: '',
				description: '',
				sources: [],
				values: []
			}),
			loading: false,
			typeArray: [],
			valueArray: [],
			valueText: ''
		}
	},

	computed: {
		filteredValueArray() {
			let output = [];

			this.valueArray.forEach(value => {
				if(value.name.toLowerCase().includes(this.valueText.toLowerCase())) {
					output.push(value);
				}
			});

			return output;
		},

		selectedValues() {
			let values = [];

			this.valueArray.forEach(value => {
				if(value.checked) {
					values.push({
						id: value.id,
						name: value.name
					});
				}
			});

			return values;			
		}
	},

	created() {
		this.typeArray  = JSON.parse(this.types);
		let valueArray = JSON.parse(this.values);

		for(let i = 0; i < valueArray.length; i++) {
			this.valueArray.push({
				id: valueArray[i].id,
				name: valueArray[i].name,
				checked: false,
				used: false
			});
		}

		if(this.variable) {
			let variableArray = JSON.parse(this.variable);

			this.form.name = variableArray.name;
			this.form.type_id = variableArray.type_id;
			this.form.description = variableArray.description;
			this.form.essay = variableArray.essay;

			variableArray.values.forEach(value => {
				let found = false;

				for(let i = 0; i < this.valueArray.length && !found; i++) {
					if(this.valueArray[i].id == value.id) {
						this.valueArray[i].checked = true;
						this.valueArray[i].used = value.used;
						found = true;
					}
				}
			});

			if(variableArray.sources) {
				variableArray.sources.forEach(source => {
					this.form.sources.push({
						short:     source.display,
						id:        source.id,
						long:      source.long,
						extraInfo: source.pivot.extraInfo
					});
				});
			}
		}
	},

	methods: {
		onEnter(event) {

			if(this.valueText.length > 0) {
				event.preventDefault();
				this.form.errors.clear('values');

				if(!this.selectItemInList(event.target.value, this.valueArray)) {
					this.valueArray.push({
						id: 0,
						name: event.target.value,
						checked: true
					});
				}

				this.valueText = '';
			}
		},

		removeValue(name) {
			let index = this.valueArray.findIndex(value => {
				return value.name == name;
			});

			this.valueArray.splice(index, 1);
		},

		selectItemInList(lookup, array) {
			let found = false;

			for(let i = 0; i < array.length && !found; i++) {
				if(array[i].name.toLowerCase() == lookup.toLowerCase()) {
					found = true;
					array[i].checked = true;
				}
			}

			return found;
		},

		onSubmit() {
			this.loading = true;
			this.form.values = this.selectedValues;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/variables/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	}
}
</script>