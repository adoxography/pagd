<script>
import Vuebar from 'vuebar';
Vue.use(Vuebar);

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

    Vue.nextTick(() =>  {
      table.style.width = table.firstChild.scrollWidth + 'px';
      //console.log(table.style.width);
    });

    let header = table.firstChild;
    for (let row of header.children) {
      for (let cell of row.children) {
        cell.style.top = cell.offsetTop + 'px';
      }
    }
  }
};
</script>
