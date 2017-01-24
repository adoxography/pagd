<template>
	<div class="card-content" v-show="isActive" style="padding-top: 0;">
		<div class="tabs-details">
			<div class="content">
				<div class="columns is-multiline">
					<slot></slot>
				</div>
				<div class="level">
					<div class="level-right">
						<slot name="tags"></slot>
					</div>					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			name: { required: true },
			selected: { default: false }
		},

		data() {
			return {
				isActive: false
			};
		},

		computed: {
			href() {
				return '#' + this.name.toLowerCase().replace(/ /g, '-');
			}
		},

		mounted() {
			this.isActive = this.selected;
		}
	}
</script>