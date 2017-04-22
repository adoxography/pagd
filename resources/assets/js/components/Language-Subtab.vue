<template>
	<div class="language-menu-subtab" :class="{ 'is-active': show }">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['name'],

	data() {
		return {
			show: false
		};
	}
}
</script>