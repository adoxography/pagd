<template>
	<nav class="pagination">
		<a
			class="pagination-previous"
			:class="{ 'is-disabled': value == 0 }"
			@click="onClick(value - 1)">
				Previous
		</a>
		<a
			class="pagination-next"
			:class="{ 'is-disabled': value == pages - 1 }"
			@click="onClick(value + 1)">
				Next
		</a>
		<ul class="pagination-list">
			<li>
				<a class="pagination-link" :class="{ 'is-disabled': value == 0 }" @click="onClick(0)">{{ printLabel(0) }}</a>
			</li>
			<li v-show="value > 2 && pages > 5">
				<span class="pagination-ellipsis">&hellip;</span>
			</li>
			<li v-for="n in 3" v-show="pages > (n + 1)">
				<a
					class="pagination-link"
					:class="{ 'is-disabled': value == (mid - 2 + n) }"
					@click="onClick(mid - 2 + n)">
						{{ printLabel(mid - 2 + n) }}
				</a>
			</li>
			<li v-show="value < pages - 3 && pages > 5">
				<span class="pagination-ellipsis">&hellip;</span>
			</li>
			<li v-show="pages > 1">
				<a class="pagination-link" :class="{ 'is-disabled': value == pages - 1}" @click="onClick(pages - 1)">{{ printLabel(pages-1) }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['pages', 'value', 'alpha'],

	computed: {
		mid() {
			return Math.max(Math.min(this.value, this.pages - 3), 2);
		}
	},

	methods: {
		onClick(newValue) {
			this.$emit('input', newValue);
		},

		printLabel(index) {
			if(this.alpha){
				return (index + 10).toString(36).toUpperCase();
			} else {
				return index + 1;
			}
		}
	}
}
</script>