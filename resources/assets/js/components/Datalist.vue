<template>
	<div class="alg-datalist alg-datalist-container" v-on-clickaway="closeList">

		<div class="field has-addons">
			<p class="control is-expanded">
				<input type="text"
					   :name="name"
					   :id="id"
					   :disabled="disabled"
					   class="input"
					   :class="classes"
					   :value="value.text"
					   @keyup="onKeyUp($event.keyCode)"
					   @keydown="onKeyDown($event)"
					   @input="update($event.target.value)"
					   v-focus="focused"
					   @focus="onFocus"
					   @blur="onBlur"
					   ref="textInput" autocomplete="off"
					   :placeholder="placeholder"
					   :required="required" />
			</p>
			<p class="control">
	   			<a class="button"
	   			   :class="{ 'is-disabled': disabled }"
	   			   @click="handleButtonClicked">
					<span class="icon is-small">
						<i class="fa fa-chevron-down"></i>
					</span>
				</a>
			</p>
		</div>

		<div class="box alg-datalist-dropdown" v-show="showList">
			<ul>
				<li v-for="(option, index) in options">
					<a @click="selectItem(option.name)"
					   @mouseover="handleHover(option.name)"
					   :class="{ 'is-highlighted': activeItem(index) }">
						{{ option.name }}
					</a>
				</li>
			</ul>
		</div>
		<input type="hidden"
			   :name="name + '_id'"
			   :value="value.id" />
	</div>
</template>

<script>
	import  { focus } from 'vue-focus';
	import  { directive as onClickaway } from 'vue-clickaway';

	export default {
		props: {
			list: String,
			name: String,
			id: {},
			disabled: Boolean,
			required: {},

			value: {
				default: function () {
					return {
						text: '',
						id: ''
					};
				}
			},
			placeholder: {},
			classes: {}
		},

		computed: {
			hasValue() {
				return this.value.id > 0 && !this.showList;
			}
		},

		directives: {
			focus: focus,
			onClickaway: onClickaway
		},

		data() {
			return {
				parsedList: [],
				options: [],
				showList: false,
				writing: false,
				curr: 0,
				focused: false
			};
		},

		created() {
			this.parsedList = JSON.parse(this.list);
		},

		methods: {
			getID(text) {
				let val = "";

				for(let i = 0; i < this.parsedList.length && val === ""; i++) {
					if(this.parsedList[i].name.toLowerCase() === text.toLowerCase()) {
						val = this.parsedList[i].id;
					}
				}

				return val;
			},

			reset() {
				// Hide the list
				this.showList = false;
				this.writing = false;

				// Reset the current element
				this.curr = 0;
			},

			/**
			 * Activated when the down arrow is pressed
			 */
			toggleList() {
				// Reset the list
				this.options = this.parsedList;

				// Toggle its visibility
				this.showList = !this.showList;
			},

			closeList() {
				this.options = this.parsedList;
				this.showList = false;
			},

			selectItem(item) {
				this.reset();

				// Trigger an input event
				this.update(item);

				this.$emit("select");
			},

			onKeyUp(keyCode) {
				if(keyCode == 40) { // Down arrow
					this.handleDownKey();
				}
				else if(keyCode == 38) { // Up arrow
					this.handleUpKey();
				}
				else if(keyCode != 13){ // Anything else, aside from the enter key
					// Filter the options based on the current text
					this.filterOptions();

					// Only show the list if there is text in the field and there are options in the list
					if(this.value.text.length > 0 && this.options.length > 0) {
						this.showList = true;
					}

					this.writing = true;
				}
			},

			onFocus() {
				this.focused = true;
				this.$emit('focus');
			},

			onBlur() {
				this.focused = false;
				this.$emit('blur');
			},

			onKeyDown(event) {
				if(event.keyCode == 9) { // Tab key
					this.showList = false;
				}
				else if(event.keyCode == 13) { // Enter key
					this.handleEnterKey(event);
					this.showList = false;
				}
			},

			handleHover(item) {
				for(let i = 0; i < this.options.length; i++) {
					if(this.options[i].name == item) {
						this.curr = i + 1;
					}
				}
			},

			handleButtonClicked() {
				this.toggleList();
				this.$refs.textInput.focus();
			},

			filterOptions() {
				this.options = this.parsedList.filter(item => {
					let currText;

					if(this.value.text) {
						currText = this.value.text.toLowerCase();
					} else {
						currText = '';
					}

					return item.name.toLowerCase().includes(currText);
				});
			},

			handleDownKey() {
				if(this.showList) { // The list is open

					// Increment the current selection, making sure to wrap it around the list
					this.curr++;
					this.curr %= this.options.length + 1;

					// If the current selection isn't the textbox itself, set the textbox to the current selection
					if(this.curr > 0){
						this.update(this.options[this.curr - 1].name);
					}
				}
				else { // The list is closed

					// Reset the list
					this.options = this.parsedList;

					// Open the list
					this.showList = true;
				}
			},

			handleUpKey() {
				this.curr += this.options.length;
				this.curr %= this.options.length + 1;
				if(this.curr > 0){
					this.update(this.options[this.curr - 1].name);
				}
			},

			handleEnterKey(event) {
				if(this.curr > 0) { // The list is open
					event.preventDefault();
					this.selectItem(this.options[this.curr - 1].name);
				} else if(this.value.text.length > 0 && this.writing) {
					event.preventDefault();
					this.$emit("keydown", {
						keyCode: 13
					});
				}
			},

			activeItem(n) {
				return n + 1 == this.curr;
			},

			update(newText) {
				let id = this.getID(newText);

				this.$emit("input", {
					text: newText,
					id: id
				});
			}
		}
	}
</script>