<template>
	<div class="modal is-active" @keydown.enter="onEnter($event)">
 		<div class="modal-background"></div>
 	 	<div class="modal-card" v-on-clickaway="clickOutside">
    		<header class="modal-card-head">
      			<p class="modal-card-title">Add a new source</p>
      			<a class="delete" @click="close"></a>
    		</header>
    		<section class="modal-card-body">
    			<label class="label">Author</label>
    			<p class="control">
					<input type="text" class="input" autocomplete="off" v-model="author" />
				</p>
				<label class="label">Year</label>
				<p class="control">
					<input type="text" class="input" autocomplete="off" v-model="year">
				</p>
				<label class="label">Full Citation</label>
				<p class="control">
          <wysiwyg v-model="long"></wysiwyg>
				</p>
				<label class="label">URL</label>
				<p class="control">
					<input type="url" class="input" autocomplete="off" v-model="url" />
				</p>
				<label class="label">Notes</label>
        <wysiwyg v-model="long"></wysiwyg>
    		</section>
    		<footer class="modal-card-foot">
      			<a class="button is-primary" :class="{'is-loading': loading, 'is-disabled': disabled}" @click="submit">Submit</a>
      			<a class="button" @click="close">Cancel</a>
    		</footer>
  		</div>
	</div>
</template>

<script>
	import  { directive as onClickaway } from 'vue-clickaway';

	export default {

		props: ['open'],

		data() {
			return {
				author: '',
				year: '',
				long: '',
				url: '',
				notes: '',
				loading: false
			};
		},

		directives: {
			onClickaway: onClickaway
		},

		computed: {
			disabled() {
				return this.author.length == 0 || this.year.length == 0 || this.long.length == 0;
			}
		},

		methods: {
			close() {
				this.author = '';
				this.year = '';
				this.long = '';
				this.url = '';
				this.notes = '';

				this.$emit('close');
			},

			clickOutside(event) {
				if(event.srcElement.id != 'new-source-button') {
					this.close();
				}
			},

			onEnter(event) {
				if(this.open) {
					event.preventDefault();

					if(!this.disabled) {
						this.submit();
					}
				}
			},

			submit() {
				this.loading = true;

				axios.post('/sources/ajax', {
					author: this.author,
					year: this.year,
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
