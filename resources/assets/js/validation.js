import { Validator } from 'vee-validate';

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

Validator.extend('datalist_required', {
	getMessage: field => "The " + field + " field is required.",
	validate: value => value.text.length > 0
});

Validator.extend('datalist_exists', {
	getMessage: field => "The " + field + " field is invalid.",
	validate: value => {
		return value.text.length == 0 || isNumeric(value.id);
	}
});

Validator.extend('hasVStem', {
	getMessage: field => "You must indicate a place for the verb stem.",
	validate: (value, args) => {
		let target = args[0] === 'true';
		let found = false;
		let segments = value.split('-');

		for(let i = 0; i < segments.length && !found; i++) {
			let tokens = segments[i].split('|');
			let morpheme = tokens[tokens.length - 1];

			found = morpheme === "V";
		}

		return found == target;
	}
});