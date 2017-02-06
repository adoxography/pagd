<template>
	<div class="alg-paginated-list box">
		<nav class="pagination">
		  	<a class="pagination-previous" :class="{ 'is-disabled': selected <= 0 }" @click="previousPage">Previous</a>
		  	<a class="pagination-next"  :class="{ 'is-disabled': selected >= pages.length - 1 }" @click="nextPage">Next</a>
		  	<ul class="pagination-list">
    			<li>
		  			<a class="pagination-link" :class="{ 'is-disabled': selected == 0 }" @click="selected = 0">1</a>
		  		</li>
		  		<li v-show="selected > 2 && pages.length > 5">
		  			<span class="pagination-ellipsis">&hellip;</span>
		  		</li>
		  		<li v-show="pages.length > 2">
		  			<a class="pagination-link" :class="{ 'is-disabled': selected == mid - 1 }" @click="selected = mid - 1">{{ mid }}</a>
		  		</li>
		  		<li v-show="pages.length > 3">
		  			<a class="pagination-link" :class="{ 'is-disabled': selected == mid }" @click="selected = mid">{{ mid + 1 }}</a>
		  		</li>
		  		<li v-show="pages.length > 4">
		  			<a class="pagination-link" :class="{ 'is-disabled': selected == mid + 1 }" @click="selected = mid + 1">{{ mid + 2 }}</a>
		  		</li>
		  		<li v-show="selected < pages.length - 3 && pages.length > 5">
		  			<span class="pagination-ellipsis">&hellip;</span>
		  		</li>
		  		<li v-show="pages.length > 1">
		  			<a class="pagination-link" :class="{ 'is-disabled': selected == pages.length - 1}" @click="selected = pages.length - 1">{{ pages.length }}</a>
		  		</li>
		  	</ul>
		</nav>
		<div class="content">
			<ul v-for="(page, index) in pages" v-show="selected == index">
				<li v-for="item in page"><a :href="'/morphemes/'+item.id">{{ item.name }}<sup>{{ item.disambiguator }}</sup> (<span class="gloss">{{ item.gloss.abv }}</span>)</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['list'],

	data() {
		return {
			selected: 0
		};
	},

	computed: {
		pages() {
			let pages = [];

			for(let i = 0; i < this.list.length; i += 10) {
				pages.push(this.list.slice(i, i + 10));
			}

			return pages;
		},

		mid() {
			return Math.max(Math.min(this.selected, this.pages.length - 3), 2);
			// return Math.min(Math.max(this.selected, 2), this.pages.length - 3);
		}
	},

	methods: {
		previousPage() {
			if(this.selected > 0) {
				this.selected--;
			}
		},

		nextPage() {
			if(this.selected < this.pages.length - 1) {
				this.selected++;
			}
		}
	}
}
</script>