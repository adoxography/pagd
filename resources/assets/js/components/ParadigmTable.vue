<script>
export default {
	props: ['morphemesOn', 'hasMorphemes'],

	data() {
		return {
			show: false
		};
	},

	methods: {
		toggleShow() {
			this.show = !this.show;
		},


	},

	created() {
		if(this.morphemesOn) {
			this.show = this.hasMorphemes && this.morphemesOn;
		}
	},

  mounted() {
    let table = this.$refs.table;
    table.style.width = table.firstChild.scrollWidth + 'px';
  }
};
</script>
