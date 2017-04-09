<template>
	<form method="post"
		  :action="action"
		  class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<!-- Morpheme Name -->
			<div class="column is-half">
				<label for="name" class="label">Morpheme</label>
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
							  required="required"
							  :disabled="loading"
							  @input="form.errors.clear('language')"
							  :classes="{'is-danger': form.errors.has('language')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('language')"
					  v-text="form.errors.get('language')">
				</span>
			</div>

			<!-- Gloss -->
			<div class="column is-half">
				<label for="glosses" class="label">Gloss</label>
				<alg-tag-input v-model="form.glosses"
							   :list="glosses"
							   name="gloss"
							   id="gloss"
							   :disabled="loading"
							   @input="form.errors.clear('gloss')"
							   placeholder="Select glosses from the list or type your own and press 'enter'"
							   :classes="{'is-danger': form.errors.has('gloss')}" >
				</alg-tag-input>
				<span class="help is-danger"
					  v-show="form.errors.has('gloss')"
					  v-text="form.errors.get('gloss')">
				</span>				
			</div>

			<!-- Slot -->
			<div class="column is-half">
				<label for="slot" class="label">Slot</label>
				<alg-datalist v-model="form.slot"
							  :list="slots"
							  name="slot"
							  id="slot"
							  required="required"
							  :disabled="loading"
							  @input="form.errors.clear('slot')"
							  :classes="{'is-danger': form.errors.has('slot')}"></alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('slot')"
					  v-text="form.errors.get('slot')">
				</span>
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Lineage</h4>
		<div class="columns">

			<!-- Parent -->
			<div class="column is-half">
				<label for="parent" class="label">Parent</label>
				<alg-ajaxlist v-model="form.parent"
							  uri="/autocomplete/morphemeParents"
							  :with="form.language.id"
							  :disabled="loading || !form.language.id"
							  name="parent"
							  id="parent"
							  placeholder="Make sure to select the language first"
							  :classes="{'is-danger': form.errors.has('parent')}">
				</alg-ajaxlist>
				<span class="help is-danger"
					  v-show="form.errors.has('parent')"
					  v-text="form.errors.get('parent')">
				</span>
			</div>

			<!-- Change Type -->
			<div class="column is-half">
				<label for="changeType_id" class="label">Change Type</label>
				<div class="control">
					<span class="select">
						<select v-model="form.changeType_id"
								name="changeType_id"
								id="changeType_id"
								:disabled="loading">
							<option v-for="changeType in changeTypeArray"
									:value="changeType.id"
									v-text="changeType.name">
							</option>
						</select>
					</span>
				</div>
			</div>
		</div>

		<hr>
		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns is-multiline">
			<!-- Allomorphy Notes -->
			<div class="column is-half">
				<label for="allomorphyNotes" class="label">Allomorphy Notes</label>
				<alg-textarea v-model="form.allomorphyNotes"
							  :disabled="loading"
							  name="allomorphyNotes"
							  placeholder="Enter notes about this morpheme's allomorphs">
				</alg-textarea>
			</div>

			<!-- Historical Notes -->
			<div class="column is-half">
				<label for="historicalNotes" class="label">Historical Notes</label>
				<alg-textarea v-model="form.historicalNotes"
							  :disabled="loading"
							  name="historicalNotes"
							  placeholder="Enter historical information about this morpheme">
				</alg-textarea>
			</div>

			<!-- Private Comments -->
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
	props: ['method', 'action', 'languages', 'glosses', 'slots', 'changeTypes', 'morpheme', 'language', 'prefill'],

	data() {
		return {
			loading: false,
			changeTypeArray: [],
			form: new Form({
				name: '',
				language: {
					text: "",
					id: ''
				},
				glosses: [],
				gloss: this.gloss,
				slot: {
					text: "",
					id: ""
				},
				allomorphyNotes: '',
				parent: {
					text: '',
					id: ''
				},
				changeType_id: null,
				historicalNotes: '',
				comments: '',
				sources: []
			})
		};
	},

	computed: {
		gloss() {
			let output = "";

			this.form.glosses.forEach(gloss => {
				if(output.length > 0) {
					output += ".";
				}

				output += gloss.text;
			});

			return output;
		}
	},

	created() {
		this.changeTypeArray = JSON.parse(this.changeTypes);

		if(this.morpheme) {
			// Load in the data from the morpheme
			let morphemeArray = JSON.parse(this.morpheme);

			// Assign root defaults
			this.form.name            = morphemeArray.name.replace("*", "");
			this.form.allomorphyNotes = morphemeArray.allomorphyNotes;
			this.form.changeType_id   = morphemeArray.changeType_id;
			this.form.historicalNotes = morphemeArray.historicalNotes;
			this.form.comments        = morphemeArray.comments;

			// Assign required foreign defaults
			this.form.language = {
				text: morphemeArray.language.name,
				id: morphemeArray.language_id
			};
			this.form.slot = {
				text: morphemeArray.slot.abv,
				id: morphemeArray.slot_id
			};

			morphemeArray.gloss.split('.').forEach(gloss => {
				this.form.glosses.push({
					id: 0,
					text: gloss
				});
			});

			// Assign nullable foreign defaults
			if(morphemeArray.translation) {
				this.form.gloss.text += " ("+morphemeArray.translation+")";
			}

			if(morphemeArray.parent) {
				this.form.parent = {
					text: morphemeArray.parent.uniqueNameWithLanguage.replace("*", ""),
					id: morphemeArray.parent.id
				};
			}
			if(morphemeArray.sources) {
				morphemeArray.sources.forEach(source => {
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
			// Load in the data from the language
			let languageArray = JSON.parse(this.language);

			this.form.language = {
				text: languageArray.name,
				id: languageArray.id
			}
		}
		else if(this.prefill) {
			let prefillArray = JSON.parse(this.prefill);

			_.forEach(prefillArray, (value, key) => {
				this.form[key] = value;
			});
		}
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.gloss = this.gloss;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/morphemes/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	}
};
</script>