<template>
	<div>
		<p class="control">
			<label class="radio">
				<input name="searchAll" type="radio" class="radio" v-model="disabled" :value="true" />
				All languages
			</label>
		</p>
		<p class="control">
			<label class="radio">
				<input name="searchAll" type="radio" class="radio" v-model="disabled" :value="false" />
				The following languages...
			</label>
			<div class="box">
				<alg-multi-datalist :list="languages" name="languages[]" v-model="selections" :disabled="disabled"></alg-multi-datalist>
			</div>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['languages'],

		data() {
			return {
				disabled: true,
				selections: [{
					text: '',
					id: ''
				}]
			}
		}
	}
</script>