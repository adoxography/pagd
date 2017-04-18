<template>
	<form :method="method"
		  :action="action"
		  class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<div class="columns is-multiline">

			<!-- Language Name -->
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
						   autofocus="autofocus" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('name')"
					  v-text="form.errors.get('name')">
				</span>
			</div>

			<!-- Alternate Names -->
			<div class="column is-half">
				<label for="alternateNames" class="label">Alternate Names</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.alternateNames"
						   autocomplete="off"
						   name="alternateNames"
						   id="alternateNames"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('alternateNames')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('alternateNames')" 
					  v-text="form.errors.get('alternateNames')">
				</span>
			</div>

			<!-- Group -->
			<div class="column is-half">
				<label for="group" class="label">Group</label>
				<alg-datalist v-model="form.group"
							  :list="groups"
							  name="group"
							  id="group"
							  :disabled="loading"
							  required="required"
							  @input="form.errors.clear('group')"
							  :classes="{'is-danger': form.errors.has('group')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('group')"
					  v-text="form.errors.get('group')">
				</span>
			</div>

			<!-- Parent -->
			<div class="column is-half">
				<label for="parent" class="label">Parent</label>
				<alg-datalist v-model="form.parent"
							  :list="languages"
							  name="parent"
							  id="parent"
							  :disabled="loading"
							  @input="form.errors.clear('parent')"
							  :classes="{'is-danger': form.errors.has('parent')}">
				</alg-datalist>
				<span class="help is-danger"
					  v-show="form.errors.has('parent')"
					  v-text="form.errors.get('parent')">
				</span>
			</div>

			<!-- ISO -->
			<div class="column is-2">
				<label for="iso" class="label">ISO</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.iso"
						   autocomplete="off"
						   required="required"
						   name="iso"
						   iso="iso"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('iso')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('iso')" 
					  v-text="form.errors.get('iso')">
				</span>
			</div>

			<!-- Algonquianist Code -->
			<div class="column is-2">
				<label for="algoCode" class="label">Algonquianist Code</label>
				<p class="control">
					<input type="text"
						   class="input"
						   v-model="form.algoCode"
						   autocomplete="off" 
						   required="required"
						   name="algoCode"
						   id="algoCode"
						   :disabled="loading"
						   :class="{'is-danger': form.errors.has('name')}" />
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('algoCode')"
					  v-text="form.errors.get('algoCode')">
				</span>
			</div>
			<div class="column is-2">
			</div>

			<!-- Reconstructed/Attested -->
			<div class="column is-half">
				<p class="control">
					<label class="radio">
						<input type="radio"
							   value="0"
							   name="reconstructed"
							   v-model="form.reconstructed"
							   :disabled="loading">
						Attested
					</label>
				</p>
				<p class="control">
					<label class="radio">
						<input type="radio"
							   value="1"
							   name="reconstructed"
							   v-model="form.reconstructed"
							   :disabled="loading">
						Reconstructed
					</label>
				</p>
			</div>

			<!-- Notes -->
			<div class="column is-12">
				<label for="notes" class="label">Notes</label>
				<alg-textarea v-model="form.notes"
							  :disabled="loading"
							  name="notes">
				</alg-textarea>
			</div>
		</div>

		<button class="button"
				type="submit"
				:disabled="form.errors.any() || loading">Submit</button>
		<span class="icon">
			<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
		</span>
	</form>
</template>

<script>
export default {
	props: ['languages', 'groups', 'language', 'parent', 'method', 'action'],

	data() {
		return {
			loading: false,
			form: new Form({
				name: '',
				alternateNames: '',
				iso: '',
				algoCode: '',
				notes: '',
				reconstructed: '0',
				group: {
					text: 'Central',
					id: '3'
				},
				parent: {
					text: 'Proto-Algonquian',
					id: '1'
				}
			})
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(),this.action)
				.then(response => {
					window.location.replace("/languages/"+response);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	},

	created() {
		if(this.parent) {
			let parentArray = JSON.parse(this.parent);

			this.form.parent = {
				text: parentArray.name,
				id:   parentArray.id
			}

			this.form.group = {
				text: parentArray.group.name,
				id:   parentArray.group_id
			}
		}
		else if(this.language) {
			let languageArray = JSON.parse(this.language);

			// Assign root defaults
			this.form.name           = languageArray.name;
			this.form.alternateNames = languageArray.alternateNames;
			this.form.iso            = languageArray.iso;
			this.form.algoCode       = languageArray.algoCode;
			this.form.reconstructed  = languageArray.reconstructed;
			this.form.notes          = languageArray.notes;

			// Assign required foreign defaults
			this.form['group'] = {
				text: languageArray['group']['name'],
				id:   languageArray['group_id']
			};

			// Assign nullable foreign defaults
			if(languageArray['parent']) {
				this.form['parent'] = {
					text: languageArray['parent']['name'],
					id:   languageArray['parent_id']
				};
			}
		}
	}
};
</script>