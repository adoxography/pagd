<template>
	<div>
		<alg-datalist
			ref="datalist"
			@keydown.enter="onEnter($event)"
			@select="onInput"
			v-model="listValue"
			:list="list"
			:name="name"
			:id="id"
			:disabled="disabled"
			:placeholder="placeholder"
			:classes="classes">
		</alg-datalist>
		<ul v-show="value.length > 0">
			<li v-for="(tag, index) in value" style="display: inline-block; padding-top: .5rem;">
				<span class="tag">
					{{ tag.text }}
					<a
						class="delete is-small"
						@click.prevent="removeTag(index)"
						tabindex="-1"></a>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['list', 'preset', 'value', 'name', 'id', 'placeholder', 'classes', 'disabled'],

	data() {
		return {
			listValue: {
				id: '',
				text: ''
			}
		};
	},

	methods: {
		addTag(tag) {
			let val = this.value;
			if(!this.inArray(val, tag)) {
				val.push(tag);

				this.$emit("input", val);
			}
		},

		removeTag(index) {
			let val = this.value;
			val.splice(index, 1);

			this.$emit("input", val);
		},

		inArray(haystack, needle) {
			let found = false;

			for(let i = 0; i < haystack.length && !found; i++) {
				found = haystack[i].text === needle.text;
			}

			return found;
		},

		clearList() {
			this.listValue = {
				text: '',
				id: ''
			}
		},

		onInput() {
			Vue.nextTick(() => {
				this.addTag(this.listValue);
				this.clearList();
			});
		},

		onEnter(event) {
			if(this.listValue.text.length > 0) {

				let glosses = this.listValue.text.split('.');

				glosses.forEach(gloss => {
					if(gloss.length > 0) {
						this.addTag({
							id: 0,
							text: gloss
						});
					}
				});

				this.$refs.datalist.reset();
				this.clearList();
			}
		}
	}
}
</script>