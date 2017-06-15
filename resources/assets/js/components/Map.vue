<template>
	<gmap-map
		:center="center"
		:zoom="zoom"
		style="width: 100%; height: 400px"
		@rightclick="onRightClick($event)"
	>
		<gmap-marker
			v-for="(location, index) in markerArray"
			:key="index"
			:position="getLatLng(location)"
			:clickable="true"
			@click="onClickMarker(location)"
		></gmap-marker>
		<gmap-info-window
			:opened="infoWindow.opened"
			:content="infoWindow.content"
			:position="infoWindow.position"
			@closeclick="infoWindow.opened = !infoWindow.opened"
		></gmap-info-window>
	</gmap-map>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

// Initialze google maps
Vue.use(VueGoogleMaps, {
	load: {
  		key: 'AIzaSyATvyKZDW8wl1v1uooU3Z8e_qwd57u0sWI'
    }
});

export default {
	props: ['markers', 'addMode', 'marker'],

	data() {
		return {

			// Map variables
			zoom: 4,
			center: {
				lat: 46.000000,
				lng: -87.659916
			},

			// Variables for the floating info window
			infoWindow: {
				position: this.center,
				opened: false,
				content: ''
			},

			markerArray: [],

			// Temporary language variables - will come from the database when its encoded
			tempLanguages: [
				{
					info: '<strong>Proto\-Algonquian</strong><br>\
						<a href="languages/1">View details</a>',
					latLng: {
						lat: 47.8193982,
						lng: -93.9426735
					}
				},
				{
					info: '<strong>Southwestern Ojibwe</strong><br>\
						<a href="languages/21">View details</a>',
					latLng: {
						lat: 46.264673,
						lng: -93.3965611
					}
				},
				{
					info: '<strong>Shawnee</strong><br>\r\
								<a href="languages/20">View details</a>',
					latLng: {
						lat: 35.3581866,
						lng: -96.9450287
					}
				},
				{
					info: '<strong>Kickapoo</strong><br>\r\
								<a href="languages/3">View details</a>',
					latLng: {
						lat: 39.6637455,
						lng: -95.5462955
					}
				},
				{
					info: '<strong>Meskwaki</strong><br>\r\
								<a href="languages/6">View details</a>',
					latLng: {
						lat: 41.987105,
						lng: -92.6267701
					}
				},
				{
					info: '<strong>Moose Cree</strong><br>\r\
								<a href="languages/5">View details</a>',
					latLng: {
						lat: 51.2455103,
						lng: -80.6183709
					}
				},
				{
					info: '<strong>Plains Cree</strong><br>\r\
								<a href="languages/2">View details</a>',
					latLng: {
						lat: 53.7205087,
						lng: -109.9575429
					}
				},
				{
					info: '<strong>Massachusett</strong><br>\r\
								<a href="languages/4">View details</a>',
					latLng: {
						lat: 42.0593895,
						lng: -70.7674654
					}
				},
				{
					info: '<strong>Proto\-Eastern\-Algonquian</strong><br>\r\
								<a href="languages/14">View details</a>',
					latLng: {
						lat: 44.4807343,
						lng: -72.1798952
					}
				},
				{
					info: '<strong>Nishnaabemwin</strong><br>\r\
								<a href="languages/22">View details</a>',
					latLng: {
						lat: 45.7073775,
						lng: -81.7002825
					}
				},
				{
					info: '<strong>Penobscot</strong><br>\r\
								<a href="languages/23">View details</a>',
					latLng: {
						lat: 44.9502696,
						lng: -68.7220242
					}
				}
			]
		};
	},

	computed: {
		markerIndex() {
			let index = 0; // Database primary keys will never be 0

			if(this.marker) {
				index = this.marker.id;
			}

			return this.markerArray.findIndex(lang => {
				return lang.id == index;
			});
		}
	},

	created() {
		if(this.markers) {
			this.markers.forEach(marker => {
				if(marker.location) {
					this.markerArray.push(marker);
				}
			});
		}
	},

	mounted() {
		if(this.marker) {
			this.openInfoWindow(this.marker);
		}
	},

	methods: {
		onClickMarker(location) {
			this.openInfoWindow(location);
		},

		onRightClick(e) {
			if(this.addMode) {
				let newMarker = this.addMarker(e.latLng);
				this.openInfoWindow(newMarker);
			}
		},

		addMarker(latLng) {
			let marker;
			let index = this.markerIndex;

			if(index >= 0) {
				marker = this.removeMarker(index);
			} else if (this.marker) {
				marker = this.marker;
			} else {
				marker = {
					id: 0,
					name: "New language"
				}
			}

			marker.latLng = latLng;

			this.markerArray.push(marker);

			this.$emit('marker-added', {
				latLng: latLng
			});

			return marker;
		},

		removeMarker(index) {
			let output = this.markerArray.splice(index, 1)[0];

			console.log(output);
			console.log(this.markerArray);

			return output;
		},

		openInfoWindow(location) {
			this.infoWindow.opened = true;
			this.infoWindow.position = this.getLatLng(location);
			this.infoWindow.content  = this.setMarkerContent(location);
		},

		setMarkerContent(location) {
			let output = "<strong>" + location.name + "</strong>";

			if(location.id > 0) {
				let link = "<a href=\"languages/" + location.id + "\">View details</a>";
				output += "<br>\n" + link;
			}
			
			return output;
		},

		getLatLng(location) {
			if(location.latLng) {
				return location.latLng;
			} else if(location.location) {
				let array = location.location.replace(/[\(\)\s]/g,'').split(',');

				return {
					lat: parseFloat(array[0]),
					lng: parseFloat(array[1])
				}
			} else {
				return null;
			}
		}
	}
}
</script>