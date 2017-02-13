class Errors {
	constructor() {
		this.errors = {};
	}

	get(field) {
		if (this.errors[field]) {
			if(Array.isArray(this.errors[field][0])) {
				return this.errors[field][0][0]
			}
			else {
				return this.errors[field][0];
			}
		}
	}

	clear(field) {
		if(field) {
			delete this.errors[field];
			delete this.errors[field+"_id"];
			delete this.errors[field+"_text"];
		}
		else{
			this.errors = {};
		}
	}

	record(errors) {
		this.errors = {};

		if(errors) {
			_.forEach(errors, (value, key) => {
				let realKey = key.split(".")[0];

				if(!this.errors[realKey]) {
					this.errors[realKey] = [];
				}

				this.errors[realKey].push(value);
			});
		}
	}

	has(field) {
		if(Array.isArray(field)) {
			let result = false;

			field.forEach(value => {
				result = result || this.has(value);
			});

			return result;
		}
		return this.errors.hasOwnProperty(field);
	}

	any() {
		return Object.keys(this.errors).length > 0;
	}
}

export default Errors;