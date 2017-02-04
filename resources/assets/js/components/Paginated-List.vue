<template>
	<div class="card">
		<header class="card-header">
		<nav class="pagination">
		  	<a class="pagination-previous" :class="{ 'is-disabled': selected <= 0 }" @click="previousPage">Previous</a>
		  	<a class="pagination-next"  :class="{ 'is-disabled': selected >= pages.length - 1 }" @click="nextPage">Next</a>
<!-- 		    <li>
		      <a class="pagination-link">1</a>
		    </li>
		    <li>
		      <span class="pagination-ellipsis">&hellip;</span>
		    </li>
		    <li>
		      <a class="pagination-link">45</a>
		    </li>
		    <li>
		      <a class="pagination-link is-current">46</a>
		    </li>
		    <li>
		      <a class="pagination-link">47</a>
		    </li>
		    <li>
		      <span class="pagination-ellipsis">&hellip;</span>
		    </li>
		    <li>
		      <a class="pagination-link">86</a>
		    </li> -->
		  </ul>
		</nav>
		</header>
		<div class="card-content">
			<div class="content">
				<ul v-for="(page, index) in pages" v-show="selected == index">
					<li v-for="item in page">{{ item.surfaceForm }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['list'],

	data() {
		return {
			items: [],
			pages: [],
			selected: 0
		};
	},

	created() {
		this.items = JSON.parse(this.list);

		for(let i = 0; i < this.items.length; i += 15) {
			this.pages.push(this.items.slice(i, i + 15));
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