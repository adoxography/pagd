<template>
	<alg-ajaxlist uri="/autocomplete/sources" placeholder="Search for an existing source" ref="ajaxlist" @change="onChange($event)"></alg-ajaxlist>
</template>

<script>
	export default {

		props: {
			
		},

		data() {
			return {
				short: '',
				id: ''
			};
		},

		methods: {
			add() {
				if(this.id){
					this.$emit('input', this.$data);
					this.$refs.ajaxlist.text = '';
					this.$refs.ajaxlist.value = '';
				}
			},

			onChange(event) {
				this.short = event.text;
				this.id    = event.id;

				if(this.id){
					this.$emit('input', this.$data);
					this.$refs.ajaxlist.text = '';
					this.$refs.ajaxlist.value = '';
					this.short = "";
					this.id = "";
				}
			}
		}

	}
</script>