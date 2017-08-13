<template lang="pug">
	extends Tag-Input.pug
	block tags
		span(v-html="getName(tag)")
	block options
		span(v-html="getName(item)")
	block inputs
		input(type="hidden" v-model="tag.ic" :name="name + '[' + index + '][ic]'")
		input(type="hidden" v-model="tag.id" :name="name + '[' + index + '][id]'")
		input(type="hidden" v-model="tag.name" :name="name + '[' + index + '][name]'")
		input(type="hidden" v-model="tag.disambiguator" :name="name + '[' + index + '][disambiguator]'")
	block etc
		alg-modal(ref="modal")
			div(slot="title" v-text="modal.title")
			div
				ul
					li(v-for="change in changes")
						a.button(v-html="change.change" @click="onSelectChange(change)")
</template>

<script>
	import TagInput from './Tag-Input'

	export default {
		extends: TagInput,

		props: {
			language: {
				default: null
			}
		},

		data() {
			return {
				morpheme: null,
				modal: {
					title: "Choose an initial change"
				}
			};
		},

		computed: {
			changes() {
				if (this.morpheme) {
					let temp = this.morpheme.initial_changes.clone();

					temp.unshift({
						change: this.morpheme.name,
						id: -1
					});

					return temp;
				}

				return [];
			}
		},

		methods: {
			ajaxOptions() {
				return {
					language: this.language,
					alter: false
				}
			},

			onClickTag(tag) {
				if (Array.isArray(tag.initial_changes) && tag.initial_changes.length > 0) {
					if (tag.initial_changes.length == 1) {
						if (typeof tag.id !== 'undefined' && tag.ic >= 0) {
							tag.tempName = null;
							tag.ic = -1;
						} else {
							tag.tempName = tag.initial_changes[0].change;
							tag.ic = tag.initial_changes[0].id;
						}
					} else {
						this.morpheme = tag;

						this.$refs.modal.open();
					}
				} else if (!tag.slot || tag.slot.abv == 'STM') {
					if (typeof tag.ic !== 'undefined' && tag.ic >= 0) {
						tag.tempName = null;
						tag.ic = -1;
					} else {
						tag.tempName = "IC." + tag.name;
						tag.ic = 0;
					}
				}
			},

			onSelectChange(change) {
				this.morpheme.tempName = change.change;
				this.morpheme.ic = change.id;
				this.$refs.modal.close();
			},

			getName(morpheme) {
				let output = morpheme.tempName ? morpheme.tempName : morpheme.name;
				output = output.replace("*", "")

				if (morpheme.gloss) {
					output += ` ${this.getGloss(morpheme.gloss)}`;
				}

				return output;
			},

			getGloss(gloss) {
				if (gloss.match(/^".+"$/)) {
					// Gloss is a translation
					return gloss.replace(/"/g, "'");
				} else {
					// Gloss is a real gloss
					return `(<span class="gloss">${gloss}</span>)`;
				}
			}
		}
	}
</script>
