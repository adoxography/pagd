<template>
	<form class="box paradigm-search-form"
		  @submit.prevent="onSubmit"
		  @keydown="form.errors.clear($event.target.name)">
		<div class="columns">
			<div class="column box is-2">
				<h5 class="title is-5">Class</h5>
				<div class="control is-grouped">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="1"
								   @change="handleCheck($event.target, 'classes')"
								   >
							AI
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="2"
								   @change="handleCheck($event.target, 'classes')"
								   >
							II
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="3"
								   @change="handleCheck($event.target, 'classes')"
								   >
							TI
						</label>
					</p>
				</div>

				<div class="box">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Local
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Mixed
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Non-Local
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Inanimate
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Impersonal
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							Obviative
						</label>
					</p>
				</div>

				<div class="control is-grouped">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							AI+O
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   >
							TA+O
						</label>
					</p>
				</div>
			</div>

			<div class="column box is-2">
				<h5 class="title is-5">Order</h5>
					<p v-for="order in orderArray" class="control">
						<label class="checkbox">
							<input type="checkbox"
								   name="orders[]"
								   :value="order.id"
								   @change="handleCheck($event.target, 'orders')">
							{{ order.name }}
						</label>
					</p>				
			</div>
		</div>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'orders'],

	data() {
		return {
			loading: false,
			orderArray: [],
			form: new Form({
				classes: [],
				orders: []
			})
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.get('/search/paradigm');
		},

		handleCheck(target, arrayName) {
			let value = target.value;

			if(target.checked) {
				console.log(this.form[arrayName]);
				this.form[arrayName].push(value);
			}
			else {
				let index = this.form[arrayName].indexOf(value);
				if(index >= 0) {
					this.form[arrayName].splice(index, 1);
				}
			}
		}
	},

	created() {
		this.orderArray = JSON.parse(this.orders);
	}
}
</script>