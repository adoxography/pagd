import axiosRetry from 'axios-retry';
import PortalVue from 'portal-vue';
import Buefy from 'buefy';

require('./polyfill/scrollIntoViewIfNeeded');

window._ = require('lodash');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
import wysiwyg from 'vue-wysiwyg';
import VTooltip from 'v-tooltip';
import VeeValidate from 'vee-validate';
require('vue-resource');

import SpecialCharacter from './components/wysiwyg/SpecialCharacter';
Vue.use(VeeValidate, {
  //delay: 1000
});

Vue.use(VTooltip);
Vue.use(PortalVue);
Vue.use(wysiwyg, {
  hideModules: {
    "headings": true,
    "code": true,
    "image": true
  },

  customModules: [SpecialCharacter],

  iconOverrides: {
    'bold': '<span class="icon"><i class="fas fa-bold"></i></span>',
    'italic': '<span class="icon"><i class="fas fa-italic"></i></span>',
    'underline': '<span class="icon"><i class="fas fa-underline"></i></span>',
    'justifyLeft': '<span class="icon"><i class="fas fa-align-left"></i></span>',
    'justifyCenter': '<span class="icon"><i class="fas fa-align-center"></i></span>',
    'justifyRight': '<span class="icon"><i class="fas fa-align-right"></i></span>',
    'link': '<span class="icon"><i class="fas fa-link"></i></span>',
    'orderedList': '<span class="icon"><i class="fas fa-list-ol"></i></span>',
    'unorderedList': '<span class="icon"><i class="fas fa-list"></i></span>',
    'table': '<span class="icon"><i class="fas fa-table"></i></span>',
    'removeFormat': '<span class="icon"><i class="fas fa-eraser"></i></span>',
  },

  forcePlainTextOnPaste: true
});
Vue.use(Buefy);

/**
 * Import Pug to allow for fully extendable Vue components
 */

// window.Pug = require('pug');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
window.axios.defaults.timeout = 10000;

axiosRetry(window.axios, {
	retries: 5,
	retryCondition: error => !error.response || error.response.status == 400
})

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
})
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

Array.prototype.clone = function() { return this.slice(0); };
