<template>
	<form method="post"
		  :action="action"
		  class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<input type="hidden"
			   name="_method"
			   :value="method">
		<div class="columns is-multiline">

			<!-- Morpheme Name -->
			<div class="column is-one-quarter">
				<label for="name" class="label">Morpheme</label>
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

			<!-- Initial Changed Morpheme -->
			<div class="column is-one-quarter">
				<label for="alternateName" class="label">Initial Changed Morpheme</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.alternateName"
						   autocomplete="off"
						   name="alternateName"
						   :disabled="loading"
						   placeholder="leave blank if N/A"
						   :class="{'is-danger': form.errors.has('alternateName')}">
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('alternateName')"
					  v-text="form.errors.get('alternateName')">
				</span>				
			</div>

			<!-- Language -->
			<div class="column is-half">
				<label for="language" class="label">Language</label>
				<alg-datalist v-model="form.language"
							  :list="languages"
							  name="language"
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
				<label for="gloss" class="label">Gloss</label>
				<alg-datalist v-model="form.gloss"
							  :list="glosses"
							  name="gloss"
							  required="required"
							  :disabled="loading"
							  @input="form.errors.clear('gloss')"
							  placeholder="Select a gloss from the list or type a new one in 'ABV (Full Name)' format"
							  :classes="{'is-danger': form.errors.has('gloss')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('gloss')"
					  v-text="form.errors.get('gloss')">
				</span>				
			</div>

			<!-- Slot -->
			<div class="column is-half">
				<label for="slot" class="label">Slot</label>
				<alg-datalist v-model="form.slot"
							  :list="slots" name="slot"
							  required="required"
							  :disabled="loading"
							  @input="form.errors.clear('slot')"
							  :classes="{'is-danger': form.errors.has('slot')}"></alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('slot')"
					  v-text="form.errors.get('slot')">
				</span>
			</div>

			<!-- Allomorphy Notes -->
			<div class="column is-12">
				<label for="allomorphyNotes" class="label">Allomorphy Notes</label>
				<textarea v-model="form.allomorphyNotes"
						  class="textarea"
						  name="allomorphyNotes"
						  :disabled="loading"
						  placeholder="Enter notes about this morpheme's allomorphs" >
				</textarea>
			</div>

			<!-- Parent -->
			<div class="column is-half">
				<label for="parent" class="label">Parent</label>
				<alg-ajaxlist v-model="form.parent"
							  uri="/autocomplete/morphemeParents"
							  :with="form.language.id"
							  :disabled="loading || !form.language.id"
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
								:disabled="loading">
							<option v-for="changeType in changeTypeArray"
									:value="changeType.id"
									v-text="changeType.name">
							</option>
						</select>
					</span>
				</div>
			</div>

			<!-- Historical Notes -->
			<div class="column is-12">
				<label for="historicalNotes" class="label">Historical Notes</label>
				<textarea v-model="form.historicalNotes"
						  class="textarea"
						  name="historicalNotes"
						  :disabled="loading"
						  placeholder="Enter historical information about this morpheme">
				</textarea>
			</div>

			<!-- Historical Notes -->
			<div class="column is-12">
				<label for="comments" class="label">Private Comments</label>
				<textarea v-model="form.comments"
						  class="textarea"
						  name="comments"
						  :disabled="loading"
						  placeholder="Comments here will not be available to the public">
				</textarea>
			</div>
		</div>

		<alg-sources v-model="form.sources" :disabled="loading"></alg-sources>

		<button class="button" type="submit" :disabled="form.errors.any() || loading">Submit</button>
		<span class="icon">
			<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
		</span>
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
				alternateName: '',
				gloss: {
					text: "",
					id: ""
				},
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

	created() {
		this.changeTypeArray = JSON.parse(this.changeTypes);

		if(this.morpheme) {
			// Load in the data from the morpheme
			let morphemeArray = JSON.parse(this.morpheme);

			// Assign root defaults
			this.form.name            = morphemeArray.name.replace("*", "");
			this.form.alternateName   = morphemeArray.alternateName;
			this.form.allomorphyNotes = morphemeArray.allomorphyNotes;
			this.form.changeType_id   = morphemeArray.changeType_id;
			this.form.historicalNotes = morphemeArray.historicalNotes;

			// Assign required foreign defaults
			this.form.language = {
				text: morphemeArray.language.name,
				id: morphemeArray.language_id
			};
			this.form.gloss = {
				text: morphemeArray.gloss.abv,
				id: morphemeArray.gloss_id
			};
			this.form.slot = {
				text: morphemeArray.slot.abv,
				id: morphemeArray.slot_id
			};

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
						short:     source.short,
						id:        source.id,
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