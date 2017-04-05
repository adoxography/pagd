<template>
	<form class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">

		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<!-- Example Name -->
			<div class="column is-half">
				<label for="name" class="label">Surface Form</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.name"
						   autocomplete="off"
						   name="name"
						   id="name"
						   required="required"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('name')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('name')"
					  v-text="form.errors.get('name')">
				</span>
			</div>

			<!-- Language -->
			<div class="column is-half">
				<label for="language" class="label">Language</label>
				<alg-datalist v-model="form.language"
							  :list="languages"
							  name="language"
							  id="language"
							  :disabled="loading"
							  @input="onNewLanguage"
							  :classes="{'is-danger': form.errors.has('language')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('language')"
					  v-text="form.errors.get('language')">
				</span>
			</div>

			<!-- Form -->
			<div class="column is-half">
				<label for="form" class="label">Form</label>
				<alg-ajaxlist v-model="form.form"
							  uri="/autocomplete/forms"
							  :with="form.language.id"
							  :disabled="loading || !form.language.id"
							  name="form"
							  id="form"
							  placeholder="Make sure to select the language first"
							  :classes="{'is-danger': form.errors.has('form')}"
							  @input="onNewForm"
							  ref="formInput">
				</alg-ajaxlist>
				<span class="help is-danger"
					  v-show="form.errors.has('form')"
					  v-text="form.errors.get('form')">
				</span>
			</div>

			<!-- Morphemic form -->
			<div class="column is-half">
				<label for="morphemicForm" class="label">Morphemic Form</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.morphemicForm"
						   autocomplete="off"
						   name="morphemicForm"
						   id="morphemicForm"
						   required="required"
						   :disabled="loading || !form.language.id || !form.form.extra"
						   :class="{'is-danger': form.errors.has('morphemicForm')}"
						   ref="morphemicForm" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('morphemicForm')"
					  v-text="form.errors.get('morphemicForm')">
				</span>
			</div>

			<!-- Translation -->
			<div class="column is-12">
				<label for="translation" class="label">Translation</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.translation"
						   autocomplete="off"
						   name="translation"
						   id="translation"
						   required="required"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('translation') }" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('translation')"
					  v-text="form.errors.get('translation')">
				</span>
			</div>
		</div>

		<hr>
		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns">
			<!-- Notes -->
			<div class="column is-half">
				<label for="notes" class="label">Public Notes</label>
				<alg-textarea v-model="form.notes"
							  :disabled="loading"
							  name="notes"
							  placeholder="Comments here will be seen publicly">
				</alg-textarea>
			</div>

			<!-- Comments -->
			<div class="column is-half">
				<label for="comments" class="label">Private Comments</label>
				<alg-textarea v-model="form.comments"
							  :disabled="loading"
							  name="comments"
							  placeholder="Comments here will not be available to the public">
				</alg-textarea>
			</div>
		</div>

		<button type="submit" class="button is-primary" :class="{'is-loading': loading, 'disabled': form.errors.any() || loading }">Submit</button>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'languages', 'example', 'language', 'presetForm'],

	data() {
		return {
			loading: false,
			form: new Form({
				name: '',
				language: {
					text: '',
					id: ''
				},
				form: {
					text: '',
					id: '',
					extra: ''
				},
				morphemicForm: '',
				translation: '',
				comments: '',
				notes: '',
				sources: []
			})
		};
	},

	methods: {
		onNewForm(event) {
			Vue.nextTick(() => {
				if(this.$refs.formInput.showCheck) {
					if(this.form.form.extra) {
						this.form.morphemicForm = this.form.form.extra;
						this.$refs.morphemicForm.focus();
					}
					else {
						this.form.morphemicForm = "None supplied in form";
					}
				}
			});
		},

		onNewLanguage() {
			// Clear out the language errors
			this.form.errors.clear('language');

			// Reset the form and morphemes
			this.form.morphemicForm = '';
			this.form.form = {
				text: '',
				id: ''
			};
		},

		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/examples/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	},

	created() {
		if(this.example) {
			let exampleArray = JSON.parse(this.example);

			this.form.name = exampleArray.name.replace("*", "");
			this.form.morphemicForm = exampleArray.morphemicForm;
			this.form.translation = exampleArray.translation;
			this.form.comments = exampleArray.comments;
			this.form.notes = exampleArray.notes;

			this.form.language = {
				text: exampleArray.form.language.name,
				id: exampleArray.form.language.id
			};
			this.form.form = {
				text: exampleArray.form.uniqueName,
				id: exampleArray.form_id,
				extra: exampleArray.form.morphemicForm
			};

			if(exampleArray.sources) {
				exampleArray.sources.forEach(source => {
					this.form.sources.push({
						short:     source.display,
						id:        source.id,
						long:      source.long,
						extraInfo: source.pivot.extraInfo
					});
				});
			}
		}
		else if(this.language) {
			let languageArray = JSON.parse(this.language);

			this.form.language = {
				text: languageArray.name,
				id: languageArray.id
			}
		}
		else if(this.presetForm) {
			let formArray = JSON.parse(this.presetForm);

			this.form.language = {
				text: formArray.language.name,
				id: formArray.language_id
			};
			this.form.form = {
				text: formArray.uniqueName,
				id: formArray.id,
				extra: formArray.morphemicForm
			};
			this.form.morphemicForm = formArray.morphemicForm;
		}
	}

}
</script>