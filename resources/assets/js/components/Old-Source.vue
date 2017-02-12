<template>
	<div class="alg-old-source">
		<alg-ajaxlist v-model="list" uri="/autocomplete/sources" placeholder="Search for an existing source" ref="datalist" @input="onChange($event)" @keyup.enter="reset"></alg-ajaxlist>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				list: {
					text: '',
					id: ''
				},
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

			reset() {
				this.list.text = '';
				this.list.id = '';
			},

			onChange(event) {
				if(this.$refs.datalist.showCheck){
					this.reset();
				}
			}
		}

	}
</script>