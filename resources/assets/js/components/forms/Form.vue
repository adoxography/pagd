<template>
	<form class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<!-- Surface Form -->
			<div class="column is-half">
				<label for="surfaceForm" class="label">Surface Form</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.surfaceForm"
						   autocomplete="off"
						   name="surfaceForm"
						   required="required"
						   :disabled="loading"
						   placeholder="The form as written in a text"
						   :class="{'is-danger': form.errors.has('surfaceForm')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('surfaceForm')"
					  v-text="form.errors.get('surfaceForm')">
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

			<!-- Arguments -->
			<div class="column is-one-quarter">
				<label class="label">Arguments</label>
				<div class="arguments control is-grouped">
					<alg-datalist v-model="form.subject"
								  :list="args"
								  name="subject"
								  :disabled="loading"
								  @input="form.errors.clear('subject')"
								  :classes="{'is-danger': form.errors.has('subject')}">
					</alg-datalist>
					<alg-datalist v-model="form.primaryObject"
								  :list="args"
								  name="primaryObject"
								  :disabled="loading"
								  @input="form.errors.clear('primaryObject')"
								  :classes="{'is-danger': form.errors.has('primaryObject')}">
					</alg-datalist>
					<alg-datalist v-model="form.secondaryObject"
								  :list="args"
								  name="secondaryObject"
								  :disabled="loading"
								  @input="form.errors.clear('secondaryObject')"
								  :classes="{'is-danger': form.errors.has('secondaryObject')}">
					</alg-datalist>
				</div>
				<span class="help is-danger"
					  v-show="form.errors.has('subject')"
					  v-text="form.errors.get('subject')">
				</span>
				<span class="help is-danger"
					  v-show="form.errors.has('primaryObject')"
					  v-text="form.errors.get('primaryObject')">
				</span>
				<span class="help is-danger"
					  v-show="form.errors.has('secondaryObject')"
					  v-text="form.errors.get('secondaryObject')">
				</span>
			</div>

			<!-- Class -->
			<div class="column is-one-quarter">
				<label for="class" class="label">Class</label>
				<alg-datalist v-model="form.class"
							  :list="classes"
							  name="class"
							  :disabled="loading"
							  @input="form.errors.clear('class')"
							  :classes="{'is-danger': form.errors.has('class')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('class')"
					  v-text="form.errors.get('class')">
				</span>
			</div>

			<!-- Order -->
			<div class="column is-one-quarter">
				<label for="order" class="label">Order</label>
				<alg-datalist v-model="form.order"
							  :list="orders"
							  name="order"
							  :disabled="loading"
							  @input="form.errors.clear('order')"
							  :classes="{'is-danger': form.errors.has('order')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('order')"
					  v-text="form.errors.get('order')">
				</span>
			</div>

			<!-- Mode -->
			<div class="column is-one-quarter">
				<label for="mode" class="label">Mode</label>
				<alg-datalist v-model="form.mode"
							  :list="modes"
							  name="mode"
							  :disabled="loading"
							  @input="form.errors.clear('mode')"
							  :classes="{'is-danger': form.errors.has('mode')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('mode')"
					  v-text="form.errors.get('mode')">
				</span>
			</div>

			<!-- isAbsolute -->
			<div class="column is-one-quarter">
				<label for="isAbsolute" class="label">Abs/Obj</label>
				<div class="control">
					<span class="select">
						<select v-model="form.isAbsolute"
								name="isAbsolute"
								:disabled="loading">
							<option value="null">N/A</option>
							<option value="1">Absolute</option>
							<option value="2">Objective</option>
						</select>
					</span>
				</div>
			</div>

			<!-- isNegative -->
			<div class="column is-narrow">
				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.isNegative"
							   name="isNegative"
							   value="true"
							   :disabled="loading" />
						Negative
					</label>
				</p>
			</div>

			<!-- isDiminutive -->
			<div class="column is-narrow">
				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.isDiminutive"
							   name="isDiminutive"
							   value="true"
							   :disabled="loading" />
						Diminutive
					</label>
				</p>
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Morphology</h4>
		<div class="columns is-multiline">

			<!-- phoneticForm -->
			<div class="column is-half">
				<label for="phoneticForm" class="label">Phonemic Representation</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.phoneticForm"
						   autocomplete="off"
						   name="phoneticForm"
						   :disabled="loading"
						   placeholder="The Algonquianist phonemic representation (Leave blank if unknown or unclear)"
						   :class="{'is-danger': form.errors.has('phoneticForm')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('phoneticForm')"
					  v-text="form.errors.get('phoneticForm')">
				</span>
			</div>

			<!-- morphemicForm -->
			<div class="column is-half">
				<label for="morphemicForm" class="label">Morphemes</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.morphemicForm"
						   autocomplete="off"
						   name="morphemicForm"
						   :disabled="loading"
						   placeholder="The morphemes, separated by hyphens (Leave blank if unknown or unclear)"
						   :class="{'is-danger': form.errors.has('morphemicForm')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('morphemicForm')"
					  v-text="form.errors.get('morphemicForm')">
				</span>
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns is-multiline">

			<!-- Usage Notes -->
			<div class="column is-12">
				<label for="usageNotes" class="label">Usage Notes</label>
				<textarea v-model="form.usageNotes"
						  name="usageNotes"
						  class="textarea"
						  :disabled="loading"
						  placeholder="Enter notes about the usage of this form">
				</textarea>
			</div>

			<!-- Allomorphy Notes -->
			<div class="column is-12">
				<label for="allomorphyNotes" class="label">Allomorphy Notes</label>
				<textarea v-model="form.allomorphyNotes"
						  name="allomorphyNotes"
						  class="textarea"
						  :disabled="loading"
						  placeholder="Enter notes about this form's allomorphs">
				</textarea>
			</div>

			<!-- Parent -->
			<div class="column is-half">
				<label for="parent" class="label">Parent</label>
				<alg-ajaxlist v-model="form.parent"
							  uri="/autocomplete/formParents"
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
								:disabled="loading || !form.parent.id || !form.language.id">
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
						  name="historicalNotes"
						  class="textarea"
						  :disabled="loading"
						  placeholder="Enter historical information about this form">
				</textarea>
			</div>

			<!-- Comments -->
			<div class="column is-12">
				<label for="comments" class="label">Comments</label>
				<p class="control">
					<textarea v-model="form.comments"
							  name="comments"
							  class="textarea"
							  :disabled="loading"
							  placeholder="Comments here will not be available to the public">
					</textarea>
				</p>
			</div>
			<div class="column is-12">
				<label class="label">Flag</label>
				<p class="control">
					<label class="radio">
						<input type="radio"
							   v-model="form.flagLevel"
							   value="0" />
						None
					</label>
					<label class="radio">
						<input type="radio"
							   v-model="form.flagLevel"
							   value="1" />
						Just for me
					</label>
					<label class="radio">
						<input type="radio"
							   v-model="form.flagLevel"
							   value="2" />
						For me and administrators
					</label>
					<label class="radio">
						<input type="radio"
							   v-model="form.flagLevel"
							   value="3" />
						For everyone
					</label>
				</p>
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
	props: ['method', 'action', 'languages', 'args', 'classes', 'orders', 'modes', 'changeTypes', 'model', 'language'],

	data() {
		return {
			loading: false,
			changeTypeArray: [],
			form: new Form({
				surfaceForm: '',
				language: {
					text: '',
					id: ''
				},
				subject: {
					text: '',
					id: ''
				},
				primaryObject: {
					text: '',
					id: ''
				},
				secondaryObject: {
					text: '',
					id: ''
				},
				class: {
					text: 'AI',
					id: '1'
				},
				order: {
					text: 'Conjunct',
					id: '1'
				},
				mode: {
					text: 'Indicative',
					id: '1'
				},
				isAbsolute: null,
				isNegative: false,
				isDiminutive: false,
				phoneticForm: '',
				morphemicForm: '',
				usageNotes: '',
				allomorphyNotes: '',
				parent: {
					text: '',
					id: ''
				},
				changeType_id: null,
				historicalNotes: '',
				comments: '',
				flagLevel: '0',
				sources: []
			})
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/forms/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	},

	created() {
		this.changeTypeArray = JSON.parse(this.changeTypes);

		if(this.model) {
			let formArray = JSON.parse(this.model);
			let formType = formArray.form_type;

			this.form.surfaceForm     = formArray.surfaceForm.replace("*", "");
			this.form.isAbsolute      = formType.isAbsolute;
			this.form.isNegative      = formType.isNegative;
			this.form.isDiminutive    = formType.isDiminutive;
			this.form.phoneticForm    = formArray.phoneticForm;
			this.form.morphemicForm   = formArray.morphemicForm;
			this.form.usageNotes      = formArray.usageNotes;
			this.form.allomorphyNotes = formArray.allomorphyNotes;
			this.form.changeType_id   = formArray.changeType_id;
			this.form.historicalNotes = formArray.historicalNotes;
			this.form.comments        = formArray.comments;

			this.form.language = {
				text: formArray.language.name,
				id: formArray.language.id
			}
			this.form.subject = {
				text: formType.subject.name,
				id: formType.subject.id
			}
			this.form.class = {
				text: formType.form_class.name,
				id: formType.form_class.id
			}
			this.form.order = {
				text: formType.order.name,
				id: formType.order.id
			}
			this.form.mode = {
				text: formType.mode.name,
				id: formType.mode.id
			}

			if(formType.primary_object) {
				this.form.primaryObject = {
					text: formType.primary_object.name,
					id: formType.primary_object.id
				}
			}
			if(formType.secondary_object) {
				this.form.secondaryObject = {
					text: formType.secondary_object.name,
					id: formType.secondary_object.id
				}
			}
			if(formArray.parent) {
				this.form.parent = {
					text: formArray.parent.uniqueNameWithLanguage.replace("*", ""),
					id: formArray.parent.id
				}
			}
			if(formArray.sources) {
				formArray.sources.forEach(source => {
					this.form.sources.push({
						short: source.short,
						id: source.id,
						extraInfo: source.pivot.extraInfo
					});
				});
			}
		}
		else if (this.language) {
			let languageArray = JSON.parse(this.language);

			this.form.language = {
				text: languageArray.name,
				id: languageArray.id
			};
		}
	}
}
</script>