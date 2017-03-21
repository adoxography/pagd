
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

import VueMarkdown from 'vue-markdown'

Vue.component('alg-datalist',       require('./components/DataList.vue'));
Vue.component('alg-multi-datalist', require('./components/Multi-DataList.vue'));
Vue.component('alg-tabs',           require('./components/Tabs.vue'));
Vue.component('alg-tab',            require('./components/Tab.vue'));
Vue.component('model-tab',          require('./components/Model-Tab.vue'));
Vue.component('alg-message',        require('./components/Message.vue'));
Vue.component('alg-radio-toggle',   require('./components/Radio-Toggle.vue'));
Vue.component('alg-form-search',    require('./components/Form-Search.vue'));
Vue.component('alg-ajaxlist',       require('./components/AJAX-List.vue'));
Vue.component('alg-new-source',     require('./components/New-Source.vue'));
Vue.component('alg-old-source',     require('./components/Old-Source.vue'));
Vue.component('alg-sources',        require('./components/Sources.vue'));
Vue.component('autosize-textarea',  require('./components/Autosize-Textarea.vue'));
Vue.component('alg-paginated-list', require('./components/Paginated-List.vue'));
Vue.component('alg-filter-list',    require('./components/Filter-List.vue'));
Vue.component('alg-notification',   require('./components/Notification.vue'));
Vue.component('alg-morpheme-alert', require('./components/Morpheme-Alert.vue'));
Vue.component('alg-initial-changes', require('./components/Initial-Changes.vue'));

Vue.component('alg-language-form',  require('./components/forms/Language.vue'));
Vue.component('alg-form-form',      require('./components/forms/Form.vue'));
Vue.component('alg-morpheme-form',  require('./components/forms/Morpheme.vue'));
Vue.component('alg-example-form',   require('./components/forms/Example.vue'));
Vue.component('alg-rule-form',      require('./components/forms/Rule.vue'));
Vue.component('alg-source-form',    require('./components/forms/Source.vue'));
Vue.component('alg-order', require('./components/Order.vue'));
Vue.component('alg-flag', require('./components/Flag.vue'));
Vue.component('alg-textarea', require('./components/Textarea.vue'));

Vue.component('alg-paradigm-search',  require('./components/forms/Paradigm-Search.vue'));
Vue.component('alg-basic-paradigm-search', require('./components/forms/Basic-Paradigm-Search.vue'));
Vue.component('alg-advanced-paradigm-search', require('./components/forms/Advanced-Paradigm-Search.vue'));

Vue.component('alg-paradigm-table', {
	props: ['morphemesOn'],

	data() {
		return {
			show: false
		};
	},

	methods: {
		toggleShow() {
			this.show = !this.show;
		}
	},

	created() {
		if(this.morphemesOn) {
			this.show = this.morphemesOn;
		}
	}
});

Vue.component('paradigm-language-suggest', {
	methods: {
		suggest(data) {
			Event.$emit('addLanguageGroup', data);
		}
	}
});

Vue.component('paradigm-mode-select', {
	data() {
		return {
			selected: "indicativeOnly"
		};
	}
});

window.Event = new Vue();

const app = new Vue({
    components: {
    	VueMarkdown
    },
    el: '#root'
});

// Navigation menu
$(document).ready(function(){
	const target = $(".dropdown");
	const dropdown = target.children('.dropdown-options');

	var menuMoving = false;

	target.mouseenter(() => {
		toggleMenu();
	}).mouseleave(() => {
		toggleMenu();
	});

	function toggleMenu() {
		if(!menuMoving) {
			menuMoving = true;
			dropdown.slideToggle('fast', function() {
				menuMoving = false;
			});
		}
	};
});