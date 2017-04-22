<template>
	<div class="language-menu-tab">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['name'],

	data() {
		return {
			subtabs: []
		};
	},

	created() {
		this.subtabs = this.$children;
	}
}
</script>