<template>
	<tooltip :label="label" :placement="placement" :rounded="false">
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
		}
	},

	components: {
		Tooltip
	}
}
</script>

<style>
.tooltip--bottom-left:before {
	border-bottom-color: #fef368;	
}

.tooltip:after {
	white-space: pre;
	background-color: #fef368;
	color: #4a4a4a;
}

[class*="tooltip--"]:after {
	text-shadow: 0 -1px 0 #fef368;
	box-shadow: 0 2px 3px rgba(255, 255, 139, 0.1), 0 0 0 1px rgba(255, 255, 139, 0.1);
}
</style>