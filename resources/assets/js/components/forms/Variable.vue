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
											placeholder="New option" />
									</p>
								</div>

								<div class="box" style="height: 200px; overflow: auto;">
									<div class="field" v-for="(item, index) in valueArray">
										<p class="control">
											<label class="checkbox">
												<input type="checkbox" value="item.id" v-model="item.checked">
												{{ item.name }}
											</label>
											<button class="delete is-small is-pulled-right" @click.prevent="removeValue(index)" v-show="item.id == 0"></button>
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
				<label for="essay" class="label">Essay</label>
				<alg-textarea v-model="form.essay"
							  :disabled="loading"
							  name="essay">
				</alg-textarea>
			</alg-tab>
		</alg-tabs>

		<button
			type="submit"
			class="button is-primary"
			:class="{'is-loading': loading, 'is-disabled': form.errors.any() || loading || selectedValues.length < 2 }">
				Submit
		</button>
	</form>
</template>

<script>
export default {
	props: ['types', 'values', 'method', 'action'],

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
				checked: false
			});
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

		removeValue(index) {
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