<template>
  <div :style="{display: display}">
		<div class="alg-morpheme-alert" v-show="showModal" @mouseleave="showModal = false">
			<article class="message is-primary">
				<div class="message-header">
					<p>{{ title }}</p>
				</div>
				<div class="message-body">
					<slot></slot>
				</div>
			</article>
		</div>
		<a class="icon is-danger">
			<span class="icon is-small" @mouseover="showModal = true">
				<i class="fa fa-exclamation-triangle"></i>
			</span>
		</a>
	</div>
</template>

<script>
export default {
  props: {
    'title': {},
    'display': {
      default: 'block'
    }
  },

	data() {
		return {
			showModal: false
		}
	}
}
</script>
