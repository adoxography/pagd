<template>
	<div class="modal" :class="{'is-active': active}">
		<div class="modal-background" @click="close"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">
					<slot name="title"></slot>
				</p>
				<button class="delete" @click="close"></button>
			</header>
			<section class="modal-card-body">
				<slot></slot>
			</section>
			<footer class="modal-card-foot">
				<slot name="footer"></slot>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: false
		};
	},

	methods: {
		open() {
			this.active = true;
		},

		close() {
			this.active = false;
		},

		onClickOutside() {
			Vue.nextTick(() => {
				if(this.active) {
					this.close();
				}
			});
		}
	}
}
</script>