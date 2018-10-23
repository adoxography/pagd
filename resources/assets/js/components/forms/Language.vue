<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

	props: ['oldLocation'],

	data() {
		return {
			group: new Datalist,
			parent: new Datalist,
      location: {position: null, type: null},
		};
	},

	methods: {
		updateLocation(event) {
      this.location = event;
		}
	},

	created() {
		if(this.oldLocation) {
			this.location = this.oldLocation;
		}
	}
};
</script>
