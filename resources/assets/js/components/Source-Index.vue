<template>
	<div class="alg-source-index">

		<!-- The search box -->
		<p class="control has-icon">
			<input class="input" type="text" v-model="filter" @input="onFilter($event.target.value)" autofocus="autofocus" />
			<span class="icon is-left">
				<i class="fa fa-search"></i>
			</span>
		</p>

		<!-- The pages -->
		<alg-pagination-full :pages="list.length" v-model="page" :alpha="true"></alg-pagination-full>

		<!-- The content -->
		<table class="table">
			<thead>
				<tr>
					<th>
						Author/Year
					</th>
					<th>
						Full Citation
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in filterList(list[page])">
					<td>
						<a :href="'/sources/'+row.id">{{ row.display }}</a>
					</td>
					<td v-html="setHTML(row)"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ['sources'],

	data() {
		return {
			page: 0,
			filter: ''
		};
	},

	methods: {
		onFilter(text) {
			if(text.length == 1) {
				let chars = "abcdefghijklmnopqrstuvwxyz".split("");
				let index = chars.indexOf(text.toLowerCase());

				if(index >= 0) {
					this.page = index;
				}
			}
		},

		filterList(list) {
			let output = [];
			let filter = this.filter.toLowerCase();
			
			if(filter.length > 0) {
				list.forEach(item => {
					if(item.long.toLowerCase().includes(filter) || item.display.toLowerCase().includes(filter)) {
						output.push(item);
					}
				});
			} else {
				output = list;
			}

			return output;
		},

		setHTML(row) {
			let output = row.long;

			if(row.summary) {
				output = "<div>" + output + "<span class=\"tag is-primary\">Summary available</span></div>";
			}

			return output;
		}
	},

	created() {
		this.list = JSON.parse(this.sources);
	}
}
</script>