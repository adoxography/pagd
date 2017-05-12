<template>
	<form action="/verbs/search/paradigm/results" method="GET">
		<input type="hidden" name="affirmative" value="on">
		<input type="hidden" name="modeSelect" value="indicativeOnly">
		<div class="field is-grouped">
			<p class="control">
				<span class="select">
					<select name="classes[]" required="required" v-model="values.class">
						<option value="" selected="selected"><span class="placeholder">Select a class...</span></option>
						<option value="1">AI</option>
						<option value="2">II</option>
						<option value="3">TA</option>
						<option value="4">TI</option>
					</select>
				</span>
			</p>
			<p class="control">
				<span class="select">
					<select @change="onOrderChange($event.target.value)" required="required" v-model="values.orderValue">
						<option value="" selected="selected"><span class="placeholder">Select an order...</span></option>
						<option value="1,3">Conjunct and Independent</option>
						<option value="1">Conjunct</option>
						<option value="2">Imperative</option>
						<option value="3">Independent</option>
					</select>
					<input v-for="order in values.orders" type="hidden" name="orders[]" :value="order">
				</span>
			</p>
			<alg-datalist v-model="values.language"
						  :list="languages"
						  name="languages[]"
						  required="required">
			</alg-datalist>
		</div>
		<button class="button is-success" type="submit">Search</button>
	</form>
</template>

<script>
export default {
	props: ['languages'],

	data() {
		return {
			values: {
				class: '',
				orders: [],
				language: {
					text: 'Proto-Algonquian',
					id: '1'
				},
				orderValue: ''
			}
		};
	},

	methods: {
		onOrderChange(value) {
			let tokens = value.split(',');
			let temp = [];

			tokens.forEach(token => {
				temp.push(token);
			});

			this.values.orders = temp;
		},

		getData() {
			return this.values;
		},

		importData(data) {

			let found = false;
			_.forEach(data.classes, theClass => {
				if(theClass.checked && theClass.id <= 4) {
					this.values.class = theClass.id;
					found = true;
					return false;
				}
			});
			if(!found) {
				this.values.class = '';
			}

			this.values.orders = [];
			this.values.orderValue = '';
			found = false;
			for(let i = 0; i < data.orders.length && !found; i++) {
				found = false;
				if(data.orders[i].checked) {
					if(data.orders[i].id != 1) {
						found = true;
					}

					if(data.orders[i].id != 3 || this.values.orders.length == 0) {
						this.values.orders = [data.orders[i].id];
						this.values.orderValue = data.orders[i].id;
					}
					else {
						this.values.orders = [1,3];
						this.values.orderValue = '1,3';
					}
				}
			}

			if(data.languages.length > 0) {
				this.values.language = data.languages[0];
			}
			else {
				this.values.language = {
					text: '',
					id: ''
				};
			}
		}
	}
}
</script>