<template>
  <l-map
    :center="center"
    :zoom="zoom"
    style="width: 100%; height: 400px"
    >
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <l-marker
        v-for="(marker, i) in markerArray"
        :key="'marker-' + marker.id"
        :lat-lng="marker.location.position"
        >
        <l-popup>
          <div v-html="getInfoWindowContent(marker)" />
        </l-popup>
      </l-marker>
  </l-map>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup
} from 'vue2-leaflet';
import 'leaflet-defaulticon-compatibility';

import * as VueGoogleMaps from 'vue2-google-maps';

// Initialze google maps
Vue.use(VueGoogleMaps, {
	load: {
      key: 'AIzaSyCLFKIvNQZfk0Q-h4nwSHpYMFRx7TZW5Yc',
      v: '3.33'
    }
});

export default {
  props: {
    'markers': [Array, Object],
    'addMode': Boolean,
    'marker': Object,
    'zonesEnabled': {
      type: Boolean,
      default: true
    }
  },

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },

	data() {
		return {

			// Map variables
      zoom: 4,
      center: {
        lat: 46.000000,
        lng: -87.659916
      },

			markerArray: []
		};
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
	},

	mounted() {
    if(this.marker) {
      this.openInfoWindow(this.marker, this.addType);
    }
	},

	methods: {
    /**
     * Adds an entity to the appropriate array
     *
     * The entity will only be added if it passes validation.
     *
     * @param entity  The entity to add
     */
    addEntity(entity) {
      if (this.validateEntity(entity) && (!this.marker || this.marker.id != entity.id)) {
        this.markerArray.push(entity);
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
      return this.getCenter(markerPositions);
    },

    /**
     * Finds the center position of a list of coordinates
     *
     * @return  An object containing lat and lng coordinates for the center
     */
		getCenter(positions, compensation=2.0) {
      let top = -Infinity;
      let bottom = Infinity;
      let left = Infinity;
      let right = -Infinity;

      positions.forEach(position => {
        top = Math.max(top, position.lat);
        bottom = Math.min(bottom, position.lat);
        left = Math.min(left, position.lng);
        right = Math.max(right, position.lng);
      });

			return {
				lat: ((top + bottom) / 2) + compensation,
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
