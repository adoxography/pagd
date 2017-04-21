<template>
	<form
		class="box"
		@submit.prevent="onSubmit"
		@keydown="form.errors.clear($event.target.name)">

		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns">
			<div class="column">
				<label for="language" class="label">Language</label>
				<alg-datalist v-model="form.language"
							  :list="languages"
							  name="language"
							  id="language"
							  :disabled="loading"
							  @input="form.errors.clear('language')"
							  :classes="{'is-danger': form.errors.has('language')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('language')"
					  v-text="form.errors.get('language')">
				</span>
			</div>

			<div class="column">
				<label for="variable" class="label">Variable</label>
				<alg-datalist v-model="form.variable"
							  :list="variables"
							  name="variable"
							  id="variable"
							  :disabled="loading"
							  @input="form.errors.clear('variable')"
							  :classes="{'is-danger': form.errors.has('variable')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('variable')"
					  v-text="form.errors.get('variable')">
				</span>
			</div>

			<div class="column">
				<label for="value_id" class="label">Value</label>
				<p class="control">
					<span class="select">
						<select
							v-model="form.value_id"
							name="value_id"
							id="value_id"
							:disabled="loading"
							@input="form.errors.clear('value_id')">
							<option v-for="value in currentValues" :value="value.id">{{ value.name }}</option>
						</select>
					</span>
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('value_id')"
					  v-text="form.errors.get('value_id')">
				</span>
			</div>
		</div>

		<hr />
		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="field">
			<alg-textarea v-model="form.notes"
						  :disabled="loading"
						  name="notes">
			</alg-textarea>
		</div>

		<div class="field">
			<button type="submit" class="button is-primary" :class="{'is-loading': loading, 'disabled': form.errors.any() || loading }">Submit</button>
		</div>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'languages', 'variables', 'datapoint', 'language', 'variable'],

	data() {
		return {
			form: new Form({
				language: {
					text: '',
					id: ''
				},
				variable: {
					text: '',
					id: ''
				},
				value_id: '',
				notes: '',
				sources: []
			}),
			loading: false,
			variableArray: []
		};
	},

	computed: {
		currentValues() {
			let variable = this.variableArray.find(variable => {
				return variable.id == this.form.variable.id;
			});

			if(variable) {
				return variable.values;
			} else {
				return [];
			}
		}
	},

	created() {
		this.variableArray = JSON.parse(this.variables);

		if(this.datapoint) {
			let datapointArray = JSON.parse(this.datapoint);

			this.form.language = {
				text: datapointArray.language.name,
				id: datapointArray.language_id
			};

			this.form.variable = {
				text: datapointArray.variable.name,
				id: datapointArray.variable_id
			};

			this.form.value_id = datapointArray.value_id;
			this.form.notes = datapointArray.notes;

			if(datapointArray.sources) {
				datapointArray.sources.forEach(source => {
					this.form.sources.push({
						short:     source.display,
						id:        source.id,
						long:      source.long,
						extraInfo: source.pivot.extraInfo
					});
				});
			}
		}

		if(this.language) {
			let languageArray = JSON.parse(this.language);
			this.form.language = {
				text: languageArray.name,
				id: languageArray.id
			};
		}

		if(this.variable) {
			let variableArray = JSON.parse(this.variable);
			this.form.variable = {
				text: variableArray.name,
				id: variableArray.id
			};
		}
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/datapoints/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	}
}
</script>