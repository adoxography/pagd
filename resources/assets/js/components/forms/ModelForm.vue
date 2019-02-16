<script>
/**
 * Validator that checks if the value of a field exists in an array
 *
 * @param value  The value to check
 * @param arr    The array to look in
 * @param key    If provided, a property to access on each element of *arr*
 *               when checking
 * @return boolean
 */
function existsValidator(value, [arr, key]) {
  return arr.some(el => (key ? el[key] : el) === value);
}

/**
 * Fills in the fields of *data* based on the values of *initial*. A *fields*
 * attribute in the *data* object tells the function which fields to look for
 * in the *initial* object; *fields* should correspond to an object where the
 * keys are the field to look for, and the value is the default to use if the
 * property is not contained in *initial*. This function is recursive, so
 * fields other than *field* will trigger an update based on the corresponding
 * object (on both the *data* and *initial* objects).
 */
function updateData(data, initial) {
  if (data !== null) {
    for (let [key, v] of Object.entries(data)) {
      if (key == 'fields') {
        // If this is the *fields* property of the data object, check the
        // *initial* object for each property in the associated object.
        for (let [field, value] of Object.entries(v)) {
          if (initial && initial.hasOwnProperty(field)) {
            value = initial[field];
          }
          // Have to use Vue.set so that the properties are reactive.
          Vue.set(data, field, value);
        }
      } else if (data.hasOwnProperty(key)) {
        // For properties other than *fields*, recursively update their data
        // as well.
        updateData(v, initial ? initial[key] : null);
      }
    }
  }
}

/**
 * Interacts directly with the DOM to disable browser-level autocompletes
 */
function turnOffAutocompletes(parent) {
  let inputs = parent.getElementsByTagName('input');
  for (let input of inputs) {
    if (input.name && input.name.length && input.name[0] !== '_') {
      input.name = 'alg-' + input.name;
    }

    input.autocomplete = 'off';
  }
}

/**
 * Interacts directly with the DOM to fix wysiwyg elements
 *
 * tabindex is set to null, to conform to accessibility standards.
 */
function normalizeTextareas(parent) {
  let wysiwygs = parent.getElementsByClassName('editr');

  for (let wysiwyg of wysiwygs) {
    let content = wysiwyg.getElementsByClassName('editr--content')[0];
    content.tabIndex = null;
  }
}

/**
 * Interacts directly with the DOM to fix radio and checkbox elements
 *
 * Buefy gives both the radio itself and the label a tabindex, which makes for
 * unintuitive tabbing. This function removes the tabindex from the radio
 * element.
 */
function normalizeRadios(parent) {
  let els = parent.querySelectorAll('input[type=radio], input[type=checkbox]')
  for (let el of els) {
    el.tabIndex = -1;
  }
}

export default {
  props: {
    lists: { type: Object },
    asyncRoutes: { type: Object },
    initial: { type: Object },
    template: { type: Object },
    filterProto: {
      type: Array,
      default: () => []
    },
    prefetch: {
      default: () => {}
    },

    oldErrors: {},
    oldValues: {}
  },

	data() {
		return {
      data: {},
      filteredLists: {},
      prefetchLists: {},
      asyncLoading: {},
      stringifiedData: ''
		};
	},

	created() {
    this.initLists();
    this.initValidator();
    this.initData();
	},

  mounted() {
    turnOffAutocompletes(this.$vnode.elm);
    normalizeTextareas(this.$vnode.elm);
    normalizeRadios(this.$vnode.elm);

		if (this.oldErrors) {
      this.updateErrors(this.oldErrors);
    };
  },

  methods: {
    /**
     * Initializes the in-memory and asychronous list structures based on the
     * provided *lists* prop
     */
    initLists() {
      if (this.lists) {
        for (let [name, list] of Object.entries(this.lists)) {
          if (this.lists.hasOwnProperty(name) && Array.isArray(list)) {
            this.$set(this.filteredLists, name, list.clone());
          }
        }
      }

      if (this.asyncRoutes) {
        for (let [name, route] of Object.entries(this.asyncRoutes)) {
          this.$set(this.filteredLists, name, []);
          this.$set(this.asyncLoading, name, false);
        }
      }

      for (let [name, prefetches] of Object.entries(this.prefetch)) {
        for (let [prefetchName, _] of Object.entries(prefetches)) {
          this.prefetchLists[prefetchName] = [];
        }
      }
    },

    /**
     * Initializes the validator by adding any required custom rules
     */
    initValidator() {
      this.$validator.extend('exists', existsValidator);
    },

    /**
     * Initializes the *data* attribute based on the *template* prop, then
     * fills it in based on the *oldValue* prop if it was passed in, or the
     * *initial* prop if it was not
     */
    initData() {
      this.data = this.template;
      updateData(this.data, this.oldValues || this.initial);

      // Filter the asterisks out of any fields marked as proto fields
      for (let keyString of this.filterProto) {
        let data = this.data;
        let keys = keyString.split('.');

        keys.forEach((key, i) => {
          if (i < keys.length - 1) {
            data = data[key];
          } else if (data[key]) {
            data[key] = data[key].replace('*', '');
          }
        });
      }
    },

    /**
     * Updates the error bag based on a list of errors
     */
    updateErrors(errorList) {
      for (let [field, errors] of Object.entries(errorList)) {
        errors.forEach(msg => this.errors.add({field, msg}));
      }
    },

    /**
     * Filters an in-memory list based on a query
     *
     * @param listName  The name (key) of the list
     * @param query     The string to filter the list by
     */
    filterList(listName, query) {
      let q = query.toLowerCase();
      let list = this.lists[listName] || this.prefetchLists[listName];
      this.filteredLists[listName] = list.filter(x => x.name.toLowerCase().includes(q));

      for (let [key, value] of Object.entries(this.prefetch)) {
        if (listName === key) {
          this.getPrefetched(listName);
        }
      }
    },

    getPrefetched(listName) {
      let prefetches = this.prefetch[listName];

      for (let [listName, options] of Object.entries(prefetches)) {
        if (prefetches.hasOwnProperty(listName)) {
          this._getAsyncData(listName, '', options(this), true);
        }
      }
    },

    /**
     * Updates an asynchronous list based on a query
     *
     * Filters out any events that were caused by pressing an arrow key
     *
     * @param listName  The name (key) of the list
     * @param event     The event that was fired to trigger the fetch
     * @param options   Any additional options to send in the request
     */
    getAsyncData(listName, event, options) {
      if (event.code && (event.code.includes('Arrow') || event.code === 'Tab')) {
        return;
      }
      
      this._getAsyncData(listName, event.target.value, options);
    },

    _getAsyncData: _.debounce(function(listName, query, options, prefetch) {
      this.asyncLoading[listName] = true;
      axios.get(this.asyncRoutes[listName], {
        params: {
          term: query,
          options: options
        }
      }).then(response => {
        if (prefetch) {
          this.prefetchLists[listName] = response.data;
          // this.filteredLists[listName] = this.lists[listName].clone();
        } else {
          this.filteredLists[listName] = response.data;
        }
        this.asyncLoading[listName] = false;
      }).catch(error => {
        console.error(error);
      });
    }, 500),

    /**
     * Hook that is called before the form is submitted.
     *
     * Bundles the *data* attribute into a string and sends it along with the
     * request to the server, so that the original data structure is preserved
     * if an error occurs.
     */
    beforeSubmit() {
      this.stringifiedData = JSON.stringify(this.data);
    }
  }
};
</script>
