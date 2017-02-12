<template>
	<div>
		<alg-datalist ref="datalists" :list="list" v-for="(line, n) in lists" :name="name" v-model="lists[n]" :disabled="disabled"></alg-datalist>
		<div class="level">
			<div class="level-left">
			</div>
			<div class="level-right">
				<div class="level-item">	
					<a class="button is-info is-small" :class="{ 'is-disabled': lists.length >= 5 || disabled }" @click="addField()">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
					</a>
				</div>
				<div class="level-item">
					<a class="button is-info is-small" :class="{ 'is-disabled': lists.length <= 1 || disabled }" @click="removeField()">
						<span class="icon">
							<i class="fa fa-minus"></i>
						</span>
					</a>
				</div>
			</div>
		</div>

		<em>Suggestions: </em>
		<a @click="suggest('cree')">Cree Dialects</a>
	</div>
</template>

<script>
	export default {
		props: ['list', 'name', 'disabled'],

		data() {
			return {
				numFields: 1,
				lists: [{
					text: '',
					id: ''
				}],
				suggestions: {
					cree: [
						{
							text: 'Plains Cree',
							id: '2'
						},
						{
							text: 'Moose Cree',
							id: '5'
						},
					]
				}
			};
		},

		methods: {
			addField() {
				if(this.lists.length < 5) {
					this.lists.push({
						text: '',
						id: ''
					});
				}
			},

			removeField() {
				if(this.lists.length > 1) {
					this.lists.pop();
				}
			},

			suggest(key) {
				let newLists = [];

				this.suggestions[key].forEach(suggestion => {
					newLists.push({
						text: suggestion.text,
						id: suggestion.id
					});
				});

				this.lists = newLists;
			}
		}
	}
</script>