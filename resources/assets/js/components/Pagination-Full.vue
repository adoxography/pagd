<template>
	<nav class="alg-pagination-full">
		<a
			class="pagination-previous"
			:disabled="value == 0"
			@click="onClick(value - 1)">
				Previous
		</a>
		<a
			class="pagination-next"
			:disabled="value == pages - 1"
			@click="onClick(value + 1)">
				Next
		</a>
		<ul class="pagination-list">
			<li v-for="n in pages">
				<a class="pagination-link" :disabled="value == n - 1" @click="onClick(n - 1)">{{ printLabel(n - 1) }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['pages', 'value', 'alpha', 'labels'],

	methods: {
		onClick(newValue) {
			this.$emit('input', newValue);
		},

		printLabel(index) {
			if(this.labels) {
				return this.labels[index];
			} else if(this.alpha){
				return (index + 10).toString(36).toUpperCase();
			} else {
				return index + 1;
			}
		}
	}
}
</script>