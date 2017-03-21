<template>
	<form :method="method"
		  :action="action"
		  class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<label for="short" class="label">Short</label>
		<p class="control">
			<input type="text"
				   class="input"
				   name="short"
				   id="short"
				   v-model="form.short"
				   :disabled="loading"
				   autocomplete="off"
				   required="required"
				   :class="{'is-danger':
				   form.errors.has('short')}">
		</p>
		<span class="help is-danger"
			  v-show="form.errors.has('short')"
			  v-text="form.errors.get('short')">
		</span>

		<label for="long" class="label">Long</label>
		<alg-textarea v-model="form.long"
					  :disabled="loading"
					  name="long">
		</alg-textarea>

		<label for="url" class="label">URL</label>
		<p class="control">
			<input type="text"
				   class="input"
				   name="url"
				   id="url"
				   v-model="form.url"
				   :disabled="loading"
				   autocomplete="off"
				   :class="{'is-danger':
				   form.errors.has('url')}">
		</p>
		<span class="help is-danger"
			  v-show="form.errors.has('url')"
			  v-text="form.errors.get('url')">
		</span>

		<label for="notes" class="label">Notes</label>
		<alg-textarea v-model="form.notes"
					  :disabled="loading"
					  name="notes">
		</alg-textarea>

		<button type="submit" class="button is-primary">Submit</button>
	</form>
</template>

<script>
export default {
	props: ['action', 'method', 'source'],

	data() {
		return {
			form: new Form({
				short: '',
				long: '',
				url: '',
				notes: ''
			}),

			loading: false
		}
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.submit(this.method.toLowerCase(), this.action)
				.then(response => {
					window.location.replace("/sources/"+response.id);
				})
				.catch(error => {
					this.loading = false;
				});
		}
	},

	created() {
		if(this.source) {
			let sourceArray = JSON.parse(this.source);

			this.form.short = sourceArray.short;
			this.form.long  = sourceArray.long;
			this.form.url   = sourceArray.url;
			this.form.notes = sourceArray.notes;
		}
	}
}
</script>