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
						else if(error.response.status == 500) {
							alert('System error. Please submit a bug report including what you were doing and when.');
						}
						else if(error.response.status == 400) {
							console.log("Error 400");

							if(attempt < 5) {
								return this.submit(requestType, url, attempt + 1)
								console.log("Retrying...");
							}
							else {
								console.log("Exceeded maximum retries.");
							}
						}
						else {
							alert("Network error "+error.response.status+". Please try again.");
						}

						reject(error.response.data);
					}
					else {
						alert("Network error. Please try again.");
						console.log(error);
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