<template>
	<form class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<div class="column is-12">
				<p class="control">
					<label class="radio">
						<input type="radio"
							   v-model="form.empty"
							   :value="false" />
						Form exists
					</label>
					<label class="radio">
						<input type="radio"
							   v-model="form.empty"
							   :value="true" />
						Form does not exist
					</label>
				</p>
			</div>

			<!-- Surface Form -->
			<div class="column is-half">
				<label for="surfaceForm" class="label">Surface Form</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.surfaceForm"
						   autocomplete="off"
						   name="surfaceForm"
						   id="surfaceForm"
						   :disabled="loading || form.empty"
						   placeholder="The form as written in a text"
						   :class="{'is-danger': form.errors.has('surfaceForm')}"
						   autofocus="autofocus" />
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

			<!-- Arguments -->
			<div class="column is-one-quarter">
				<label for="subject" class="label">Arguments</label>
				<div class="arguments field is-grouped">
					<alg-datalist v-model="form.subject"
								  :list="args"
								  name="subject"
								  id="subject"
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
							  id="class"
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
							  id="order"
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
							  id="mode"
							  :disabled="loading"
							  @input="form.errors.clear('mode')"
							  :classes="{'is-danger': form.errors.has('mode')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('mode')"
					  v-text="form.errors.get('mode')">
				</span>
			</div>

			<!-- Head -->
			<div class="column is-one-quarter">
				<label for="head" class="label">Head</label>
				<div class="control">
					<span class="select">
						<select v-model="form.head"
								name="head"
								id="head"
								:disabled="loading || form.empty">
							<option :value="null">N/A</option>
							<option value="subject">Subject</option>
							<option value="primaryObject" v-show="form.primaryObject.id != ''">Primary Object</option>
							<option value="secondaryObject" v-show="form.secondaryObject.id != ''">Secondar Object</option>
						</select>
					</span>
				</div>
			</div>

			<!-- isAbsolute -->
			<div class="column is-one-quarter">
				<label for="isAbsolute" class="label">Abs/Obj</label>
				<div class="control">
					<span class="select">
						<select v-model="form.isAbsolute"
								name="isAbsolute"
								id="isAbsolute"
								:disabled="loading">
							<option :value="null">N/A</option>
							<option :value="1">Absolute</option>
							<option :value="0">Objective</option>
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
		<div class="columns">

			<!-- phoneticForm -->
			<div class="column is-half">
				<label for="phoneticForm" class="label">Phonemic Representation</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.phoneticForm"
						   autocomplete="off"
						   name="phoneticForm"
						   id="phoneticForm"
						   :disabled="loading || form.empty"
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
						   id="morphemicForm"
						   :disabled="loading || form.empty"
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
		<h4 class="subtitle is-4">Lineage</h4>
		<div class="columns">

			<!-- Parent -->
			<div class="column is-half">
				<label for="parent" class="label">Parent</label>
				<alg-ajaxlist v-model="form.parent"
							  uri="/autocomplete/formParents"
							  :with="form.language.id"
							  name="parent"
							  id="parent"
							  :disabled="loading || !form.language.id || form.empty"
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
								:disabled="loading || !form.parent.id || !form.language.id || form.empty">
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

			<!-- Usage Notes -->
			<div class="column is-half">
				<label for="usageNotes" class="label">Usage Notes</label>
				<alg-textarea v-model="form.usageNotes"
							  :disabled="loading || form.empty"
							  name="usageNotes"
							  placeholder="Enter notes about the usage of this form">
				</alg-textarea>
			</div>

			<!-- Allomorphy Notes -->
			<div class="column is-half">
				<label for="allomorphyNotes" class="label">Allomorphy Notes</label>
				<alg-textarea v-model="form.allomorphyNotes"
							  :disabled="loading || form.empty"
							  name="allomorphyNotes"
							  placeholder="Enter notes about this form's allomorphs">
				</alg-textarea>
			</div>

			<!-- Historical Notes -->
			<div class="column is-half">
				<label for="historicalNotes" class="label">Historical Notes</label>
				<alg-textarea v-model="form.historicalNotes"
							  :disabled="loading"
							  name="historicalNotes"
							  placeholder="Enter historical information about this form">
				</alg-textarea>
			</div>

			<!-- Comments -->
			<div class="column is-half">
				<label for="comments" class="label">Comments</label>
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
	props: ['method', 'action', 'languages', 'args', 'classes', 'orders', 'modes', 'changeTypes', 'model', 'language'],

	data() {
		return {
			loading: false,
			changeTypeArray: [],
			form: new Form({
				empty: false,
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
				head: null,
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
				sources: []
			})
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					if(this.form.empty) {
						window.location.replace("/empty-forms/"+response);
					} else {
						window.location.replace("/forms/"+response);
					}
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

			this.form.isAbsolute      = formType.isAbsolute;
			this.form.isNegative      = formType.isNegative;
			this.form.isDiminutive    = formType.isDiminutive;
			this.form.historicalNotes = formArray.historicalNotes;
			this.form.comments        = formArray.comments;

			if(formArray.surfaceForm) {
				this.form.surfaceForm     = formArray.surfaceForm.replace("*", "");
				this.form.morphemicForm   = formArray.morphemicForm;
				this.form.usageNotes      = formArray.usageNotes;
				this.form.allomorphyNotes = formArray.allomorphyNotes;
				this.form.changeType_id   = formArray.changeType_id;
			} else {
				this.form.empty = true;
			}

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

			if(formArray.phoneticForm) {
				this.form.phoneticForm = formArray.phoneticForm.replace("*", "");
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
			if(formType.head) {
				this.form.head = formType.head;
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
						short:     source.display,
						id:        source.id,
						long:      source.long,
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