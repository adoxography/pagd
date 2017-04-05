<template>
	<form class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<!-- Name -->
			<div class="column is-half">
				<label for="name" class="label">Name</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.name"
						   autocomplete="off"
						   name="name"
						   id="name"
						   required="required"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('name')}"
						   placeholder="A few words to describe the rule" />
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
							  :classes="{'is-danger': form.errors.has('language')}"
							  placeholder="The language in which the rule occurs"
							  @input="onLanguageInput">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has
					  ('language')"
					  v-text="form.errors.get('language')">
				</span>
			</div>

			<!-- Abbreviation -->
			<div class="column is-half">
				<label for="abv" class="label">Abbreviation</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.abv"
						   autocomplete="off"
						   name="abv"
						   id="abv"
						   required="required"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('abv')}"
						   placeholder="The tag that will be used to reference the rule" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('abv')"
					  v-text="form.errors.get('abv')">
				</span>
			</div>

			<!-- Rule -->
			<div class="column is-half">
				<label for="rule" class="label">Rule</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.rule"
						   autocomplete="off"
						   name="rule"
						   id="rule"
						   required="required"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('rule')}"
						   placeholder="The rule itself" />
				</p>
			</div>
		</div>

		<!-- Sources -->
		<hr>
		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns">

			<!-- Public Comments -->
			<div class="column is-half">
				<label for="publicComments" class="label">Public Notes</label>
				<alg-textarea v-model="form.publicComments"
							  :disabled="loading"
							  name="publicComments"
							  placeholder="Comments here will be seen publicly">
				</alg-textarea>
			</div>

			<!-- Private Comments -->
			<div class="column is-half">
				<label for="privateComments" class="label">Private Comments</label>
				<alg-textarea v-model="form.privateComments"
							  :disabled="loading"
							  name="privateComments"
							  placeholder="Comments here will not be available to the public">
				</alg-textarea>
			</div>
		</div>

		<button type="submit" class="button is-primary" :class="{'is-loading': loading, 'disabled': form.errors.any() || loading }">Submit</button>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'languages', 'rule', 'language'],

	data() {
		return {
			form: new Form({
				name: '',
				abv: '',
				rule: '',
				language: {
					text: '',
					id: ''
				},
				publicComments: '',
				privateComments: '',
				sources: []
			}),

			loading: false
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/rules/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		},

		onLanguageInput() {
			this.form.errors.clear('abv');
			this.form.errors.clear('name');
		}
	},

	created() {
		if(this.rule) {
			let ruleArray = JSON.parse(this.rule);

			this.form.name            = ruleArray.name;
			this.form.abv             = ruleArray.abv;
			this.form.rule            = ruleArray.rule;
			this.form.publicComments  = ruleArray.publicComments;
			this.form.privateComments = ruleArray.privateComments;

			this.form.language = {
				text: ruleArray.language.name,
				id: ruleArray.language_id
			};

			if(ruleArray.sources) {
				ruleArray.sources.forEach(source => {
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
			};
		}
	}
}
</script>