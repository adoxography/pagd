import { Validator } from 'vee-validate';

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function hasMorpheme(value, target) {
	let found = false;
	let segments = value.split('-');

	for(let i = 0; i < segments.length && !found; i++) {
		let tokens = segments[i].split('|');
		let morpheme = tokens[tokens.length - 1];

		found = morpheme === target;
	}

	return found;
}

function hasTag(value, target) {
	let result = true;

	if (value.length > 0) {
		result = value.find(item => {
			return target.includes(item.name.replace(/[-*]/g, ''));
		});
	}

	return typeof result !== 'undefined';
}

Validator.extend('datalist_required', {
	getMessage: field => "The " + field + " field is required.",
	validate: value => {
		return value.text && value.text.length > 0;
	}
});

Validator.extend('datalist_exists', {
	getMessage: field => "The " + field + " field is invalid.",
	validate: value => {
		return value.text.length == 0 || isNumeric(value.id);
	}
});

Validator.extend('isHyphenated', {
	getMessage: (field, args) => "The "+field+" field is invalid. (Make sure there is a hyphen on one or both sides.)",
	validate: (value, args) => {
		return value.charAt(0) == '-' || value.charAt(value.length - 1) == '-';
	}
});

Validator.extend('noInternalHyphens', {
	getMessage: (field, args) => "The "+field+" field should only contain one morpheme.",
	validate: (value, args) => {
		let index = value.substring(1).indexOf('-');
		return index < 0 || index == value.length - 2;
	}
});

Validator.extend('hasMorpheme', {
	getMessage: (field, args) => "The "+field+" field must contain a "+args[0]+" morpheme.",
	validate: (value, args) => { return hasMorpheme(value, args[0]); }
});

Validator.extend('notHasMorpheme', {
	getMessage: (field, args) => "The "+field+" field cannot contain a "+args[0]+" morpheme.",
	validate: (value, args) => { return !hasMorpheme(value, args[0]); }
});

Validator.extend('hasTag', {
	getMessage: (field, args) => "The "+field+" field must contain a "+args[0]+" morpheme.",
	validate: (value, args) => { return hasTag(value, args); }
});

Validator.extend('notHasTag', {
	getMessage: (field, args) => "The "+field+" field cannot contain an abstract stem.",
	validate: (value, args) => { return value.length == 0 || !hasTag(value, args); }
});
