<template>
	<div :class="'notification '+level" v-show="showNotification">
		<button class="delete" @click="showNotification = false"></button>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['level'],

	data() {
		return {
			showNotification: true
		};
	}
}
</script>