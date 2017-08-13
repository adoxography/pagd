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
			location: null
		};
	},

	methods: {
		updateLocation(event) {
			this.location = event.latLng.toString();
		}
	},

	created() {
		if(this.oldLocation) {
			this.location = this.oldLocation;
		}
	}
};
</script>
