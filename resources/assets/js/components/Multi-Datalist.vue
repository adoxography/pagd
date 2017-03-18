<template>
	<div>
		<alg-datalist ref="datalists" :list="list" v-for="(line, n) in value" :name="name" v-model="value[n]" :disabled="disabled"></alg-datalist>
		<div class="level">
			<div class="level-left">
			</div>
			<div class="level-right">
				<div class="level-item">	
					<a class="button is-info is-small" :class="{ 'is-disabled': value.length >= 5 || disabled }" @click="addField()">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
					</a>
				</div>
				<div class="level-item">
					<a class="button is-info is-small" :class="{ 'is-disabled': value.length <= 1 || disabled }" @click="removeField()">
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
		props: ['value', 'list', 'name', 'disabled'],

		data() {
			return {
				numFields: 1,
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
				if(this.value.length < 5) {
					let temp = this.value;
					temp.push({
						text: '',
						id: ''
					});

					this.$emit('input', temp);
				}
			},

			removeField() {
				if(this.value.length > 1) {
					let temp = this.value;
					temp.pop();
					this.$emit('input', temp);
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

				this.$emit('input', newLists);
			},
		}
	}
</script>