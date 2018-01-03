<template>
	<div>
		<div class="field" v-for="(line, n) in value">
			<alg-datalist ref="datalists" :list="list" :key="n" :name="name" v-model="value[n]" :disabled="disabled"></alg-datalist>
		</div>
		<div class="level">
			<div class="level-left">
			</div>
			<div class="level-right">
				<div class="level-item">	
					<a class="button is-primary is-small" :disabled="value.length >= 5 || disabled" @click="addField()">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
					</a>
				</div>
				<div class="level-item">
					<a class="button is-primary is-small" :disabled="value.length <= 1 || disabled" @click="removeField()">
						<span class="icon">
							<i class="fa fa-minus"></i>
						</span>
					</a>
				</div>
			</div>
		</div>

		<em>Suggestions: </em>
		<a @click="suggest('cree')">Cree Dialects</a>,
		<a @click="suggest('ojibwe')">Ojibwe Dialects</a>
	</div>
</template>

<script>
import { Datalist } from '../Datalist.js';

	export default {
		props: ['value', 'list', 'name', 'disabled'],

		data() {
			return {
				numFields: 1,
				suggestions: {
					cree: [
						new Datalist('Plains Cree', 2),
						new Datalist('Woods Cree', 35),
						new Datalist('Swampy Cree', 59),
						new Datalist('Moose Cree', 5),
						new Datalist('Atikamekw', 36),
						new Datalist('Southern East Cree', 37),
						new Datalist('Northern East Cree', 38),
						new Datalist('Sheshatshiu Innu', 39)
					],

					ojibwe: [
						new Datalist('Saulteaux', 27),
						new Datalist('Southwestern Ojibwe', 21),
						new Datalist('Oji-Cree', 28),
						new Datalist('Odawa', 29),
						new Datalist('Nishnaabemwin', 22),
						new Datalist('Nipissing', 31),
						new Datalist('Old Algonquin', 32),
						new Datalist('Lac Simon Algonquin', 33),
						new Datalist('Golden Lake Algonquin', 34),
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