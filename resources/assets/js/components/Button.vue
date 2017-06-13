<template>
	<div>
		<a @click.prevent="onClick">
			<slot></slot>
		</a>
		<form method="POST" :action="action" ref="form">
			<input type="hidden" name="_token" :value="token" />
			<input type="hidden" name="_method" :value="method" />
		</form>
	</div>
</template>

<script>
export default {
	props: ['method', 'action'],

	computed: {
		token() {
			return Laravel.csrfToken;
		}
	},

	methods: {
		onClick() {
			if(confirm("Are you sure?")) {
				this.$refs.form.submit();
			}
		}
	}
}
</script>