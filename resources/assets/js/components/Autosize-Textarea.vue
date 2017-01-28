<template>
	<textarea v-autosize="value" @input="onInput($event.target.value)">{{ value }}</textarea>
</template>

<script>
	import { autosize } from 'vue-autosize';

	export default {
		props: ['value'],

		methods: {
			onInput(value) {
				this.$emit('input', value);
			}
		},

		directives: {
			autosize: autosize
		}
	}
</script>