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