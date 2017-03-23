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

	submit(requestType, url, attempt = 0) {
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data);

					resolve(response.data);
				})
				.catch(error => {
					if(error.response) {
						if(error.response.status == 422) {
							this.onFail(error.response.data);
						}
						else if(error.response.status = 500) {
							alert('System error. Please submit a bug report including what you were doing and when.');
						}
						else {
							alert("Network error "+error.response.status+". Please try again.");
						}

						reject(error.response.data);
					}
					else {
						if(attempt < 5) {
							submit(requestType, url, attempt + 1);
						} else {
							alert("Network error. Please try again.");
							reject({});
						}
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