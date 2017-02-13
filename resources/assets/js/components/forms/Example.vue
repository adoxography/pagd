<template>
	<form class="box">
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
							  :disabled="loading"
							  @input="form.errors.clear('language')"
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
						   required="required"
						   :disabled="loading || !form.language.id || !form.form.id"
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
						   :disabled="loading" />
				</p>
			</div>

			<!-- Notes -->
			<div class="column is-12">
				<label for="notes" class="label">Public Notes</label>
				<div class="control">
					<textarea class="textarea"
							  name="notes"
							  v-model="form.notes"
							  :disabled="loading">
					</textarea>
				</div>
			</div>

			<!-- Comments -->
			<div class="column is-12">
				<label for="comments" class="label">Private Comments</label>
				<div class="control">
					<textarea class="textarea"
							  name="comments"
							  v-model="form.comments"
							  :disabled="loading">
					</textarea>
				</div>
			</div>
		</div>

		<hr>
		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<button class="button" type="submit" :disabled="form.errors.any() || loading">Submit</button>
		<span class="icon">
			<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
		</span>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'languages'],

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
				translation: ''
			})
		};
	},

	methods: {
		onNewForm(event) {
			Vue.nextTick(() => {
				if(this.$refs.formInput.showCheck) {
					this.form.morphemicForm = this.form.form.extra;
					this.$refs.morphemicForm.focus();
				}
			});
		}
	}

}
</script>