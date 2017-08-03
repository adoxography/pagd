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

<style>
.tooltip--bottom-left:before, .tooltip--bottom-right:before, .tooltip--bottom:before {
	border-bottom-color: #fef368;	
}

.tooltip--top-left:before, .tooltip--top-right:before, .tooltip--top:before {
	border-top-color: #fef368;
}

.tooltip:after {
	white-space: pre;
	background-color: #fef368;
	color: #4a4a4a;
}

[class*="tooltip--"]:after {
	text-shadow: 0 -1px 0 #fef368;
	box-shadow: 0 2px 3px rgba(23, 23, 9, 0.1), 0 0 0 1px rgba(23, 23, 9, 0.1);
}
</style>