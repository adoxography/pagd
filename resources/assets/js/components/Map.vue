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
        :options="{fillColor: '#'+zone.color, strokeColor: '#'+zone.color}"
        :clickable="true"
        @click="onClickMarker(zone, 'area', $event)"
      ></gmap-polygon>

      <!-- New zone -->
      <gmap-polygon
        :path="newZone.location.position"
        :options="{visible: addType == 'area', fillColor: '#'+newZone.color, strokeColor: '#'+newZone.color}"
        :editable="true"
        :draggable="true"
        @path_changed="updateEdited($event)"
      ></gmap-polygon>

      <!-- Pre-existing markers -->
      <gmap-marker
        v-for="(marker, index) in markerArray"
        :key="'marker-' + marker.id"
        :position="marker.location.position"
        :clickable="true"
        :icon="getIcon(marker)"
        @click="onClickMarker(marker, 'point')"
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

  watch: {
    addType() {
      this.fireEvent();
    }
  },

	created() {
    /**
     * Process all of the incoming markers
     */
		if(this.markers) {
			if(Array.isArray(this.markers)) {
				this.markers.forEach(marker => this.addEntity(marker));
			} else {
        this.addEntity(this.markers);
			}

			this.center = this.getMapCenter();
		}

    /**
     * Handle the special marker, if provided
     */
    if (this.marker && this.validateEntity(this.marker)) {
      if (this.marker.location.type == 'point') {
        this.newMarker = this.marker;
      } else if (this.marker.location.type == 'area') {
        this.newZone = this.marker;
      }

      this.newMarker.color = '0000ff';
      this.newZone.color = '0000ff';
      this.addType = this.marker.location.type;
    }

    this.edited = this.newZone.location.position;
	},

	mounted() {
    if(this.marker) {
      this.openInfoWindow(this.marker, this.addType);
    }
	},

	methods: {
    /**
     * Fires when a marker or zone is left clicked
     */
		onClickMarker(location, type, event=null) {
			this.openInfoWindow(location, type, event);
		},

    /**
     * Fires when a marker is right clicked
     */
		onRightClick(e) {
			if(this.addType == 'point') {
        let latLng = e.latLng;
        this.newMarker.location.position = e.latLng;
        this.fireEvent();
			}
		},

    /**
     * Adds an entity to the appropriate array
     *
     * The entity will only be added if it passes validation.
     *
     * @param entity  The entity to add
     */
    addEntity(entity) {
      if (this.validateEntity(entity) && (!this.marker || this.marker.id != entity.id)) {
        if (entity.location.type == 'point') {
          this.markerArray.push(entity);
        } else if (entity.location.type == 'area') {
          this.zones.push(entity);
        }
      }
    },

    /**
     * Validates an entity and ensures that it conforms to the component
     * requirements
     *
     * Rejects entities that don't have locations, and if they do have
     * locations, ensures that the location position is an array or object and
     * a color exists on the entity.
     *
     * @param entity  The entity to validate
     * @return  true if the entiy passes and false otherwise
     */
    validateEntity(entity) {
      if (!entity.location) {
        return false;
      }

      let position = entity.location.position;
      if (typeof position == 'string' || position instanceof String) {
        entity.location.position = JSON.parse(position);
      }

      if (!entity.color) {
        if (entity.location.color) {
          entity.color = entity.location.color;
        } else {
          entity.color = 'FE7569';
        }
      }

      return true;
    },

    /**
     * Fires when a zone has been edited
     *
     * @param mvcArray  The data from the editing event
     */
    updateEdited(mvcArray) {
      let path = [];

      for (let j = 0; j < mvcArray.getLength(); j++) {
        let point = mvcArray.getAt(j);
        path.push({lat: point.lat(), lng: point.lng()});
      }

      this.edited = path;
      this.fireEvent();
    },

    /**
     * Fires an update event with the current marker/zone information
     */
    fireEvent() {
      let position = null;

      switch (this.addType) {
        case 'point':
          position = this.newMarker.location.position;
          break;
        case 'area':
          position = this.edited;
          break;
        default:
          break;
      }

      this.$emit('marker-added', {
        type: this.addType,
        position: position ? JSON.stringify(position) : null
      });
    },

    /**
     * Opens the info window, loaded with the appropriate information
     *
     * @param entity  The marker or zone that was clicked
     * @param type    The type of marker -- marker or zone
     * @param event   The event that accompanied the click
     */
		openInfoWindow(entity, type, event) {
      if (type == 'point') {
        this.infoWindow.position = entity.location.position;
      } else if (type == 'area') {
        this.infoWindow.position = event.latLng;
      }

			this.infoWindow.opened   = true;
			this.infoWindow.content  = this.getInfoWindowContent(entity);
		},

    /**
     * Gets the info window content based on an entity
     *
     * @param entity  The entity to base the content off of
     * @return  A string with HTML to load into the info window
     */
		getInfoWindowContent(entity) {
      let output = `<strong>${entity.name}</strong>`;

			if(entity.datapoints) {
        let datapoint = entity.datapoints[0];
        let id = datapoint.id;
        let name = datapoint.value.name;
        let link = `<a href="/datapoints/${id}" style="color: #${entity.color};">${name}</a>`;
        output += `<br>\n${link}`;
			} else if(entity.id > 0) {
        let link = `<a href="/languages/${entity.id}">View details</a>`;
        output += `<br>\n${link}`;
			}

			return output;
		},

    /**
     * Finds the center position of all the entities on the map
     *
     * @return  An object containing lat and lng coordinates for the center
     */
    getMapCenter() {
      let markerPositions = this.markerArray.map(marker => marker.location.position);
      let zonePositions = this.zones.flatMap(zone => zone.location.position);
      const allPositions = [...markerPositions, ...zonePositions];

      return this.getCenter(allPositions);
    },

    /**
     * Finds the center position of a list of coordinates
     *
     * @return  An object containing lat and lng coordinates for the center
     */
		getCenter(positions) {
      let top = -Infinity;
      let bottom = Infinity;
      let left = Infinity;
      let right = -Infinity;
			const markerCompensation = 2.0;

      positions.forEach(position => {
        top = Math.max(top, position.lat);
        bottom = Math.min(bottom, position.lat);
        left = Math.min(left, position.lng);
        right = Math.max(right, position.lng);
      });

			return {
				lat: ((top + bottom) / 2) + markerCompensation,
				lng: ((left + right) / 2)
			}
		},

    /**
     * Retrieves the appropriately colored icon for a marker
     *
     * @param marker  The marker object to base the icon off of
     * @return  An object with a url key
     */
		getIcon(marker) {
      let color = marker.color;
			return {
        url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|'+color
      };
		}
	}
}
</script>
