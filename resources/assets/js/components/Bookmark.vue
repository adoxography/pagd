<template>
	<div style="display: flex;">
		<a @click="openModal" class="card-header-icon" v-show="bookmarkable">
			<span class="icon">
				<i class="fa fa-bookmark-o" title="Bookmark"></i>
			</span>
		</a>
		<a @click="unBookmark" class="card-header-icon" v-show="!bookmarkable">
			<span class="icon">
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
				<i class="fa fa-bookmark" v-show="!loading" title="Remove from bookmarks"></i>
			</span>
		</a>
		<alg-modal ref="modal">
			<div slot="title">
				Bookmark
			</div>

			<em>Add a comment if desired:</em>
			<alg-textarea ref="textarea" v-model="comment" :name="comment"></alg-textarea>

			<div slot="footer">
				<button class="button is-success" type="submit" @click.prevent="onSubmit">Bookmark</button>
				<span class="icon">
					<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
				</span>
			</div>
		</alg-modal>
	</div>
</template>

<script>
export default {
	props: ['uri', 'bookmarked'],

	data() {
		return {
			comment: '',
			loading: false,
			bookmarkable: true
		}
	},

	created() {
		if(this.bookmarked == '1') {
			this.bookmarkable = false;
		}
	},

	methods: {
		openModal() {
			this.$refs.modal.open();
			this.$refs.textarea.editor.focus();
		},

		unBookmark() {
			this.loading = true;

			axios.delete(this.uri+'/bookmark')
				.then(response => {
					this.loading = false;
					this.bookmarkable = true;
				})
				.catch(error => {
					this.loading = false;
					alert('Error in bookmarking');
				});
		},

		onSubmit() {
			this.loading = true;

			axios.post(this.uri+'/bookmark', {comment: this.comment})
				.then(response => {
					this.loading = false;
					this.comment = '';
					this.$refs.modal.close();
					this.bookmarkable = false;
				})
				.catch(error => {
					this.loading = false;
					alert('Error in bookmarking.');
				});
		}
	}
}
</script>