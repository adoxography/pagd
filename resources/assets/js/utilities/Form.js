import Errors from './Errors';

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

	get(url) {
		return this.submit('get', url);
	}

	post(url) {
		return this.submit('post', url);
	}

	patch(url) {
		return this.submit('patch', url);
	}

	submit(requestType, url) {
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data);

					resolve(response.data);
				})
				.catch(error => {
					if(error.response) {
						this.onFail(error.response.data);
						reject(error.response.data);
					} else {
						alert("Network error. Please try again.");
						console.log(error.message);
						reject({});
					}
				});
		});
	}

	onSuccess(data) {
		// this.reset();
	}

	onFail(errors) {
		this.errors.record(errors);
	}
}

export default Form;