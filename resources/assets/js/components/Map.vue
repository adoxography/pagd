<template>
  <div>
    <div class="control" v-show="addMode">
      <label class="radio">
        <input type="radio" :value="null" v-model="addType" />
        None
      </label>
      <label class="radio">
        <input type="radio" value="point" v-model="addType" />
        Point
      </label>
      <label class="radio">
        <input type="radio" value="area" v-model="addType" />
        Area
      </label>
    </div>

    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 400px"
      :options="{streetViewControl: false, mapTypeControl: false}"
      @dragend="onRightClick($event)"
    >
      <!-- Pre-existing zones -->
      <gmap-polygon
        v-for="zone in zones"
        :key="'polygon-'+zone.id"
        :path="zone.location.position"
        :options="{fillColor: zone.color}"
      ></gmap-polygon>

      <!-- New zone -->
      <gmap-polygon
        :path="newZone.location.position"
        :options="{visible: addType == 'area', fillColor: newZone.color}"
        :editable="true"
        @path_changed="updateEdited($event)"
      ></gmap-polygon>

      <!-- Pre-existing markers -->
      <gmap-marker
        v-for="(marker, index) in markerArray"
        :key="'marker-' + marker.id"
        :position="marker.location.position"
        :clickable="true"
        :icon="getIcon(marker)"
        @click="onClickMarker(marker)"
      ></gmap-marker>

      <!-- New marker -->
      <gmap-marker
        :visible="addType == 'point'"
        :position="newMarker.location.position"
        :icon="getIcon(newMarker)"
        :draggable="true"
        @dragend="onRightClick($event)"
      ></gmap-marker>

      <gmap-info-window
        :opened="infoWindow.opened"
        :position="infoWindow.position"
        @closeclick="infoWindow.opened = !infoWindow.opened"
      >
        <span v-html="infoWindow.content"></span>
      </gmap-info-window>
    </gmap-map>
  </div>
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

      zones: [],

      addType: null,
      edited: null,

      newMarker: {
        id: 0,
        name: 'New language',
        color: '0000ff',
        location: {
          type: 'point',
          position: {lng: -96.194, lat: 53.430}
        }
      },

      newZone: {
        id: 0,
        name: 'New language',
        color: '0000ff',
        location: {
          type: 'area',
          position: [
            {lng: -96.194, lat: 53.430},
            {lng: -96.194, lat: 51.300},
            {lng: -92.284, lat: 51.300},
            {lng: -92.284, lat: 53.430}
          ]
        }
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

  watch: {
    addType() {
      this.fireEvent();
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

      for (let i = 0; i < this.markerArray.length; i++) {
        let marker = this.markerArray[i];
        let position = marker.location.position;

        if (typeof position == 'string' || position instanceof String) {
          this.markerArray[i].location.position = JSON.parse(position);
        }
      }

			this.center = this.getCenter();
		}

    this.edited = this.newZone.location.position;
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
			if(this.addType == 'point') {
        let latLng = e.latLng;
        this.newMarker.location.position = e.latLng;
        this.fireEvent();
			}
		},

    updateEdited(mvcArray) {
      let path = [];

      for (let j = 0; j < mvcArray.getLength(); j++) {
        let point = mvcArray.getAt(j);
        path.push({lat: point.lat(), lng: point.lng()});
      }

      this.edited = path;
      this.fireEvent();
    },

    fireEvent() {
      let position = null;

      if (this.addType == 'point') {
        position = this.newMarker.location.position;
      } else if (this.addType == 'area') {
        position = this.edited;
      }

      if (position != null) {
        position = JSON.stringify(position);
      }

      this.$emit('marker-added', {
        type: this.addType,
        position: position
      });
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

		openInfoWindow(marker) {
			this.infoWindow.opened = true;
			this.infoWindow.position = marker.location.position;
			this.infoWindow.content  = this.setMarkerContent(marker);
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
				location = marker.location.position;

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

		getIcon(marker) {
			let color = 'FE7569';

			if(marker.color) {
				color = marker.color;
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
