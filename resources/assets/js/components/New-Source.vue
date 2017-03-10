<template>
	<div class="modal is-active">
 		<div class="modal-background"></div>
 	 	<div class="modal-card">
    		<header class="modal-card-head">
      			<p class="modal-card-title">Add a new source</p>
      			<a class="delete" @click="close"></a>
    		</header>
    		<section class="modal-card-body">
    			<label class="label">Short Form</label>
    			<p class="control">
					<input type="text" class="input" autocomplete="off" v-model="short" />
				</p>
				<label class="label">Long Form</label>
				<p class="control">
					<textarea class="textarea" v-model="long"></textarea>
				</p>
				<label class="label">URL</label>
				<p class="control">
					<input type="url" class="input" autocomplete="off" v-model="url" />
				</p>
				<label class="label">Notes</label>
				<alg-textarea v-model="notes"></alg-textarea>
    		</section>
    		<footer class="modal-card-foot">
      			<a class="button is-primary" :class="{'is-loading': loading, 'is-disabled': disabled}" @click="submit">Submit</a>
      			<a class="button" @click="close">Cancel</a>
    		</footer>
  		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				short: '',
				long: '',
				url: '',
				notes: '',
				loading: false
			};
		},

		computed: {
			disabled() {
				return this.short.length == 0 || this.long.length == 0;
			}
		},

		methods: {
			close() {
				this.short = '';
				this.long = '';
				this.url = '';
				this.notes = '';

				this.$emit('close');
			},

			submit() {
				this.loading = true;

				axios.post('/sources/ajax', {
					short: this.short,
					long:  this.long,
					url:   this.url,
					notes: this.notes
				}).then(response => {
					this.$emit('input', response.data);
					this.loading = false;
					this.close();
				});
			}
		}
	}
</script>