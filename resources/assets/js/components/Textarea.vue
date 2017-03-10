<template>
	<div class="control">
		<textarea ref="textbox"
				  class="textarea"
				  name="notes"
				  :value="value"
				  :disabled="disabled"
				  :style="{height: height}"
				  :name="name"
				  :id="name"
				  @input="onInput($event.target.value)"
				  :placeholder="placeholder">
		</textarea>
	</div>	
</template>

<script>
export default {
	props: ['value', 'disabled', 'placeholder', 'name'],

	data() {
		return {
			height: 0
		};
	},

	methods: {
		onInput(value) {
			this.$emit('input', value);
			this.height = 'auto';

			Vue.nextTick(() => {
				this.height = this.$refs.textbox.scrollHeight+"px";
			});
		}
	}
}
</script>