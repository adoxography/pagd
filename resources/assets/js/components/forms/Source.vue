<template>
	<form :method="method"
		  :action="action"
		  class="box"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">

		<div class="columns">
			<div class="column is-half">
				<label for="author" class="label">Author</label>
				<p class="control">
					<input type="text"
						   class="input"
						   name="author"
						   id="author"
						   v-model="form.author"
						   :disabled="loading"
						   autocomplete="off"
						   required="required"
						   :class="{'is-danger':
						   form.errors.has('author')}">
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('author')"
					  v-text="form.errors.get('author')">
				</span>
			</div>

			<div class="column is-half">
				<label for="year" class="label">Year</label>
				<p class="control">
					<input type="text"
						   class="input"
						   name="year"
						   id="year"
						   v-model="form.year"
						   :disabled="loading"
						   autocomplete="off"
						   required="required"
						   :class="{'is-danger':
						   form.errors.has('year')}">
				</p>
				<span class="help is-danger"
					  v-show="form.errors.has('year')"
					  v-text="form.errors.get('year')">
				</span>
			</div>
		</div>

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

		<label for="summary" class="label">Summary</label>
		<alg-textarea v-model="form.summary"
					  :disabled="loading"
					  name="summary">
		</alg-textarea>

		<label for="notes" class="label">Notes</label>
		<alg-textarea v-model="form.notes"
					  :disabled="loading"
					  name="notes">
		</alg-textarea>

		<button type="submit" class="button is-primary" :class="{'is-loading': loading}">Submit</button>
	</form>
</template>

<script>
export default {
	props: ['action', 'method', 'source'],

	data() {
		return {
			form: new Form({
				author: '',
				year: '',
				long: '',
				url: '',
				summary: '',
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

			this.form.author = sourceArray.author;
			this.form.year  = sourceArray.year;
			this.form.long  = sourceArray.long;
			this.form.url   = sourceArray.url;
			this.form.notes = sourceArray.notes;
		}
	}
}
</script>