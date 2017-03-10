<template>
	<div class="alg-ajax-list">
		<div class="control">
			<div class="alg-datalist-container">
				<input :name="name"
					   :id="id"
					   type="text"
					   class="input"
					   @input="onInput($event.target.value)"
					   :value="value.text"
					   @keyup="onKeyUp($event.keyCode)"
					   @keydown.enter="onEnter($event)"
					   autocomplete="off" 
					   :placeholder="placeholder"
					   :disabled="disabled" />
				<div class="box alg-datalist-dropdown" v-show="showList && options.length > 0 && value.text.length > 0">
					<ul>
						<li v-for="(option, index) in options">
							<a @click="selectItem(option.name)"
							   @mouseover="onHover(option.name)"
							   :class="{ 'is-highlighted': activeItem(index) }">
							   	{{ option.name }}
							</a>
						</li>
					</ul>
				</div>
				<span class="icon">
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
	export default {

		props: ['name', 'id', 'value', 'with', 'uri', 'placeholder', 'disabled'],

		data() {
			return {
				showList: false,
				options: [],
				loading: false,
				curr: 0,
				extra: ''
			};
		},

		computed: {
			showCheck() {
				return !this.loading && this.value.id > 0 && !this.showList;
			}
		},

		methods: {
			onEnter(event) {
				if(this.showList) { // The list is open
					event.preventDefault();
					this.selectItem(this.options[this.curr - 1].name);
				}
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
				this.showList = false;

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
			},

			onInput(newText) {
				if(newText.length > 0) {
					this.showList = false;
					this.loading = true;

					axios.get(this.uri, {
						params: {
							term: newText,
							language: this.with
						}
					}).then(response => {
						this.options = response.data;

						if(this.options.length > 0) {
							this.showList = true;
						}

						this.loading = false;
					});
				}

				this.update(newText);			
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