<template>
	<div class="alg-ajax-list" v-on-clickaway="closeList">
		<div class="control has-icon has-icon-right">
			<div class="alg-datalist-container">
				<div
					:id="id"
					type="text"
					class="input single-line"
					@input="onInput($event.target.textContent)"
					v-html="value.text"
					@keyup="onKeyUp($event.keyCode)"
					@keydown.enter="onEnter($event)"
					autocomplete="off" 
					rows="1"
					ref="list"
					:placeholder="placeholder"
					:disabled="disabled"
				></div>
				<input type="hidden" :name="name" :value="value.text" />
				<div class="box alg-datalist-dropdown" v-show="showList && options.length > 0 && value.text.length > 0">
					<ul style="white-space: nowrap;">
						<li v-for="(option, index) in options">
							<a @click="selectItem(option.name)"
							   @mouseover="onHover(option.name)"
							   :class="{ 'is-highlighted': activeItem(index) }"
							   v-html="option.name">
							</a>
						</li>
					</ul>
				</div>
				<span class="icon is-small">
					<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
					<i class="fa fa-check" v-show="showCheck" style="color: green;"></i>
				</span>
			</div>
		</div>
		<input type="hidden"
			   :name="name + '_id'"
			   :value="value.id" />
	</div>
</template>

<script>
	import  { directive as onClickaway } from 'vue-clickaway';

	export default {

		props: ['name', 'id', 'value', 'with', 'uri', 'placeholder', 'disabled', 'initial'],

		data() {
			return {
				showList: false,
				options: [],
				loading: false,
				curr: 0,
				extra: ''
			};
		},

		directives: {
			onClickaway: onClickaway
		},

		computed: {
			showCheck() {
				return !this.loading && this.value.id > 0 && !this.showList;
			}
		},

		mounted() {
			this.$refs.list.contentEditable = true;

			if(this.initial) {
				Vue.nextTick(() => {
					this.$emit('input', this.initial);
				});
			}
		},

		methods: {
			onEnter(event) {
				if(this.showList) { // The list is open
					event.preventDefault();
					this.selectItem(this.options[this.curr - 1].name);
				}
			},

			//===========================================================================================================//
			// From http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
			setEndOfContenteditable(contentEditableElement) {
			    var range,selection;
			    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
			    {
			        range = document.createRange();//Create a range (a range is a like the selection but invisible)
			        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
			        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			        selection = window.getSelection();//get the selection object (allows you to change selection)
			        selection.removeAllRanges();//remove any selections already made
			        selection.addRange(range);//make the range you have just created the visible selection
			    }
			    else if(document.selection)//IE 8 and lower
			    { 
			        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
			        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
			        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			        range.select();//Select the range (make it the visible selection
			    }
			},
			//===========================================================================================================//

			closeList() {
				this.showList = false;
			},

			determineValue(text) {
				let val = '';
				this.extra = '';

				for(let i = 0; i < this.options.length && val === ''; i++) {
					if(this.options[i].name.toLowerCase() === text.toLowerCase()) {
						val = this.options[i].id;
						this.extra = this.options[i].extra;
					}
				}

				return val;
			},

			selectItem(newText) {
				// Hide the list
				this.closeList();

				// Reset the current element
				this.curr = 0;

				this.update(newText);
			},

			activeItem(n) {
				return n + 1 == this.curr;
			},

			onHover(item) {
				for(let i = 0; i < this.options.length; i++) {
					if(this.options[i].name == item) {
						this.curr = i + 1;
					}
				}
			},

			update(newText) {
				let id = this.determineValue(newText);

				this.$emit('input', {
					text: newText,
					id: id,
					extra: this.extra
				});

				Vue.nextTick(() => {
					let list = this.$refs.list;
					this.setEndOfContenteditable(list);
				});
			},

			onInput: _.debounce(function (newText) {
				if(newText.length > 0) {
					this.closeList();
					this.loading = true;

					axios.get(this.uri, {
						params: {
							term: newText,
							options: this.with
						}
					}).then(response => {
						this.options = [];

						_.forEach(response.data, item => {
							item.name = this.formatString(item.name);
							this.options.push(item);
						});

						if(this.options.length > 0) {
							this.showList = true;
						}

						this.loading = false;
					});
				}

				this.update(newText);			
			}, 500),

			formatString(str) {
				let tempString = str.replace(/<(?:.|\n)*?>/gm, '');

				if(tempString.length > 60) {
					tempString = tempString.substring(0, 60);
					tempString += "...";
				}

				return tempString;
			},

			onKeyUp(keyCode) {
				if(keyCode == 40) { // Down arrow
					this.handleDownKey();
				}
				else if(keyCode == 38) { // Up arrow
					this.handleUpKey();
				}
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
			},

			handleUpKey() {
				this.curr += this.options.length;
				this.curr %= this.options.length + 1;
				if(this.curr > 0){
					this.update(this.options[this.curr - 1].name);
				}
			}
		}

	}
</script>	