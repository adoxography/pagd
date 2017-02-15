<template>
	<div class="alg-datalist" v-on-clickaway="closeList">
		<div class="control has-addons">
			<div class="alg-datalist-container">
				<input type="text"
					   :name="name"
					   :disabled="disabled"
					   class="input is-expanded"
					   :class="classes"
					   :value="value.text"
					   @keyup="onKeyUp($event.keyCode)"
					   @keydown="onKeyDown($event)"
					   @input="update($event.target.value)"
					   ref="textInput" autocomplete="off"
					   :placeholder="placeholder"
					   :required="required" />
				<div class="box alg-datalist-dropdown" v-show="showList">
					<ul>
						<li v-for="(option, index) in options">
							<a @click="selectItem(option.name)" @mouseover="handleHover(option.name)" :class="{ 'is-highlighted': activeItem(index) }">{{ option.name }}</a>
						</li>
					</ul>
				</div>
			</div>
			<a class="button" :class="{ 'is-disabled': disabled }" @click="handleButtonClicked">
				<span class="icon is-small">
					<i class="fa fa-chevron-down"></i>
				</span>
			</a>
		</div>
		<input type="hidden" :name="name + '_id'" :value="value.id" />
	</div>
</template>

<script>
	import  { focus } from 'vue-focus';
	import  { directive as onClickaway } from 'vue-clickaway';

	export default {
		props: {
			list: String,
			name: String,
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

		directives: {
			focus: focus,
			onClickaway: onClickaway
		},

		data() {
			return {
				parsedList: [],
				options: [],
				showList: false,
				curr: 0
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
				// Hide the list
				this.showList = false;

				// Reset the current element
				this.curr = 0;

				// Trigger an input event
				this.update(item);
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
					if(keyCode != 9) {
						this.showList = this.value.text.length > 0 && this.options.length > 0;
					}
				}
			},

			onKeyDown(event) {
				if(event.keyCode == 9) { // Tab key
					this.showList = false;
				}
				else if(event.keyCode == 13) { // Enter key
					this.handleEnterKey(event);
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
				this.options = this.parsedList.filter((item) => {
					return item.name.toLowerCase().includes(this.value.text.toLowerCase());
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