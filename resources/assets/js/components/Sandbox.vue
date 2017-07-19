<template>
	<div id="container">
		<input type="text" id="input" />
	</div>
</template>

<script>
import 'jquery-ui';

export default {
	mounted() {
		let options = [
			'alpha',
			'beta',
			'gamma'
		];

		$("#input").autocomplete({
			source: options
		});
	}
}
</script>