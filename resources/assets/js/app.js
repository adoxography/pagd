
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

require('./layout');

require('./validation');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('alg-datalist',       require('./components/DataList.vue').default);
Vue.component('alg-multi-datalist', resolve => { require(['./components/Multi-DataList.vue'], resolve); });
Vue.component('alg-tabs',           resolve => { require(['./components/Tabs.vue'], resolve); });
Vue.component('alg-tab',            resolve => { require(['./components/Tab.vue'], resolve); });
Vue.component('alg-message',        resolve => { require(['./components/Message.vue'], resolve); });
Vue.component('alg-radio-toggle',   resolve => { require(['./components/Radio-Toggle.vue'], resolve); });
Vue.component('alg-form-search',    resolve => { require(['./components/Form-Search.vue'], resolve); });
Vue.component('alg-ajaxlist',       require('./components/AJAX-List.vue').default);
Vue.component('alg-new-source',     resolve => { require(['./components/New-Source.vue'], resolve); });
Vue.component('alg-old-source',     resolve => { require(['./components/Old-Source.vue'], resolve); });
Vue.component('alg-sources',        resolve => { require(['./components/Sources.vue'], resolve); });
Vue.component('alg-paginated-list', resolve => { require(['./components/Paginated-List.vue'], resolve); });
Vue.component('alg-filter-list',    resolve => { require(['./components/Filter-List.vue'], resolve); });
Vue.component('alg-notification',   require('./components/Notification.vue').default);
Vue.component('alg-morpheme-alert', resolve => { require(['./components/Morpheme-Alert.vue'], resolve); });
Vue.component('alg-initial-changes', resolve => { require(['./components/Initial-Changes.vue'], resolve); });
Vue.component('alg-bookmark',        require('./components/Bookmark.vue').default);
// Vue.component('alg-bookmark',        resolve => { require(['./components/Bookmark.vue'], resolve); });
Vue.component('alg-modal',           resolve => { require(['./components/Modal.vue'], resolve); });
Vue.component('alg-button',          require('./components/Button.vue').default);
Vue.component('alg-map',             require('./components/Map.vue').default);
Vue.component('alg-network',         resolve => { require(['./components/Network.vue'], resolve); });
Vue.component('alg-file-upload',     resolve => { require(['./components/FileUpload.vue'], resolve); });
Vue.component('alg-tooltip', require('./components/Tooltip.vue').default);
Vue.component('alg-typeahead', resolve => { require(['./components/Typeahead.vue'], resolve ); });
Vue.component('alg-typewriter', resolve => { require(['./components/Typewriter.vue'], resolve); });

Vue.component('alg-form',           resolve => { require(['./components/forms/Form.vue'], resolve); });
Vue.component('alg-language-form',  resolve => { require(['./components/forms/Language.vue'], resolve); });
Vue.component('alg-group-form',     resolve => { require(['./components/forms/Group.vue'], resolve); });
Vue.component('alg-form-form',      resolve => { require(['./components/forms/VerbForm.vue'], resolve); });
Vue.component('alg-morpheme-form',  resolve => { require(['./components/forms/Morpheme.vue'], resolve); });
Vue.component('alg-example-form',   resolve => { require(['./components/forms/Example.vue'], resolve); });
Vue.component('alg-rule-form',      resolve => { require(['./components/forms/Rule.vue'], resolve); });
Vue.component('alg-datapoint-form', resolve => { require(['./components/forms/Datapoint.vue'], resolve); });
Vue.component('alg-paradigm-form',  resolve => { require(['./components/forms/Paradigm.vue'], resolve); });
Vue.component('alg-nominal-form-form',  resolve => { require(['./components/forms/NominalForm.vue'], resolve); });
Vue.component('alg-phoneme-form',  resolve => { require(['./components/forms/Phoneme.vue'], resolve); });
Vue.component('alg-allophone-form',  resolve => { require(['./components/forms/Allophone.vue'], resolve); });
Vue.component('alg-reflex-form',  resolve => { require(['./components/forms/Reflex.vue'], resolve); });
Vue.component('alg-audio-form',  resolve => { require(['./components/forms/Audio.vue'], resolve); });
Vue.component('alg-phoneme-example-form',  resolve => { require(['./components/forms/PhonemeExample.vue'], resolve); });

Vue.component('alg-order', resolve => { require(['./components/Order.vue'], resolve); });
Vue.component('alg-textarea', resolve => { require(['./components/Textarea.vue'], resolve); });
Vue.component('alg-tag-input', resolve => { require(['./components/Tag-Input.vue'], resolve); });
Vue.component('alg-morpheme-tag-input', require('./components/Morpheme-Tag-Input.vue').default);
Vue.component('alg-value-input', resolve => { require(['./components/Value-Input.vue'], resolve); });
Vue.component('alg-phoneme-examples', resolve => { require(['./components/Phoneme-Examples.vue'], resolve); });

Vue.component('alg-paradigm-search',          resolve => { require(['./components/forms/Paradigm-Search.vue'], resolve); });
Vue.component('alg-basic-paradigm-search',    resolve => { require(['./components/forms/Basic-Paradigm-Search.vue'], resolve); });
Vue.component('alg-advanced-paradigm-search', resolve => { require(['./components/forms/Advanced-Paradigm-Search.vue'], resolve); });
Vue.component('alg-nominal-paradigm-search',  resolve => { require(['./components/forms/search/Nominal-Paradigm.vue'], resolve); });
Vue.component('alg-phoneme-search',           resolve => { require(['./components/forms/search/Phoneme.vue'], resolve); });

Vue.component('alg-delete-button', resolve => { require(['./components/Delete-Button.vue'], resolve); });
Vue.component('alg-hidden-icon', resolve => { require(['./components/Hidden-Icon.vue'], resolve); });
Vue.component('alg-source-index', resolve => { require(['./components/Source-Index.vue'], resolve); });
Vue.component('alg-pagination-limited', resolve => { require(['./components/Pagination-Limited.vue'], resolve); });
Vue.component('alg-pagination-full', resolve => { require(['./components/Pagination-Full.vue'], resolve); });

Vue.component('alg-filter', resolve => { require(['./components/Filter.vue'], resolve); });
Vue.component('alg-select-all', resolve => { require(['./components/SelectAll.vue'], resolve); });

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
			EventManager.$emit('addLanguageGroup', data);
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

window.EventManager = new Vue();

const app = new Vue({
    el: '#body-wrapper',

    data() {
    	return {
    		showFlash: true,
    		testVal: {text: '', id: ''}
    	};
    }
});
