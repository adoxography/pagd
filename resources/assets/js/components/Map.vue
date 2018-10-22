<template>
	<gmap-map
		:center="center"
		:zoom="zoom"
		style="width: 100%; height: 400px"
		@rightclick="onRightClick($event)"
    :options="{streetViewControl: false, mapTypeControl: false}"
	>
    <gmap-polygon
      v-for="zone in zones"
      :key="'polygon-'+zone.name"
      :path="zone.path"
      :options="{fillColor: zone.color}"
    ></gmap-polygon>

    <gmap-marker
      v-for="(location, index) in markerArray"
      :key="'marker-' + index"
      :position="getLatLng(location)"
      :clickable="true"
      :icon="getIcon(location)"
      @click="onClickMarker(location)"
    ></gmap-marker>

		<gmap-info-window
			:opened="infoWindow.opened"
			:position="infoWindow.position"
			@closeclick="infoWindow.opened = !infoWindow.opened"
		>
			<span v-html="infoWindow.content"></span>
		</gmap-info-window>
	</gmap-map>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

// Initialze google maps
Vue.use(VueGoogleMaps, {
	load: {
      key: 'AIzaSyCLFKIvNQZfk0Q-h4nwSHpYMFRx7TZW5Yc',
      v: '3.33'
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

      zones: [
        //{
          //name: 'Foo',
          //path: [
            //{lng: 94.5243292, lat: 55.5964913},
            //{lng: 96.1942511, lat: 53.4286678},
            //{lng: 99.5340949, lat: 53.4286678},
            //{lng: 96.0184699, lat: 51.8012962},
            //{lng: 97.6883917, lat: 49.2026878},
            //{lng: 94.2606574, lat: 51.0063078},
            //{lng: 90.6131964, lat: 49.773621 },
            //{lng: 92.2831183, lat: 51.9911227},
            //{lng: 88.9432745, lat: 53.5332733},
            //{lng: 92.7225714, lat: 53.4810028}
          //],
          //color: 'green'
        //},
      ],

			// Variables for the floating info window
			infoWindow: {
				position: this.center,
				opened: false,
				content: ''
			},

			markerArray: []
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

			if(Array.isArray(this.markers)) {
				this.markers.forEach(marker => {
					if(marker.location) {
						this.markerArray.push(marker);
					}
				});
			} else {
				this.markerArray.push(this.markers);
			}

			this.center = this.getCenter();
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

			return output;
		},

		openInfoWindow(location) {
			this.infoWindow.opened = true;
			this.infoWindow.position = this.getLatLng(location);
			this.infoWindow.content  = this.setMarkerContent(location);
		},

		setMarkerContent(location) {
			let output = "<strong>" + location.name + "</strong>";

			if(location.datapoints) {
				let link = "<a href=\"/datapoints/" + location.datapoints[0].id + "\" style=\"color: #" + location.color + ";\">" + location.datapoints[0].value.name + "</a>";
				output += "<br>\n" + link;
			} else if(location.id > 0) {
				let link = "<a href=\"/languages/" + location.id + "\">View details</a>";
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
		},

		getCenter() {
			let location, left, right, top, bottom;
			let markerCompensation = 2.0;
			let initialized = false;

			this.markerArray.forEach(marker => {
				location = this.getLatLng(marker);

				if(location) {
					if(!initialized) {
						initialized = true;

						top = location.lat;
						bottom = location.lat;
						left = location.lng;
						right = location.lng;
					} else {
						top = Math.max(top, location.lat);
						bottom = Math.min(bottom, location.lat);
						left = Math.min(left, location.lng);
						right = Math.max(right, location.lng);
					}
				}
			});

			return {
				lat: ((top + bottom) / 2) + markerCompensation,
				lng: ((left + right) / 2)
			}
		},

		getIcon(location) {
			let color = 'FE7569';

			if(location.color) {
				color = location.color;
			}

			return { url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + color };
		},

    arr2Coords(arr) {
      return arr.map(coords => {
        return {lat: coords[0], lng: coords[1]}
      });
    }
	}
}
</script>
