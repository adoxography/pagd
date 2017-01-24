<template>
	<article class="message is-info" v-show="this.isVisible">
		<div class="message-header">
			<p>
				<slot name="header"></slot>
			</p>
			<button class="delete" @click.prevent="hide"></button>
		</div>
		<div class="message-body">
			<slot></slot>
		</div>
	</article>
</template>

<script>
	export default {
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