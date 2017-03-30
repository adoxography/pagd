<template>
	<a @click.prevent="onSubmit" class="card-header-icon">
		<span class="icon">
			<i class="fa fa-eye" title="Data is visible" v-show="!isHidden && !loading"></i>
			<i class="fa fa-eye-slash" title="Data is hidden" v-show="isHidden && !loading"></i>
			<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
		</span>
	</a>
</template>

<script>
export default {
	props: ['hidden', 'uri'],

	data() {
		return {
			isHidden: false,
			loading: false
		};
	},

	methods: {
		onSubmit(attempt = 0) {
			this.loading = true;

			axios.patch(this.uri + '/hide')
			.then(response => {
				this.isHidden = response.data.hidden;
				this.loading = false;
			})
			.catch(error => {
				if(attempt < 5) {
					this.onSubmit(attempt + 1);
				}
				else {
					this.loading = false;
					alert("Failed to change the visibility");
				}
			});
		}
	},

	created() {
		this.isHidden = this.hidden;
	}
}
</script>