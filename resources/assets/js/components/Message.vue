<template>
	<article class="message is-info" v-show="this.isVisible">
		<div class="message-header">
			<p>{{ title }}</p>
			<button class="delete" @click.prevent="hide"></button>
		</div>
		<div class="message-body">
			<slot></slot>
		</div>
	</article>
</template>

<script>
	export default {
		props: ['title'],

		data() {
			return {
				isVisible: true
			};
		},

		methods: {
			hide() {
				this.isVisible = false;
			}
		}
	}
</script>