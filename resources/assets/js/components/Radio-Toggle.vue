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
import { Datalist } from '../Datalist.js';

export default {
	props: ['languages', 'oldLanguages'],

	data() {
		return {
			disabled: true,
			selections: [new Datalist()]
		}
	},

	created() {
		if (this.oldLanguages) {
			let languages = [];

			for (let i = 0; i < this.oldLanguages.length; i += 2) {
				languages.push(new Datalist(this.oldLanguages[i], this.oldLanguages[i + 1]));
			}

			this.disabled = false;
			this.selections = languages;
		}
	}
}
</script>