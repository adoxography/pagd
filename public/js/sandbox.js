class Errors {
	constructor() {
		this.errors = {};
	}

	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	clear(field) {
		if(field) {
			delete this.errors[field];
		}
		else{
			this.errors = {};
		}
	}

	record(errors) {
		this.errors = errors;
	}

	has(field) {
		return this.errors.hasOwnProperty(field);
	}

	any() {
		return Object.keys(this.errors).length > 0;
	}
}

class Form {
	constructor(data) {
		this.originalData = data;

		for (let field in data) {
			this[field] = data[field];
		}

		this.errors = new Errors();
	}

	data() {
		let data = {};

		for(let property in this.originalData) {
			data[property] = this[property];
		}

		return data;
	}

	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}

		this.errors.clear();
	}

	post(url) {
		return this.submit('post', url);
	}

	submit(requestType, url) {
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data);

					resolve(response.data);
				})
				.catch(error => {
					this.onFail(error.response.data);

					reject(error.response.data);
				});
		});
	}

	onSuccess(data) {
		alert(data.message);

		this.reset();
	}

	onFail(errors) {
		this.errors.record(errors);
	}
}

Vue.component('algling-text', {
	props: ['name','id','value','label'],
	data() {
		return {
			options: {
				'Proto-Algonquian': 1,
				'Plains Cree': 2
			},
			hiddenValue: 0
		};
	},
	template: `
		<div>
			<label :for="id" class="label">{{ label }}</label>
			<input type="text" :name="name" :id="id" class="input" :value="value" @input="updateValue($event.target.value)" />
			<li v-for="(code, name) in options">{{ name }}</li>
			<input type="text" :name="name+'_id'" :id="id+'-id'" :value="hiddenValue" />
		</div>
	`,
	methods: {
		updateValue(newValue) {
			if(this.options[newValue]) {
				this.hiddenValue = this.options[newValue];
				delete this.options[newValue];
			}
			else {
				this.hiddenValue = -1;
			}

			this.$emit('input', newValue);
		}
	}
});

new Vue({
	el: '#root',
	data: {
		testModel: '',
		form: new Form({
			name: '',
			description: ''
		})
	},
		methods: {
		onSubmit: function() {
			this.form.post('/sandbox')
				.then(data => console.log("Submitted successfully."))
				.catch(error => console.log("An error occurred"));
		}
	}
});