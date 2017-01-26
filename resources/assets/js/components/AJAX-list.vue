<template>
	<div>
		<div class="control">
			<div class="alg-datalist-container">
				<input :name="name" type="text" class="input" @input="onInput" v-model="text" @keyup="onKeyUp($event.keyCode)" @keydown.enter="onEnter($event)" autocomplete="off" :placeholder="placeholder" />
				<div class="box alg-datalist-dropdown" v-show="showList && options.length > 0 && text.length > 0">
					<ul>
						<li v-for="(option, index) in options">
							<a @click="selectItem(option.name)" @mouseover="onHover(option.name)" :class="{ 'is-highlighted': activeItem(index) }">{{ option.name }}</a>
						</li>
					</ul>
				</div>
				<span class="icon">
					<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
					<i class="fa fa-check" v-show="showCheck" style="color: green;"></i>
				</span>
			</div>
		</div>
		<input type="hidden" :name="name + '_id'" v-model="value" />
	</div>
</template>

<script>
	export default {

		props: ['name', 'inittext', 'initvalue', 'uri', 'placeholder'],

		data() {
			return {
				text: '',
				value: '',
				showList: false,
				options: [],
				loading: false,
				curr: 0,
				language: 1
			};
		},

		computed: {
			showCheck() {
				return !this.loading && this.value > 0 && !this.showList;
			}
		},

		methods: {
			onEnter(event) {
				if(this.curr > 0) { // The list is open
					event.preventDefault();
					this.selectItem(this.options[this.curr - 1].name);
				}
			},

			determineValue() {
				let val = '';

				for(let i = 0; i < this.options.length && val === ''; i++) {
					if(this.options[i].name.toLowerCase() === this.text.toLowerCase()) {
						val = this.options[i].id;
					}
				}

				this.value = val;
			},

			selectItem(item) {
				// Set the text
				this.text = item;

				this.determineValue();

				// Hide the list
				this.showList = false;

				// Reset the current element
				this.curr = 0;

				// Trigger an input event
				this.$emit("input", { text: this.text, code: this.code });
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

			onInput() {
				this.value = "";

				if(this.text.length > 0) {
					this.showList = false;
					this.loading = true;

					axios.get(this.uri, {
						params: {
							term: this.text,
							language: this.language
						}
					}).then(response => {
						this.options = response.data;

						this.showList = true;
						this.loading = false;
					});
				}
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
						this.text = this.options[this.curr - 1].name;
					}
				}
			},

			handleUpKey() {
				this.curr += this.options.length;
				this.curr %= this.options.length + 1;
				if(this.curr > 0){
					this.text = this.options[this.curr - 1].name;
				}
			}
		},

		created() {
			if(this.inittext) {
				this.text = this.inittext;
			}
			if(this.initvalue) {
				this.value = this.initvalue;
			}

			Event.$on('update', (data) => {
				if(data.field == 'language_id'){
					this.language = data.code;
				}
			});
		}

	}
</script>	