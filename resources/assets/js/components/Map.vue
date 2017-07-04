<template>
	<gmap-map
		:center="center"
		:zoom="zoom"
		style="width: 100%; height: 400px"
		@rightclick="onRightClick($event)"
	>
	    <ground-overlay source="./img/giphy.gif" :bounds="{
	            north: 1.502,
	            south: 1.185,
	            east: 104.0262,
	            west: 103.5998,
	      	}" :opacity="0.5"
        ></ground-overlay>
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

			markerArray: []
		};
	},

	components: {
		'ground-overlay': Vue.extend({
	        render() {
	          	return '';
	        },
	        mixins: [VueGoogleMaps.MapElementMixin],
	        props: ['source', 'bounds', 'opacity'],
	        created() {},
	        deferredReady: function() {
	          	this.$overlay = new google.maps.GroundOverlay(
	            	this.source,
	            	this.bounds
	          	);
	          	this.$overlay.setOpacity(this.opacity);
	          	this.$overlay.setMap(this.$map);
	        },
	        destroyed: function() {
	          	this.$overlay.setMap(null);
	        },
      	})
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