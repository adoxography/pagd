<template>
	<a @click.prevent="onClick">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: ['href'],

	data() {
		return {
			classes: {}
		};
	},

	methods: {
		onClick() {
			axios.delete(this.href)
			.then(response => {
				alert('Deleted');
			});
		}
	}
}
</script>