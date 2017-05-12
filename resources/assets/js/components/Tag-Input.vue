<template>
	<div class="alg-tag-input">
		<alg-datalist
			ref="datalist"
			@keydown="onKeyDown($event)"
			@select="onInput"
			v-model="listValue"
			:list="list"
			:name="name+'-input'"
			:id="id"
			:disabled="disabled"
			:placeholder="placeholder"
			:classes="classes"
			@focus="showTags = true"
			@blur="showTags = false">
		</alg-datalist>
		<transition name="fade">
			<draggable
				v-model="currValue"
				v-show="currValue.length > 0 || showTags"
				@change="onChange($event, currValue)"
				class="alg-tag-section">
				<div v-for="(tag, index) in currValue" class="alg-tag-container">
					<span class="tag is-primary is-medium">
						{{ tag.text }}
						<a
							class="delete is-small"
							@click.prevent="removeTag(index)"
							tabindex="-1"></a>
					</span>
				</div>
			</draggable>
		</transition>
		<input type="hidden" :value="gluedValue" :name="name" />
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	props: ['list', 'value', 'name', 'id', 'placeholder', 'classes', 'disabled', 'initial'],

	components: {
		draggable
	},

	data() {
		return {
			listValue: {
				id: '',
				text: ''
			},

			showTags: false
		};
	},

	mounted() {
		if(this.initial) {
			this.listValue = { id: '', text: this.initial };
			this.onInput();
		}
	},

	computed: {
		currValue() {
			return this.value;
		},

		gluedValue() {
			let output = '';
			let firstTime = true;

			this.value.forEach(item => {
				if(firstTime) {
					firstTime = false;
				} else {
					output += '.';
				}

				output += item.text;
			});

			return output;
		}
	},

	methods: {
		addTag(tag) {
			let val = this.currValue;
			if(!this.inArray(val, tag)) {
				val.push(tag);

				this.$emit("input", val);
			}
		},

		removeTag(index) {
			let val = this.currValue;
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

		onChange(event, list) {
			let temp = list.clone();

			if(event.moved) {
				if(event.moved.newIndex > event.moved.oldIndex) {
					for(let i = event.moved.oldIndex; i < event.moved.newIndex; i++) {
						temp[i] = temp[i + 1];
					}
				} else {
					for(let i = event.moved.oldIndex; i > event.moved.newIndex; i--) {
						temp[i] = temp[i - 1];
					}
				}

				temp[event.moved.newIndex] = event.moved.element;
				this.$emit('input', temp);
			}
		},

		onInput() {
			Vue.nextTick(() => {
				this.addTag(this.listValue);
				this.clearList();
			});
		},

		onKeyDown(event) {
			if(this.listValue.text.length > 0 && (event.keyCode == 9 || event.keyCode == 13)) {

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