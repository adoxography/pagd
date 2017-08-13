<template>
	<div>
		<input-tag :tags="tagsArray"></input-tag>
<!-- 		<input
			type="text"
			autocomplete="off"
			v-model="query"
			@keydown.down="down"
			@keydown.up="up"
			@keydown.esc="reset"
			@input="triggerUpdate"
			@keydown.enter="enter($event)"
		/>
		<editable
			v-model="query"
			@keydown.down="onDown"
			@keydown.up="up"
			@keydown.esc="reset"
			@input="triggerUpdate"
			@keydown.enter="enter($event)"
		></editable> -->
		<button @click="toggleList">Click me</button>
		<input type="hidden"
			v-model="id">
		<ul v-show="hasItems">
			<li v-for="(item, $item) in items" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
				<span v-text="item.name"></span>
			</li>
		</ul>
	</div>
</template>

<script>
import VueTypahead from 'vue-typeahead';
import InputTag from 'vue-input-tag';

export default {
	extends: VueTypahead,

	props: ['list'],

	components: {
		InputTag,

		editable: {
			props: ['value'],

			template: `
				<div
					contenteditable="true"
					class="input"
					:innerHTML="value"
					@input="update($event)"
					@keydown="keydown($event)"
				>{{ value }}</div>
			`,

			// mounted() {
			// 	if (this.value) {
			// 		this.$el.innerHTML = "<p>" + this.value + "</p>";
			// 	}
			// },

			methods: {
				update(event) {
					console.log(this.clearUselessTags(event.target.innerHTML));
					this.$emit('input', this.clearUselessTags(event.target.innerHTML));
				},

				clearUselessTags(str) {
					return str.replace(/<[^>]*>{2}/, '');
				},

				keydown(event) {
					this.$emit('keydown', event);
				}
			}
		}
	},

	data() {
		return {
			queryParamName: 'term',
			id: '',
			tagsArray: []
		};
	},

	methods: {
		onHit(item) {
			this.query = item.name;
			this.id = item.id;
			this.items = [];
		},

		triggerUpdate() {
			if (Array.isArray(this.list)) {
				this.filter();
			} else {
				this.update();
			}
		},

		filter() {
			this.items = this.list.filter(item => {
				return item.name.toLowerCase().includes(this.query.toLowerCase());
			});
		},

		onDown() {
			this.filter();

			if (!this.hasItems) {
				this.items = this.list;
			}
		},

		enter(event) {
			if (this.current >= 0) {
				event.preventDefault();
				this.hit();
			}
		},

		toggleList() {
			if (this.hasItems) {
				this.items = [];
			} else {
				this.filter();

				if (!this.hasItems) {
					this.items = this.list;
				}
			}
		}
	}
}
</script>

<style>
li.active {
	background-color:red;
}
</style>