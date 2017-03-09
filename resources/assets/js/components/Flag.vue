<template>
	<div>
		<label class="label">Flag</label>
		<p class="control">
			<label class="radio">
				<input type="radio"
					   :checked="value == '0'"
					   value="0"
					   @change="onChange($event.target.value)" />
				None
			</label>
			<label class="radio">
				<input type="radio"
					   :checked="value == '1'"
					   value="1"
					   @change="onChange($event.target.value)" />
				Just for me
			</label>
			<label class="radio">
				<input type="radio"
					   :checked="value == '2'"
					   value="2"
					   @change="onChange($event.target.value)" />
				For me and administrators
			</label>
			<label class="radio">
				<input type="radio"
					   :checked="value == '3'"
					   value="3"
					   @change="onChange($event.target.value)" />
				For everyone
			</label>
		</p>
	</div>
</template>

<script>
export default {
	props: ['value'],

	methods: {
		onChange(value) {
			this.$emit('input', value);
		}
	}
}
</script>