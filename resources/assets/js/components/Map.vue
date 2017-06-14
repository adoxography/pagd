<template>
	<gmap-map
		:center="center"
		:zoom="zoom"
		style="width: 100%; height: 400px"
	>
		<gmap-marker
			v-for="(location, index) in tempLanguages"
			:key="index"
			:position="location.latLng"
			:clickable="true"
			@click="onClick(location)"
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
	props: ['languages'],

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

			// Temporary language variables - will come from the database when its encoded
			tempLanguages: {
				protoAlgonquian: {
					info: '<strong>Proto\-Algonquian</strong><br>\
						<a href="languages/1">View details</a>',
					latLng: {
						lat: 47.8193982,
						lng: -93.9426735
					}
				},
				southwesternOjibwe: {
					info: '<strong>Southwestern Ojibwe</strong><br>\
						<a href="languages/21">View details</a>',
					latLng: {
						lat: 46.264673,
						lng: -93.3965611
					}
				},
				shawnee: {
					info: '<strong>Shawnee</strong><br>\r\
								<a href="languages/20">View details</a>',
					latLng: {
						lat: 35.3581866,
						lng: -96.9450287
					}
				},
				kickapoo: {
					info: '<strong>Kickapoo</strong><br>\r\
								<a href="languages/3">View details</a>',
					latLng: {
						lat: 39.6637455,
						lng: -95.5462955
					}
				},
				meskwaki: {
					info: '<strong>Meskwaki</strong><br>\r\
								<a href="languages/6">View details</a>',
					latLng: {
						lat: 41.987105,
						lng: -92.6267701
					}
				},
				mooseCree: {
					info: '<strong>Moose Cree</strong><br>\r\
								<a href="languages/5">View details</a>',
					latLng: {
						lat: 51.2455103,
						lng: -80.6183709
					}
				},
				plainsCree: {
					info: '<strong>Plains Cree</strong><br>\r\
								<a href="languages/2">View details</a>',
					latLng: {
						lat: 53.7205087,
						lng: -109.9575429
					}
				},
				massachusett: {
					info: '<strong>Massachusett</strong><br>\r\
								<a href="languages/4">View details</a>',
					latLng: {
						lat: 42.0593895,
						lng: -70.7674654
					}
				},
				ProtoEasternAlgonquian: {
					info: '<strong>Proto\-Eastern\-Algonquian</strong><br>\r\
								<a href="languages/14">View details</a>',
					latLng: {
						lat: 44.4807343,
						lng: -72.1798952
					}
				},
				nishnaabemwin: {
					info: '<strong>Nishnaabemwin</strong><br>\r\
								<a href="languages/22">View details</a>',
					latLng: {
						lat: 45.7073775,
						lng: -81.7002825
					}
				},
				penobscot: {
					info: '<strong>Penobscot</strong><br>\r\
								<a href="languages/23">View details</a>',
					latLng: {
						lat: 44.9502696,
						lng: -68.7220242
					}
				}
			}
		};
	},

	methods: {
		onClick(location) {
			this.infoWindow.opened = true;
			this.infoWindow.position = location.latLng;
			this.infoWindow.content  = location.info;
		}
	}
}
</script>