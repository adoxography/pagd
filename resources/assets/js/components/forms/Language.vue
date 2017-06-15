<script>
import oldErrors from '../../mixins/OldErrors';

export default {
	mixins: [oldErrors],

	props: ['oldLocation'],

	data() {
		return {
			group: { text: '', id: '' },
			parent: { text: '', id: '' },
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