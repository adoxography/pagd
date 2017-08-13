<template>
	<tooltip :label="label" :placement="placement" :rounded="false" :size="size">
		<slot></slot>
	</tooltip>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'

export default {
	props: {
		label: {
			type: String,
			default: ''
		},

		placement: {
			type: String,
			default: 'bottom'
		},

	    size: {
	      type: String,
	      default: 'medium',
	      validator: value => ['small', 'medium', 'large'].includes(value)
	    }
	},

	components: {
		Tooltip
	}
}
</script>
