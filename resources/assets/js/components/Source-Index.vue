<template>
	<div class="box">
		<alg-pagination-full :pages="list.length" v-model="page" :alpha="true"></alg-pagination-full>
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
				<tr v-for="row in list[page]">
					<td>
						<a :href="'/sources/'+row.id">{{ row.display }}</a>
					</td>
					<td v-html="row.long">
					</td>
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
		};
	},

	created() {
		this.list = JSON.parse(this.sources);
		console.log(this.list);
	}
}
</script>