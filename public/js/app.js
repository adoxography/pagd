webpackJsonp([35],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AJAX-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['name', 'id', 'value', 'with', 'uri', 'placeholder', 'disabled', 'initial'],
  data: function data() {
    return {
      showList: false,
      options: [],
      loading: false,
      curr: 0,
      extra: '',
      cursor: 0
    };
  },
  directives: {
    onClickaway: __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__["directive"]
  },
  computed: {
    showCheck: function showCheck() {
      return !this.loading && this.value.id > 0 && !this.showList;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.list.contentEditable = true;

    if (this.initial) {
      Vue.nextTick(function () {
        _this.$emit('input', _this.initial);
      });
    }
  },
  methods: {
    onEnter: function onEnter(event) {
      if (this.showList) {
        // The list is open
        event.preventDefault();
        this.selectItem(this.options[this.curr - 1].name);
      }
    },
    setCursorPosition: function setCursorPosition(position) {
      var el = this.$refs.list;
      var range = document.createRange();
      var selection = window.getSelection();

      if (position >= 0) {
        var line = el.childNodes[0];
        range.setStart(line, position);
        range.setEnd(line, position);
      } else {
        range.selectNodeContents(el);
        range.collapse(false);
      }

      selection.removeAllRanges();
      selection.addRange(range);
    },
    closeList: function closeList() {
      this.showList = false;
    },
    determineValue: function determineValue(text) {
      var found = false;
      var val = '';
      this.extra = '';

      for (var i = 0; i < this.options.length && !found; i++) {
        if (this.options[i].name.toLowerCase() === text.toLowerCase()) {
          val = this.options[i].id;
          this.extra = this.options[i].extra;

          if (this.options[i].name === text) {
            found = true;
          }
        }
      }

      return val;
    },
    selectItem: function selectItem(newText) {
      // Hide the list
      this.closeList(); // Reset the current element

      this.curr = 0;
      this.update(newText);
    },
    activeItem: function activeItem(n) {
      return n + 1 == this.curr;
    },
    onHover: function onHover(item) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].name == item) {
          this.curr = i + 1;
        }
      }
    },
    update: function update(newText) {
      var _this2 = this;

      var id = this.determineValue(newText);
      var position = window.getSelection().anchorOffset;
      this.$emit('input', {
        text: newText,
        id: id,
        extra: this.extra
      });

      if (id == '') {
        position = -1;
      }

      Vue.nextTick(function () {
        var list = _this2.$refs.list;

        _this2.setCursorPosition(position);
      });
    },
    onInput: _.debounce(function (newText) {
      var _this3 = this;

      if (newText.length > 0) {
        this.closeList();
        this.loading = true;
        axios.get(this.uri, {
          params: {
            term: newText,
            options: this.with
          }
        }).then(function (response) {
          _this3.options = [];

          _.forEach(response.data, function (item) {
            item.name = _this3.formatString(item.name);

            _this3.options.push(item);
          });

          if (_this3.options.length > 0) {
            _this3.showList = true;
          }

          _this3.loading = false;
        });
      }

      this.update(newText);
    }, 500),
    formatString: function formatString(str) {
      var tempString = str.replace(/<(?:.|\n)*?>/gm, '');

      if (tempString.length > 60) {
        tempString = tempString.substring(0, 60);
        tempString += "...";
      }

      return tempString;
    },
    onKeyUp: function onKeyUp(keyCode) {
      if (keyCode == 40) {
        // Down arrow
        this.handleDownKey();
      } else if (keyCode == 38) {
        // Up arrow
        this.handleUpKey();
      }
    },
    handleDownKey: function handleDownKey() {
      if (this.showList) {
        // The list is open
        // Increment the current selection, making sure to wrap it around the list
        this.curr++;
        this.curr %= this.options.length + 1; // If the current selection isn't the textbox itself, set the textbox to the current selection

        if (this.curr > 0) {
          this.update(this.options[this.curr - 1].name);
        }
      }
    },
    handleUpKey: function handleUpKey() {
      this.curr += this.options.length;
      this.curr %= this.options.length + 1;

      if (this.curr > 0) {
        this.update(this.options[this.curr - 1].name);
      }
    },
    reset: function reset() {
      this.update('');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Bookmark.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['uri', 'bookmarked'],
  data: function data() {
    return {
      comment: '',
      loading: false,
      bookmarkable: true
    };
  },
  created: function created() {
    if (this.bookmarked == '1') {
      this.bookmarkable = false;
    }
  },
  methods: {
    openModal: function openModal() {
      this.$refs.modal.open();
      this.$refs.textarea.editor.focus();
    },
    unBookmark: function unBookmark() {
      var _this = this;

      this.loading = true;
      axios.delete(this.uri + '/bookmark').then(function (response) {
        _this.loading = false;
        _this.bookmarkable = true;
      }).catch(function (error) {
        _this.loading = false;
        alert('Error in bookmarking');
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.loading = true;
      axios.post(this.uri + '/bookmark', {
        comment: this.comment
      }).then(function (response) {
        _this2.loading = false;
        _this2.comment = '';

        _this2.$refs.modal.close();

        _this2.bookmarkable = false;
      }).catch(function (error) {
        _this2.loading = false;
        alert('Error in bookmarking.');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Button.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['method', 'action'],
  computed: {
    token: function token() {
      return Laravel.csrfToken;
    }
  },
  methods: {
    onClick: function onClick() {
      if (confirm("Are you sure?")) {
        this.$refs.form.submit();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DataList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus__ = __webpack_require__("./node_modules/vue-focus/dist/vue-focus.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_focus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway__ = __webpack_require__("./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_clickaway__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['list', 'name', 'id', 'disabled', 'required', 'value', 'placeholder', 'hasErrors', 'initial', 'autofocus'],
  computed: {
    hasValue: function hasValue() {
      return this.value.id > 0 && !this.showList;
    },
    selectedElement: function selectedElement() {
      if (this.curr == 0) {
        return null;
      }

      return this.$refs['option-' + (this.curr - 1)][0];
    }
  },
  directives: {
    focus: __WEBPACK_IMPORTED_MODULE_0_vue_focus__["focus"],
    onClickaway: __WEBPACK_IMPORTED_MODULE_1_vue_clickaway__["directive"]
  },
  data: function data() {
    return {
      options: [],
      showList: false,
      writing: false,
      curr: 0,
      focused: false
    };
  },
  created: function created() {
    if (this.initial) {
      this.update(this.initial);
    }
  },
  methods: {
    getID: function getID(text) {
      var val = "";

      for (var i = 0; i < this.list.length && val === ""; i++) {
        if (this.list[i].name.toLowerCase() === text.toLowerCase()) {
          val = this.list[i].id;
        }
      }

      return val;
    },
    reset: function reset() {
      // Hide the list
      this.showList = false;
      this.writing = false; // Reset the current element

      this.curr = 0;
    },

    /**
     * Activated when the down arrow is pressed
     */
    toggleList: function toggleList() {
      // Reset the list
      this.options = this.list; // Toggle its visibility

      this.showList = !this.showList;
    },
    closeList: function closeList() {
      this.options = this.list;
      this.showList = false;
    },
    selectItem: function selectItem(item) {
      this.reset(); // Trigger an input event

      this.update(item);
      this.$emit("select");
    },
    onKeyUp: function onKeyUp(keyCode) {
      if (keyCode == 40) {
        // Down arrow
        this.handleDownKey();
      } else if (keyCode == 38) {
        // Up arrow
        this.handleUpKey();
      } else if (keyCode != 13) {
        // Anything else, aside from the enter key
        // Filter the options based on the current text
        this.filterOptions(); // Only show the list if there is text in the field and there are options in the list

        if (this.value.text && this.value.text.length > 0 && this.options.length > 0) {
          this.showList = true;
        }

        this.writing = true;
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.$emit('blur');
    },
    onKeyDown: function onKeyDown(event) {
      if (event.keyCode == 9) {
        // Tab key
        this.showList = false;
        this.$emit("keydown", {
          keyCode: 9
        });
      } else if (event.keyCode == 13) {
        // Enter key
        this.handleEnterKey(event);
        this.showList = false;
      }
    },
    handleHover: function handleHover(item) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].name == item) {
          this.curr = i + 1;
        }
      }
    },
    handleButtonClicked: function handleButtonClicked() {
      if (!this.disabled) {
        this.toggleList();
        this.$refs.textInput.focus();
      }
    },
    filterOptions: function filterOptions() {
      var _this = this;

      this.options = this.list.filter(function (item) {
        var currText;

        if (_this.value.text) {
          currText = _this.value.text.toLowerCase();
        } else {
          currText = '';
        }

        return item.name.toLowerCase().includes(currText);
      });
    },
    handleDownKey: function handleDownKey() {
      if (this.showList) {
        // The list is open
        // Increment the current selection, making sure to wrap it around the list
        this.curr++;
        this.curr %= this.options.length + 1;

        if (this.curr > 0) {
          // If the current selection isn't the textbox itself, set the textbox to the current selection
          this.update(this.options[this.curr - 1].name);
          this.selectedElement.scrollIntoViewIfNeeded(false);
        }
      } else {
        // The list is closed
        // Reset the list
        this.options = this.list; // Open the list

        this.showList = true;
      }
    },
    handleUpKey: function handleUpKey() {
      this.curr += this.options.length;
      this.curr %= this.options.length + 1;

      if (this.curr > 0) {
        this.update(this.options[this.curr - 1].name);
        this.selectedElement.scrollIntoViewIfNeeded(false);
      }
    },
    handleEnterKey: function handleEnterKey(event) {
      if (this.curr > 0) {
        // The list is open
        event.preventDefault();
        this.selectItem(this.options[this.curr - 1].name);
      } else if (this.value.text.length > 0 && this.writing) {
        event.preventDefault();
        this.$emit("keydown", {
          keyCode: 13
        });
      }
    },
    activeItem: function activeItem(n) {
      return n + 1 == this.curr;
    },
    update: function update(newText) {
      var id = this.getID(newText);
      this.$emit("input", {
        text: newText,
        id: id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__ = __webpack_require__("./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // Initialze google maps

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__, {
  load: {
    key: 'AIzaSyCLFKIvNQZfk0Q-h4nwSHpYMFRx7TZW5Yc',
    v: '3.33'
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    'markers': [Array, Object],
    'addMode': Boolean,
    'marker': Object,
    'zonesEnabled': {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
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
          position: {
            lng: -96.194,
            lat: 53.430
          }
        }
      },
      newZone: {
        id: 0,
        name: 'New language',
        color: '0000ff',
        location: {
          type: 'area',
          position: [{
            lng: -96.194,
            lat: 53.430
          }, {
            lng: -96.194,
            lat: 51.300
          }, {
            lng: -92.284,
            lat: 51.300
          }, {
            lng: -92.284,
            lat: 53.430
          }]
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
    addType: function addType() {
      this.fireEvent();
    }
  },
  created: function created() {
    var _this = this;

    /**
     * Process all of the incoming markers
     */
    if (this.markers) {
      if (Array.isArray(this.markers)) {
        this.markers.forEach(function (marker) {
          return _this.addEntity(marker);
        });
      } else {
        this.addEntity(this.markers);
      }

      var center = this.getMapCenter();

      if (center) {
        this.center = center;
      }
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
  mounted: function mounted() {
    if (this.marker) {
      this.openInfoWindow(this.marker, this.addType);
    }
  },
  methods: {
    /**
     * Fires when a marker or zone is left clicked
     */
    onClickMarker: function onClickMarker(location, type) {
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.openInfoWindow(location, type, event);
    },

    /**
     * Fires when a marker is right clicked
     */
    onRightClick: function onRightClick(e) {
      if (this.addType == 'point') {
        var latLng = e.latLng;
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
    addEntity: function addEntity(entity) {
      if (this.validateEntity(entity) && (!this.marker || this.marker.id != entity.id)) {
        if (entity.location.type == 'point') {
          this.markerArray.push(entity);
        } else if (entity.location.type == 'area') {
          if (this.zonesEnabled) {
            this.zones.push(entity);
          } else {
            var center = this.getCenter(entity.location.position, 0);
            entity.location.position = center;
            this.markerArray.push(entity);
          }
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
    validateEntity: function validateEntity(entity) {
      if (!entity.location) {
        return false;
      }

      var position = entity.location.position;

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
    updateEdited: function updateEdited(mvcArray) {
      var path = [];

      for (var j = 0; j < mvcArray.getLength(); j++) {
        var point = mvcArray.getAt(j);
        path.push({
          lat: point.lat(),
          lng: point.lng()
        });
      }

      this.edited = path;
      this.fireEvent();
    },

    /**
     * Fires an update event with the current marker/zone information
     */
    fireEvent: function fireEvent() {
      var position = null;

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
    openInfoWindow: function openInfoWindow(entity, type, event) {
      if (type == 'point') {
        this.infoWindow.position = entity.location.position;
      } else if (type == 'area') {
        this.infoWindow.position = event.latLng;
      }

      this.infoWindow.opened = true;
      this.infoWindow.content = this.getInfoWindowContent(entity);
    },

    /**
     * Gets the info window content based on an entity
     *
     * @param entity  The entity to base the content off of
     * @return  A string with HTML to load into the info window
     */
    getInfoWindowContent: function getInfoWindowContent(entity) {
      var output = "<strong>".concat(entity.name, "</strong>");

      if (entity.datapoints) {
        var datapoint = entity.datapoints[0];
        var id = datapoint.id;
        var name = datapoint.value.name;
        var link = "<a href=\"/datapoints/".concat(id, "\" style=\"color: #").concat(entity.color, ";\">").concat(name, "</a>");
        output += "<br>\n".concat(link);
      } else if (entity.id > 0) {
        var _link = "<a href=\"/languages/".concat(entity.id, "\">View details</a>");

        output += "<br>\n".concat(_link);
      }

      return output;
    },

    /**
     * Finds the center position of all the entities on the map
     *
     * @return  An object containing lat and lng coordinates for the center, or
     *          null if there are no entities on the map
     */
    getMapCenter: function getMapCenter() {
      var markerPositions = this.markerArray.map(function (marker) {
        return marker.location.position;
      });
      var zonePositions = this.zones.flatMap(function (zone) {
        return zone.location.position;
      });
      var allPositions = [].concat(_toConsumableArray(markerPositions), _toConsumableArray(zonePositions));

      if (allPositions.length > 0) {
        return this.getCenter(allPositions);
      }

      return null;
    },

    /**
     * Finds the center position of a list of coordinates
     *
     * @return  An object containing lat and lng coordinates for the center
     */
    getCenter: function getCenter(positions) {
      var compensation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.0;
      var top = -Infinity;
      var bottom = Infinity;
      var left = Infinity;
      var right = -Infinity;
      positions.forEach(function (position) {
        top = Math.max(top, position.lat);
        bottom = Math.min(bottom, position.lat);
        left = Math.min(left, position.lng);
        right = Math.max(right, position.lng);
      });
      return {
        lat: (top + bottom) / 2 + compensation,
        lng: (left + right) / 2
      };
    },

    /**
     * Retrieves the appropriately colored icon for a marker
     *
     * @param marker  The marker object to base the icon off of
     * @return  An object with a url key
     */
    getIcon: function getIcon(marker) {
      var color = marker.color;
      return {
        url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + color
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Notification.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['level'],
  data: function data() {
    return {
      showNotification: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__ = __webpack_require__("./resources/assets/js/util/SpecialCharacters.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  title: 'specialCharacter',
  icon: '<span class="icon"><i class="fas fa-keyboard"></i></span>',
  description: 'Special Character',
  data: function data() {
    return {
      chars: __WEBPACK_IMPORTED_MODULE_0__util_SpecialCharacters__["a" /* dictionary */]
    };
  },
  methods: {
    insertCharacter: function insertCharacter(char) {
      this.$emit('exec', 'insertHTML', char.symbol);
      this.$parent.closeDashboard();
    }
  }
});

/***/ }),

/***/ "./node_modules/buefy/dist/buefy.js":
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.2 | MIT License | github.com/buefy/buefy */ 
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("./node_modules/vue/dist/vue.common.js"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Buefy"] = factory(require("vue"));
	else
		root["Buefy"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(100);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setOptions; });
var config = {
    defaultContainerElement: null,
    defaultIconPack: 'mdi',
    defaultDialogConfirmText: null,
    defaultDialogCancelText: null,
    defaultSnackbarDuration: 3500,
    defaultToastDuration: 2000,
    defaultTooltipType: 'is-primary',
    defaultTooltipAnimated: false,
    defaultInputAutocomplete: 'on',
    defaultDateFormatter: null,
    defaultDateParser: null,
    defaultDateCreator: null,
    defaultDayNames: null,
    defaultMonthNames: null,
    defaultFirstDayOfWeek: null,
    defaultUnselectableDaysOfWeek: null,
    defaultTimeFormatter: null,
    defaultTimeParser: null,
    defaultModalScroll: null,
    defaultDatepickerMobileNative: true,
    defaultTimepickerMobileNative: true,
    defaultNoticeQueue: true,
    defaultInputHasCounter: true,
    defaultUseHtml5Validation: true
};

/* harmony default export */ __webpack_exports__["a"] = (config);

var setOptions = function setOptions(options) {
    config = options;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(105),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getValueByPath;
/* harmony export (immutable) */ __webpack_exports__["b"] = indexOf;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMobile; });
/* harmony export (immutable) */ __webpack_exports__["d"] = removeElement;
/* unused harmony export escapeRegExpChars */
/**
 * Get value of an object property/path even if it's nested
 */
function getValueByPath(obj, path) {
    var value = path.split('.').reduce(function (o, i) {
        return o[i];
    }, obj);
    return value;
}

/**
 * Extension of indexOf method by equality function if specified
 */
function indexOf(array, obj, fn) {
    if (!array) return -1;

    if (!fn || typeof fn !== 'function') return array.indexOf(obj);

    for (var i = 0; i < array.length; i++) {
        if (fn(array[i], obj)) {
            return i;
        }
    }

    return -1;
}

/**
 * Mobile detection
 * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 */
var isMobile = {
    Android: function Android() {
        return typeof window !== 'undefined' && window.navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
        return typeof window !== 'undefined' && window.navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
        return typeof window !== 'undefined' && window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
        return typeof window !== 'undefined' && window.navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
        return typeof window !== 'undefined' && window.navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
};

function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
        el.remove();
    } else if (typeof el.parentNode !== 'undefined') {
        el.parentNode.removeChild(el);
    }
}

/**
 * Escape regex characters
 * http://stackoverflow.com/a/6969486
 */
function escapeRegExpChars(value) {
    if (!value) return value;

    // eslint-disable-next-line
    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        size: String,
        expanded: Boolean,
        loading: Boolean,
        rounded: Boolean,
        icon: String,
        iconPack: String,
        // Native options to use in HTML5 validation
        autocomplete: String,
        maxlength: [Number, String],
        useHtml5Validation: {
            type: Boolean,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultUseHtml5Validation;
            }
        }
    },
    data: function data() {
        return {
            isValid: true,
            isFocused: false,
            newIconPack: this.iconPack || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultIconPack
        };
    },

    computed: {
        /**
         * Find parent Field, max 3 levels deep.
         */
        parentField: function parentField() {
            var parent = this.$parent;
            for (var i = 0; i < 3; i++) {
                if (parent && !parent.$data._isField) {
                    parent = parent.$parent;
                }
            }
            return parent;
        },


        /**
         * Get the type prop from parent if it's a Field.
         */
        statusType: function statusType() {
            if (!this.parentField) return;
            if (!this.parentField.newType) return;
            if (typeof this.parentField.newType === 'string') {
                return this.parentField.newType;
            } else {
                for (var key in this.parentField.newType) {
                    if (this.parentField.newType[key]) {
                        return key;
                    }
                }
            }
        },


        /**
         * Get the message prop from parent if it's a Field.
         */
        statusMessage: function statusMessage() {
            if (!this.parentField) return;

            return this.parentField.newMessage;
        },


        /**
         * Fix icon size for inputs, large was too big
         */
        iconSize: function iconSize() {
            switch (this.size) {
                case 'is-small':
                    return this.size;
                case 'is-medium':
                    return;
                case 'is-large':
                    return this.newIconPack === 'mdi' ? 'is-medium' : '';
            }
        }
    },
    methods: {
        /**
         * Focus method that work dynamically depending on the component.
         */
        focus: function focus() {
            var _this = this;

            if (this.$data._elementRef === undefined) return;

            this.$nextTick(function () {
                return _this.$el.querySelector(_this.$data._elementRef).focus();
            });
        },
        onBlur: function onBlur($event) {
            this.isFocused = false;
            this.$emit('blur', $event);
            this.checkHtml5Validity();
        },
        onFocus: function onFocus($event) {
            this.isFocused = true;
            this.$emit('focus', $event);
        },


        /**
         * Check HTML5 validation, set isValid property.
         * If validation fail, send 'is-danger' type,
         * and error message to parent if it's a Field.
         */
        checkHtml5Validity: function checkHtml5Validity() {
            var _this2 = this;

            if (!this.useHtml5Validation) return;

            if (this.$refs[this.$data._elementRef] === undefined) return;

            var el = this.$el.querySelector(this.$data._elementRef);

            var type = null;
            var message = null;
            var isValid = true;
            if (!el.checkValidity()) {
                type = 'is-danger';
                message = el.validationMessage;
                isValid = false;
            }
            this.isValid = isValid;

            this.$nextTick(function () {
                if (_this2.parentField) {
                    // Set type only if not defined
                    if (!_this2.parentField.type) {
                        _this2.parentField.newType = type;
                    }
                    // Set message only if not defined
                    if (!_this2.parentField.message) {
                        _this2.parentField.newMessage = message;
                    }
                }
            });

            return this.isValid;
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var ctx = __webpack_require__(45);
var hide = __webpack_require__(14);
var has = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(106),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(127),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(79)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(53)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(40);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(119),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(121),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(125),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(71);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(73)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(107),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(77);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(5);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(54);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(39);
var getPrototypeOf = __webpack_require__(83);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(15);
var dPs = __webpack_require__(81);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(82).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var global = __webpack_require__(8);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(21);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(99);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(109),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isSSR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
// Polyfills for SSR

var isSSR = typeof window === 'undefined';

var HTMLElement = isSSR ? Object : window.HTMLElement;
var File = isSSR ? Object : window.File;

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_icon_Icon__);



/* harmony default export */ __webpack_exports__["a"] = ({
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__components_icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_1__components_icon_Icon___default.a),
    props: {
        active: {
            type: Boolean,
            default: true
        },
        title: String,
        closable: {
            type: Boolean,
            default: true
        },
        type: String,
        hasIcon: Boolean,
        size: String,
        iconPack: String,
        iconSize: String,
        autoClose: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 5000
        }
    },
    data: function data() {
        return {
            isActive: this.active
        };
    },

    watch: {
        active: function active(value) {
            this.isActive = value;
        },
        isActive: function isActive(value) {
            if (value) {
                this.setAutoClose();
            } else {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }
        }
    },
    computed: {
        /**
         * Icon name (MDI) based on type.
         */
        icon: function icon() {
            switch (this.type) {
                case 'is-info':
                    return 'information';
                case 'is-success':
                    return 'check-circle';
                case 'is-warning':
                    return 'alert';
                case 'is-danger':
                    return 'alert-circle';
                default:
                    return null;
            }
        }
    },
    methods: {
        /**
         * Close the Message and emit events.
         */
        close: function close() {
            this.isActive = false;
            this.$emit('close');
            this.$emit('update:active', false);
        },

        /**
         * Set timer to auto close message
         */
        setAutoClose: function setAutoClose() {
            var _this = this;

            if (this.autoClose) {
                this.timer = setTimeout(function () {
                    if (_this.isActive) {
                        _this.close();
                    }
                }, this.duration);
            }
        }
    },
    mounted: function mounted() {
        this.setAutoClose();
    }
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(149),
  /* template */
  __webpack_require__(150),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        type: {
            type: String,
            default: 'is-dark'
        },
        message: String,
        duration: Number,
        queue: {
            type: Boolean,
            default: undefined
        },
        position: {
            type: String,
            default: 'is-top',
            validator: function validator(value) {
                return ['is-top-right', 'is-top', 'is-top-left', 'is-bottom-right', 'is-bottom', 'is-bottom-left'].indexOf(value) > -1;
            }
        },
        container: String
    },
    data: function data() {
        return {
            isActive: false,
            parentTop: null,
            parentBottom: null,
            newContainer: this.container || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].defaultContainerElement
        };
    },

    computed: {
        correctParent: function correctParent() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return this.parentTop;

                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return this.parentBottom;
            }
        },
        transition: function transition() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return {
                        enter: 'fadeInDown',
                        leave: 'fadeOut'
                    };
                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return {
                        enter: 'fadeInUp',
                        leave: 'fadeOut'
                    };
            }
        }
    },
    methods: {
        shouldQueue: function shouldQueue() {
            var queue = this.queue !== undefined ? this.queue : __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].defaultNoticeQueue;

            if (!queue) return false;

            return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
        },
        close: function close() {
            var _this = this;

            clearTimeout(this.timer);
            this.isActive = false;

            // Timeout for the animation complete before destroying
            setTimeout(function () {
                _this.$destroy();
                Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* removeElement */])(_this.$el);
            }, 150);
        },
        showNotice: function showNotice() {
            var _this2 = this;

            if (this.shouldQueue()) {
                // Call recursively if should queue
                setTimeout(function () {
                    return _this2.showNotice();
                }, 250);
                return;
            }
            this.correctParent.insertAdjacentElement('afterbegin', this.$el);
            this.isActive = true;

            if (!this.indefinite) {
                this.timer = setTimeout(function () {
                    return _this2.close();
                }, this.newDuration);
            }
        },
        setupContainer: function setupContainer() {
            this.parentTop = document.querySelector('.notices.is-top');
            this.parentBottom = document.querySelector('.notices.is-bottom');

            if (this.parentTop && this.parentBottom) return;

            if (!this.parentTop) {
                this.parentTop = document.createElement('div');
                this.parentTop.className = 'notices is-top';
            }

            if (!this.parentBottom) {
                this.parentBottom = document.createElement('div');
                this.parentBottom.className = 'notices is-bottom';
            }

            var container = document.querySelector(this.newContainer) || document.body;

            container.appendChild(this.parentTop);
            container.appendChild(this.parentBottom);

            if (this.newContainer) {
                this.parentTop.classList.add('has-custom-container');
                this.parentBottom.classList.add('has-custom-container');
            }
        }
    },
    beforeMount: function beforeMount() {
        this.setupContainer();
    },
    mounted: function mounted() {
        this.showNotice();
    }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(177),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(186),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var components_namespaceObject = {};
__webpack_require__.d(components_namespaceObject, "Autocomplete", function() { return autocomplete; });
__webpack_require__.d(components_namespaceObject, "Checkbox", function() { return components_checkbox; });
__webpack_require__.d(components_namespaceObject, "Collapse", function() { return collapse; });
__webpack_require__.d(components_namespaceObject, "Datepicker", function() { return datepicker; });
__webpack_require__.d(components_namespaceObject, "Dialog", function() { return dialog; });
__webpack_require__.d(components_namespaceObject, "Dropdown", function() { return dropdown; });
__webpack_require__.d(components_namespaceObject, "Field", function() { return field; });
__webpack_require__.d(components_namespaceObject, "Icon", function() { return icon; });
__webpack_require__.d(components_namespaceObject, "Input", function() { return input; });
__webpack_require__.d(components_namespaceObject, "Loading", function() { return loading; });
__webpack_require__.d(components_namespaceObject, "Message", function() { return components_message; });
__webpack_require__.d(components_namespaceObject, "Modal", function() { return modal; });
__webpack_require__.d(components_namespaceObject, "Notification", function() { return notification; });
__webpack_require__.d(components_namespaceObject, "Pagination", function() { return pagination; });
__webpack_require__.d(components_namespaceObject, "Radio", function() { return components_radio; });
__webpack_require__.d(components_namespaceObject, "Select", function() { return components_select; });
__webpack_require__.d(components_namespaceObject, "Snackbar", function() { return snackbar; });
__webpack_require__.d(components_namespaceObject, "Switch", function() { return components_switch; });
__webpack_require__.d(components_namespaceObject, "Table", function() { return table; });
__webpack_require__.d(components_namespaceObject, "Tabs", function() { return tabs; });
__webpack_require__.d(components_namespaceObject, "Tag", function() { return tag; });
__webpack_require__.d(components_namespaceObject, "Taginput", function() { return taginput; });
__webpack_require__.d(components_namespaceObject, "Timepicker", function() { return timepicker; });
__webpack_require__.d(components_namespaceObject, "Toast", function() { return toast; });
__webpack_require__.d(components_namespaceObject, "Tooltip", function() { return tooltip; });
__webpack_require__.d(components_namespaceObject, "Upload", function() { return upload; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(13);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/scss/buefy-build.scss
var buefy_build = __webpack_require__(75);
var buefy_build_default = /*#__PURE__*/__webpack_require__.n(buefy_build);

// EXTERNAL MODULE: ./src/components/autocomplete/Autocomplete.vue
var Autocomplete = __webpack_require__(51);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete);

// CONCATENATED MODULE: ./src/utils/plugins.js

var use = function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
    }
};

var registerComponent = function registerComponent(Vue, component) {
    Vue.component(component.name, component);
};

var registerComponentProgrammatic = function registerComponentProgrammatic(Vue, property, component) {
    Vue.prototype[property] = component;
};
// CONCATENATED MODULE: ./src/components/autocomplete/index.js




var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Autocomplete_default.a);
    }
};

use(Plugin);

/* harmony default export */ var autocomplete = (Plugin);


// EXTERNAL MODULE: ./src/components/checkbox/Checkbox.vue
var Checkbox = __webpack_require__(60);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);

// EXTERNAL MODULE: ./src/components/checkbox/CheckboxButton.vue
var CheckboxButton = __webpack_require__(110);
var CheckboxButton_default = /*#__PURE__*/__webpack_require__.n(CheckboxButton);

// CONCATENATED MODULE: ./src/components/checkbox/index.js





var checkbox_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Checkbox_default.a);
        registerComponent(Vue, CheckboxButton_default.a);
    }
};

use(checkbox_Plugin);

/* harmony default export */ var components_checkbox = (checkbox_Plugin);


// EXTERNAL MODULE: ./src/components/collapse/Collapse.vue
var Collapse = __webpack_require__(113);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);

// CONCATENATED MODULE: ./src/components/collapse/index.js




var collapse_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Collapse_default.a);
    }
};

use(collapse_Plugin);

/* harmony default export */ var collapse = (collapse_Plugin);


// EXTERNAL MODULE: ./src/components/datepicker/Datepicker.vue
var Datepicker = __webpack_require__(116);
var Datepicker_default = /*#__PURE__*/__webpack_require__.n(Datepicker);

// CONCATENATED MODULE: ./src/components/datepicker/index.js




var datepicker_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Datepicker_default.a);
    }
};

use(datepicker_Plugin);

/* harmony default export */ var datepicker = (datepicker_Plugin);


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue__ = __webpack_require__(22);
var external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue__);

// EXTERNAL MODULE: ./src/components/dialog/Dialog.vue
var Dialog = __webpack_require__(135);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);

// CONCATENATED MODULE: ./src/components/dialog/index.js






function dialog_open(propsData) {
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
    var DialogComponent = vm.extend(Dialog_default.a);
    return new DialogComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
}

var DialogProgrammatic = {
    alert: function alert(params) {
        var message = void 0;
        if (typeof params === 'string') message = params;
        var defaultParam = {
            canCancel: false,
            message: message
        };
        var propsData = assign_default()(defaultParam, params);
        return dialog_open(propsData);
    },
    confirm: function confirm(params) {
        var defaultParam = {};
        var propsData = assign_default()(defaultParam, params);
        return dialog_open(propsData);
    },
    prompt: function prompt(params) {
        var defaultParam = {
            hasInput: true,
            confirmText: 'Done'
        };
        var propsData = assign_default()(defaultParam, params);
        return dialog_open(propsData);
    }
};

var dialog_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Dialog_default.a);
        registerComponentProgrammatic(Vue, '$dialog', DialogProgrammatic);
    }
};

use(dialog_Plugin);

/* harmony default export */ var dialog = (dialog_Plugin);


// EXTERNAL MODULE: ./src/components/dropdown/Dropdown.vue
var Dropdown = __webpack_require__(42);
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown);

// EXTERNAL MODULE: ./src/components/dropdown/DropdownItem.vue
var DropdownItem = __webpack_require__(43);
var DropdownItem_default = /*#__PURE__*/__webpack_require__.n(DropdownItem);

// CONCATENATED MODULE: ./src/components/dropdown/index.js





var dropdown_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Dropdown_default.a);
        registerComponent(Vue, DropdownItem_default.a);
    }
};

use(dropdown_Plugin);

/* harmony default export */ var dropdown = (dropdown_Plugin);


// EXTERNAL MODULE: ./src/components/field/Field.vue
var Field = __webpack_require__(44);
var Field_default = /*#__PURE__*/__webpack_require__.n(Field);

// CONCATENATED MODULE: ./src/components/field/index.js




var field_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Field_default.a);
    }
};

use(field_Plugin);

/* harmony default export */ var field = (field_Plugin);


// EXTERNAL MODULE: ./src/components/icon/Icon.vue
var Icon = __webpack_require__(3);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);

// CONCATENATED MODULE: ./src/components/icon/index.js




var icon_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Icon_default.a);
    }
};

use(icon_Plugin);

/* harmony default export */ var icon = (icon_Plugin);


// EXTERNAL MODULE: ./src/components/input/Input.vue
var Input = __webpack_require__(27);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input);

// CONCATENATED MODULE: ./src/components/input/index.js




var input_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Input_default.a);
    }
};

use(input_Plugin);

/* harmony default export */ var input = (input_Plugin);


// EXTERNAL MODULE: ./src/components/loading/Loading.vue
var Loading = __webpack_require__(140);
var Loading_default = /*#__PURE__*/__webpack_require__.n(Loading);

// CONCATENATED MODULE: ./src/components/loading/index.js






var LoadingProgrammatic = {
    open: function open(params) {
        var defaultParam = {
            programmatic: true
        };
        var propsData = assign_default()(defaultParam, params);

        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
        var LoadingComponent = vm.extend(Loading_default.a);
        return new LoadingComponent({
            el: document.createElement('div'),
            propsData: propsData
        });
    }
};

var loading_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Loading_default.a);
        registerComponentProgrammatic(Vue, '$loading', LoadingProgrammatic);
    }
};

use(loading_Plugin);

/* harmony default export */ var loading = (loading_Plugin);


// EXTERNAL MODULE: ./src/components/message/Message.vue
var Message = __webpack_require__(143);
var Message_default = /*#__PURE__*/__webpack_require__.n(Message);

// CONCATENATED MODULE: ./src/components/message/index.js




var message_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Message_default.a);
    }
};

use(message_Plugin);

/* harmony default export */ var components_message = (message_Plugin);


// EXTERNAL MODULE: ./src/components/modal/Modal.vue
var Modal = __webpack_require__(61);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);

// CONCATENATED MODULE: ./src/components/modal/index.js






var ModalProgrammatic = {
    open: function open(params) {
        var content = void 0;
        var parent = void 0;
        if (typeof params === 'string') content = params;

        var defaultParam = {
            programmatic: true,
            content: content
        };
        if (params.parent) {
            parent = params.parent;
            delete params.parent;
        }
        var propsData = assign_default()(defaultParam, params);

        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
        var ModalComponent = vm.extend(Modal_default.a);
        return new ModalComponent({
            parent: parent,
            el: document.createElement('div'),
            propsData: propsData
        });
    }
};

var modal_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Modal_default.a);
        registerComponentProgrammatic(Vue, '$modal', ModalProgrammatic);
    }
};

use(modal_Plugin);

/* harmony default export */ var modal = (modal_Plugin);


// EXTERNAL MODULE: ./src/components/notification/Notification.vue
var Notification = __webpack_require__(146);
var Notification_default = /*#__PURE__*/__webpack_require__.n(Notification);

// CONCATENATED MODULE: ./src/components/notification/index.js




var notification_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Notification_default.a);
    }
};

use(notification_Plugin);

/* harmony default export */ var notification = (notification_Plugin);


// EXTERNAL MODULE: ./src/components/pagination/Pagination.vue
var Pagination = __webpack_require__(64);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);

// CONCATENATED MODULE: ./src/components/pagination/index.js




var pagination_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Pagination_default.a);
    }
};

use(pagination_Plugin);

/* harmony default export */ var pagination = (pagination_Plugin);


// EXTERNAL MODULE: ./src/components/radio/Radio.vue
var Radio = __webpack_require__(151);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);

// EXTERNAL MODULE: ./src/components/radio/RadioButton.vue
var RadioButton = __webpack_require__(154);
var RadioButton_default = /*#__PURE__*/__webpack_require__.n(RadioButton);

// CONCATENATED MODULE: ./src/components/radio/index.js





var radio_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Radio_default.a);
        registerComponent(Vue, RadioButton_default.a);
    }
};

use(radio_Plugin);

/* harmony default export */ var components_radio = (radio_Plugin);


// EXTERNAL MODULE: ./src/components/select/Select.vue
var Select = __webpack_require__(28);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);

// CONCATENATED MODULE: ./src/components/select/index.js




var select_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Select_default.a);
    }
};

use(select_Plugin);

/* harmony default export */ var components_select = (select_Plugin);


// EXTERNAL MODULE: ./src/components/snackbar/Snackbar.vue
var Snackbar = __webpack_require__(157);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar);

// CONCATENATED MODULE: ./src/components/snackbar/index.js






var SnackbarProgrammatic = {
    open: function open(params) {
        var message = void 0;
        var parent = void 0;
        if (typeof params === 'string') message = params;

        var defaultParam = {
            type: 'is-success',
            position: 'is-bottom-right',
            message: message
        };
        if (params.parent) {
            parent = params.parent;
            delete params.parent;
        }
        var propsData = assign_default()(defaultParam, params);

        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
        var SnackbarComponent = vm.extend(Snackbar_default.a);
        return new SnackbarComponent({
            parent: parent,
            el: document.createElement('div'),
            propsData: propsData
        });
    }
};

var snackbar_Plugin = {
    install: function install(Vue) {
        registerComponentProgrammatic(Vue, '$snackbar', SnackbarProgrammatic);
    }
};

use(snackbar_Plugin);

/* harmony default export */ var snackbar = (snackbar_Plugin);


// EXTERNAL MODULE: ./src/components/switch/Switch.vue
var Switch = __webpack_require__(160);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);

// CONCATENATED MODULE: ./src/components/switch/index.js




var switch_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Switch_default.a);
    }
};

use(switch_Plugin);

/* harmony default export */ var components_switch = (switch_Plugin);


// EXTERNAL MODULE: ./src/components/table/Table.vue
var Table = __webpack_require__(163);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);

// EXTERNAL MODULE: ./src/components/table/TableColumn.vue
var TableColumn = __webpack_require__(66);
var TableColumn_default = /*#__PURE__*/__webpack_require__.n(TableColumn);

// CONCATENATED MODULE: ./src/components/table/index.js





var table_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Table_default.a);
        registerComponent(Vue, TableColumn_default.a);
    }
};

use(table_Plugin);

/* harmony default export */ var table = (table_Plugin);


// EXTERNAL MODULE: ./src/components/tabs/Tabs.vue
var Tabs = __webpack_require__(179);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);

// EXTERNAL MODULE: ./src/components/tabs/TabItem.vue
var TabItem = __webpack_require__(182);
var TabItem_default = /*#__PURE__*/__webpack_require__.n(TabItem);

// CONCATENATED MODULE: ./src/components/tabs/index.js





var tabs_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Tabs_default.a);
        registerComponent(Vue, TabItem_default.a);
    }
};

use(tabs_Plugin);

/* harmony default export */ var tabs = (tabs_Plugin);


// EXTERNAL MODULE: ./src/components/tag/Tag.vue
var Tag = __webpack_require__(67);
var Tag_default = /*#__PURE__*/__webpack_require__.n(Tag);

// EXTERNAL MODULE: ./src/components/tag/Taglist.vue
var Taglist = __webpack_require__(187);
var Taglist_default = /*#__PURE__*/__webpack_require__.n(Taglist);

// CONCATENATED MODULE: ./src/components/tag/index.js





var tag_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Tag_default.a);
        registerComponent(Vue, Taglist_default.a);
    }
};

use(tag_Plugin);

/* harmony default export */ var tag = (tag_Plugin);


// EXTERNAL MODULE: ./src/components/taginput/Taginput.vue
var Taginput = __webpack_require__(190);
var Taginput_default = /*#__PURE__*/__webpack_require__.n(Taginput);

// CONCATENATED MODULE: ./src/components/taginput/index.js




var taginput_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Taginput_default.a);
    }
};

use(taginput_Plugin);

/* harmony default export */ var taginput = (taginput_Plugin);


// EXTERNAL MODULE: ./src/components/timepicker/Timepicker.vue
var Timepicker = __webpack_require__(193);
var Timepicker_default = /*#__PURE__*/__webpack_require__.n(Timepicker);

// CONCATENATED MODULE: ./src/components/timepicker/index.js




var timepicker_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Timepicker_default.a);
    }
};

use(timepicker_Plugin);

/* harmony default export */ var timepicker = (timepicker_Plugin);


// EXTERNAL MODULE: ./src/components/toast/Toast.vue
var Toast = __webpack_require__(196);
var Toast_default = /*#__PURE__*/__webpack_require__.n(Toast);

// CONCATENATED MODULE: ./src/components/toast/index.js






var ToastProgrammatic = {
    open: function open(params) {
        var message = void 0;
        var parent = void 0;
        if (typeof params === 'string') message = params;

        var defaultParam = { message: message };
        if (params.parent) {
            parent = params.parent;
            delete params.parent;
        }
        var propsData = assign_default()(defaultParam, params);

        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
        var ToastComponent = vm.extend(Toast_default.a);
        return new ToastComponent({
            parent: parent,
            el: document.createElement('div'),
            propsData: propsData
        });
    }
};

var toast_Plugin = {
    install: function install(Vue) {
        registerComponentProgrammatic(Vue, '$toast', ToastProgrammatic);
    }
};

use(toast_Plugin);

/* harmony default export */ var toast = (toast_Plugin);


// EXTERNAL MODULE: ./src/components/tooltip/Tooltip.vue
var Tooltip = __webpack_require__(199);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);

// CONCATENATED MODULE: ./src/components/tooltip/index.js




var tooltip_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Tooltip_default.a);
    }
};

use(tooltip_Plugin);

/* harmony default export */ var tooltip = (tooltip_Plugin);


// EXTERNAL MODULE: ./src/components/upload/Upload.vue
var Upload = __webpack_require__(202);
var Upload_default = /*#__PURE__*/__webpack_require__.n(Upload);

// CONCATENATED MODULE: ./src/components/upload/index.js




var upload_Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Upload_default.a);
    }
};

use(upload_Plugin);

/* harmony default export */ var upload = (upload_Plugin);


// CONCATENATED MODULE: ./src/components/index.js




























// EXTERNAL MODULE: ./src/utils/config.js
var config = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index.js









var Buefy = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Options
        Object(config["b" /* setOptions */])(assign_default()(config["a" /* default */], options));
        // Components
        for (var componentKey in components_namespaceObject) {
            Vue.use(components_namespaceObject[componentKey]);
        }
        // Config component
        var BuefyProgrammatic = {
            setOptions: function setOptions(options) {
                Object(config["b" /* setOptions */])(assign_default()(config["a" /* default */], options));
            }
        };
        registerComponentProgrammatic(Vue, '$buefy', BuefyProgrammatic);
    }
};

use(Buefy);

/* harmony default export */ var src = __webpack_exports__["default"] = (Buefy);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(72) });


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(19)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(50);
var toAbsoluteIndex = __webpack_require__(74);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_FormElementMixin__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_Input__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__input_Input__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BAutocomplete',
    components: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_5__input_Input___default.a.name, __WEBPACK_IMPORTED_MODULE_5__input_Input___default.a),
    mixins: [__WEBPACK_IMPORTED_MODULE_4__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: [Number, String],
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        field: {
            type: String,
            default: 'value'
        },
        keepFirst: Boolean,
        clearOnSelect: Boolean,
        openOnFocus: Boolean
    },
    data: function data() {
        return {
            selected: null,
            hovered: null,
            isActive: false,
            newValue: this.value,
            isListInViewportVertically: true,
            hasFocus: false,
            _isAutocomplete: true,
            _elementRef: 'input'
        };
    },

    computed: {
        /**
         * White-listed items to not close when clicked.
         * Add input, dropdown and all children.
         */
        whiteList: function whiteList() {
            var whiteList = [];
            whiteList.push(this.$refs.input.$el.querySelector('input'));
            whiteList.push(this.$refs.dropdown);
            // Add all chidren from dropdown
            if (this.$refs.dropdown !== undefined) {
                var children = this.$refs.dropdown.querySelectorAll('*');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        whiteList.push(child);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            return whiteList;
        },


        /**
         * Check if exists default slot
         */
        hasDefaultSlot: function hasDefaultSlot() {
            return !!this.$scopedSlots.default;
        },


        /**
         * Check if exists "empty" slot
         */
        hasEmptySlot: function hasEmptySlot() {
            return !!this.$slots.empty;
        },


        /**
         * Check if exists "header" slot
         */
        hasHeaderSlot: function hasHeaderSlot() {
            return !!this.$slots.header;
        }
    },
    watch: {
        /**
         * When dropdown is toggled, check the visibility to know when
         * to open upwards.
         */
        isActive: function isActive(active) {
            var _this = this;

            if (active) {
                this.calcDropdownInViewportVertical();
            } else {
                this.$nextTick(function () {
                    return _this.setHovered(null);
                });
                // Timeout to wait for the animation to finish before recalculating
                setTimeout(function () {
                    _this.calcDropdownInViewportVertical();
                }, 100);
            }
        },


        /**
         * When updating input's value
         *   1. Emit changes
         *   2. If value isn't the same as selected, set null
         *   3. Close dropdown if value is clear or else open it
         */
        newValue: function newValue(value) {
            this.$emit('input', value);
            // Check if selected is invalid
            var currentValue = this.getValue(this.selected);
            if (currentValue && currentValue !== value) {
                this.setSelected(null, false);
            }
            // Close dropdown if input is clear or else open it
            if (this.hasFocus && (!this.openOnFocus || value)) {
                this.isActive = !!value;
            }
        },


        /**
         * When v-model is changed:
         *   1. Update internal value.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.newValue = _value;
            !this.isValid && this.$refs.input.checkHtml5Validity();
        },


        /**
         * Select first option if "keep-first
         */
        data: function data(value) {
            // Keep first option always pre-selected
            if (this.keepFirst) {
                this.selectFirstOption(value);
            }
        }
    },
    methods: {
        /**
         * Set which option is currently hovered.
         */
        setHovered: function setHovered(option) {
            if (option === undefined) return;

            this.hovered = option;
        },


        /**
         * Set which option is currently selected, update v-model,
         * update input value and close dropdown.
         */
        setSelected: function setSelected(option) {
            var _this2 = this;

            var closeDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (option === undefined) return;

            this.selected = option;
            this.$emit('select', this.selected);
            if (this.selected !== null) {
                this.newValue = this.clearOnSelect ? '' : this.getValue(this.selected);
            }
            closeDropdown && this.$nextTick(function () {
                _this2.isActive = false;
            });
        },


        /**
         * Select first option
         */
        selectFirstOption: function selectFirstOption(options) {
            var _this3 = this;

            this.$nextTick(function () {
                if (options.length) {
                    // If has visible data or open on focus, keep updating the hovered
                    if (_this3.openOnFocus || _this3.newValue !== '' && _this3.hovered !== options[0]) {
                        _this3.setHovered(options[0]);
                    }
                } else {
                    _this3.setHovered(null);
                }
            });
        },


        /**
         * Enter key listener.
         * Select the hovered option.
         */
        enterPressed: function enterPressed() {
            if (this.hovered === null) return;
            this.setSelected(this.hovered);
        },


        /**
         * Tab key listener.
         * Select hovered option if it exists, close dropdown, then allow
         * native handling to move to next tabbable element.
         */
        tabPressed: function tabPressed() {
            if (this.hovered === null) {
                this.isActive = false;
                return;
            }
            this.setSelected(this.hovered);
        },


        /**
         * Close dropdown if clicked outside.
         */
        clickedOutside: function clickedOutside(event) {
            if (this.whiteList.indexOf(event.target) < 0) this.isActive = false;
        },


        /**
         * Return display text for the input.
         * If object, get value from path, or else just the value.
         */
        getValue: function getValue(option) {
            if (!option) return;

            return (typeof option === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(option)) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_3__utils_helpers__["a" /* getValueByPath */])(option, this.field) : option;
        },


        /**
         * Calculate if the dropdown is vertically visible when activated,
         * otherwise it is openened upwards.
         */
        calcDropdownInViewportVertical: function calcDropdownInViewportVertical() {
            var _this4 = this;

            this.$nextTick(function () {
                /**
                 * this.$refs.dropdown may be undefined
                 * when Autocomplete is conditional rendered
                 */
                if (_this4.$refs.dropdown === undefined) return;

                var rect = _this4.$refs.dropdown.getBoundingClientRect();

                _this4.isListInViewportVertically = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
            });
        },


        /**
         * Arrows keys listener.
         * If dropdown is active, set hovered option, or else just open.
         */
        keyArrows: function keyArrows(direction) {
            var sum = direction === 'down' ? 1 : -1;
            if (this.isActive) {
                var index = this.data.indexOf(this.hovered) + sum;
                index = index > this.data.length - 1 ? this.data.length : index;
                index = index < 0 ? 0 : index;

                this.setHovered(this.data[index]);

                var list = this.$refs.dropdown.querySelector('.dropdown-content');
                var element = list.querySelectorAll('a.dropdown-item:not(.is-disabled)')[index];

                if (!element) return;

                var visMin = list.scrollTop;
                var visMax = list.scrollTop + list.clientHeight - element.clientHeight;

                if (element.offsetTop < visMin) {
                    list.scrollTop = element.offsetTop;
                } else if (element.offsetTop >= visMax) {
                    list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
                }
            } else {
                this.isActive = true;
            }
        },


        /**
         * Focus listener.
         * If value is the same as selected, select all text.
         */
        focused: function focused(event) {
            if (this.getValue(this.selected) === this.newValue) {
                this.$el.querySelector('input').select();
            }
            if (this.openOnFocus) {
                this.isActive = true;
                if (this.keepFirst) {
                    this.selectFirstOption(this.data);
                }
            }
            this.hasFocus = true;
            this.$emit('focus', event);
        },


        /**
         * Blur listener.
        */
        onBlur: function onBlur(event) {
            this.hasFocus = false;
            this.$emit('blur', event);
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', this.clickedOutside);
            window.addEventListener('resize', this.calcDropdownInViewportVertical);
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('click', this.clickedOutside);
            window.removeEventListener('resize', this.calcDropdownInViewportVertical);
        }
    }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(56);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(39);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(15);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(85);
var step = __webpack_require__(86);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(53)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(96);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(54);
var META = __webpack_require__(89).KEY;
var $fails = __webpack_require__(19);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(39);
var uid = __webpack_require__(25);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(90);
var isArray = __webpack_require__(91);
var anObject = __webpack_require__(15);
var isObject = __webpack_require__(18);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(20);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(92);
var $GOPD = __webpack_require__(93);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(23);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(19)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(57).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 94 */
/***/ (function(module, exports) {



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(38);
module.exports = __webpack_require__(98);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var get = __webpack_require__(59);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__ = __webpack_require__(12);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BInput',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a),
    mixins: [__WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: [Number, String],
        type: {
            type: String,
            default: 'text'
        },
        passwordReveal: Boolean,
        hasCounter: {
            type: Boolean,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* default */].defaultInputHasCounter;
            }
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            newValue: this.value,
            newType: this.type,
            newAutocomplete: this.autocomplete || __WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* default */].defaultInputAutocomplete,
            isPasswordVisible: false,
            _elementRef: this.type === 'textarea' ? 'textarea' : 'input'
        };
    },

    computed: {
        rootClasses: function rootClasses() {
            return [this.iconPosition, this.size, {
                'is-expanded': this.expanded,
                'is-loading': this.loading,
                'is-clearfix': !this.hasMessage
            }];
        },
        inputClasses: function inputClasses() {
            return [this.statusType, this.size, { 'is-rounded': this.rounded }];
        },
        hasIconRight: function hasIconRight() {
            return this.passwordReveal || this.loading || this.statusType;
        },


        /**
         * Position of the icon or if it's both sides.
         */
        iconPosition: function iconPosition() {
            if (this.icon && this.hasIconRight) {
                return 'has-icons-left has-icons-right';
            } else if (!this.icon && this.hasIconRight) {
                return 'has-icons-right';
            } else if (this.icon) {
                return 'has-icons-left';
            }
        },


        /**
         * Icon name (MDI) based on the type.
         */
        statusTypeIcon: function statusTypeIcon() {
            switch (this.statusType) {
                case 'is-success':
                    return 'check';
                case 'is-danger':
                    return 'alert-circle';
                case 'is-info':
                    return 'information';
                case 'is-warning':
                    return 'alert';
            }
        },


        /**
         * Check if have any message prop from parent if it's a Field.
         */
        hasMessage: function hasMessage() {
            return !!this.statusMessage;
        },


        /**
         * Current password-reveal icon name.
         */
        passwordVisibleIcon: function passwordVisibleIcon() {
            return !this.isPasswordVisible ? 'eye' : 'eye-off';
        },

        /**
         * Get value length
         */
        valueLength: function valueLength() {
            if (typeof this.newValue === 'string') {
                return this.newValue.length;
            } else if (typeof this.newValue === 'number') {
                return this.newValue.toString().length;
            }
            return 0;
        }
    },
    watch: {
        /**
         * When v-model is changed:
         *   1. Set internal value.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.newValue = _value;
        },


        /**
         * Update user's v-model and validate again whenever
         * internal value is changed.
         */
        newValue: function newValue(value) {
            this.$emit('input', value);
            !this.isValid && this.checkHtml5Validity();
        }
    },
    methods: {
        /**
         * Toggle the visibility of a password-reveal input
         * by changing the type and focus the input right away.
         */
        togglePasswordVisibility: function togglePasswordVisibility() {
            var _this = this;

            this.isPasswordVisible = !this.isPasswordVisible;
            this.newType = this.isPasswordVisible ? 'text' : 'password';

            this.$nextTick(function () {
                _this.$refs.input.focus();
            });
        },


        /**
         * Input's 'input' event listener, 'nextTick' is used to prevent event firing
         * before ui update, helps when using masks (Cleavejs and potentially others).
         */
        onInput: function onInput(event) {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.newValue = event.target.value;
            });
        }
    }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BIcon',
    props: {
        type: [String, Object],
        pack: String,
        icon: String,
        size: String,
        customSize: String,
        customClass: String,
        both: Boolean // This is used internally to show both MDI and FA icon
    },
    computed: {
        /**
         * Internal icon name based on the pack.
         * If pack is 'fa', gets the equivalent FA icon name of the MDI,
         * internal icons are always MDI.
         */
        newIcon: function newIcon() {
            if (!this.both) {
                if (this.newPack === 'mdi') {
                    return this.newPack + '-' + this.icon;
                } else {
                    return 'fa-' + this.icon;
                }
            }

            return this.newPack === 'mdi' ? this.newPack + '-' + this.icon : 'fa-' + this.getEquivalentIconOf(this.icon);
        },
        newPack: function newPack() {
            return this.pack || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultIconPack;
        },
        newType: function newType() {
            if (!this.type) return;

            var splitType = [];
            if (typeof this.type === 'string') {
                splitType = this.type.split('-');
            } else {
                for (var key in this.type) {
                    if (this.type[key]) {
                        splitType = key.split('-');
                        break;
                    }
                }
            }
            if (splitType.length <= 1) return;

            return 'has-text-' + splitType[1];
        },
        newCustomSize: function newCustomSize() {
            return this.customSize || this.customSizeByPack;
        },
        customSizeByPack: function customSizeByPack() {
            var defaultSize = this.newPack === 'mdi' ? 'mdi-24px' : 'fa-lg';
            var mediumSize = this.newPack === 'mdi' ? 'mdi-36px' : 'fa-2x';
            var largeSize = this.newPack === 'mdi' ? 'mdi-48px' : 'fa-3x';
            switch (this.size) {
                case 'is-small':
                    return;
                case 'is-medium':
                    return mediumSize;
                case 'is-large':
                    return largeSize;
                default:
                    return defaultSize;
            }
        }
    },
    methods: {
        /**
         * Equivalent FA icon name of the MDI.
         */
        getEquivalentIconOf: function getEquivalentIconOf(value) {
            switch (value) {
                case 'check':
                    return 'check';
                case 'information':
                    return 'info-circle';
                case 'check-circle':
                    return 'check-circle';
                case 'alert':
                    return 'exclamation-triangle';
                case 'alert-circle':
                    return 'exclamation-circle';
                case 'arrow-up':
                    return 'arrow-up';
                case 'chevron-right':
                    return 'angle-right';
                case 'chevron-left':
                    return 'angle-left';
                case 'chevron-down':
                    return 'angle-down';
                case 'eye':
                    return 'eye';
                case 'eye-off':
                    return 'eye-slash';
                case 'menu-down':
                    return 'caret-down';
                case 'menu-up':
                    return 'caret-up';
                default:
                    return value;
            }
        }
    }
});

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon",
    class: [_vm.newType, _vm.size]
  }, [_c('i', {
    class: [_vm.newPack, _vm.newIcon, _vm.newCustomSize, _vm.customClass]
  })])
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control",
    class: _vm.rootClasses
  }, [(_vm.type !== 'textarea') ? _c('input', _vm._b({
    ref: "input",
    staticClass: "input",
    class: [_vm.inputClasses, _vm.customClass],
    attrs: {
      "type": _vm.newType,
      "autocomplete": _vm.newAutocomplete,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.newValue
    },
    on: {
      "input": _vm.onInput,
      "blur": _vm.onBlur,
      "focus": _vm.onFocus
    }
  }, 'input', _vm.$attrs, false)) : _c('textarea', _vm._b({
    ref: "textarea",
    staticClass: "textarea",
    class: [_vm.inputClasses, _vm.customClass],
    attrs: {
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.newValue
    },
    on: {
      "input": _vm.onInput,
      "blur": _vm.onBlur,
      "focus": _vm.onFocus
    }
  }, 'textarea', _vm.$attrs, false)), _vm._v(" "), (_vm.icon) ? _c('b-icon', {
    staticClass: "is-left",
    attrs: {
      "icon": _vm.icon,
      "pack": _vm.iconPack,
      "size": _vm.iconSize
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.loading && (_vm.passwordReveal || _vm.statusType)) ? _c('b-icon', {
    staticClass: "is-right",
    class: {
      'is-clickable': _vm.passwordReveal
    },
    attrs: {
      "icon": _vm.passwordReveal ? _vm.passwordVisibleIcon : _vm.statusTypeIcon,
      "pack": _vm.iconPack,
      "size": _vm.iconSize,
      "type": !_vm.passwordReveal ? _vm.statusType : 'is-primary',
      "both": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.togglePasswordVisibility($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.maxlength && _vm.hasCounter && _vm.type !== 'number') ? _c('small', {
    staticClass: "help counter",
    class: {
      'is-invisible': !_vm.isFocused
    }
  }, [_vm._v("\n        " + _vm._s(_vm.valueLength) + " / " + _vm._s(_vm.maxlength) + "\n    ")]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "autocomplete control",
    class: {
      'is-expanded': _vm.expanded
    }
  }, [_c('b-input', _vm._b({
    ref: "input",
    attrs: {
      "size": _vm.size,
      "loading": _vm.loading,
      "rounded": _vm.rounded,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "maxlength": _vm.maxlength,
      "autocomplete": "off"
    },
    on: {
      "focus": _vm.focused,
      "blur": _vm.onBlur
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) { return null; }
        $event.preventDefault();
        _vm.isActive = false
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key)) { return null; }
        _vm.tabPressed($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        $event.preventDefault();
        _vm.enterPressed($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) { return null; }
        $event.preventDefault();
        _vm.keyArrows('up')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) { return null; }
        $event.preventDefault();
        _vm.keyArrows('down')
      }]
    },
    model: {
      value: (_vm.newValue),
      callback: function($$v) {
        _vm.newValue = $$v
      },
      expression: "newValue"
    }
  }, 'b-input', _vm.$attrs, false)), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive && (_vm.data.length > 0 || _vm.hasEmptySlot || _vm.hasHeaderSlot)),
      expression: "isActive && (data.length > 0 || hasEmptySlot || hasHeaderSlot)"
    }],
    ref: "dropdown",
    staticClass: "dropdown-menu",
    class: {
      'is-opened-top': !_vm.isListInViewportVertically
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "dropdown-content"
  }, [(_vm.hasHeaderSlot) ? _c('div', {
    staticClass: "dropdown-item"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm._l((_vm.data), function(option, index) {
    return _c('a', {
      key: index,
      staticClass: "dropdown-item",
      class: {
        'is-hovered': option === _vm.hovered
      },
      on: {
        "click": function($event) {
          _vm.setSelected(option)
        }
      }
    }, [(_vm.hasDefaultSlot) ? _vm._t("default", null, {
      option: option,
      index: index
    }) : _c('span', [_vm._v("\n                        " + _vm._s(_vm.getValue(option, true)) + "\n                    ")])], 2)
  }), _vm._v(" "), (_vm.data.length === 0 && _vm.hasEmptySlot) ? _c('div', {
    staticClass: "dropdown-item is-disabled"
  }, [_vm._t("empty")], 2) : _vm._e()], 2)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BCheckbox',
    props: {
        value: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        nativeValue: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        indeterminate: Boolean,
        type: String,
        disabled: Boolean,
        required: Boolean,
        name: String,
        size: String,
        trueValue: {
            type: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
            default: false
        }
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.newValue;
            },
            set: function set(value) {
                this.newValue = value;
                this.$emit('input', value);
            }
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value: function value(_value) {
            this.newValue = _value;
        }
    }
});

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "b-checkbox checkbox",
    class: [_vm.size, {
      'is-disabled': _vm.disabled
    }],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "required": _vm.required,
      "name": _vm.name,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "indeterminate": _vm.indeterminate,
      "value": _vm.nativeValue,
      "checked": Array.isArray(_vm.computedValue) ? _vm._i(_vm.computedValue, _vm.nativeValue) > -1 : _vm._q(_vm.computedValue, _vm.trueValue)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.computedValue,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = _vm.nativeValue,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.computedValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.computedValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.computedValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "check",
    class: _vm.type
  }), _vm._v(" "), _c('span', {
    staticClass: "control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(112),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BCheckboxButton',
    props: {
        value: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        nativeValue: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        disabled: Boolean,
        name: String,
        size: String,
        type: {
            type: String,
            default: 'is-primary'
        }
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.newValue;
            },
            set: function set(value) {
                this.newValue = value;
                this.$emit('input', value);
            }
        },
        checked: function checked() {
            if (Array.isArray(this.newValue)) {
                return this.newValue.indexOf(this.nativeValue) >= 0;
            }
            return this.newValue === this.nativeValue;
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value: function value(_value) {
            this.newValue = _value;
        }
    }
});

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control"
  }, [_c('label', {
    ref: "label",
    staticClass: "b-checkbox checkbox button",
    class: [_vm.checked ? _vm.type : null, _vm.size, {
      'is-disabled': _vm.disabled
    }],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_vm._t("default"), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": Array.isArray(_vm.computedValue) ? _vm._i(_vm.computedValue, _vm.nativeValue) > -1 : (_vm.computedValue)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.computedValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.nativeValue,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.computedValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.computedValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.computedValue = $$c
        }
      }
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(115),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BCollapse',
    props: {
        open: {
            type: Boolean,
            default: true
        },
        animation: {
            type: String,
            default: 'fade'
        }
    },
    data: function data() {
        return {
            isOpen: this.open
        };
    },

    watch: {
        open: function open(value) {
            this.isOpen = value;
        }
    },
    methods: {
        /**
         * Toggle and emit events
         */
        toggle: function toggle() {
            this.isOpen = !this.isOpen;
            this.$emit('update:open', this.isOpen);
            this.$emit(this.isOpen ? 'open' : 'close');
        }
    }
});

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collapse"
  }, [_c('div', {
    staticClass: "collapse-trigger",
    on: {
      "click": _vm.toggle
    }
  }, [_vm._t("trigger", null, {
    open: _vm.isOpen
  })], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.animation
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "collapse-content"
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_Input__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_Field__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__field_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_Select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__select_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DatepickerTable__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DatepickerTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__DatepickerTable__);


var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDatepicker',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_10__DatepickerTable___default.a.name, __WEBPACK_IMPORTED_MODULE_10__DatepickerTable___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_6__input_Input___default.a.name, __WEBPACK_IMPORTED_MODULE_6__input_Input___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_7__field_Field___default.a.name, __WEBPACK_IMPORTED_MODULE_7__field_Field___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8__select_Select___default.a.name, __WEBPACK_IMPORTED_MODULE_8__select_Select___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default.a.name, __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default.a.name, __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default.a), _components),
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: Date,
        dayNames: {
            type: Array,
            default: function _default() {
                if (Array.isArray(__WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDayNames)) {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDayNames;
                } else {
                    return ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S'];
                }
            }
        },
        monthNames: {
            type: Array,
            default: function _default() {
                if (Array.isArray(__WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultMonthNames)) {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultMonthNames;
                } else {
                    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                }
            }
        },
        firstDayOfWeek: {
            type: Number,
            default: function _default() {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultFirstDayOfWeek === 'number') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultFirstDayOfWeek;
                } else {
                    return 0;
                }
            }
        },
        inline: Boolean,
        minDate: Date,
        maxDate: Date,
        focusedDate: Date,
        placeholder: String,
        editable: Boolean,
        disabled: Boolean,
        unselectableDates: Array,
        unselectableDaysOfWeek: {
            type: Array,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultUnselectableDaysOfWeek;
            }
        },
        selectableDates: Array,
        dateFormatter: {
            type: Function,
            default: function _default(date) {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateFormatter === 'function') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateFormatter(date);
                } else {
                    var yyyyMMdd = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
                    var d = new Date(yyyyMMdd);
                    return d.toLocaleDateString();
                }
            }
        },
        dateParser: {
            type: Function,
            default: function _default(date) {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateParser === 'function') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateParser(date);
                } else {
                    return new Date(Date.parse(date));
                }
            }
        },
        dateCreator: {
            type: Function,
            default: function _default() {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateCreator === 'function') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDateCreator();
                } else {
                    return new Date();
                }
            }
        },
        mobileNative: {
            type: Boolean,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDatepickerMobileNative;
            }
        },
        position: String,
        events: Array,
        indicators: {
            type: String,
            default: 'dots'
        }
    },
    data: function data() {
        var focusedDate = this.value || this.focusedDate || this.dateCreator();

        return {
            dateSelected: this.value,
            focusedDateData: {
                month: focusedDate.getMonth(),
                year: focusedDate.getFullYear()
            },
            _elementRef: 'input',
            _isDatepicker: true
        };
    },

    computed: {
        /*
        * Returns an array of years for the year dropdown. If earliest/latest
        * dates are set by props, range of years will fall within those dates.
        */
        listOfYears: function listOfYears() {
            var latestYear = this.maxDate ? this.maxDate.getFullYear() : Math.max(this.dateCreator().getFullYear(), this.focusedDateData.year) + 3;

            var earliestYear = this.minDate ? this.minDate.getFullYear() : 1900;

            var arrayOfYears = [];
            for (var i = earliestYear; i <= latestYear; i++) {
                arrayOfYears.push(i);
            }

            return arrayOfYears.reverse();
        },
        isFirstMonth: function isFirstMonth() {
            if (!this.minDate) return false;
            var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
            var date = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
            return dateToCheck <= date;
        },
        isLastMonth: function isLastMonth() {
            if (!this.maxDate) return false;
            var dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
            var date = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
            return dateToCheck >= date;
        },
        isMobile: function isMobile() {
            return this.mobileNative && __WEBPACK_IMPORTED_MODULE_2__utils_helpers__["c" /* isMobile */].any();
        }
    },
    watch: {
        /*
        * Emit input event with selected date as payload, set isActive to false.
        * Update internal focusedDateData
        */
        dateSelected: function dateSelected(value) {
            var currentDate = !value ? this.dateCreator() : value;
            this.focusedDateData = {
                month: currentDate.getMonth(),
                year: currentDate.getFullYear()
            };
            this.$emit('input', value);
            if (this.$refs.dropdown) {
                this.$refs.dropdown.isActive = false;
            }
        },


        /**
         * When v-model is changed:
         *   1. Update internal value.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.dateSelected = _value;

            !this.isValid && this.$refs.input.checkHtml5Validity();
        },
        focusedDate: function focusedDate(value) {
            if (value) {
                this.focusedDateData = {
                    month: value.getMonth(),
                    year: value.getFullYear()
                };
            }
        },


        /*
        * Emit input event on month and/or year change
        */
        'focusedDateData.month': function focusedDateDataMonth(value) {
            this.$emit('change-month', value);
        },
        'focusedDateData.year': function focusedDateDataYear(value) {
            this.$emit('change-year', value);
        }
    },
    methods: {
        /*
        * Emit input event with selected date as payload for v-model in parent
        */
        updateSelectedDate: function updateSelectedDate(date) {
            this.dateSelected = date;
        },


        /*
        * Parse string into date
        */
        onChange: function onChange(value) {
            var date = this.dateParser(value);
            if (date && !isNaN(date)) {
                this.dateSelected = date;
            } else {
                // Force refresh input value when not valid date
                this.dateSelected = null;
                this.$refs.input.newValue = this.dateSelected;
            }
        },


        /*
        * Format date into string
        */
        formatValue: function formatValue(value) {
            if (value && !isNaN(value)) {
                return this.dateFormatter(value);
            } else {
                return null;
            }
        },


        /*
        * Either decrement month by 1 if not January or decrement year by 1
        * and set month to 11 (December)
        */
        decrementMonth: function decrementMonth() {
            if (this.disabled) return;

            if (this.focusedDateData.month > 0) {
                this.focusedDateData.month -= 1;
            } else {
                this.focusedDateData.month = 11;
                this.focusedDateData.year -= 1;
            }
        },


        /*
        * Either increment month by 1 if not December or increment year by 1
        * and set month to 0 (January)
        */
        incrementMonth: function incrementMonth() {
            if (this.disabled) return;

            if (this.focusedDateData.month < 11) {
                this.focusedDateData.month += 1;
            } else {
                this.focusedDateData.month = 0;
                this.focusedDateData.year += 1;
            }
        },


        /*
        * Format date into string 'YYYY-MM-DD'
        */
        formatYYYYMMDD: function formatYYYYMMDD(value) {
            var date = new Date(value);
            if (value && !isNaN(date)) {
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                return year + '-' + ((month < 10 ? '0' : '') + month) + '-' + ((day < 10 ? '0' : '') + day);
            }
            return '';
        },


        /*
        * Parse date from string
        */
        onChangeNativePicker: function onChangeNativePicker(event) {
            var date = event.target.value;
            this.dateSelected = date ? new Date(date.replace(/-/g, '/')) : null;
        }
    }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDropdown',
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default.a, Function],
            default: null
        },
        disabled: Boolean,
        hoverable: Boolean,
        inline: Boolean,
        position: {
            type: String,
            validator: function validator(value) {
                return ['is-top-right', 'is-top-left', 'is-bottom-left'].indexOf(value) > -1;
            }
        },
        mobileModal: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            selected: this.value,
            isActive: false,
            _isDropdown: true // Used internally by DropdownItem
        };
    },

    computed: {
        rootClasses: function rootClasses() {
            return [this.position, {
                'is-disabled': this.disabled,
                'is-hoverable': this.hoverable,
                'is-inline': this.inline,
                'is-active': this.isActive || this.inline,
                'is-mobile-modal': this.isMobileModal
            }];
        },
        isMobileModal: function isMobileModal() {
            return this.mobileModal && !this.inline && !this.hoverable;
        }
    },
    watch: {
        /**
         * When v-model is changed set the new selected item.
         */
        value: function value(_value) {
            this.selected = _value;
        },


        /**
         * Emit event when isActive value is changed.
         */
        isActive: function isActive(value) {
            this.$emit('active-change', value);
        }
    },
    methods: {
        /**
         * Click listener from DropdownItem.
         *   1. Set new selected item.
         *   2. Emit input event to update the user v-model.
         *   3. Close the dropdown.
         */
        selectItem: function selectItem(value) {
            if (this.selected !== value) {
                this.$emit('change', value);
                this.selected = value;
            }
            this.$emit('input', value);
            this.isActive = false;
        },


        /**
         * White-listed items to not close when clicked.
         */
        isInWhiteList: function isInWhiteList(el) {
            if (el === this.$refs.dropdownMenu) return true;
            if (el === this.$refs.trigger) return true;
            // All chidren from dropdown
            if (this.$refs.dropdownMenu !== undefined) {
                var children = this.$refs.dropdownMenu.querySelectorAll('*');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        if (el === child) {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            // All children from trigger
            if (this.$refs.trigger !== undefined) {
                var _children = this.$refs.trigger.querySelectorAll('*');
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(_children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _child = _step2.value;

                        if (el === _child) {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }

            return false;
        },


        /**
         * Close dropdown if clicked outside.
         */
        clickedOutside: function clickedOutside(event) {
            if (this.inline) return;

            if (!this.isInWhiteList(event.target)) this.isActive = false;
        },


        /**
         * Toggle dropdown if it's not disabled.
         */
        toggle: function toggle() {
            var _this = this;

            if (this.disabled || this.hoverable) return;

            if (!this.isActive) {
                // if not active, toggle after clickOutside event
                // this fixes toggling programmatic
                this.$nextTick(function () {
                    _this.isActive = !_this.isActive;
                });
            } else {
                this.isActive = !this.isActive;
            }
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', this.clickedOutside);
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('click', this.clickedOutside);
        }
    }
});

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown",
    class: _vm.rootClasses
  }, [(!_vm.inline) ? _c('div', {
    ref: "trigger",
    staticClass: "dropdown-trigger",
    attrs: {
      "role": "button"
    },
    on: {
      "click": _vm.toggle
    }
  }, [_vm._t("trigger")], 2) : _vm._e(), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isMobileModal) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "background"
  }) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((!_vm.disabled && (_vm.isActive || _vm.hoverable)) || _vm.inline),
      expression: "(!disabled && (isActive || hoverable)) || inline"
    }],
    ref: "dropdownMenu",
    staticClass: "dropdown-menu"
  }, [_c('div', {
    staticClass: "dropdown-content"
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDropdownItem',
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a, Function],
            default: null
        },
        separator: Boolean,
        disabled: Boolean,
        custom: Boolean,
        paddingless: Boolean,
        hasLink: Boolean
    },
    computed: {
        anchorClasses: function anchorClasses() {
            return {
                'is-disabled': this.$parent.disabled || this.disabled,
                'is-paddingless': this.paddingless,
                'is-active': this.value !== null && this.value === this.$parent.selected
            };
        },
        itemClasses: function itemClasses() {
            return {
                'dropdown-item': !this.hasLink,
                'is-disabled': this.disabled,
                'is-paddingless': this.paddingless,
                'is-active': this.value !== null && this.value === this.$parent.selected,
                'has-link': this.hasLink
            };
        },

        /**
         * Check if item can be clickable.
         */
        isClickable: function isClickable() {
            return !this.$parent.disabled && !this.separator && !this.disabled && !this.custom;
        }
    },
    methods: {
        /**
         * Click listener, select the item.
         */
        selectItem: function selectItem() {
            if (!this.isClickable) return;

            this.$parent.selectItem(this.value);
            this.$emit('click');
        }
    },
    created: function created() {
        if (!this.$parent.$data._isDropdown) {
            this.$destroy();
            throw new Error('You should wrap bDropdownItem on a bDropdown');
        }
    }
});

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.separator) ? _c('hr', {
    staticClass: "dropdown-divider"
  }) : (!_vm.custom && !_vm.hasLink) ? _c('a', {
    staticClass: "dropdown-item",
    class: _vm.anchorClasses,
    on: {
      "click": _vm.selectItem
    }
  }, [_vm._t("default")], 2) : _c('div', {
    class: _vm.itemClasses,
    on: {
      "click": _vm.selectItem
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldBody__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FieldBody__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BField',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__FieldBody___default.a.name, __WEBPACK_IMPORTED_MODULE_1__FieldBody___default.a),
    props: {
        type: [String, Object],
        label: String,
        labelFor: String,
        message: [String, Array, Object],
        grouped: Boolean,
        groupMultiline: Boolean,
        position: String,
        expanded: Boolean,
        horizontal: Boolean,
        addons: {
            type: Boolean,
            default: true
        },
        customClass: String
    },
    data: function data() {
        return {
            newType: this.type,
            newMessage: this.message,
            fieldLabelSize: null,
            _isField: true // Used internally by Input and Select
        };
    },

    computed: {
        rootClasses: function rootClasses() {
            return [this.newPosition, {
                'is-expanded': this.expanded,
                'is-grouped-multiline': this.groupMultiline,
                'is-horizontal': this.horizontal
            }];
        },

        /**
         * Correct Bulma class for the side of the addon or group.
         *
         * This is not kept like the others (is-small, etc.),
         * because since 'has-addons' is set automatically it
         * doesn't make sense to teach users what addons are exactly.
         */
        newPosition: function newPosition() {
            if (this.position === undefined) return;

            var position = this.position.split('-');
            if (position.length < 1) return;

            var prefix = this.grouped ? 'is-grouped-' : 'has-addons-';

            if (this.position) return prefix + position[1];
        },

        /**
         * Formatted message in case it's an array
         * (each element is separated by <br> tag)
         */
        formattedMessage: function formattedMessage() {
            if (typeof this.newMessage === 'string') {
                return this.newMessage;
            } else {
                var messages = [];
                if (Array.isArray(this.newMessage)) {
                    this.newMessage.forEach(function (message) {
                        if (typeof message === 'string') {
                            messages.push(message);
                        } else {
                            for (var key in message) {
                                if (message[key]) {
                                    messages.push(key);
                                }
                            }
                        }
                    });
                } else {
                    for (var key in this.newMessage) {
                        if (this.newMessage[key]) {
                            messages.push(key);
                        }
                    }
                }
                return messages.filter(function (m) {
                    if (m) return m;
                }).join(' <br> ');
            }
        }
    },
    watch: {
        /**
         * Set internal type when prop change.
         */
        type: function type(value) {
            this.newType = value;
        },


        /**
         * Set internal message when prop change.
         */
        message: function message(value) {
            this.newMessage = value;
        }
    },
    methods: {
        /**
         * Field has addons if there are more than one slot
         * (element / component) in the Field.
         * Or is grouped when prop is set.
         * Is a method to be called when component re-render.
         */
        fieldType: function fieldType() {
            if (this.grouped) return 'is-grouped';

            var renderedNode = 0;
            if (this.$slots.default) {
                renderedNode = this.$slots.default.reduce(function (i, node) {
                    return node.tag ? i + 1 : i;
                }, 0);
            }
            if (renderedNode > 1 && this.addons && !this.horizontal) {
                return 'has-addons';
            }
        }
    },
    mounted: function mounted() {
        if (this.horizontal) {
            // Bulma docs: .is-normal for any .input or .button
            var elements = this.$el.querySelectorAll('.input, .select, .button, .textarea');
            if (elements.length > 0) {
                this.fieldLabelSize = 'is-normal';
            }
        }
    }
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BFieldBody',
    props: {
        message: {
            type: String
        },
        type: {
            type: [String, Object]
        }
    },
    render: function render(createElement) {
        var _this = this;

        return createElement('div', { attrs: { 'class': 'field-body' } }, this.$slots.default.map(function (element) {
            // skip returns and comments
            if (!element.tag) {
                return element;
            }
            if (_this.message) {
                return createElement('b-field', { attrs: { message: _this.message, 'type': _this.type } }, [element]);
            }
            return createElement('b-field', { attrs: { 'type': _this.type } }, [element]);
        }));
    }
});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field",
    class: [_vm.rootClasses, _vm.fieldType()]
  }, [(_vm.horizontal) ? _c('div', {
    staticClass: "field-label",
    class: [_vm.customClass, _vm.fieldLabelSize]
  }, [(_vm.label) ? _c('label', {
    staticClass: "label",
    attrs: {
      "for": _vm.labelFor
    }
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]) : _vm._e()]) : [(_vm.label) ? _c('label', {
    staticClass: "label",
    class: _vm.customClass,
    attrs: {
      "for": _vm.labelFor
    }
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]) : _vm._e()], _vm._v(" "), (_vm.horizontal) ? _c('b-field-body', {
    attrs: {
      "message": _vm.newMessage ? _vm.formattedMessage : '',
      "type": _vm.newType
    }
  }, [_vm._t("default")], 2) : [_vm._t("default")], _vm._v(" "), (_vm.newMessage && !_vm.horizontal) ? _c('p', {
    staticClass: "help",
    class: _vm.newType,
    domProps: {
      "innerHTML": _vm._s(_vm.formattedMessage)
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__ = __webpack_require__(12);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BSelect',
    components: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default.a),
    mixins: [__WEBPACK_IMPORTED_MODULE_3__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a, Function],
            default: null
        },
        placeholder: String,
        multiple: Boolean,
        nativeSize: [String, Number]
    },
    data: function data() {
        return {
            selected: this.value,
            _elementRef: 'select'
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.selected;
            },
            set: function set(value) {
                this.selected = value;
                this.$emit('input', value);
                !this.isValid && this.checkHtml5Validity();
            }
        },
        spanClasses: function spanClasses() {
            return [this.size, this.statusType, {
                'is-fullwidth': this.expanded,
                'is-loading': this.loading,
                'is-multiple': this.multiple,
                'is-rounded': this.rounded,
                'is-empty': this.selected === null
            }];
        }
    },
    watch: {
        /**
         * When v-model is changed:
         *   1. Set the selected option.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.selected = _value;
            !this.isValid && this.checkHtml5Validity();
        }
    }
});

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control",
    class: {
      'is-expanded': _vm.expanded, 'has-icons-left': _vm.icon
    }
  }, [_c('span', {
    staticClass: "select",
    class: _vm.spanClasses
  }, [_c('select', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    ref: "select",
    attrs: {
      "multiple": _vm.multiple,
      "size": _vm.nativeSize
    },
    on: {
      "blur": function($event) {
        _vm.$emit('blur', $event) && _vm.checkHtml5Validity()
      },
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.computedValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, 'select', _vm.$attrs, false), [(_vm.placeholder) ? [(_vm.computedValue == null) ? _c('option', {
    attrs: {
      "selected": "",
      "disabled": "",
      "hidden": ""
    },
    domProps: {
      "value": null
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.placeholder) + "\n                ")]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]), _vm._v(" "), (_vm.icon) ? _c('b-icon', {
    staticClass: "is-left",
    attrs: {
      "icon": _vm.icon,
      "pack": _vm.iconPack,
      "size": _vm.iconSize
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(133),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DatepickerTableRow__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DatepickerTableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DatepickerTableRow__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDatepickerTable',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__DatepickerTableRow___default.a.name, __WEBPACK_IMPORTED_MODULE_1__DatepickerTableRow___default.a),
    props: {
        value: Date,
        dayNames: Array,
        monthNames: Array,
        firstDayOfWeek: Number,
        events: Array,
        indicators: String,
        minDate: Date,
        maxDate: Date,
        focused: Object,
        disabled: Boolean,
        dateCreator: Function,
        unselectableDates: Array,
        unselectableDaysOfWeek: Array,
        selectableDates: Array
    },
    computed: {
        visibleDayNames: function visibleDayNames() {
            var visibleDayNames = [];
            var index = this.firstDayOfWeek;
            while (visibleDayNames.length < this.dayNames.length) {
                var currentDayName = this.dayNames[index % this.dayNames.length];
                visibleDayNames.push(currentDayName);
                index++;
            }
            return visibleDayNames;
        },
        hasEvents: function hasEvents() {
            return this.events && this.events.length;
        },


        /*
        * Return array of all events in the specified month
        */
        eventsInThisMonth: function eventsInThisMonth() {
            if (!this.events) return [];

            var monthEvents = [];

            for (var i = 0; i < this.events.length; i++) {
                var event = this.events[i];

                if (!event.hasOwnProperty('date')) {
                    event = { date: event };
                }
                if (!event.hasOwnProperty('type')) {
                    event.type = 'is-primary';
                }
                if (event.date.getMonth() === this.focused.month && event.date.getFullYear() === this.focused.year) {
                    monthEvents.push(event);
                }
            }

            return monthEvents;
        }
    },
    methods: {
        /*
        * Emit input event with selected date as payload for v-model in parent
        */
        updateSelectedDate: function updateSelectedDate(date) {
            this.$emit('input', date);
        },


        /*
        * Return array of all days in the week that the startingDate is within
        */
        weekBuilder: function weekBuilder(startingDate, month, year) {
            var thisMonth = new Date(year, month);

            var thisWeek = [];

            var dayOfWeek = new Date(year, month, startingDate).getDay();

            var end = dayOfWeek >= this.firstDayOfWeek ? dayOfWeek - this.firstDayOfWeek : 7 - this.firstDayOfWeek + dayOfWeek;

            var daysAgo = 1;
            for (var i = 0; i < end; i++) {
                thisWeek.unshift(new Date(thisMonth.getFullYear(), thisMonth.getMonth(), startingDate - daysAgo));
                daysAgo++;
            }

            thisWeek.push(new Date(year, month, startingDate));

            var daysForward = 1;
            while (thisWeek.length < 7) {
                thisWeek.push(new Date(year, month, startingDate + daysForward));
                daysForward++;
            }

            return thisWeek;
        },


        /*
        * Return array of all weeks in the specified month
        */
        weeksInThisMonth: function weeksInThisMonth(month, year) {
            var weeksInThisMonth = [];
            var daysInThisMonth = new Date(year, month + 1, 0).getDate();

            var startingDay = 1;

            while (startingDay <= daysInThisMonth + 6) {
                var newWeek = this.weekBuilder(startingDay, month, year);
                var weekValid = false;

                newWeek.forEach(function (day) {
                    if (day.getMonth() === month) {
                        weekValid = true;
                    }
                });

                if (weekValid) {
                    weeksInThisMonth.push(newWeek);
                }

                startingDay += 7;
            }

            return weeksInThisMonth;
        },
        eventsInThisWeek: function eventsInThisWeek(week, index) {
            if (!this.eventsInThisMonth.length) return [];

            var weekEvents = [];

            var weeksInThisMonth = [];
            weeksInThisMonth = this.weeksInThisMonth(this.focused.month, this.focused.year);

            for (var d = 0; d < weeksInThisMonth[index].length; d++) {
                for (var e = 0; e < this.eventsInThisMonth.length; e++) {
                    var eventsInThisMonth = this.eventsInThisMonth[e].date.getTime();
                    if (eventsInThisMonth === weeksInThisMonth[index][d].getTime()) {
                        weekEvents.push(this.eventsInThisMonth[e]);
                    }
                }
            }

            return weekEvents;
        }
    }
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDatepickerTableRow',
    props: {
        selectedDate: Date,
        week: {
            type: Array,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        minDate: Date,
        maxDate: Date,
        disabled: Boolean,
        unselectableDates: Array,
        unselectableDaysOfWeek: Array,
        selectableDates: Array,
        events: Array,
        indicators: String,
        dateCreator: Function
    },
    methods: {
        /*
        * Check that selected day is within earliest/latest params and
        * is within this month
        */
        selectableDate: function selectableDate(day) {
            var validity = [];

            if (this.minDate) {
                validity.push(day >= this.minDate);
            }

            if (this.maxDate) {
                validity.push(day <= this.maxDate);
            }

            validity.push(day.getMonth() === this.month);

            if (this.selectableDates) {
                for (var i = 0; i < this.selectableDates.length; i++) {
                    var enabledDate = this.selectableDates[i];
                    if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
                        return true;
                    } else {
                        validity.push(false);
                    }
                }
            }

            if (this.unselectableDates) {
                for (var _i = 0; _i < this.unselectableDates.length; _i++) {
                    var disabledDate = this.unselectableDates[_i];
                    validity.push(day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth());
                }
            }

            if (this.unselectableDaysOfWeek) {
                for (var _i2 = 0; _i2 < this.unselectableDaysOfWeek.length; _i2++) {
                    var dayOfWeek = this.unselectableDaysOfWeek[_i2];
                    validity.push(day.getDay() !== dayOfWeek);
                }
            }

            return validity.indexOf(false) < 0;
        },


        /*
        * Emit select event with chosen date as payload
        */
        emitChosenDate: function emitChosenDate(day) {
            if (this.disabled) return;

            if (this.selectableDate(day)) {
                this.$emit('select', day);
            }
        },
        eventsDateMatch: function eventsDateMatch(day) {
            if (!this.events.length) return false;

            var dayEvents = [];

            for (var i = 0; i < this.events.length; i++) {
                if (this.events[i].date.getDay() === day.getDay()) {
                    dayEvents.push(this.events[i]);
                }
            }

            if (!dayEvents.length) {
                return false;
            }

            return dayEvents;
        },


        /*
        * Build classObject for cell using validations
        */
        classObject: function classObject(day) {
            function dateMatch(dateOne, dateTwo) {
                // if either date is null or undefined, return false
                if (!dateOne || !dateTwo) {
                    return false;
                }

                return dateOne.getDate() === dateTwo.getDate() && dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
            }

            return {
                'is-selected': dateMatch(day, this.selectedDate),
                'is-today': dateMatch(day, this.dateCreator()),
                'is-selectable': this.selectableDate(day) && !this.disabled,
                'is-unselectable': !this.selectableDate(day) || this.disabled
            };
        }
    }
});

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "datepicker-row"
  }, [_vm._l((_vm.week), function(day, index) {
    return [(_vm.selectableDate(day) && !_vm.disabled) ? _c('a', {
      key: index,
      staticClass: "datepicker-cell",
      class: [_vm.classObject(day), {
        'has-event': _vm.eventsDateMatch(day)
      }, _vm.indicators],
      attrs: {
        "role": "button",
        "href": "#",
        "disabled": _vm.disabled
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.emitChosenDate(day)
        },
        "keydown": [function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
          $event.preventDefault();
          _vm.emitChosenDate(day)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
          $event.preventDefault();
          _vm.emitChosenDate(day)
        }]
      }
    }, [_vm._v("\n            " + _vm._s(day.getDate()) + "\n\n            "), (_vm.eventsDateMatch(day)) ? _c('div', {
      staticClass: "events"
    }, _vm._l((_vm.eventsDateMatch(day)), function(event, index) {
      return _c('div', {
        key: index,
        staticClass: "event",
        class: event.type
      })
    })) : _vm._e()]) : _c('div', {
      key: index,
      staticClass: "datepicker-cell",
      class: _vm.classObject(day)
    }, [_vm._v("\n            " + _vm._s(day.getDate()) + "\n        ")])]
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "datepicker-table"
  }, [_c('header', {
    staticClass: "datepicker-header"
  }, _vm._l((_vm.visibleDayNames), function(day, index) {
    return _c('div', {
      key: index,
      staticClass: "datepicker-cell"
    }, [_vm._v("\n            " + _vm._s(day) + "\n        ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "datepicker-body",
    class: {
      'has-events': _vm.hasEvents
    }
  }, _vm._l((_vm.weeksInThisMonth(_vm.focused.month, _vm.focused.year)), function(week, index) {
    return _c('b-datepicker-table-row', {
      key: index,
      attrs: {
        "selected-date": _vm.value,
        "week": week,
        "month": _vm.focused.month,
        "min-date": _vm.minDate,
        "max-date": _vm.maxDate,
        "disabled": _vm.disabled,
        "unselectable-dates": _vm.unselectableDates,
        "unselectable-days-of-week": _vm.unselectableDaysOfWeek,
        "selectable-dates": _vm.selectableDates,
        "events": _vm.eventsInThisWeek(week, index),
        "indicators": _vm.indicators,
        "date-creator": _vm.dateCreator
      },
      on: {
        "select": _vm.updateSelectedDate
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "datepicker control",
    class: [_vm.size, {
      'is-expanded': _vm.expanded
    }]
  }, [(!_vm.isMobile || _vm.inline) ? _c('b-dropdown', {
    ref: "dropdown",
    attrs: {
      "position": _vm.position,
      "disabled": _vm.disabled,
      "inline": _vm.inline
    }
  }, [(!_vm.inline) ? _c('b-input', _vm._b({
    ref: "input",
    attrs: {
      "slot": "trigger",
      "autocomplete": "off",
      "value": _vm.formatValue(_vm.dateSelected),
      "placeholder": _vm.placeholder,
      "size": _vm.size,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "rounded": _vm.rounded,
      "loading": _vm.loading,
      "disabled": _vm.disabled,
      "readonly": !_vm.editable
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "blur": function($event) {
        _vm.$emit('blur', $event) && _vm.checkHtml5Validity()
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.onChange($event.target.value)
      }
    },
    slot: "trigger"
  }, 'b-input', _vm.$attrs, false)) : _vm._e(), _vm._v(" "), _c('b-dropdown-item', {
    attrs: {
      "disabled": _vm.disabled,
      "custom": ""
    }
  }, [_c('header', {
    staticClass: "datepicker-header"
  }, [(_vm.$slots.header !== undefined && _vm.$slots.header.length) ? [_vm._t("header")] : _c('div', {
    staticClass: "pagination field is-centered",
    class: _vm.size
  }, [(!_vm.isFirstMonth && !_vm.disabled) ? _c('a', {
    staticClass: "pagination-previous",
    attrs: {
      "role": "button",
      "href": "#",
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.decrementMonth($event)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        $event.preventDefault();
        _vm.decrementMonth($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.decrementMonth($event)
      }]
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron-left",
      "pack": _vm.iconPack,
      "both": "",
      "type": "is-primary is-clickable"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isLastMonth && !_vm.disabled),
      expression: "!isLastMonth && !disabled"
    }],
    staticClass: "pagination-next",
    attrs: {
      "role": "button",
      "href": "#",
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.incrementMonth($event)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        $event.preventDefault();
        _vm.incrementMonth($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.incrementMonth($event)
      }]
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron-right",
      "pack": _vm.iconPack,
      "both": "",
      "type": "is-primary is-clickable"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pagination-list"
  }, [_c('b-field', [_c('b-select', {
    attrs: {
      "disabled": _vm.disabled,
      "size": _vm.size
    },
    model: {
      value: (_vm.focusedDateData.month),
      callback: function($$v) {
        _vm.$set(_vm.focusedDateData, "month", $$v)
      },
      expression: "focusedDateData.month"
    }
  }, _vm._l((_vm.monthNames), function(month, index) {
    return _c('option', {
      key: month,
      domProps: {
        "value": index
      }
    }, [_vm._v("\n                                    " + _vm._s(month) + "\n                                ")])
  })), _vm._v(" "), _c('b-select', {
    attrs: {
      "disabled": _vm.disabled,
      "size": _vm.size
    },
    model: {
      value: (_vm.focusedDateData.year),
      callback: function($$v) {
        _vm.$set(_vm.focusedDateData, "year", $$v)
      },
      expression: "focusedDateData.year"
    }
  }, _vm._l((_vm.listOfYears), function(year) {
    return _c('option', {
      key: year,
      domProps: {
        "value": year
      }
    }, [_vm._v("\n                                    " + _vm._s(year) + "\n                                ")])
  }))], 1)], 1)])], 2), _vm._v(" "), _c('div', {
    staticClass: "datepicker-body"
  }, [_c('b-datepicker-table', {
    attrs: {
      "day-names": _vm.dayNames,
      "month-names": _vm.monthNames,
      "first-day-of-week": _vm.firstDayOfWeek,
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "focused": _vm.focusedDateData,
      "disabled": _vm.disabled,
      "unselectable-dates": _vm.unselectableDates,
      "unselectable-days-of-week": _vm.unselectableDaysOfWeek,
      "selectable-dates": _vm.selectableDates,
      "events": _vm.events,
      "indicators": _vm.indicators,
      "date-creator": _vm.dateCreator
    },
    on: {
      "close": function($event) {
        _vm.$refs.dropdown.isActive = false
      }
    },
    model: {
      value: (_vm.dateSelected),
      callback: function($$v) {
        _vm.dateSelected = $$v
      },
      expression: "dateSelected"
    }
  })], 1), _vm._v(" "), (_vm.$slots.default !== undefined && _vm.$slots.default.length) ? _c('footer', {
    staticClass: "datepicker-footer"
  }, [_vm._t("default")], 2) : _vm._e()])], 1) : _c('b-input', _vm._b({
    ref: "input",
    attrs: {
      "type": "date",
      "autocomplete": "off",
      "value": _vm.formatYYYYMMDD(_vm.value),
      "placeholder": _vm.placeholder,
      "size": _vm.size,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "loading": _vm.loading,
      "max": _vm.formatYYYYMMDD(_vm.maxDate),
      "min": _vm.formatYYYYMMDD(_vm.minDate),
      "disabled": _vm.disabled,
      "readonly": false
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "blur": function($event) {
        _vm.$emit('blur', $event) && _vm.checkHtml5Validity()
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.onChangeNativePicker($event)
      }
    }
  }, 'b-input', _vm.$attrs, false))], 1)
},staticRenderFns: []}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(139),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_Modal__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modal_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_helpers__ = __webpack_require__(7);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BDialog',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a),
    extends: __WEBPACK_IMPORTED_MODULE_2__modal_Modal___default.a,
    props: {
        title: String,
        message: String,
        icon: String,
        iconPack: String,
        hasIcon: Boolean,
        type: {
            type: String,
            default: 'is-primary'
        },
        size: String,
        confirmText: {
            type: String,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDialogConfirmText ? __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDialogConfirmText : 'OK';
            }
        },
        cancelText: {
            type: String,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDialogCancelText ? __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultDialogCancelText : 'Cancel';
            }
        },
        hasInput: Boolean, // Used internally to know if it's prompt
        inputAttrs: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        onConfirm: {
            type: Function,
            default: function _default() {}
        },
        focusOn: {
            type: String,
            default: 'confirm'
        }
    },
    data: function data() {
        var prompt = this.hasInput ? this.inputAttrs.value || '' : '';

        return {
            prompt: prompt,
            isActive: false,
            validationMessage: ''
        };
    },

    computed: {
        /**
         * Icon name (MDI) based on the type.
         */
        iconByType: function iconByType() {
            switch (this.type) {
                case 'is-info':
                    return 'information';
                case 'is-success':
                    return 'check-circle';
                case 'is-warning':
                    return 'alert';
                case 'is-danger':
                    return 'alert-circle';
                default:
                    return null;
            }
        },
        showCancel: function showCancel() {
            return this.cancelOptions.indexOf('button') >= 0;
        }
    },
    methods: {
        /**
         * If it's a prompt Dialog, validate the input.
         * Call the onConfirm prop (function) and close the Dialog.
         */
        confirm: function confirm() {
            var _this = this;

            if (this.$refs.input !== undefined) {
                if (!this.$refs.input.checkValidity()) {
                    this.validationMessage = this.$refs.input.validationMessage;
                    this.$nextTick(function () {
                        return _this.$refs.input.select();
                    });
                    return;
                }
            }

            this.onConfirm(this.prompt);
            this.close();
        },


        /**
         * Close the Dialog.
         */
        close: function close() {
            var _this2 = this;

            this.isActive = false;
            // Timeout for the animation complete before destroying
            setTimeout(function () {
                _this2.$destroy();
                Object(__WEBPACK_IMPORTED_MODULE_4__utils_helpers__["d" /* removeElement */])(_this2.$el);
            }, 150);
        }
    },
    beforeMount: function beforeMount() {
        var _this3 = this;

        // Insert the Dialog component in body tag
        this.$nextTick(function () {
            document.body.appendChild(_this3.$el);
        });
    },
    mounted: function mounted() {
        var _this4 = this;

        this.isActive = true;

        if (typeof this.inputAttrs.required === 'undefined') {
            this.$set(this.inputAttrs, 'required', true);
        }

        this.$nextTick(function () {
            // Handle which element receives focus
            if (_this4.hasInput) {
                _this4.$refs.input.focus();
            } else if (_this4.focusOn === 'cancel' && _this4.showCancel) {
                _this4.$refs.cancelButton.focus();
            } else {
                _this4.$refs.confirmButton.focus();
            }
        });
    }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BModal',
    props: {
        active: Boolean,
        component: [Object, Function],
        content: String,
        programmatic: Boolean,
        props: Object,
        events: Object,
        width: {
            type: [String, Number],
            default: 960
        },
        hasModalCard: Boolean,
        animation: {
            type: String,
            default: 'zoom-out'
        },
        canCancel: {
            type: [Array, Boolean],
            default: function _default() {
                return ['escape', 'x', 'outside', 'button'];
            }
        },
        onCancel: {
            type: Function,
            default: function _default() {}
        },
        scroll: {
            type: String,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].defaultModalScroll ? __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].defaultModalScroll : 'clip';
            },
            validator: function validator(value) {
                return ['clip', 'keep'].indexOf(value) >= 0;
            }
        }
    },
    data: function data() {
        return {
            isActive: this.active || false,
            savedScrollTop: null,
            newWidth: typeof this.width === 'number' ? this.width + 'px' : this.width
        };
    },

    computed: {
        cancelOptions: function cancelOptions() {
            return typeof this.canCancel === 'boolean' ? this.canCancel ? ['escape', 'x', 'outside', 'button'] : [] : this.canCancel;
        },
        showX: function showX() {
            return this.cancelOptions.indexOf('x') >= 0;
        }
    },
    watch: {
        active: function active(value) {
            this.isActive = value;
        },
        isActive: function isActive() {
            this.handleScroll();
        }
    },
    methods: {
        handleScroll: function handleScroll() {
            if (typeof window === 'undefined') return;

            if (this.scroll === 'clip') {
                if (this.isActive) {
                    document.documentElement.classList.add('is-clipped');
                } else {
                    document.documentElement.classList.remove('is-clipped');
                }
                return;
            }

            this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

            if (this.isActive) {
                document.body.classList.add('is-noscroll');
            } else {
                document.body.classList.remove('is-noscroll');
            }

            if (this.isActive) {
                document.body.style.top = '-' + this.savedScrollTop + 'px';
                return;
            }

            document.documentElement.scrollTop = this.savedScrollTop;
            document.body.style.top = null;
            this.savedScrollTop = null;
        },


        /**
         * Close the Modal if canCancel and call the onCancel prop (function).
         */
        cancel: function cancel(method) {
            if (this.cancelOptions.indexOf(method) < 0) return;

            this.onCancel.apply(null, arguments);
            this.close();
        },


        /**
         * Call the onCancel prop (function).
         * Emit events, and destroy modal if it's programmatic.
         */
        close: function close() {
            var _this = this;

            this.$emit('close');
            this.$emit('update:active', false);

            // Timeout for the animation complete before destroying
            if (this.programmatic) {
                this.isActive = false;
                setTimeout(function () {
                    _this.$destroy();
                    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* removeElement */])(_this.$el);
                }, 150);
            }
        },


        /**
         * Keypress event that is bound to the document.
         */
        keyPress: function keyPress(event) {
            // Esc key
            if (this.isActive && event.keyCode === 27) this.cancel('escape');
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('keyup', this.keyPress);
        }
    },
    beforeMount: function beforeMount() {
        // Insert the Modal component in body tag
        // only if it's programmatic
        this.programmatic && document.body.appendChild(this.$el);
    },
    mounted: function mounted() {
        if (this.programmatic) this.isActive = true;else if (this.isActive) this.handleScroll();
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keyup', this.keyPress);
            // reset scroll
            document.documentElement.classList.remove('is-clipped');
            var savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
            document.body.classList.remove('is-noscroll');
            document.documentElement.scrollTop = savedScrollTop;
            document.body.style.top = null;
        }
    }
});

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animation
    }
  }, [(_vm.isActive) ? _c('div', {
    staticClass: "modal is-active"
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": function($event) {
        _vm.cancel('outside')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "animation-content",
    class: {
      'modal-content': !_vm.hasModalCard
    },
    style: ({
      maxWidth: _vm.newWidth
    })
  }, [(_vm.component) ? _c(_vm.component, _vm._g(_vm._b({
    tag: "component",
    on: {
      "close": _vm.close
    }
  }, 'component', _vm.props, false), _vm.events)) : (_vm.content) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }) : _vm._t("default")], 2), _vm._v(" "), (_vm.showX) ? _c('button', {
    staticClass: "modal-close is-large",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.cancel('x')
      }
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animation
    }
  }, [(_vm.isActive) ? _c('div', {
    staticClass: "dialog modal is-active",
    class: _vm.size
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": function($event) {
        _vm.cancel('outside')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-card animation-content"
  }, [(_vm.title) ? _c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "modal-card-body",
    class: {
      'is-titleless': !_vm.title, 'is-flex': _vm.hasIcon
    }
  }, [_c('div', {
    staticClass: "media"
  }, [(_vm.hasIcon) ? _c('div', {
    staticClass: "media-left"
  }, [_c('b-icon', {
    attrs: {
      "icon": _vm.icon ? _vm.icon : _vm.iconByType,
      "pack": _vm.iconPack,
      "type": _vm.type,
      "both": !_vm.icon,
      "size": "is-large"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  }), _vm._v(" "), (_vm.hasInput) ? _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.prompt),
      expression: "prompt"
    }],
    ref: "input",
    staticClass: "input",
    class: {
      'is-danger': _vm.validationMessage
    },
    domProps: {
      "value": (_vm.prompt)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.confirm($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.prompt = $event.target.value
      }
    }
  }, 'input', _vm.inputAttrs, false))]), _vm._v(" "), _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v(_vm._s(_vm.validationMessage))])]) : _vm._e()])])]), _vm._v(" "), _c('footer', {
    staticClass: "modal-card-foot"
  }, [(_vm.showCancel) ? _c('button', {
    ref: "cancelButton",
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.cancel('button')
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.cancelText) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('button', {
    ref: "confirmButton",
    staticClass: "button",
    class: _vm.type,
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.confirmText) + "\n                ")])])])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(142),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ssr__ = __webpack_require__(62);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BLoading',
    props: {
        active: Boolean,
        programmatic: Boolean,
        container: [Object, Function, __WEBPACK_IMPORTED_MODULE_1__utils_ssr__["b" /* HTMLElement */]],
        isFullPage: {
            type: Boolean,
            default: true
        },
        animation: {
            type: String,
            default: 'fade'
        },
        canCancel: {
            type: Boolean,
            default: false
        },
        onCancel: {
            type: Function,
            default: function _default() {}
        }
    },
    data: function data() {
        return {
            isActive: this.active || false
        };
    },

    watch: {
        active: function active(value) {
            this.isActive = value;
        }
    },
    methods: {
        /**
         * Close the Modal if canCancel.
         */
        cancel: function cancel() {
            if (!this.canCancel || !this.isActive) return;

            this.close();
        },

        /**
         * Emit events, and destroy modal if it's programmatic.
         */
        close: function close() {
            var _this = this;

            this.onCancel.apply(null, arguments);
            this.$emit('close');
            this.$emit('update:active', false);

            // Timeout for the animation complete before destroying
            if (this.programmatic) {
                this.isActive = false;
                setTimeout(function () {
                    _this.$destroy();
                    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* removeElement */])(_this.$el);
                }, 150);
            }
        },

        /**
         * Keypress event that is bound to the document.
         */
        keyPress: function keyPress(event) {
            // Esc key
            if (event.keyCode === 27) this.cancel();
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('keyup', this.keyPress);
        }
    },
    beforeMount: function beforeMount() {
        // Insert the Loading component in body tag
        // only if it's programmatic
        if (this.programmatic) {
            if (!this.container) {
                document.body.appendChild(this.$el);
            } else {
                this.isFullPage = false;
                this.container.appendChild(this.$el);
            }
        }
    },
    mounted: function mounted() {
        if (this.programmatic) this.isActive = true;
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keyup', this.keyPress);
        }
    }
});

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animation
    }
  }, [(_vm.isActive) ? _c('div', {
    staticClass: "loading-overlay is-active",
    class: {
      'is-full-page': _vm.isFullPage
    }
  }, [_c('div', {
    staticClass: "loading-background",
    on: {
      "click": _vm.cancel
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "loading-icon"
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(145),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_MessageMixin_js__ = __webpack_require__(63);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BMessage',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_MessageMixin_js__["a" /* default */]],
    data: function data() {
        return {
            newIconSize: this.iconSize || this.size || 'is-large'
        };
    }
});

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isActive) ? _c('article', {
    staticClass: "message",
    class: [_vm.type, _vm.size]
  }, [(_vm.title) ? _c('header', {
    staticClass: "message-header"
  }, [_c('p', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.closable) ? _c('button', {
    staticClass: "delete",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "message-body"
  }, [_c('div', {
    staticClass: "media"
  }, [(_vm.icon && _vm.hasIcon) ? _c('div', {
    staticClass: "media-left"
  }, [_c('b-icon', {
    class: _vm.type,
    attrs: {
      "icon": _vm.icon,
      "pack": _vm.iconPack,
      "both": "",
      "size": _vm.newIconSize
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_vm._t("default")], 2)])])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(148),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_MessageMixin_js__ = __webpack_require__(63);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BNotification',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_MessageMixin_js__["a" /* default */]]
});

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.isActive) ? _c('article', {
    staticClass: "notification",
    class: _vm.type
  }, [(_vm.closable) ? _c('button', {
    staticClass: "delete",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "media"
  }, [(_vm.icon && _vm.hasIcon) ? _c('div', {
    staticClass: "media-left"
  }, [_c('b-icon', {
    attrs: {
      "icon": _vm.icon,
      "pack": _vm.iconPack,
      "both": "",
      "size": "is-large"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_vm._t("default")], 2)])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_Icon__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BPagination',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_1__icon_Icon___default.a),
    props: {
        total: [Number, String],
        perPage: {
            type: [Number, String],
            default: 20
        },
        current: {
            type: [Number, String],
            default: 1
        },
        size: String,
        simple: Boolean,
        rounded: Boolean,
        order: String,
        iconPack: String
    },
    computed: {
        rootClasses: function rootClasses() {
            return [this.order, this.size, {
                'is-simple': this.simple,
                'is-rounded': this.rounded
            }];
        },


        /**
         * Total page size (count).
         */
        pageCount: function pageCount() {
            return Math.ceil(this.total / this.perPage);
        },


        /**
         * First item of the page (count).
         */
        firstItem: function firstItem() {
            var firstItem = this.current * this.perPage - this.perPage + 1;
            return firstItem >= 0 ? firstItem : 0;
        },


        /**
         * Check if previous button is available.
         */
        hasPrev: function hasPrev() {
            return this.current > 1;
        },


        /**
         * Check if first page button should be visible.
         */
        hasFirst: function hasFirst() {
            return this.current >= 3;
        },


        /**
         * Check if first ellipsis should be visible.
         */
        hasFirstEllipsis: function hasFirstEllipsis() {
            return this.current >= 4;
        },


        /**
         * Check if last page button should be visible.
         */
        hasLast: function hasLast() {
            return this.current <= this.pageCount - 2;
        },


        /**
         * Check if last ellipsis should be visible.
         */
        hasLastEllipsis: function hasLastEllipsis() {
            return this.current < this.pageCount - 2 && this.current <= this.pageCount - 3;
        },


        /**
         * Check if next button is available.
         */
        hasNext: function hasNext() {
            return this.current < this.pageCount;
        },


        /**
         * Get near pages, 1 before and 1 after the current.
         * Also add the click event to the array.
         */
        pagesInRange: function pagesInRange() {
            var _this = this;

            if (this.simple) return;

            var left = Math.max(1, this.current - 1);
            var right = Math.min(this.current + 1, this.pageCount);

            var pages = [];

            var _loop = function _loop(i) {
                pages.push({
                    number: i,
                    isCurrent: _this.current === i,
                    click: function click(event) {
                        if (_this.current === i) return;
                        _this.$emit('change', i);
                        _this.$emit('update:current', i);

                        // Set focus on element to keep tab order
                        _this.$nextTick(function () {
                            return event.target.focus();
                        });
                    }
                });
            };

            for (var i = left; i <= right; i++) {
                _loop(i);
            }
            return pages;
        }
    },
    watch: {
        /**
         * If current page is trying to be greater than page count, set to last.
         */
        pageCount: function pageCount(value) {
            if (this.current > value) this.last();
        }
    },
    methods: {
        /**
         * Previous button click listener.
         */
        prev: function prev() {
            if (!this.hasPrev) return;
            this.$emit('change', this.current - 1);
            this.$emit('update:current', this.current - 1);
        },


        /**
         * First button click listener.
         */
        first: function first() {
            this.$emit('change', 1);
            this.$emit('update:current', 1);
        },


        /**
         * Last button click listener.
         */
        last: function last() {
            this.$emit('change', this.pageCount);
            this.$emit('update:current', this.pageCount);
        },


        /**
         * Next button click listener.
         */
        next: function next() {
            if (!this.hasNext) return;
            this.$emit('change', this.current + 1);
            this.$emit('update:current', this.current + 1);
        }
    }
});

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagination",
    class: _vm.rootClasses
  }, [_c('a', {
    staticClass: "pagination-previous",
    attrs: {
      "role": "button",
      "href": "#",
      "disabled": !_vm.hasPrev
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.prev($event)
      }
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron-left",
      "pack": _vm.iconPack,
      "both": ""
    }
  })], 1), _vm._v(" "), _c('a', {
    staticClass: "pagination-next",
    attrs: {
      "role": "button",
      "href": "#",
      "disabled": !_vm.hasNext
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.next($event)
      }
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron-right",
      "pack": _vm.iconPack,
      "both": ""
    }
  })], 1), _vm._v(" "), (!_vm.simple) ? _c('ul', {
    staticClass: "pagination-list"
  }, [(_vm.hasFirst) ? _c('li', [_c('a', {
    staticClass: "pagination-link",
    attrs: {
      "role": "button",
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.first($event)
      }
    }
  }, [_vm._v("\n                1\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.hasFirstEllipsis) ? _c('li', [_c('span', {
    staticClass: "pagination-ellipsis"
  }, [_vm._v("…")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagesInRange), function(page) {
    return _c('li', {
      key: page.number
    }, [_c('a', {
      staticClass: "pagination-link",
      class: {
        'is-current': page.isCurrent
      },
      attrs: {
        "role": "button",
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          page.click($event)
        }
      }
    }, [_vm._v("\n                " + _vm._s(page.number) + "\n            ")])])
  }), _vm._v(" "), (_vm.hasLastEllipsis) ? _c('li', [_c('span', {
    staticClass: "pagination-ellipsis"
  }, [_vm._v("…")])]) : _vm._e(), _vm._v(" "), (_vm.hasLast) ? _c('li', [_c('a', {
    staticClass: "pagination-link",
    attrs: {
      "role": "button",
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.last($event)
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.pageCount) + "\n            ")])]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.simple) ? _c('small', {
    staticClass: "info"
  }, [(_vm.perPage == 1) ? [_vm._v("\n            " + _vm._s(_vm.firstItem) + " / " + _vm._s(_vm.total) + "\n        ")] : [_vm._v("\n            " + _vm._s(_vm.firstItem) + "-" + _vm._s(Math.min(_vm.current * _vm.perPage, _vm.total)) + " / " + _vm._s(_vm.total) + "\n        ")]], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(153),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BRadio',
    props: {
        value: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        nativeValue: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        type: String,
        disabled: Boolean,
        required: Boolean,
        name: String,
        size: String
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.newValue;
            },
            set: function set(value) {
                this.newValue = value;
                this.$emit('input', value);
            }
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value: function value(_value) {
            this.newValue = _value;
        }
    }
});

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "b-radio radio",
    class: [_vm.size, {
      'is-disabled': _vm.disabled
    }],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "required": _vm.required,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": _vm._q(_vm.computedValue, _vm.nativeValue)
    },
    on: {
      "change": function($event) {
        _vm.computedValue = _vm.nativeValue
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "check",
    class: _vm.type
  }), _vm._v(" "), _c('span', {
    staticClass: "control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(156),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BRadioButton',
    props: {
        value: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        nativeValue: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        type: {
            type: String,
            default: 'is-primary'
        },
        disabled: Boolean,
        name: String,
        size: String
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.newValue;
            },
            set: function set(value) {
                this.newValue = value;
                this.$emit('input', value);
            }
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value: function value(_value) {
            this.newValue = _value;
        }
    }
});

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control"
  }, [_c('label', {
    ref: "label",
    staticClass: "b-radio radio button",
    class: [_vm.newValue === _vm.nativeValue ? _vm.type : null, _vm.size],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_vm._t("default"), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": _vm._q(_vm.computedValue, _vm.nativeValue)
    },
    on: {
      "change": function($event) {
        _vm.computedValue = _vm.nativeValue
      }
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(159),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_NoticeMixin_js__ = __webpack_require__(65);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BSnackbar',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_NoticeMixin_js__["a" /* default */]],
    props: {
        actionText: {
            type: String,
            default: 'OK'
        },
        onAction: {
            type: Function,
            default: function _default() {}
        },
        indefinite: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            newDuration: this.duration || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultSnackbarDuration
        };
    },

    methods: {
        /**
         * Click listener.
         * Call action prop before closing (from Mixin).
         */
        action: function action() {
            this.onAction();
            this.close();
        }
    }
});

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": _vm.transition.enter,
      "leave-active-class": _vm.transition.leave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "snackbar",
    class: [_vm.type, _vm.position]
  }, [_c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), (_vm.actionText) ? _c('div', {
    staticClass: "action",
    class: _vm.type,
    on: {
      "click": _vm.action
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v(_vm._s(_vm.actionText))])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(162),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BSwitch',
    props: {
        value: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        nativeValue: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        disabled: Boolean,
        type: String,
        name: String,
        required: Boolean,
        size: String,
        trueValue: {
            type: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
            default: false
        }
    },
    data: function data() {
        return {
            newValue: this.value,
            isMouseDown: false
        };
    },

    computed: {
        computedValue: {
            get: function get() {
                return this.newValue;
            },
            set: function set(value) {
                this.newValue = value;
                this.$emit('input', value);
            }
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value: function value(_value) {
            this.newValue = _value;
        }
    }
});

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "switch",
    class: [_vm.size, {
      'is-disabled': _vm.disabled
    }],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key) && _vm._k($event.keyCode, "space", 32, $event.key)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      },
      "mousedown": function($event) {
        _vm.isMouseDown = true
      },
      "mouseup": function($event) {
        _vm.isMouseDown = false
      },
      "mouseout": function($event) {
        _vm.isMouseDown = false
      },
      "blur": function($event) {
        _vm.isMouseDown = false
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.computedValue),
      expression: "computedValue"
    }],
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name,
      "required": _vm.required,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": Array.isArray(_vm.computedValue) ? _vm._i(_vm.computedValue, _vm.nativeValue) > -1 : _vm._q(_vm.computedValue, _vm.trueValue)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "change": function($event) {
        var $$a = _vm.computedValue,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = _vm.nativeValue,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.computedValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.computedValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.computedValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "check",
    class: [{
      'is-elastic': _vm.isMouseDown && !_vm.disabled
    }, _vm.type]
  }), _vm._v(" "), _c('span', {
    staticClass: "control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(178),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_Checkbox__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__checkbox_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_Pagination__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pagination_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TableMobileSort__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TableMobileSort___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__TableMobileSort__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TableColumn__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TableColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__TableColumn__);



var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTable',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_3__checkbox_Checkbox___default.a.name, __WEBPACK_IMPORTED_MODULE_3__checkbox_Checkbox___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_4__icon_Icon___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_5__pagination_Pagination___default.a.name, __WEBPACK_IMPORTED_MODULE_5__pagination_Pagination___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_6__TableMobileSort___default.a.name, __WEBPACK_IMPORTED_MODULE_6__TableMobileSort___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_7__TableColumn___default.a.name, __WEBPACK_IMPORTED_MODULE_7__TableColumn___default.a), _components),
    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        columns: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        bordered: Boolean,
        striped: Boolean,
        narrowed: Boolean,
        hoverable: Boolean,
        loading: Boolean,
        detailed: Boolean,
        checkable: Boolean,
        selected: Object,
        focusable: Boolean,
        customIsChecked: Function,
        isRowCheckable: {
            type: Function,
            default: function _default() {
                return true;
            }
        },
        checkedRows: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        mobileCards: {
            type: Boolean,
            default: true
        },
        defaultSort: [String, Array],
        defaultSortDirection: {
            type: String,
            default: 'asc'
        },
        paginated: Boolean,
        currentPage: {
            type: Number,
            default: 1
        },
        perPage: {
            type: [Number, String],
            default: 20
        },
        showDetailIcon: {
            type: Boolean,
            default: true
        },
        paginationSimple: Boolean,
        paginationSize: String,
        backendSorting: Boolean,
        rowClass: {
            type: Function,
            default: function _default() {
                return '';
            }
        },
        openedDetailed: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        hasDetailedVisible: {
            type: Function,
            default: function _default() {
                return true;
            }
        },
        detailKey: {
            type: String,
            default: ''
        },
        backendPagination: Boolean,
        total: {
            type: [Number, String],
            default: 0
        },
        iconPack: String,
        mobileSortPlaceholder: String
    },
    data: function data() {
        return {
            getValueByPath: __WEBPACK_IMPORTED_MODULE_2__utils_helpers__["a" /* getValueByPath */],
            newColumns: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.columns)),
            visibleDetailRows: this.openedDetailed,
            newData: this.data,
            newDataTotal: this.backendPagination ? this.total : this.data.length,
            newCheckedRows: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.checkedRows)),
            newCurrentPage: this.currentPage,
            currentSortColumn: {},
            isAsc: true,
            firstTimeSort: true, // Used by first time initSort
            _isTable: true // Used by TableColumn
        };
    },

    computed: {
        /**
         * return if detailed row tabled
         * will be with chevron column & icon or not
         */
        showDetailRowIcon: function showDetailRowIcon() {
            return this.detailed && this.showDetailIcon;
        },
        tableClasses: function tableClasses() {
            return {
                'is-bordered': this.bordered,
                'is-striped': this.striped,
                'is-narrow': this.narrowed,
                'has-mobile-cards': this.mobileCards,
                'is-hoverable': (this.hoverable || this.focusable) && this.visibleData.length
            };
        },


        /**
         * Splitted data based on the pagination.
         */
        visibleData: function visibleData() {
            if (!this.paginated) return this.newData;

            var currentPage = this.newCurrentPage;
            var perPage = this.perPage;

            if (this.newData.length <= perPage) {
                return this.newData;
            } else {
                var start = (currentPage - 1) * perPage;
                var end = parseInt(start, 10) + parseInt(perPage, 10);
                return this.newData.slice(start, end);
            }
        },
        visibleColumns: function visibleColumns() {
            if (!this.newColumns) return this.newColumns;
            return this.newColumns.filter(function (column) {
                return column.visible || column.visible === undefined;
            });
        },


        /**
         * Check if all rows in the page are checked.
         */
        isAllChecked: function isAllChecked() {
            var _this = this;

            var validVisibleData = this.visibleData.filter(function (row) {
                return _this.isRowCheckable(row);
            });
            if (validVisibleData.length === 0) return false;
            var isAllChecked = validVisibleData.some(function (currentVisibleRow) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["b" /* indexOf */])(_this.newCheckedRows, currentVisibleRow, _this.customIsChecked) < 0;
            });
            return !isAllChecked;
        },


        /**
         * Check if all rows in the page are checkable.
         */
        isAllUncheckable: function isAllUncheckable() {
            var _this2 = this;

            var validVisibleData = this.visibleData.filter(function (row) {
                return _this2.isRowCheckable(row);
            });
            return validVisibleData.length === 0;
        },


        /**
         * Check if has any sortable column.
         */
        hasSortablenewColumns: function hasSortablenewColumns() {
            return this.newColumns.some(function (column) {
                return column.sortable;
            });
        },


        /**
         * Return total column count based if it's checkable or expanded
         */
        columnCount: function columnCount() {
            var count = this.newColumns.length;
            count += this.checkable ? 1 : 0;
            count += this.detailed ? 1 : 0;

            return count;
        }
    },
    watch: {
        /**
         * When data prop change:
         *   1. Update internal value.
         *   2. Reset newColumns (thead), in case it's on a v-for loop.
         *   3. Sort again if it's not backend-sort.
         *   4. Set new total if it's not backend-paginated.
         */
        data: function data(value) {
            var _this3 = this;

            // Save newColumns before resetting
            var newColumns = this.newColumns;

            this.newColumns = [];
            this.newData = value;

            // Prevent table from being headless, data could change and created hook
            // on column might not trigger
            this.$nextTick(function () {
                if (!_this3.newColumns.length) _this3.newColumns = newColumns;
            });

            if (!this.backendSorting) {
                this.sort(this.currentSortColumn, true);
            }
            if (!this.backendPagination) {
                this.newDataTotal = value.length;
            }
        },


        /**
         * When Pagination total change, update internal total
         * only if it's backend-paginated.
         */
        total: function total(newTotal) {
            if (!this.backendPagination) return;

            this.newDataTotal = newTotal;
        },


        /**
         * When checkedRows prop change, update internal value without
         * mutating original data.
         */
        checkedRows: function checkedRows(rows) {
            this.newCheckedRows = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(rows));
        },
        columns: function columns(value) {
            this.newColumns = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(value));
        },
        newColumns: function newColumns(value) {
            this.checkSort();
        },


        /**
        * When the user wants to control the detailed rows via props.
        * Or wants to open the details of certain row with the router for example.
        */
        openedDetailed: function openedDetailed(expandedRows) {
            this.visibleDetailRows = expandedRows;
        },
        currentPage: function currentPage(newVal) {
            this.newCurrentPage = newVal;
        }
    },
    methods: {
        /**
         * Sort an array by key without mutating original data.
         * Call the user sort function if it was passed.
         */
        sortBy: function sortBy(array, key, fn, isAsc) {
            var sorted = [];
            // Sorting without mutating original data
            if (fn && typeof fn === 'function') {
                sorted = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(array)).sort(function (a, b) {
                    return fn(a, b, isAsc);
                });
            } else {
                sorted = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(array)).sort(function (a, b) {
                    // Get nested values from objects
                    var newA = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["a" /* getValueByPath */])(a, key);
                    var newB = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["a" /* getValueByPath */])(b, key);

                    // sort boolean type
                    if (typeof newA === 'boolean' && typeof newB === 'boolean') {
                        return isAsc ? newA - newB : newB - newA;
                    }

                    if (!newA && newA !== 0) return 1;
                    if (!newB && newB !== 0) return -1;
                    if (newA === newB) return 0;

                    newA = typeof newA === 'string' ? newA.toUpperCase() : newA;
                    newB = typeof newB === 'string' ? newB.toUpperCase() : newB;

                    return isAsc ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
                });
            }

            return sorted;
        },


        /**
         * Sort the column.
         * Toggle current direction on column if it's sortable
         * and not just updating the prop.
         */
        sort: function sort(column) {
            var updatingData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!column || !column.sortable) return;

            if (!updatingData) {
                this.isAsc = column === this.currentSortColumn ? !this.isAsc : this.defaultSortDirection.toLowerCase() !== 'desc';
            }
            if (!this.firstTimeSort) {
                this.$emit('sort', column.field, this.isAsc ? 'asc' : 'desc');
            }
            if (!this.backendSorting) {
                this.newData = this.sortBy(this.newData, column.field, column.customSort, this.isAsc);
            }
            this.currentSortColumn = column;
        },


        /**
         * Check if the row is checked (is added to the array).
         */
        isRowChecked: function isRowChecked(row) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["b" /* indexOf */])(this.newCheckedRows, row, this.customIsChecked) >= 0;
        },


        /**
         * Remove a checked row from the array.
         */
        removeCheckedRow: function removeCheckedRow(row) {
            var index = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["b" /* indexOf */])(this.newCheckedRows, row, this.customIsChecked);
            if (index >= 0) {
                this.newCheckedRows.splice(index, 1);
            }
        },


        /**
         * Header checkbox click listener.
         * Add or remove all rows in current page.
         */
        checkAll: function checkAll() {
            var _this4 = this;

            var isAllChecked = this.isAllChecked;
            this.visibleData.forEach(function (currentRow) {
                _this4.removeCheckedRow(currentRow);
                if (!isAllChecked) {
                    if (_this4.isRowCheckable(currentRow)) {
                        _this4.newCheckedRows.push(currentRow);
                    }
                }
            });

            this.$emit('check', this.newCheckedRows);
            this.$emit('check-all', this.newCheckedRows);

            // Emit checked rows to update user variable
            this.$emit('update:checkedRows', this.newCheckedRows);
        },


        /**
         * Row checkbox click listener.
         * Add or remove a single row.
         */
        checkRow: function checkRow(row) {
            if (!this.isRowChecked(row)) {
                this.newCheckedRows.push(row);
            } else {
                this.removeCheckedRow(row);
            }

            this.$emit('check', this.newCheckedRows, row);

            // Emit checked rows to update user variable
            this.$emit('update:checkedRows', this.newCheckedRows);
        },


        /**
         * Row click listener.
         * Emit all necessary events.
         */
        selectRow: function selectRow(row, index) {
            this.$emit('click', row);

            if (this.selected === row) return;

            // Emit new and old row
            this.$emit('select', row, this.selected);

            // Emit new row to update user variable
            this.$emit('update:selected', row);
        },


        /**
         * Paginator change listener.
         */
        pageChanged: function pageChanged(page) {
            this.newCurrentPage = page > 0 ? page : 1;
            this.$emit('page-change', this.newCurrentPage);
            this.$emit('update:currentPage', this.newCurrentPage);
        },


        /**
         * Toggle to show/hide details slot
         */
        toggleDetails: function toggleDetails(obj) {
            var found = this.isVisibleDetailRow(obj);

            if (found) {
                this.closeDetailRow(obj);
                this.$emit('details-close', obj);
            } else {
                this.openDetailRow(obj);
                this.$emit('details-open', obj);
            }

            // Syncs the detailed rows with the parent component
            this.$emit('update:openedDetailed', this.visibleDetailRows);
        },
        openDetailRow: function openDetailRow(obj) {
            var index = this.handleDetailKey(obj);
            this.visibleDetailRows.push(index);
        },
        closeDetailRow: function closeDetailRow(obj) {
            var index = this.handleDetailKey(obj);
            var i = this.visibleDetailRows.indexOf(index);
            this.visibleDetailRows.splice(i, 1);
        },
        isVisibleDetailRow: function isVisibleDetailRow(obj) {
            var index = this.handleDetailKey(obj);
            var result = this.visibleDetailRows.indexOf(index) >= 0;
            return result;
        },


        /**
        * When the detailKey is defined we use the object[detailKey] as index.
        * If not, use the object reference by default.
        */
        handleDetailKey: function handleDetailKey(index) {
            var key = this.detailKey;
            return !key.length ? index : index[key];
        },
        checkPredefinedDetailedRows: function checkPredefinedDetailedRows() {
            var defaultExpandedRowsDefined = this.openedDetailed.length > 0;
            if (defaultExpandedRowsDefined && !this.detailKey.length) {
                throw new Error('If you set a predefined opened-detailed, you must provide a unique key using the prop "detail-key"');
            }
        },


        /**
         * Call initSort only first time (For example async data).
         */
        checkSort: function checkSort() {
            if (this.newColumns.length && this.firstTimeSort) {
                this.initSort();
                this.firstTimeSort = false;
            } else if (this.newColumns.length) {
                if (this.currentSortColumn.field) {
                    for (var i = 0; i < this.newColumns.length; i++) {
                        if (this.newColumns[i].field === this.currentSortColumn.field) {
                            this.currentSortColumn = this.newColumns[i];
                            break;
                        }
                    }
                }
            }
        },


        /**
         * Check if footer slot has custom content.
         */
        hasCustomFooterSlot: function hasCustomFooterSlot() {
            if (this.$slots.footer.length > 1) return true;

            var tag = this.$slots.footer[0].tag;
            if (tag !== 'th' && tag !== 'td') return false;

            return true;
        },


        /**
         * Check if bottom-left slot exists.
         */
        hasBottomLeftSlot: function hasBottomLeftSlot() {
            return typeof this.$slots['bottom-left'] !== 'undefined';
        },


        /**
         * Table arrow keys listener, change selection.
         */
        pressedArrow: function pressedArrow(pos) {
            if (!this.visibleData.length) return;

            var index = this.visibleData.indexOf(this.selected) + pos;

            // Prevent from going up from first and down from last
            index = index < 0 ? 0 : index > this.visibleData.length - 1 ? this.visibleData.length - 1 : index;

            this.selectRow(this.visibleData[index]);
        },


        /**
         * Focus table element if has selected prop.
         */
        focus: function focus() {
            if (!this.focusable) return;

            this.$el.querySelector('table').focus();
        },


        /**
         * Initial sorted column based on the default-sort prop.
         */
        initSort: function initSort() {
            var _this5 = this;

            if (!this.defaultSort) return;

            var sortField = '';
            var sortDirection = this.defaultSortDirection;

            if (Array.isArray(this.defaultSort)) {
                sortField = this.defaultSort[0];
                if (this.defaultSort[1]) {
                    sortDirection = this.defaultSort[1];
                }
            } else {
                sortField = this.defaultSort;
            }

            this.newColumns.forEach(function (column) {
                if (column.field === sortField) {
                    _this5.isAsc = sortDirection.toLowerCase() !== 'desc';
                    _this5.sort(column, true);
                }
            });
        }
    },

    mounted: function mounted() {
        this.checkPredefinedDetailedRows();
        this.checkSort();
    }
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(166);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(168);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(45);
var $export = __webpack_require__(17);
var toObject = __webpack_require__(37);
var call = __webpack_require__(169);
var isArrayIter = __webpack_require__(170);
var toLength = __webpack_require__(50);
var createProperty = __webpack_require__(171);
var getIterFn = __webpack_require__(59);

$export($export.S + $export.F * !__webpack_require__(172)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(15);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(175),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_Select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__select_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__);


var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTableMobileSort',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_1__select_Select___default.a.name, __WEBPACK_IMPORTED_MODULE_1__select_Select___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_2__icon_Icon___default.a), _components),
    props: {
        currentSortColumn: Object,
        isAsc: Boolean,
        columns: Array,
        placeholder: String
    },
    data: function data() {
        return {
            mobileSort: this.currentSortColumn
        };
    },

    computed: {
        showPlaceholder: function showPlaceholder() {
            var _this = this;

            return !this.columns || !this.columns.some(function (column) {
                return column === _this.mobileSort;
            });
        }
    },
    watch: {
        mobileSort: function mobileSort(column) {
            if (this.currentSortColumn === column) return;

            this.$emit('sort', column);
        },
        currentSortColumn: function currentSortColumn(column) {
            this.mobileSort = column;
        }
    },
    methods: {
        sort: function sort() {
            this.$emit('sort', this.mobileSort);
        }
    }
});

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field table-mobile-sort"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_c('b-select', {
    attrs: {
      "expanded": ""
    },
    model: {
      value: (_vm.mobileSort),
      callback: function($$v) {
        _vm.mobileSort = $$v
      },
      expression: "mobileSort"
    }
  }, [(_vm.placeholder) ? [_c('option', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPlaceholder),
      expression: "showPlaceholder"
    }],
    attrs: {
      "selected": "",
      "disabled": "",
      "hidden": ""
    },
    domProps: {
      "value": {}
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.placeholder) + "\n                ")])] : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column, index) {
    return (column.sortable) ? _c('option', {
      key: index,
      domProps: {
        "value": column
      }
    }, [_vm._v("\n                " + _vm._s(column.label) + "\n            ")]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.sort
    }
  }, [_c('b-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentSortColumn === _vm.mobileSort),
      expression: "currentSortColumn === mobileSort"
    }],
    class: {
      'is-desc': !_vm.isAsc
    },
    attrs: {
      "icon": "arrow-up",
      "size": "is-small",
      "both": ""
    }
  })], 1)])], 1)])
},staticRenderFns: []}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTableColumn',
    props: {
        label: String,
        customKey: [String, Number],
        field: String,
        meta: [String, Number, Boolean, Function, Object, Array, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default.a],
        width: [Number, String],
        numeric: Boolean,
        centered: Boolean,
        sortable: Boolean,
        visible: {
            type: Boolean,
            default: true
        },
        customSort: Function,
        internal: Boolean // Used internally by Table
    },
    data: function data() {
        return {
            newKey: this.customKey || this.label
        };
    },

    computed: {
        rootClasses: function rootClasses() {
            return {
                'has-text-right': this.numeric && !this.centered,
                'has-text-centered': this.centered
            };
        }
    },
    methods: {
        addRefToTable: function addRefToTable() {
            var _this = this;

            if (!this.$parent.$data._isTable) {
                this.$destroy();
                throw new Error('You should wrap bTableColumn on a bTable');
            }

            if (this.internal) return;

            // Since we're using scoped prop the columns gonna be multiplied,
            // this finds when to stop based on the newKey property.
            var repeated = this.$parent.newColumns.some(function (column) {
                return column.newKey === _this.newKey;
            });
            !repeated && this.$parent.newColumns.push(this);
        }
    },
    beforeMount: function beforeMount() {
        this.addRefToTable();
    },
    beforeUpdate: function beforeUpdate() {
        this.addRefToTable();
    },
    beforeDestroy: function beforeDestroy() {
        var index = this.$parent.newColumns.map(function (column) {
            return column.newKey;
        }).indexOf(this.newKey);
        if (index >= 0) {
            this.$parent.newColumns.splice(index, 1);
        }
    }
});

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('td', {
    class: _vm.rootClasses,
    attrs: {
      "data-label": _vm.label
    }
  }, [_c('span', [_vm._t("default")], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "b-table",
    class: {
      'is-loading': _vm.loading
    }
  }, [(_vm.mobileCards && _vm.hasSortablenewColumns) ? _c('b-table-mobile-sort', {
    attrs: {
      "current-sort-column": _vm.currentSortColumn,
      "is-asc": _vm.isAsc,
      "columns": _vm.newColumns,
      "placeholder": _vm.mobileSortPlaceholder
    },
    on: {
      "sort": function (column) { return _vm.sort(column); }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "table-wrapper"
  }, [_c('table', {
    staticClass: "table",
    class: _vm.tableClasses,
    attrs: {
      "tabindex": !_vm.focusable ? false : 0
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) { return null; }
        $event.preventDefault();
        _vm.pressedArrow(-1)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) { return null; }
        $event.preventDefault();
        _vm.pressedArrow(1)
      }]
    }
  }, [(_vm.newColumns.length) ? _c('thead', [_c('tr', [(_vm.showDetailRowIcon) ? _c('th', {
    attrs: {
      "width": "40px"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.checkable) ? _c('th', {
    staticClass: "checkbox-cell"
  }, [_c('b-checkbox', {
    attrs: {
      "value": _vm.isAllChecked,
      "disabled": _vm.isAllUncheckable
    },
    nativeOn: {
      "change": function($event) {
        _vm.checkAll($event)
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.visibleColumns), function(column, index) {
    return _c('th', {
      key: index,
      class: {
        'is-current-sort': _vm.currentSortColumn === column,
          'is-sortable': column.sortable
      },
      style: ({
        width: column.width + 'px'
      }),
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.sort(column)
        }
      }
    }, [_c('div', {
      staticClass: "th-wrap",
      class: {
        'is-numeric': column.numeric,
          'is-centered': column.centered
      }
    }, [(_vm.$scopedSlots.header) ? _vm._t("header", null, {
      column: column,
      index: index
    }) : [_vm._v(_vm._s(column.label))], _vm._v(" "), _c('b-icon', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.currentSortColumn === column),
        expression: "currentSortColumn === column"
      }],
      class: {
        'is-desc': !_vm.isAsc
      },
      attrs: {
        "icon": "arrow-up",
        "pack": _vm.iconPack,
        "both": "",
        "size": "is-small"
      }
    })], 2)])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.visibleData.length) ? _c('tbody', [_vm._l((_vm.visibleData), function(row, index) {
    return [_c('tr', {
      key: index,
      class: [_vm.rowClass(row, index), {
        'is-selected': row === _vm.selected,
        'is-checked': _vm.isRowChecked(row),
      }],
      on: {
        "click": function($event) {
          _vm.selectRow(row)
        },
        "dblclick": function($event) {
          _vm.$emit('dblclick', row)
        },
        "contextmenu": function($event) {
          _vm.$emit('contextmenu', row, $event)
        }
      }
    }, [(_vm.showDetailRowIcon) ? _c('td', {
      staticClass: "chevron-cell"
    }, [(_vm.hasDetailedVisible(row)) ? _c('a', {
      attrs: {
        "role": "button"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.toggleDetails(row)
        }
      }
    }, [_c('b-icon', {
      class: {
        'is-expanded': _vm.isVisibleDetailRow(row)
      },
      attrs: {
        "icon": "chevron-right",
        "pack": _vm.iconPack,
        "both": ""
      }
    })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.checkable) ? _c('td', {
      staticClass: "checkbox-cell"
    }, [_c('b-checkbox', {
      attrs: {
        "disabled": !_vm.isRowCheckable(row),
        "value": _vm.isRowChecked(row)
      },
      nativeOn: {
        "change": function($event) {
          _vm.checkRow(row)
        },
        "click": function($event) {
          $event.stopPropagation();
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), (_vm.$scopedSlots.default) ? _vm._t("default", null, {
      row: row,
      index: index
    }) : _vm._l((_vm.newColumns), function(column) {
      return _c('BTableColumn', _vm._b({
        key: column.field,
        attrs: {
          "internal": ""
        }
      }, 'BTableColumn', column, false), [(column.renderHtml) ? _c('span', {
        domProps: {
          "innerHTML": _vm._s(_vm.getValueByPath(row, column.field))
        }
      }) : [_vm._v("\n                                    " + _vm._s(_vm.getValueByPath(row, column.field)) + "\n                                ")]], 2)
    })], 2), _vm._v(" "), (_vm.detailed && _vm.isVisibleDetailRow(row)) ? _c('tr', {
      staticClass: "detail"
    }, [_c('td', {
      attrs: {
        "colspan": _vm.columnCount
      }
    }, [_c('div', {
      staticClass: "detail-container"
    }, [_vm._t("detail", null, {
      row: row,
      index: index
    })], 2)])]) : _vm._e()]
  })], 2) : _c('tbody', [_c('tr', {
    staticClass: "is-empty"
  }, [_c('td', {
    attrs: {
      "colspan": _vm.columnCount
    }
  }, [_vm._t("empty")], 2)])]), _vm._v(" "), (_vm.$slots.footer !== undefined) ? _c('tfoot', [_c('tr', {
    staticClass: "table-footer"
  }, [(_vm.hasCustomFooterSlot()) ? _vm._t("footer") : _c('th', {
    attrs: {
      "colspan": _vm.columnCount
    }
  }, [_vm._t("footer")], 2)], 2)]) : _vm._e()])]), _vm._v(" "), ((_vm.checkable && _vm.hasBottomLeftSlot()) || _vm.paginated) ? _c('div', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-left"
  }, [_vm._t("bottom-left")], 2), _vm._v(" "), _c('div', {
    staticClass: "level-right"
  }, [(_vm.paginated) ? _c('div', {
    staticClass: "level-item"
  }, [_c('b-pagination', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "total": _vm.newDataTotal,
      "per-page": _vm.perPage,
      "simple": _vm.paginationSimple,
      "size": _vm.paginationSize,
      "current": _vm.newCurrentPage
    },
    on: {
      "change": _vm.pageChanged
    }
  })], 1) : _vm._e()])]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(181),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/icon/Icon.vue
var Icon = __webpack_require__(3);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);

// CONCATENATED MODULE: ./src/utils/SlotComponent.js
/* harmony default export */ var SlotComponent = ({
    name: 'BSlotComponent',
    props: {
        component: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            default: 'default'
        },
        tag: {
            type: String,
            default: 'div'
        },
        event: {
            type: String,
            default: 'hook:updated'
        }
    },
    methods: {
        refresh: function refresh() {
            this.$forceUpdate();
        },
        isVueComponent: function isVueComponent() {
            return this.component && this.component._isVue;
        }
    },
    created: function created() {
        if (this.isVueComponent()) {
            this.component.$on(this.event, this.refresh);
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.isVueComponent()) {
            this.component.$off(this.event, this.refresh);
        }
    },
    render: function render(h) {
        if (this.isVueComponent()) {
            var slots = this.component.$slots[this.name];
            return h(this.tag, {}, slots);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tabs/Tabs.vue


var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Tabs = __webpack_exports__["default"] = ({
    name: 'BTabs',
    components: (_components = {}, defineProperty_default()(_components, Icon_default.a.name, Icon_default.a), defineProperty_default()(_components, SlotComponent.name, SlotComponent), _components),
    props: {
        value: Number,
        expanded: Boolean,
        type: String,
        size: String,
        position: String,
        animated: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            activeTab: this.value || 0,
            tabItems: [],
            contentHeight: 0,
            _isTabs: true // Used internally by TabItem
        };
    },

    computed: {
        navClasses: function navClasses() {
            return [this.type, this.size, this.position, {
                'is-fullwidth': this.expanded,
                'is-toggle-rounded is-toggle': this.type === 'is-toggle-rounded'
            }];
        }
    },
    watch: {
        /**
         * When v-model is changed set the new active tab.
         */
        value: function value(_value) {
            this.changeTab(_value);
        },


        /**
         * When tab-items are updated, set active one.
         */
        tabItems: function tabItems() {
            if (this.activeTab < this.tabItems.length) {
                this.tabItems[this.activeTab].isActive = true;
            }
        }
    },
    methods: {
        /**
         * Change the active tab and emit change event.
         */
        changeTab: function changeTab(newIndex) {
            if (this.activeTab === newIndex) return;

            if (this.activeTab < this.tabItems.length) {
                this.tabItems[this.activeTab].deactivate(this.activeTab, newIndex);
            }
            this.tabItems[newIndex].activate(this.activeTab, newIndex);
            this.activeTab = newIndex;
            this.$emit('change', newIndex);
        },


        /**
         * Tab click listener, emit input event and change active tab.
         */
        tabClick: function tabClick(value) {
            this.$emit('input', value);
            this.changeTab(value);
        }
    },
    mounted: function mounted() {
        if (this.activeTab < this.tabItems.length) {
            this.tabItems[this.activeTab].isActive = true;
        }
    }
});

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "b-tabs",
    class: {
      'is-fullwidth': _vm.expanded
    }
  }, [_c('nav', {
    staticClass: "tabs",
    class: _vm.navClasses
  }, [_c('ul', _vm._l((_vm.tabItems), function(tabItem, index) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tabItem.visible),
        expression: "tabItem.visible"
      }],
      key: index,
      class: {
        'is-active': _vm.activeTab === index, 'is-disabled': tabItem.disabled
      }
    }, [_c('a', {
      on: {
        "click": function($event) {
          _vm.tabClick(index)
        }
      }
    }, [(tabItem.$slots.header) ? [_c('b-slot-component', {
      attrs: {
        "component": tabItem,
        "name": "header",
        "tag": "span"
      }
    })] : [(tabItem.icon) ? _c('b-icon', {
      attrs: {
        "icon": tabItem.icon,
        "pack": tabItem.iconPack,
        "size": _vm.size
      }
    }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(tabItem.label))])]], 2)])
  }))]), _vm._v(" "), _c('section', {
    staticClass: "tab-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(184),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTabItem',
    props: {
        label: String,
        icon: String,
        iconPack: String,
        disabled: Boolean,
        visible: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            isActive: false,
            transitionName: null
        };
    },

    methods: {
        /**
         * Activate tab, alter animation name based on the index.
         */
        activate: function activate(oldIndex, index) {
            if (!this.$parent.animated) {
                this.transitionName = null;
            } else {
                this.transitionName = index < oldIndex ? 'slide-next' : 'slide-prev';
            }
            this.isActive = true;
        },


        /**
         * Deactivate tab, alter animation name based on the index.
         */
        deactivate: function deactivate(oldIndex, index) {
            if (!this.$parent.animated) {
                this.transitionName = null;
            } else {
                this.transitionName = index < oldIndex ? 'slide-next' : 'slide-prev';
            }
            this.isActive = false;
        }
    },
    created: function created() {
        if (!this.$parent.$data._isTabs) {
            this.$destroy();
            throw new Error('You should wrap bTabItem on a bTabs');
        }
        this.$parent.tabItems.push(this);
    },
    beforeDestroy: function beforeDestroy() {
        var index = this.$parent.tabItems.indexOf(this);
        if (index >= 0) {
            this.$parent.tabItems.splice(index, 1);
        }
    }
});

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive && _vm.visible),
      expression: "isActive && visible"
    }],
    staticClass: "tab-item"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTag',
    props: {
        attached: Boolean,
        closable: Boolean,
        type: String,
        size: String,
        rounded: Boolean,
        disabled: Boolean,
        ellipsis: Boolean,
        tabstop: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        /**
         * Emit close event when delete button is clicked
         * or delete key is pressed.
         */
        close: function close() {
            if (this.disabled) return;

            this.$emit('close');
        }
    }
});

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.attached && _vm.closable) ? _c('div', {
    staticClass: "tags has-addons"
  }, [_c('span', {
    staticClass: "tag",
    class: [_vm.type, _vm.size, {
      'is-rounded': _vm.rounded
    }]
  }, [_c('span', {
    class: {
      'has-ellipsis': _vm.ellipsis
    }
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('a', {
    staticClass: "tag is-delete",
    class: [_vm.size, {
      'is-rounded': _vm.rounded
    }],
    attrs: {
      "role": "button",
      "tabindex": _vm.tabstop ? 0 : false,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.close()
      },
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key)) { return null; }
        $event.preventDefault();
        _vm.close()
      }
    }
  })]) : _c('span', {
    staticClass: "tag",
    class: [_vm.type, _vm.size, {
      'is-rounded': _vm.rounded
    }]
  }, [_c('span', {
    class: {
      'has-ellipsis': _vm.ellipsis
    }
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.closable) ? _c('a', {
    staticClass: "delete is-small",
    attrs: {
      "role": "button",
      "disabled": _vm.disabled,
      "tabindex": _vm.tabstop ? 0 : false
    },
    on: {
      "click": function($event) {
        _vm.close()
      },
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key)) { return null; }
        $event.preventDefault();
        _vm.close()
      }
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(189),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTaglist',
    props: {
        attached: Boolean
    }
});

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tags",
    class: {
      'has-addons': _vm.attached
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(192),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_Tag__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_Tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tag_Tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete_Autocomplete__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete_Autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__autocomplete_Autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_FormElementMixin__ = __webpack_require__(12);



var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTaginput',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__autocomplete_Autocomplete___default.a.name, __WEBPACK_IMPORTED_MODULE_4__autocomplete_Autocomplete___default.a), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_3__tag_Tag___default.a.name, __WEBPACK_IMPORTED_MODULE_3__tag_Tag___default.a), _components),
    mixins: [__WEBPACK_IMPORTED_MODULE_5__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        type: String,
        rounded: {
            type: Boolean,
            default: false
        },
        attached: {
            type: Boolean,
            default: false
        },
        maxtags: {
            type: [Number, String],
            required: false
        },
        field: {
            type: String,
            default: 'value'
        },
        autocomplete: Boolean,
        disabled: Boolean,
        ellipsis: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        confirmKeyCodes: {
            type: Array,
            default: function _default() {
                return [13, 188, 9];
            }
        },
        removeOnKeys: {
            type: Array,
            default: function _default() {
                return [8];
            }
        },
        allowNew: Boolean,
        onPasteSeparators: {
            type: Array,
            default: function _default() {
                return [','];
            }
        },
        beforeAdding: {
            type: Function,
            default: function _default() {
                return true;
            }
        },
        allowDuplicates: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tags: this.value || [],
            newTag: '',
            _elementRef: 'input',
            _isTaginput: true
        };
    },

    computed: {
        rootClasses: function rootClasses() {
            return {
                'is-expanded': this.expanded
            };
        },
        containerClasses: function containerClasses() {
            return {
                'is-focused': this.isFocused,
                'is-focusable': this.hasInput
            };
        },
        valueLength: function valueLength() {
            return this.newTag.trim().length;
        },
        defaultSlotName: function defaultSlotName() {
            return this.hasDefaultSlot ? 'default' : 'dontrender';
        },
        emptySlotName: function emptySlotName() {
            return this.hasEmptySlot ? 'empty' : 'dontrender';
        },
        headerSlotName: function headerSlotName() {
            return this.hasHeaderSlot ? 'header' : 'dontrender';
        },
        hasDefaultSlot: function hasDefaultSlot() {
            return !!this.$scopedSlots.default;
        },
        hasEmptySlot: function hasEmptySlot() {
            return !!this.$slots.empty;
        },
        hasHeaderSlot: function hasHeaderSlot() {
            return !!this.$slots.header;
        },


        /**
         * Show the input field if a maxtags hasn't been set or reached.
         */
        hasInput: function hasInput() {
            return this.maxtags == null || this.tagsLength < this.maxtags;
        },
        tagsLength: function tagsLength() {
            return this.tags.length;
        },


        /**
         * If Taginput has onPasteSeparators prop,
         * returning new RegExp used to split pasted string.
         */
        separatorsAsRegExp: function separatorsAsRegExp() {
            var sep = this.onPasteSeparators;

            return sep.length ? new RegExp(sep.map(function (s) {
                return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : null;
            }).join('|'), 'g') : null;
        }
    },
    watch: {
        /**
         * When v-model is changed set internal value.
         */
        value: function value(_value) {
            this.tags = _value;
        },
        newTag: function newTag(value) {
            this.$emit('typing', value.trim());
        },
        hasInput: function hasInput() {
            if (!this.hasInput) this.onBlur();
        }
    },
    methods: {
        addTag: function addTag(tag) {
            var tagToAdd = tag || this.newTag.trim();

            if (tagToAdd) {
                if (!this.autocomplete) {
                    var reg = this.separatorsAsRegExp;
                    if (reg && tagToAdd.match(reg)) {
                        tagToAdd.split(reg).map(function (t) {
                            return t.trim();
                        }).filter(function (t) {
                            return t.length !== 0;
                        }).map(this.addTag);
                        return;
                    }
                }

                // Add the tag input if it is not blank
                // or previously added (if not allowDuplicates).
                var add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true;
                if (add && this.beforeAdding(tagToAdd)) {
                    this.tags.push(tagToAdd);
                    this.$emit('input', this.tags);
                    this.$emit('add', tagToAdd);
                }
            }

            this.newTag = '';
        },
        getNormalizedTagText: function getNormalizedTagText(tag) {
            if ((typeof tag === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(tag)) === 'object') {
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["a" /* getValueByPath */])(tag, this.field);
            }

            return tag;
        },
        customOnBlur: function customOnBlur($event) {
            // Add tag on-blur if not select only
            if (!this.autocomplete) this.addTag();

            this.onBlur($event);
        },
        onSelect: function onSelect(option) {
            var _this = this;

            if (!option) return;

            this.addTag(option);
            this.$nextTick(function () {
                _this.newTag = '';
            });
        },
        removeTag: function removeTag(index) {
            var tag = this.tags.splice(index, 1)[0];
            this.$emit('input', this.tags);
            this.$emit('remove', tag);
            return tag;
        },
        removeLastTag: function removeLastTag() {
            if (this.tagsLength > 0) {
                this.removeTag(this.tagsLength - 1);
            }
        },
        keydown: function keydown(event) {
            if (this.removeOnKeys.indexOf(event.keyCode) !== -1 && !this.newTag.length) {
                this.removeLastTag();
            }
            // Stop if is to accept select only
            if (this.autocomplete && !this.allowNew) return;

            if (this.confirmKeyCodes.indexOf(event.keyCode) >= 0) {
                event.preventDefault();
                this.addTag();
            }
        }
    }
});

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "taginput control",
    class: _vm.rootClasses
  }, [_c('div', {
    staticClass: "taginput-container",
    class: [_vm.statusType, _vm.size, _vm.containerClasses],
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.hasInput && _vm.focus($event)
      }
    }
  }, [_vm._l((_vm.tags), function(tag, index) {
    return _c('b-tag', {
      key: index,
      attrs: {
        "type": _vm.type,
        "size": _vm.size,
        "rounded": _vm.rounded,
        "attached": _vm.attached,
        "tabstop": false,
        "disabled": _vm.disabled,
        "ellipsis": _vm.ellipsis,
        "closable": _vm.closable
      },
      on: {
        "close": function($event) {
          _vm.removeTag(index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(_vm.getNormalizedTagText(tag)) + "\n        ")])
  }), _vm._v(" "), (_vm.hasInput) ? _c('b-autocomplete', _vm._b({
    ref: "autocomplete",
    attrs: {
      "data": _vm.data,
      "field": _vm.field,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "maxlength": _vm.maxlength,
      "has-counter": false,
      "size": _vm.size,
      "disabled": _vm.disabled,
      "loading": _vm.loading,
      "keep-first": !_vm.allowNew
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.customOnBlur,
      "select": _vm.onSelect
    },
    nativeOn: {
      "keydown": function($event) {
        _vm.keydown($event)
      }
    },
    scopedSlots: _vm._u([{
      key: _vm.defaultSlotName,
      fn: function(props) {
        return [_vm._t("default", null, {
          option: props.option,
          index: props.index
        })]
      }
    }]),
    model: {
      value: (_vm.newTag),
      callback: function($$v) {
        _vm.newTag = $$v
      },
      expression: "newTag"
    }
  }, 'b-autocomplete', _vm.$attrs, false), [_c('template', {
    slot: _vm.headerSlotName
  }, [_vm._t("header")], 2), _vm._v(" "), _c('template', {
    slot: _vm.emptySlotName
  }, [_vm._t("empty")], 2)], 2) : _vm._e()], 2), _vm._v(" "), (_vm.maxtags || _vm.maxlength) ? _c('p', {
    staticClass: "help counter"
  }, [(_vm.maxlength && _vm.valueLength > 0) ? [_vm._v("\n            " + _vm._s(_vm.valueLength) + " / " + _vm._s(_vm.maxlength) + "\n        ")] : (_vm.maxtags) ? [_vm._v("\n            " + _vm._s(_vm.tagsLength) + " / " + _vm._s(_vm.maxtags) + "\n        ")] : _vm._e()], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(195),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_Input__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_Field__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__field_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_Select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__select_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icon_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__icon_Icon__);


var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var AM = 'AM';
var PM = 'PM';
var HOUR_FORMAT_24 = '24';
var HOUR_FORMAT_12 = '12';

var formatNumber = function formatNumber(value) {
    return (value < 10 ? '0' : '') + value;
};

var timeFormatter = function timeFormatter(date, vm) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var am = false;
    if (vm.hourFormat === HOUR_FORMAT_12) {
        am = hours < 12;
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
    }
    return formatNumber(hours) + ':' + formatNumber(minutes) + (vm.hourFormat === HOUR_FORMAT_12 ? ' ' + (am ? AM : PM) : '');
};

var timeParser = function timeParser(date, vm) {
    if (date) {
        var dateString = date;
        var am = false;
        if (vm.hourFormat === HOUR_FORMAT_12) {
            var dateString12 = date.split(' ');
            dateString = dateString12[0];
            am = dateString12[1] === AM;
        }
        var time = dateString.split(':');
        var hours = parseInt(time[0], 10);
        var minutes = parseInt(time[1], 10);
        if (isNaN(hours) || hours < 0 || hours > 23 || vm.hourFormat === HOUR_FORMAT_12 && (hours < 1 || hours > 12) || isNaN(minutes) || minutes < 0 || minutes > 59) {
            return null;
        }
        var d = null;
        if (vm.dateSelected && !isNaN(vm.dateSelected)) {
            d = new Date(vm.dateSelected);
        } else {
            d = new Date();
            d.setMilliseconds(0);
            d.setSeconds(0);
        }
        d.setMinutes(minutes);
        if (vm.hourFormat === HOUR_FORMAT_12) {
            if (am && hours === 12) {
                hours = 0;
            } else if (!am && hours !== 12) {
                hours += 12;
            }
        }
        d.setHours(hours);
        return d;
    }
    return null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTimepicker',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_6__input_Input___default.a.name, __WEBPACK_IMPORTED_MODULE_6__input_Input___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_7__field_Field___default.a.name, __WEBPACK_IMPORTED_MODULE_7__field_Field___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8__select_Select___default.a.name, __WEBPACK_IMPORTED_MODULE_8__select_Select___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default.a.name, __WEBPACK_IMPORTED_MODULE_9__icon_Icon___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default.a.name, __WEBPACK_IMPORTED_MODULE_4__dropdown_Dropdown___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default.a.name, __WEBPACK_IMPORTED_MODULE_5__dropdown_DropdownItem___default.a), _components),
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: Date,
        inline: Boolean,
        minTime: Date,
        maxTime: Date,
        placeholder: String,
        editable: Boolean,
        disabled: Boolean,
        hourFormat: {
            type: String,
            default: HOUR_FORMAT_24,
            validator: function validator(value) {
                return value === HOUR_FORMAT_24 || value === HOUR_FORMAT_12;
            }
        },
        incrementMinutes: {
            type: Number,
            default: 1
        },
        timeFormatter: {
            type: Function,
            default: function _default(date, vm) {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultTimeFormatter === 'function') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultTimeFormatter(date);
                } else {
                    return timeFormatter(date, vm);
                }
            }
        },
        timeParser: {
            type: Function,
            default: function _default(date, vm) {
                if (typeof __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultTimeParser === 'function') {
                    return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultTimeParser(date);
                } else {
                    return timeParser(date, vm);
                }
            }
        },
        mobileNative: {
            type: Boolean,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].defaultTimepickerMobileNative;
            }
        },
        position: String,
        unselectableTimes: Array
    },
    data: function data() {
        return {
            dateSelected: this.value,
            hoursSelected: null,
            minutesSelected: null,
            meridienSelected: null,
            _elementRef: 'input',
            _isTimepicker: true
        };
    },

    computed: {
        hours: function hours() {
            var hours = [];
            var numberOfHours = this.isHourFormat24 ? 24 : 12;
            for (var i = 0; i < numberOfHours; i++) {
                var value = i;
                var label = value;
                if (!this.isHourFormat24) {
                    value = i + 1;
                    label = value;
                    if (this.meridienSelected === AM) {
                        if (value === 12) {
                            value = 0;
                        }
                    } else if (this.meridienSelected === PM) {
                        if (value !== 12) {
                            value += 12;
                        }
                    }
                }
                hours.push({
                    label: formatNumber(label),
                    value: value
                });
            }
            return hours;
        },
        minutes: function minutes() {
            var minutes = [];
            for (var i = 0; i < 60; i += this.incrementMinutes) {
                minutes.push({
                    label: formatNumber(i),
                    value: i
                });
            }
            return minutes;
        },
        meridiens: function meridiens() {
            return [AM, PM];
        },
        isMobile: function isMobile() {
            return this.mobileNative && __WEBPACK_IMPORTED_MODULE_2__utils_helpers__["c" /* isMobile */].any();
        },
        isHourFormat24: function isHourFormat24() {
            return this.hourFormat === HOUR_FORMAT_24;
        }
    },
    watch: {
        hourFormat: function hourFormat(value) {
            if (this.hoursSelected !== null) {
                this.meridienSelected = this.hoursSelected >= 12 ? PM : AM;
            }
        },


        /**
        * Emit input event with selected date as payload.
        */
        dateSelected: function dateSelected(value) {
            this.$emit('input', value);
        },


        /**
         * When v-model is changed:
         *   1. Update internal value.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.updateInternalState(_value);
            this.dateSelected = _value;

            !this.isValid && this.$refs.input.checkHtml5Validity();
        }
    },
    methods: {
        onMeridienChange: function onMeridienChange(value) {
            if (this.hoursSelected !== null) {
                if (value === PM) {
                    if (this.hoursSelected === 0) {
                        this.hoursSelected = 12;
                    } else {
                        this.hoursSelected += 12;
                    }
                } else if (value === AM) {
                    if (this.hoursSelected === 12) {
                        this.hoursSelected = 0;
                    } else {
                        this.hoursSelected -= 12;
                    }
                }
            }
            this.updateDateSelected(this.hoursSelected, this.minutesSelected, value);
        },
        onHoursChange: function onHoursChange(value) {
            this.updateDateSelected(parseInt(value, 10), this.minutesSelected, this.meridienSelected);
        },
        onMinutesChange: function onMinutesChange(value) {
            this.updateDateSelected(this.hoursSelected, parseInt(value, 10), this.meridienSelected);
        },
        updateDateSelected: function updateDateSelected(hours, minutes, meridiens) {
            if (hours != null && minutes != null && (!this.isHourFormat24 && meridiens !== null || this.isHourFormat24)) {
                if (this.dateSelected && !isNaN(this.dateSelected)) {
                    this.dateSelected = new Date(this.dateSelected);
                } else {
                    this.dateSelected = new Date();
                    this.dateSelected.setMilliseconds(0);
                    this.dateSelected.setSeconds(0);
                }
                this.dateSelected.setHours(hours);
                this.dateSelected.setMinutes(minutes);
            }
        },
        updateInternalState: function updateInternalState(value) {
            if (value) {
                this.hoursSelected = value.getHours();
                this.minutesSelected = value.getMinutes();
                this.meridienSelected = value.getHours() >= 12 ? PM : AM;
            } else {
                this.hoursSelected = null;
                this.minutesSelected = null;
                this.meridienSelected = AM;
            }
        },
        isHourDisabled: function isHourDisabled(hour) {
            var _this = this;

            var disabled = false;
            if (this.minTime) {
                var minHours = this.minTime.getHours();
                disabled = hour < minHours;
            }
            if (this.maxTime) {
                if (!disabled) {
                    var maxHours = this.maxTime.getHours();
                    disabled = hour > maxHours;
                }
            }
            if (this.unselectableTimes) {
                if (!disabled) {
                    if (this.minutesSelected !== null) {
                        var unselectable = this.unselectableTimes.filter(function (time) {
                            return time.getHours() === hour && time.getMinutes() === _this.minutesSelected;
                        });
                        disabled = unselectable.length > 0;
                    } else {
                        var _unselectable = this.unselectableTimes.filter(function (time) {
                            return time.getHours() === hour;
                        });
                        disabled = _unselectable.length === this.minutes.length;
                    }
                }
            }
            return disabled;
        },
        isMinuteDisabled: function isMinuteDisabled(minute) {
            var _this2 = this;

            var disabled = false;
            if (this.hoursSelected !== null) {
                if (this.isHourDisabled(this.hoursSelected)) {
                    disabled = true;
                } else {
                    if (this.minTime) {
                        var minHours = this.minTime.getHours();
                        var minMinutes = this.minTime.getMinutes();
                        disabled = this.hoursSelected === minHours && minute < minMinutes;
                    }
                    if (this.maxTime) {
                        if (!disabled) {
                            var maxHours = this.maxTime.getHours();
                            var _minMinutes = this.maxTime.getMinutes();
                            disabled = this.hoursSelected === maxHours && minute > _minMinutes;
                        }
                    }
                }
                if (this.unselectableTimes) {
                    if (!disabled) {
                        var unselectable = this.unselectableTimes.filter(function (time) {
                            return time.getHours() === _this2.hoursSelected && time.getMinutes() === minute;
                        });
                        disabled = unselectable.length > 0;
                    }
                }
            }
            return disabled;
        },


        /*
        * Parse string into date
        */
        onChange: function onChange(value) {
            var date = this.timeParser(value, this);
            this.updateInternalState(date);
            if (date && !isNaN(date)) {
                this.dateSelected = date;
            } else {
                // Force refresh input value when not valid date
                this.dateSelected = null;
                this.$refs.input.newValue = this.dateSelected;
            }
        },


        /*
        * Format date into string
        */
        formatValue: function formatValue(value) {
            if (value && !isNaN(value)) {
                return this.timeFormatter(value, this);
            } else {
                return null;
            }
        },


        /*
        * Close dropdown time picker
        */
        close: function close() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.isActive = false;
            }
        },


        /*
        * Format date into string 'HH-MM-SS'
        */
        formatHHMMSS: function formatHHMMSS(value) {
            var date = new Date(value);
            if (value && !isNaN(date)) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                return formatNumber(hours) + ':' + formatNumber(minutes) + ':00';
            }
            return '';
        },


        /*
        * Parse time from string
        */
        onChangeNativePicker: function onChangeNativePicker(event) {
            var date = event.target.value;
            if (date) {
                if (this.dateSelected && !isNaN(this.dateSelected)) {
                    this.dateSelected = new Date(this.dateSelected);
                } else {
                    this.dateSelected = new Date();
                    this.dateSelected.setMilliseconds(0);
                    this.dateSelected.setSeconds(0);
                }
                var time = date.split(':');
                this.dateSelected.setHours(parseInt(time[0], 10));
                this.dateSelected.setMinutes(parseInt(time[1], 10));
            } else {
                this.dateSelected = null;
            }
        }
    },
    mounted: function mounted() {
        this.updateInternalState(this.value);
    }
});

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "timepicker control",
    class: [_vm.size, {
      'is-expanded': _vm.expanded
    }]
  }, [(!_vm.isMobile || _vm.inline) ? _c('b-dropdown', {
    ref: "dropdown",
    attrs: {
      "position": _vm.position,
      "disabled": _vm.disabled,
      "inline": _vm.inline
    }
  }, [(!_vm.inline) ? _c('b-input', _vm._b({
    ref: "input",
    attrs: {
      "slot": "trigger",
      "autocomplete": "off",
      "value": _vm.formatValue(_vm.dateSelected),
      "placeholder": _vm.placeholder,
      "size": _vm.size,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "loading": _vm.loading,
      "disabled": _vm.disabled,
      "readonly": !_vm.editable,
      "rounded": _vm.rounded
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "blur": function($event) {
        _vm.$emit('blur', $event) && _vm.checkHtml5Validity()
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.onChange($event.target.value)
      }
    },
    slot: "trigger"
  }, 'b-input', _vm.$attrs, false)) : _vm._e(), _vm._v(" "), _c('b-dropdown-item', {
    attrs: {
      "disabled": _vm.disabled,
      "custom": ""
    }
  }, [_c('b-field', {
    attrs: {
      "grouped": "",
      "position": "is-centered"
    }
  }, [_c('b-select', {
    attrs: {
      "disabled": _vm.disabled,
      "placeholder": "00"
    },
    nativeOn: {
      "change": function($event) {
        _vm.onHoursChange($event.target.value)
      }
    },
    model: {
      value: (_vm.hoursSelected),
      callback: function($$v) {
        _vm.hoursSelected = $$v
      },
      expression: "hoursSelected"
    }
  }, _vm._l((_vm.hours), function(hour) {
    return _c('option', {
      key: hour.value,
      attrs: {
        "disabled": _vm.isHourDisabled(hour.value)
      },
      domProps: {
        "value": hour.value
      }
    }, [_vm._v("\n                        " + _vm._s(hour.label) + "\n                    ")])
  })), _vm._v(" "), _c('span', {
    staticClass: "control is-colon"
  }, [_vm._v(":")]), _vm._v(" "), _c('b-select', {
    attrs: {
      "disabled": _vm.disabled,
      "placeholder": "00"
    },
    nativeOn: {
      "change": function($event) {
        _vm.onMinutesChange($event.target.value)
      }
    },
    model: {
      value: (_vm.minutesSelected),
      callback: function($$v) {
        _vm.minutesSelected = $$v
      },
      expression: "minutesSelected"
    }
  }, _vm._l((_vm.minutes), function(minute) {
    return _c('option', {
      key: minute.value,
      attrs: {
        "disabled": _vm.isMinuteDisabled(minute.value)
      },
      domProps: {
        "value": minute.value
      }
    }, [_vm._v("\n                        " + _vm._s(minute.label) + "\n                    ")])
  })), _vm._v(" "), (!_vm.isHourFormat24) ? _c('b-select', {
    attrs: {
      "disabled": _vm.disabled
    },
    nativeOn: {
      "change": function($event) {
        _vm.onMeridienChange($event.target.value)
      }
    },
    model: {
      value: (_vm.meridienSelected),
      callback: function($$v) {
        _vm.meridienSelected = $$v
      },
      expression: "meridienSelected"
    }
  }, _vm._l((_vm.meridiens), function(meridien) {
    return _c('option', {
      key: meridien,
      domProps: {
        "value": meridien
      }
    }, [_vm._v("\n                        " + _vm._s(meridien) + "\n                    ")])
  })) : _vm._e()], 1), _vm._v(" "), (_vm.$slots.default !== undefined && _vm.$slots.default.length) ? _c('footer', {
    staticClass: "timepicker-footer"
  }, [_vm._t("default")], 2) : _vm._e()], 1)], 1) : _c('b-input', _vm._b({
    ref: "input",
    attrs: {
      "type": "time",
      "autocomplete": "off",
      "value": _vm.formatHHMMSS(_vm.value),
      "placeholder": _vm.placeholder,
      "size": _vm.size,
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack,
      "loading": _vm.loading,
      "max": _vm.formatHHMMSS(_vm.maxTime),
      "min": _vm.formatHHMMSS(_vm.minTime),
      "disabled": _vm.disabled,
      "readonly": false
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "blur": function($event) {
        _vm.$emit('blur', $event) && _vm.checkHtml5Validity()
      }
    },
    nativeOn: {
      "change": function($event) {
        _vm.onChangeNativePicker($event)
      }
    }
  }, 'b-input', _vm.$attrs, false))], 1)
},staticRenderFns: []}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(198),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_NoticeMixin_js__ = __webpack_require__(65);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BToast',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_NoticeMixin_js__["a" /* default */]],
    data: function data() {
        return {
            newDuration: this.duration || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultToastDuration
        };
    }
});

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": _vm.transition.enter,
      "leave-active-class": _vm.transition.leave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "toast",
    class: [_vm.type, _vm.position]
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(201),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BTooltip',
    props: {
        active: {
            type: Boolean,
            default: true
        },
        type: String,
        label: String,
        position: {
            type: String,
            default: 'is-top',
            validator: function validator(value) {
                return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1;
            }
        },
        always: Boolean,
        animated: Boolean,
        square: Boolean,
        dashed: Boolean,
        multilined: Boolean,
        size: {
            type: String,
            default: 'is-medium'
        }
    },
    computed: {
        newType: function newType() {
            return this.type || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultTooltipType;
        },
        newAnimated: function newAnimated() {
            return this.animated || __WEBPACK_IMPORTED_MODULE_0__utils_config__["a" /* default */].defaultTooltipAnimated;
        }
    }
});

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: [_vm.newType, _vm.position, _vm.size, {
      'b-tooltip': _vm.active,
      'is-square': _vm.square,
      'is-animated': _vm.newAnimated,
      'is-always': _vm.always,
      'is-multiline': _vm.multilined,
      'is-dashed': _vm.dashed
    }],
    attrs: {
      "data-label": _vm.label
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(204),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_FormElementMixin__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ssr__ = __webpack_require__(62);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BUpload',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_FormElementMixin__["a" /* default */]],
    inheritAttrs: false,
    props: {
        value: {
            type: [Object, Function, __WEBPACK_IMPORTED_MODULE_1__utils_ssr__["a" /* File */], Array]
        },
        multiple: Boolean,
        disabled: Boolean,
        accept: String,
        dragDrop: Boolean,
        type: {
            type: String,
            default: 'is-primary'
        },
        native: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            newValue: this.value,
            dragDropFocus: false,
            _elementRef: 'input'
        };
    },

    watch: {
        /**
         * When v-model is changed:
         *   1. Set internal value.
         *   2. Reset input value if array is empty
         *   3. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.newValue = _value;
            if (!this.newValue || Array.isArray(this.newValue) && this.newValue.length === 0) {
                this.$refs.input.value = null;
            }
            !this.isValid && !this.dragDrop && this.checkHtml5Validity();
        }
    },
    methods: {

        /**
         * Listen change event on input type 'file',
         * emit 'input' event and validate
         */
        onFileChange: function onFileChange(event) {
            if (this.disabled || this.loading) return;
            if (this.dragDrop) {
                this.updateDragDropFocus(false);
            }
            var value = event.target.files || event.dataTransfer.files;
            if (value && value.length) {
                if (!this.multiple) {
                    // only one element in case drag drop mode and isn't multiple
                    if (this.dragDrop && value.length !== 1) return false;else {
                        var file = value[0];
                        if (this.checkType(file)) {
                            this.newValue = file;
                        }
                    }
                } else {
                    // always new values if native or undefined local
                    if (this.native || !this.newValue) {
                        this.newValue = [];
                    }
                    for (var i = 0; i < value.length; i++) {
                        var _file = value[i];
                        if (this.checkType(_file)) {
                            this.newValue.push(_file);
                        }
                    }
                }
            }
            this.$emit('input', this.newValue);
            !this.dragDrop && this.checkHtml5Validity();
        },


        /**
         * Listen drag-drop to update internal variable
         */
        updateDragDropFocus: function updateDragDropFocus(focus) {
            if (!this.disabled && !this.loading) {
                this.dragDropFocus = focus;
            }
        },


        /**
         * Check mime type of file
         */
        checkType: function checkType(file) {
            if (!this.accept) return true;
            var types = this.accept.split(',');
            if (types.length === 0) return true;
            var valid = false;
            for (var i = 0; i < types.length && !valid; i++) {
                var type = types[i].trim();
                if (type) {
                    if (type.substring(0, 1) === '.') {
                        // check extension
                        var extIndex = file.name.lastIndexOf('.');
                        if (extIndex >= 0 && file.name.substring(extIndex) === type) {
                            valid = true;
                        }
                    } else {
                        // check mime type
                        if (file.type.match(type)) {
                            valid = true;
                        }
                    }
                }
            }
            return valid;
        }
    }
});

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "upload control"
  }, [(!_vm.dragDrop) ? [_vm._t("default")] : _c('div', {
    staticClass: "upload-draggable",
    class: [_vm.type, {
      'is-loading': _vm.loading,
      'is-disabled': _vm.disabled,
      'is-hovered': _vm.dragDropFocus
    }],
    on: {
      "dragover": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(true)
      },
      "dragleave": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(false)
      },
      "dragenter": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(true)
      },
      "drop": function($event) {
        $event.preventDefault();
        _vm.onFileChange($event)
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('input', _vm._b({
    ref: "input",
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "accept": _vm.accept,
      "disabled": _vm.disabled
    },
    on: {
      "change": _vm.onFileChange
    }
  }, 'input', _vm.$attrs, false))], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/typeface-lato/index.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* lato-100normal - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100;\n  src:\n    local('Lato Thin '),\n    local('Lato-Thin'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-100.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-100.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-100italic - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 100;\n  src:\n    local('Lato Thin italic'),\n    local('Lato-Thinitalic'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-100italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-100italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-300normal - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 300;\n  src:\n    local('Lato Light '),\n    local('Lato-Light'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-300.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-300.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-300italic - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 300;\n  src:\n    local('Lato Light italic'),\n    local('Lato-Lightitalic'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-300italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-300italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-400normal - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('Lato Regular '),\n    local('Lato-Regular'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-400.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-400.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-400italic - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('Lato Regular italic'),\n    local('Lato-Regularitalic'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-400italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-400italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-700normal - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('Lato Bold '),\n    local('Lato-Bold'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-700.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-700.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-700italic - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('Lato Bold italic'),\n    local('Lato-Bolditalic'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-700italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-700italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-900normal - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 900;\n  src:\n    local('Lato Black '),\n    local('Lato-Black'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-900.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-900.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n/* lato-900italic - latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 900;\n  src:\n    local('Lato Black italic'),\n    local('Lato-Blackitalic'),\n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-900italic.woff2")) + ") format('woff2'), \n    url(" + escape(__webpack_require__("./node_modules/typeface-lato/files/lato-latin-900italic.woff")) + ") format('woff'); /* Modern Browsers */\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-map-container {\n  position: relative;\n}\n.vue-map-container .vue-map {\n  left: 0; right: 0; top: 0; bottom: 0;\n  position: absolute;\n}\n.vue-map-hidden {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-street-view-pano-container {\n  position: relative;\n}\n.vue-street-view-pano-container .vue-street-view-pano {\n  left: 0; right: 0; top: 0; bottom: 0;\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/portal-vue/dist/portal-vue.js":
/***/ (function(module, exports, __webpack_require__) {

/*
    portal-vue
    Version: 1.5.1
    Licence: MIT
    (c) Thorsten Lünborg
  */
  
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__("./node_modules/vue/dist/vue.common.js")) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global.PortalVue = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function extractAttributes(el) {
  var map = el.hasAttributes() ? el.attributes : [];
  var attrs = {};
  for (var i = 0; i < map.length; i++) {
    var attr = map[i];
    if (attr.value) {
      attrs[attr.name] = attr.value === '' ? true : attr.value;
    }
  }
  var klass = void 0,
      style = void 0;
  if (attrs.class) {
    klass = attrs.class;
    delete attrs.class;
  }
  if (attrs.style) {
    style = attrs.style;
    delete attrs.style;
  }
  var data = {
    attrs: attrs,
    class: klass,
    style: style
  };
  return data;
}

function freeze(item) {
  if (Array.isArray(item) || (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    return Object.freeze(item);
  }
  return item;
}

function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return transports.reduce(function (passengers, transport) {
    var newPassengers = transport.passengers[0];
    newPassengers = typeof newPassengers === 'function' ? newPassengers(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}

function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (c) {
    return c[1];
  });
}

var transports = {};

var Wormhole = Vue.extend({
  data: function data() {
    return { transports: transports };
  },
  methods: {
    open: function open(transport) {
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers;

      if (!to || !from || !passengers) return;

      transport.passengers = freeze(passengers);
      var keys = Object.keys(this.transports);
      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.getTransportIndex(transport);
      // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
      var newTransports = this.transports[to].slice(0);
      if (currentIndex === -1) {
        newTransports.push(transport);
      } else {
        newTransports[currentIndex] = transport;
      }
      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;

      if (!to || !from) return;
      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.getTransportIndex(transport);
        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    hasTarget: function hasTarget(to) {
      return this.transports.hasOwnProperty(to);
    },
    hasContentFor: function hasContentFor(to) {
      if (!this.transports[to]) {
        return false;
      }
      return this.getContentFor(to).length > 0;
    },
    getSourceFor: function getSourceFor(to) {
      return this.transports[to] && this.transports[to][0].from;
    },
    getContentFor: function getContentFor(to) {
      var transports = this.transports[to];
      if (!transports) {
        return undefined;
      }
      return combinePassengers(transports);
    },
    getTransportIndex: function getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return i;
        }
      }
      return -1;
    }
  }
});

var wormhole = new Wormhole(transports);

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

var babelHelperVueJsxMergeProps = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a
  }, {})
};

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  }
}

// import { transports } from './wormhole'
var PortalTarget = {
  abstract: false,
  name: 'portalTarget',
  props: {
    attributes: { type: Object, default: function _default() {
        return {};
      } },
    multiple: { type: Boolean, default: false },
    name: { type: String, required: true },
    slim: { type: Boolean, default: false },
    slotProps: { type: Object, default: function _default() {
        return {};
      } },
    tag: { type: String, default: 'div' },
    transition: { type: [Boolean, String, Object], default: false },
    transitionEvents: { type: Object, default: function _default() {
        return {};
      } }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    if (!this.transports[this.name]) {
      this.$set(this.transports, this.name, []);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.unwatch = this.$watch('ownTransports', this.emitChange);
    this.$nextTick(function () {
      if (_this.transition) {
        // only when we have a transition, because it causes a re-render
        _this.firstRender = false;
      }
    });
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  updated: function updated() {
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unwatch();
  },


  computed: {
    ownTransports: function ownTransports() {
      var transports$$1 = this.transports[this.name] || [];
      if (this.multiple) {
        return transports$$1;
      }
      return transports$$1.length === 0 ? [] : [transports$$1[transports$$1.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    },
    hasAttributes: function hasAttributes() {
      return Object.keys(this.attributes).length > 0;
    },
    withTransition: function withTransition() {
      return !!this.transition;
    },
    transitionData: function transitionData() {
      var t = this.transition;
      var data = {};

      // During first render, we render a dumb transition without any classes, events and a fake name
      // We have to do this to emulate the normal behaviour of transitions without `appear`
      // because in Portals, transitions can behave as if appear was defined under certain conditions.
      if (this.firstRender && _typeof(this.transition) === 'object' && !this.transition.appear) {
        data.props = { name: '__notranstition__portal-vue__' };
        return data;
      }

      if (typeof t === 'string') {
        data.props = { name: t };
      } else if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object') {
        data.props = t;
      }
      if (this.renderSlim) {
        data.props.tag = this.tag;
      }
      data.on = this.transitionEvents;

      return data;
    },
    transportedClasses: function transportedClasses() {
      return this.ownTransports.map(function (transport) {
        return transport.class;
      }).reduce(function (array, subarray) {
        return array.concat(subarray);
      }, []);
      //.filter((string, index, array) => array.indexOf(string) === index)
    }
  },

  methods: {
    emitChange: function emitChange(newTransports, oldTransports) {
      if (this.multiple) {
        this.$emit('change', [].concat(toConsumableArray(newTransports)), [].concat(toConsumableArray(oldTransports)));
      } else {
        var newTransport = newTransports.length === 0 ? undefined : newTransports[0];
        var oldTransport = oldTransports.length === 0 ? undefined : oldTransports[0];
        this.$emit('change', _extends({}, newTransport), _extends({}, oldTransport));
      }
    },

    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$slots.default || [];
    },
    noWrapper: function noWrapper() {
      var noWrapper = !this.hasAttributes && this.slim;
      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }
      return noWrapper;
    }
  },
  render: function render(h) {
    this.$options.abstract = true;
    var noWrapper = this.noWrapper();
    var children = this.children();
    var TransitionType = noWrapper ? 'transition' : 'transition-group';
    var Tag = this.tag;

    if (this.withTransition) {
      return h(
        TransitionType,
        babelHelperVueJsxMergeProps([this.transitionData, { 'class': 'vue-portal-target' }]),
        [children]
      );
    }

    return noWrapper ? children[0] : h(
      Tag,
      babelHelperVueJsxMergeProps([{
        'class': 'vue-portal-target ' + this.transportedClasses.join(' ')
      }, this.attributes]),
      [children]
    );
  }
};

var inBrowser = typeof window !== 'undefined';

var pid = 1;

var Portal = {
  abstract: false,
  name: 'portal',
  props: {
    /* global HTMLElement */
    disabled: { type: Boolean, default: false },
    name: { type: String, default: function _default() {
        return String(pid++);
      } },
    order: { type: Number, default: 0 },
    slim: { type: Boolean, default: false },
    slotProps: { type: Object, default: function _default() {
        return {};
      } },
    tag: { type: [String], default: 'DIV' },
    targetEl: { type: inBrowser ? [String, HTMLElement] : String },
    targetClass: { type: String },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },

  mounted: function mounted() {
    if (this.targetEl) {
      this.mountToTarget();
    }
    if (!this.disabled) {
      this.sendUpdate();
    }
    // Reset hack to make child components skip the portal when defining their $parent
    // was set to true during render when we render something locally.
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
    // Reset hack to make child components skip the portal when defining their $parent
    // was set to true during render when we render something locally.
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
    if (this.mountedComp) {
      this.mountedComp.$destroy();
    }
  },

  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    },
    targetEl: function targetEl(newValue, oldValue) {
      if (newValue) {
        this.mountToTarget();
      }
    }
  },

  methods: {
    normalizedSlots: function normalizedSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizedSlots();

      if (slotContent) {
        wormhole.open({
          from: this.name,
          to: this.to,
          passengers: [].concat(toConsumableArray(slotContent)),
          class: this.targetClass && this.targetClass.split(' '),
          order: this.order
        });
      } else {
        this.clear();
      }
    },
    clear: function clear(target) {
      wormhole.close({
        from: this.name,
        to: target || this.to
      });
    },
    mountToTarget: function mountToTarget() {
      var el = void 0;
      var target = this.targetEl;

      if (typeof target === 'string') {
        el = document.querySelector(target);
      } else if (target instanceof HTMLElement) {
        el = target;
      } else {
        console.warn('[vue-portal]: value of targetEl must be of type String or HTMLElement');
        return;
      }

      if (el) {
        var newTarget = new Vue(_extends({}, PortalTarget, {
          parent: this,
          propsData: {
            name: this.to,
            tag: el.tagName,
            attributes: extractAttributes(el)
          }
        }));
        newTarget.$mount(el);
        this.mountedComp = newTarget;
      } else {
        console.warn('[vue-portal]: The specified targetEl ' + target + ' was not found');
      }
    },
    normalizeChildren: function normalizeChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    }
  },

  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;
    if (children.length && this.disabled) {
      // hack to make child components skip the portal when defining their $parent
      this.$options.abstract = true;
      return children.length <= 1 && this.slim ? children[0] : h(Tag, [this.normalizeChildren(children)]);
    } else {
      return h(Tag, {
        'class': 'v-portal',
        style: 'display: none',
        key: 'v-portal-placeholder'
      });
      // h(this.tag, { class: { 'v-portal': true }, style: { display: 'none' }, key: 'v-portal-placeholder' })
    }
  }
};

function install(Vue$$1) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue$$1.component(opts.portalName || 'Portal', Portal);
  Vue$$1.component(opts.portalTargetName || 'PortalTarget', PortalTarget);
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install });
}

var index = {
  install: install,
  Portal: Portal,
  PortalTarget: PortalTarget,
  Wormhole: wormhole
};

return index;

})));
//# sourceMappingURL=portal-vue.js.map


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../vue-loader/lib/index.js??vue-loader-options!./map.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../vue-loader/lib/index.js??vue-loader-options!./map.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../vue-loader/lib/index.js??vue-loader-options!./streetViewPanorama.vue?vue&type=style&index=0&lang=css&", function() {
			var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../vue-loader/lib/index.js??vue-loader-options!./streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-100.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-100.woff?752c20224144760a496fb9e19a62f616";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-100.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-100.woff2?f8028e61362a54aa64dcb26e8063d0d7";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-100italic.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-100italic.woff?6ea8380326f67e10380953b188d96a2b";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-100italic.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-100italic.woff2?ef884f11c6adb5df51c446911612e7af";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-300.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-300.woff?ba2452bdc790a4fee05202eac3c092b3";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-300.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-300.woff2?bbbd26aeee9c5b967e35933bce02d358";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-300italic.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-300italic.woff?06eb177ee6c1960bcd79f1cf8c812000";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-300italic.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-300italic.woff2?7d718d7299ab7f9fab17d7d4f13ded57";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-400.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-400.woff?62fb51e9e645f63599238881b9de15dd";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-400.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-400.woff2?f1a4a058fbba1e35a406188ae7eddaf8";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-400italic.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-400italic.woff?c4082958a18f04bd32a3d3e1f5e390a5";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-400italic.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-400italic.woff2?b45e52f342dc29c8553f51a99f924871";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-700.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-700.woff?96759e32fdc800c78b527a3e53fe2be6";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-700.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-700.woff2?7fbbfd1610770d594aef639cfefdd0b0";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-700italic.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-700italic.woff?0a06ba1bdf385495f2679324cfbedd13";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-700italic.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-700italic.woff2?c66215e09d2420885ad1a1f3eb2bac37";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-900.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-900.woff?d79dd0661ba130ec7a7e7c060fcb7e09";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-900.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-900.woff2?f2de2c6ec69b0c11f1bc44c5348c2f35";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-900italic.woff":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-900italic.woff?e792d6c62329e025ca1cbea793ba8de5";

/***/ }),

/***/ "./node_modules/typeface-lato/files/lato-latin-900italic.woff2":
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-lato/files/lato-latin-900italic.woff2?fd67cf72cde7716bdadf8a3992b37fa2";

/***/ }),

/***/ "./node_modules/typeface-lato/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/typeface-lato/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/v-tooltip/dist/v-tooltip.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* unused harmony export VTooltip */
/* unused harmony export VClosePopover */
/* unused harmony export VPopover */
/* unused harmony export createTooltip */
/* unused harmony export destroyTooltip */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var SVGAnimatedString = function SVGAnimatedString() {};
if (typeof window !== 'undefined') {
	SVGAnimatedString = window.SVGAnimatedString;
}

function convertToArray(value) {
	if (typeof value === 'string') {
		value = value.split(' ');
	}
	return value;
}

/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */
function addClasses(el, classes) {
	var newClasses = convertToArray(classes);
	var classList = void 0;
	if (el.className instanceof SVGAnimatedString) {
		classList = convertToArray(el.className.baseVal);
	} else {
		classList = convertToArray(el.className);
	}
	newClasses.forEach(function (newClass) {
		if (classList.indexOf(newClass) === -1) {
			classList.push(newClass);
		}
	});
	if (el instanceof SVGElement) {
		el.setAttribute('class', classList.join(' '));
	} else {
		el.className = classList.join(' ');
	}
}

/**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */
function removeClasses(el, classes) {
	var newClasses = convertToArray(classes);
	var classList = void 0;
	if (el.className instanceof SVGAnimatedString) {
		classList = convertToArray(el.className.baseVal);
	} else {
		classList = convertToArray(el.className);
	}
	newClasses.forEach(function (newClass) {
		var index = classList.indexOf(newClass);
		if (index !== -1) {
			classList.splice(index, 1);
		}
	});
	if (el instanceof SVGElement) {
		el.setAttribute('class', classList.join(' '));
	} else {
		el.className = classList.join(' ');
	}
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
	supportsPassive = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function get() {
				supportsPassive = true;
			}
		});
		window.addEventListener('test', null, opts);
	} catch (e) {}
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/* Forked from https://github.com/FezVrasta/popper.js/blob/master/packages/tooltip/src/index.js */

var DEFAULT_OPTIONS = {
	container: false,
	delay: 0,
	html: false,
	placement: 'top',
	title: '',
	template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	trigger: 'hover focus',
	offset: 0
};

var openTooltips = [];

var Tooltip = function () {
	/**
  * Create a new Tooltip.js instance
  * @class Tooltip
  * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
  * @param {Object} options
  * @param {String} options.placement=bottom
  *			Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
  *			left(-start, -end)`
  * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
  * @param {Number|Object} options.delay=0
  *			Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
  *			If a number is supplied, delay is applied to both hide/show.
  *			Object structure is: `{ show: 500, hide: 100 }`
  * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
  * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
  * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
  *			Base HTML to used when creating the tooltip.
  *			The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
  *			`.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
  *			The outermost wrapper element should have the `.tooltip` class.
  * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
  * @param {String} [options.trigger='hover focus']
  *			How tooltip is triggered - click, hover, focus, manual.
  *			You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
  * @param {HTMLElement} options.boundariesElement
  *			The element used as boundaries for the tooltip. For more information refer to Popper.js'
  *			[boundariesElement docs](https://popper.js.org/popper-documentation.html)
  * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
  *			[offset docs](https://popper.js.org/popper-documentation.html)
  * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
  *			[options docs](https://popper.js.org/popper-documentation.html)
  * @return {Object} instance - The generated tooltip instance
  */
	function Tooltip(reference, options) {
		classCallCheck$1(this, Tooltip);

		_initialiseProps.call(this);

		// apply user options over default ones
		options = _extends$1({}, DEFAULT_OPTIONS, options);

		reference.jquery && (reference = reference[0]);

		// cache reference and options
		this.reference = reference;
		this.options = options;

		// set initial state
		this._isOpen = false;

		this._init();
	}

	//
	// Public methods
	//

	/**
  * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
  * Tooltips with zero-length titles are never displayed.
  * @method Tooltip#show
  * @memberof Tooltip
  */


	/**
  * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
  * @method Tooltip#hide
  * @memberof Tooltip
  */


	/**
  * Hides and destroys an element’s tooltip.
  * @method Tooltip#dispose
  * @memberof Tooltip
  */


	/**
  * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
  * @method Tooltip#toggle
  * @memberof Tooltip
  */


	createClass$1(Tooltip, [{
		key: 'setClasses',
		value: function setClasses(classes) {
			this._classes = classes;
		}
	}, {
		key: 'setContent',
		value: function setContent(content) {
			this.options.title = content;
			if (this._tooltipNode) {
				this._setContent(content, this.options);
			}
		}
	}, {
		key: 'setOptions',
		value: function setOptions(options) {
			var classesUpdated = false;
			var classes = options && options.classes || directive.options.defaultClass;
			if (this._classes !== classes) {
				this.setClasses(classes);
				classesUpdated = true;
			}

			options = getOptions(options);

			var needPopperUpdate = false;
			var needRestart = false;

			if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
				needPopperUpdate = true;
			}

			if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
				needRestart = true;
			}

			for (var key in options) {
				this.options[key] = options[key];
			}

			if (this._tooltipNode) {
				if (needRestart) {
					var isOpen = this._isOpen;

					this.dispose();
					this._init();

					if (isOpen) {
						this.show();
					}
				} else if (needPopperUpdate) {
					this.popperInstance.update();
				}
			}
		}

		//
		// Private methods
		//

	}, {
		key: '_init',
		value: function _init() {
			// get events list
			var events = typeof this.options.trigger === 'string' ? this.options.trigger.split(' ').filter(function (trigger) {
				return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
			}) : [];
			this._isDisposed = false;
			this._enableDocumentTouch = events.indexOf('manual') === -1;

			// set event listeners
			this._setEventListeners(this.reference, events, this.options);
		}

		/**
   * Creates a new tooltip node
   * @memberof Tooltip
   * @private
   * @param {HTMLElement} reference
   * @param {String} template
   * @param {String|HTMLElement|TitleFunction} title
   * @param {Boolean} allowHtml
   * @return {HTMLelement} tooltipNode
   */

	}, {
		key: '_create',
		value: function _create(reference, template) {
			// create tooltip element
			var tooltipGenerator = window.document.createElement('div');
			tooltipGenerator.innerHTML = template.trim();
			var tooltipNode = tooltipGenerator.childNodes[0];

			// add unique ID to our tooltip (needed for accessibility reasons)
			tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

			// Initially hide the tooltip
			// The attribute will be switched in a next frame so
			// CSS transitions can play
			tooltipNode.setAttribute('aria-hidden', 'true');

			if (this.options.autoHide && this.options.trigger.indexOf('hover') !== -1) {
				tooltipNode.addEventListener('mouseenter', this.hide);
				tooltipNode.addEventListener('click', this.hide);
			}

			// return the generated tooltip node
			return tooltipNode;
		}
	}, {
		key: '_setContent',
		value: function _setContent(content, options) {
			var _this = this;

			this.asyncContent = false;
			this._applyContent(content, options).then(function () {
				_this.popperInstance.update();
			});
		}
	}, {
		key: '_applyContent',
		value: function _applyContent(title, options) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				var allowHtml = options.html;
				var rootNode = _this2._tooltipNode;
				if (!rootNode) return;
				var titleNode = rootNode.querySelector(_this2.options.innerSelector);
				if (title.nodeType === 1) {
					// if title is a node, append it only if allowHtml is true
					if (allowHtml) {
						while (titleNode.firstChild) {
							titleNode.removeChild(titleNode.firstChild);
						}
						titleNode.appendChild(title);
					}
				} else if (typeof title === 'function') {
					// if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
					var result = title();
					if (result && typeof result.then === 'function') {
						_this2.asyncContent = true;
						options.loadingClass && addClasses(rootNode, options.loadingClass);
						if (options.loadingContent) {
							_this2._applyContent(options.loadingContent, options);
						}
						result.then(function (asyncResult) {
							options.loadingClass && removeClasses(rootNode, options.loadingClass);
							return _this2._applyContent(asyncResult, options);
						}).then(resolve).catch(reject);
					} else {
						_this2._applyContent(result, options).then(resolve).catch(reject);
					}
					return;
				} else {
					// if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
					allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
				}
				resolve();
			});
		}
	}, {
		key: '_show',
		value: function _show(reference, options) {
			if (options && typeof options.container === 'string') {
				var container = document.querySelector(options.container);
				if (!container) return;
			}

			clearTimeout(this._disposeTimer);

			options = Object.assign({}, options);
			delete options.offset;

			var updateClasses = true;
			if (this._tooltipNode) {
				addClasses(this._tooltipNode, this._classes);
				updateClasses = false;
			}

			var result = this._ensureShown(reference, options);

			if (updateClasses && this._tooltipNode) {
				addClasses(this._tooltipNode, this._classes);
			}

			addClasses(reference, ['v-tooltip-open']);

			return result;
		}
	}, {
		key: '_ensureShown',
		value: function _ensureShown(reference, options) {
			var _this3 = this;

			// don't show if it's already visible
			if (this._isOpen) {
				return this;
			}
			this._isOpen = true;

			openTooltips.push(this);

			// if the tooltipNode already exists, just show it
			if (this._tooltipNode) {
				this._tooltipNode.style.display = '';
				this._tooltipNode.setAttribute('aria-hidden', 'false');
				this.popperInstance.enableEventListeners();
				this.popperInstance.update();
				if (this.asyncContent) {
					this._setContent(options.title, options);
				}
				return this;
			}

			// get title
			var title = reference.getAttribute('title') || options.title;

			// don't show tooltip if no title is defined
			if (!title) {
				return this;
			}

			// create tooltip node
			var tooltipNode = this._create(reference, options.template);
			this._tooltipNode = tooltipNode;

			this._setContent(title, options);

			// Add `aria-describedby` to our reference element for accessibility reasons
			reference.setAttribute('aria-describedby', tooltipNode.id);

			// append tooltip to container
			var container = this._findContainer(options.container, reference);

			this._append(tooltipNode, container);

			var popperOptions = _extends$1({}, options.popperOptions, {
				placement: options.placement
			});

			popperOptions.modifiers = _extends$1({}, popperOptions.modifiers, {
				arrow: {
					element: this.options.arrowSelector
				}
			});

			if (options.boundariesElement) {
				popperOptions.modifiers.preventOverflow = {
					boundariesElement: options.boundariesElement
				};
			}

			this.popperInstance = new Popper(reference, tooltipNode, popperOptions);

			// Fix position
			requestAnimationFrame(function () {
				if (!_this3._isDisposed && _this3.popperInstance) {
					_this3.popperInstance.update();

					// Show the tooltip
					requestAnimationFrame(function () {
						if (!_this3._isDisposed) {
							_this3._isOpen && tooltipNode.setAttribute('aria-hidden', 'false');
						} else {
							_this3.dispose();
						}
					});
				} else {
					_this3.dispose();
				}
			});

			return this;
		}
	}, {
		key: '_noLongerOpen',
		value: function _noLongerOpen() {
			var index = openTooltips.indexOf(this);
			if (index !== -1) {
				openTooltips.splice(index, 1);
			}
		}
	}, {
		key: '_hide',
		value: function _hide() /* reference, options */{
			var _this4 = this;

			// don't hide if it's already hidden
			if (!this._isOpen) {
				return this;
			}

			this._isOpen = false;
			this._noLongerOpen();

			// hide tooltipNode
			this._tooltipNode.style.display = 'none';
			this._tooltipNode.setAttribute('aria-hidden', 'true');

			this.popperInstance.disableEventListeners();

			clearTimeout(this._disposeTimer);
			var disposeTime = directive.options.disposeTimeout;
			if (disposeTime !== null) {
				this._disposeTimer = setTimeout(function () {
					if (_this4._tooltipNode) {
						_this4._tooltipNode.removeEventListener('mouseenter', _this4.hide);
						_this4._tooltipNode.removeEventListener('click', _this4.hide);
						// Don't remove popper instance, just the HTML element
						_this4._tooltipNode.parentNode.removeChild(_this4._tooltipNode);
						_this4._tooltipNode = null;
					}
				}, disposeTime);
			}

			removeClasses(this.reference, ['v-tooltip-open']);

			return this;
		}
	}, {
		key: '_dispose',
		value: function _dispose() {
			var _this5 = this;

			this._isDisposed = true;

			// remove event listeners first to prevent any unexpected behaviour
			this._events.forEach(function (_ref) {
				var func = _ref.func,
				    event = _ref.event;

				_this5.reference.removeEventListener(event, func);
			});
			this._events = [];

			if (this._tooltipNode) {
				this._hide();

				this._tooltipNode.removeEventListener('mouseenter', this.hide);
				this._tooltipNode.removeEventListener('click', this.hide);

				// destroy instance
				this.popperInstance.destroy();

				// destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
				if (!this.popperInstance.options.removeOnDestroy) {
					this._tooltipNode.parentNode.removeChild(this._tooltipNode);
					this._tooltipNode = null;
				}
			} else {
				this._noLongerOpen();
			}
			return this;
		}
	}, {
		key: '_findContainer',
		value: function _findContainer(container, reference) {
			// if container is a query, get the relative element
			if (typeof container === 'string') {
				container = window.document.querySelector(container);
			} else if (container === false) {
				// if container is `false`, set it to reference parent
				container = reference.parentNode;
			}
			return container;
		}

		/**
   * Append tooltip to container
   * @memberof Tooltip
   * @private
   * @param {HTMLElement} tooltip
   * @param {HTMLElement|String|false} container
   */

	}, {
		key: '_append',
		value: function _append(tooltipNode, container) {
			container.appendChild(tooltipNode);
		}
	}, {
		key: '_setEventListeners',
		value: function _setEventListeners(reference, events, options) {
			var _this6 = this;

			var directEvents = [];
			var oppositeEvents = [];

			events.forEach(function (event) {
				switch (event) {
					case 'hover':
						directEvents.push('mouseenter');
						oppositeEvents.push('mouseleave');
						if (_this6.options.hideOnTargetClick) oppositeEvents.push('click');
						break;
					case 'focus':
						directEvents.push('focus');
						oppositeEvents.push('blur');
						if (_this6.options.hideOnTargetClick) oppositeEvents.push('click');
						break;
					case 'click':
						directEvents.push('click');
						oppositeEvents.push('click');
						break;
				}
			});

			// schedule show tooltip
			directEvents.forEach(function (event) {
				var func = function func(evt) {
					if (_this6._isOpen === true) {
						return;
					}
					evt.usedByTooltip = true;
					_this6._scheduleShow(reference, options.delay, options, evt);
				};
				_this6._events.push({ event: event, func: func });
				reference.addEventListener(event, func);
			});

			// schedule hide tooltip
			oppositeEvents.forEach(function (event) {
				var func = function func(evt) {
					if (evt.usedByTooltip === true) {
						return;
					}
					_this6._scheduleHide(reference, options.delay, options, evt);
				};
				_this6._events.push({ event: event, func: func });
				reference.addEventListener(event, func);
			});
		}
	}, {
		key: '_onDocumentTouch',
		value: function _onDocumentTouch(event) {
			if (this._enableDocumentTouch) {
				this._scheduleHide(this.reference, this.options.delay, this.options, event);
			}
		}
	}, {
		key: '_scheduleShow',
		value: function _scheduleShow(reference, delay, options /*, evt */) {
			var _this7 = this;

			// defaults to 0
			var computedDelay = delay && delay.show || delay || 0;
			clearTimeout(this._scheduleTimer);
			this._scheduleTimer = window.setTimeout(function () {
				return _this7._show(reference, options);
			}, computedDelay);
		}
	}, {
		key: '_scheduleHide',
		value: function _scheduleHide(reference, delay, options, evt) {
			var _this8 = this;

			// defaults to 0
			var computedDelay = delay && delay.hide || delay || 0;
			clearTimeout(this._scheduleTimer);
			this._scheduleTimer = window.setTimeout(function () {
				if (_this8._isOpen === false) {
					return;
				}
				if (!document.body.contains(_this8._tooltipNode)) {
					return;
				}

				// if we are hiding because of a mouseleave, we must check that the new
				// reference isn't the tooltip, because in this case we don't want to hide it
				if (evt.type === 'mouseleave') {
					var isSet = _this8._setTooltipNodeEvent(evt, reference, delay, options);

					// if we set the new event, don't hide the tooltip yet
					// the new event will take care to hide it if necessary
					if (isSet) {
						return;
					}
				}

				_this8._hide(reference, options);
			}, computedDelay);
		}
	}]);
	return Tooltip;
}();

// Hide tooltips on touch devices


var _initialiseProps = function _initialiseProps() {
	var _this9 = this;

	this.show = function () {
		_this9._show(_this9.reference, _this9.options);
	};

	this.hide = function () {
		_this9._hide();
	};

	this.dispose = function () {
		_this9._dispose();
	};

	this.toggle = function () {
		if (_this9._isOpen) {
			return _this9.hide();
		} else {
			return _this9.show();
		}
	};

	this._events = [];

	this._setTooltipNodeEvent = function (evt, reference, delay, options) {
		var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

		var callback = function callback(evt2) {
			var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;

			// Remove event listener after call
			_this9._tooltipNode.removeEventListener(evt.type, callback);

			// If the new reference is not the reference element
			if (!reference.contains(relatedreference2)) {
				// Schedule to hide tooltip
				_this9._scheduleHide(reference, options.delay, options, evt2);
			}
		};

		if (_this9._tooltipNode.contains(relatedreference)) {
			// listen to mouseleave on the tooltip element to be able to hide the tooltip
			_this9._tooltipNode.addEventListener(evt.type, callback);
			return true;
		}

		return false;
	};
};

if (typeof document !== 'undefined') {
	document.addEventListener('touchstart', function (event) {
		for (var i = 0; i < openTooltips.length; i++) {
			openTooltips[i]._onDocumentTouch(event);
		}
	}, supportsPassive ? {
		passive: true,
		capture: true
	} : true);
}

/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

var state = {
	enabled: true
};

var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

var defaultOptions = {
	// Default tooltip placement relative to target element
	defaultPlacement: 'top',
	// Default CSS classes applied to the tooltip element
	defaultClass: 'vue-tooltip-theme',
	// Default CSS classes applied to the target element of the tooltip
	defaultTargetClass: 'has-tooltip',
	// Is the content HTML by default?
	defaultHtml: true,
	// Default HTML template of the tooltip element
	// It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
	// Change if the classes conflict with other libraries (for example bootstrap)
	defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	// Selector used to get the arrow element in the tooltip template
	defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
	// Selector used to get the inner content element in the tooltip template
	defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
	// Delay (ms)
	defaultDelay: 0,
	// Default events that trigger the tooltip
	defaultTrigger: 'hover focus',
	// Default position offset (px)
	defaultOffset: 0,
	// Default container where the tooltip will be appended
	defaultContainer: 'body',
	defaultBoundariesElement: undefined,
	defaultPopperOptions: {},
	// Class added when content is loading
	defaultLoadingClass: 'tooltip-loading',
	// Displayed when tooltip content is loading
	defaultLoadingContent: '...',
	// Hide on mouseover tooltip
	autoHide: true,
	// Close tooltip on click on tooltip target?
	defaultHideOnTargetClick: true,
	// Auto destroy tooltip DOM nodes (ms)
	disposeTimeout: 5000,
	// Options for popover
	popover: {
		defaultPlacement: 'bottom',
		// Use the `popoverClass` prop for theming
		defaultClass: 'vue-popover-theme',
		// Base class (change if conflicts with other libraries)
		defaultBaseClass: 'tooltip popover',
		// Wrapper class (contains arrow and inner)
		defaultWrapperClass: 'wrapper',
		// Inner content class
		defaultInnerClass: 'tooltip-inner popover-inner',
		// Arrow class
		defaultArrowClass: 'tooltip-arrow popover-arrow',
		defaultDelay: 0,
		defaultTrigger: 'click',
		defaultOffset: 0,
		defaultContainer: 'body',
		defaultBoundariesElement: undefined,
		defaultPopperOptions: {},
		// Hides if clicked outside of popover
		defaultAutoHide: true,
		// Update popper on content resize
		defaultHandleResize: true
	}
};

function getOptions(options) {
	var result = {
		placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
		delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
		html: typeof options.html !== 'undefined' ? options.html : directive.options.defaultHtml,
		template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
		arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
		innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
		trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
		offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
		container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
		boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
		autoHide: typeof options.autoHide !== 'undefined' ? options.autoHide : directive.options.autoHide,
		hideOnTargetClick: typeof options.hideOnTargetClick !== 'undefined' ? options.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
		loadingClass: typeof options.loadingClass !== 'undefined' ? options.loadingClass : directive.options.defaultLoadingClass,
		loadingContent: typeof options.loadingContent !== 'undefined' ? options.loadingContent : directive.options.defaultLoadingContent,
		popperOptions: _extends$1({}, typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions)
	};

	if (result.offset) {
		var typeofOffset = _typeof(result.offset);
		var offset = result.offset;

		// One value -> switch
		if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
			offset = '0, ' + offset;
		}

		if (!result.popperOptions.modifiers) {
			result.popperOptions.modifiers = {};
		}
		result.popperOptions.modifiers.offset = {
			offset: offset
		};
	}

	if (result.trigger && result.trigger.indexOf('click') !== -1) {
		result.hideOnTargetClick = false;
	}

	return result;
}

function getPlacement(value, modifiers) {
	var placement = value.placement;
	for (var i = 0; i < positions.length; i++) {
		var pos = positions[i];
		if (modifiers[pos]) {
			placement = pos;
		}
	}
	return placement;
}

function getContent(value) {
	var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (type === 'string') {
		return value;
	} else if (value && type === 'object') {
		return value.content;
	} else {
		return false;
	}
}

function createTooltip(el, value) {
	var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var content = getContent(value);
	var classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass;
	var opts = _extends$1({
		title: content
	}, getOptions(_extends$1({}, value, {
		placement: getPlacement(value, modifiers)
	})));
	var tooltip = el._tooltip = new Tooltip(el, opts);
	tooltip.setClasses(classes);
	tooltip._vueEl = el;

	// Class on target
	var targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass;
	el._tooltipTargetClasses = targetClasses;
	addClasses(el, targetClasses);

	return tooltip;
}

function destroyTooltip(el) {
	if (el._tooltip) {
		el._tooltip.dispose();
		delete el._tooltip;
		delete el._tooltipOldShow;
	}

	if (el._tooltipTargetClasses) {
		removeClasses(el, el._tooltipTargetClasses);
		delete el._tooltipTargetClasses;
	}
}

function bind(el, _ref) {
	var value = _ref.value,
	    oldValue = _ref.oldValue,
	    modifiers = _ref.modifiers;

	var content = getContent(value);
	if (!content || !state.enabled) {
		destroyTooltip(el);
	} else {
		var tooltip = void 0;
		if (el._tooltip) {
			tooltip = el._tooltip;
			// Content
			tooltip.setContent(content);
			// Options
			tooltip.setOptions(_extends$1({}, value, {
				placement: getPlacement(value, modifiers)
			}));
		} else {
			tooltip = createTooltip(el, value, modifiers);
		}

		// Manual show
		if (typeof value.show !== 'undefined' && value.show !== el._tooltipOldShow) {
			el._tooltipOldShow = value.show;
			value.show ? tooltip.show() : tooltip.hide();
		}
	}
}

var directive = {
	options: defaultOptions,
	bind: bind,
	update: bind,
	unbind: function unbind(el) {
		destroyTooltip(el);
	}
};

function addListeners(el) {
	el.addEventListener('click', onClick);
	el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
		passive: true
	} : false);
}

function removeListeners(el) {
	el.removeEventListener('click', onClick);
	el.removeEventListener('touchstart', onTouchStart);
	el.removeEventListener('touchend', onTouchEnd);
	el.removeEventListener('touchcancel', onTouchCancel);
}

function onClick(event) {
	var el = event.currentTarget;
	event.closePopover = !el.$_vclosepopover_touch;
	event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}

function onTouchStart(event) {
	if (event.changedTouches.length === 1) {
		var el = event.currentTarget;
		el.$_vclosepopover_touch = true;
		var touch = event.changedTouches[0];
		el.$_vclosepopover_touchPoint = touch;
		el.addEventListener('touchend', onTouchEnd);
		el.addEventListener('touchcancel', onTouchCancel);
	}
}

function onTouchEnd(event) {
	var el = event.currentTarget;
	el.$_vclosepopover_touch = false;
	if (event.changedTouches.length === 1) {
		var touch = event.changedTouches[0];
		var firstTouch = el.$_vclosepopover_touchPoint;
		event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
		event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
	}
}

function onTouchCancel(event) {
	var el = event.currentTarget;
	el.$_vclosepopover_touch = false;
}

var vclosepopover = {
	bind: function bind(el, _ref) {
		var value = _ref.value,
		    modifiers = _ref.modifiers;

		el.$_closePopoverModifiers = modifiers;
		if (typeof value === 'undefined' || value) {
			addListeners(el);
		}
	},
	update: function update(el, _ref2) {
		var value = _ref2.value,
		    oldValue = _ref2.oldValue,
		    modifiers = _ref2.modifiers;

		el.$_closePopoverModifiers = modifiers;
		if (value !== oldValue) {
			if (typeof value === 'undefined' || value) {
				addListeners(el);
			} else {
				removeListeners(el);
			}
		}
	},
	unbind: function unbind(el) {
		removeListeners(el);
	}
};

function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return -1;
}

var isIE$1 = void 0;

function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE$1 = getInternetExplorerVersion() !== -1;
	}
}

var ResizeObserver = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
	name: 'resize-observer',

	methods: {
		notify: function notify() {
			this.$emit('notify');
		},
		addResizeHandlers: function addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.notify);
			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
				this.notify();
			}
		},
		removeResizeHandlers: function removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE$1 && this._resizeObject.contentDocument) {
					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.notify);
				}
				delete this._resizeObject.onload;
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		initCompat();
		this.$nextTick(function () {
			_this._w = _this.$el.offsetWidth;
			_this._h = _this.$el.offsetHeight;
		});
		var object = document.createElement('object');
		this._resizeObject = object;
		object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
		object.setAttribute('aria-hidden', 'true');
		object.setAttribute('tabindex', -1);
		object.onload = this.addResizeHandlers;
		object.type = 'text/html';
		if (isIE$1) {
			this.$el.appendChild(object);
		}
		object.data = 'about:blank';
		if (!isIE$1) {
			this.$el.appendChild(object);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeResizeHandlers();
	}
};

// Install the components
function install$1(Vue) {
	Vue.component('resize-observer', ResizeObserver);
	/* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
var plugin$2 = {
	// eslint-disable-next-line no-undef
	version: "0.4.4",
	install: install$1
};

// Auto-install
var GlobalVue$1 = null;
if (typeof window !== 'undefined') {
	GlobalVue$1 = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue$1 = global.Vue;
}
if (GlobalVue$1) {
	GlobalVue$1.use(plugin$2);
}

function getDefault(key) {
	var value = directive.options.popover[key];
	if (typeof value === 'undefined') {
		return directive.options[key];
	}
	return value;
}

var isIOS = false;
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
	isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

var openPopovers = [];

var Element = function Element() {};
if (typeof window !== 'undefined') {
	Element = window.Element;
}

var Popover = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "v-popover", class: _vm.cssClass }, [_c('span', { ref: "trigger", staticClass: "trigger", staticStyle: { "display": "inline-block" }, attrs: { "aria-describedby": _vm.popoverId, "tabindex": _vm.trigger.indexOf('focus') !== -1 ? 0 : -1 } }, [_vm._t("default")], 2), _vm._v(" "), _c('div', { ref: "popover", class: [_vm.popoverBaseClass, _vm.popoverClass, _vm.cssClass], style: {
				visibility: _vm.isOpen ? 'visible' : 'hidden'
			}, attrs: { "id": _vm.popoverId, "aria-hidden": _vm.isOpen ? 'false' : 'true' } }, [_c('div', { class: _vm.popoverWrapperClass }, [_c('div', { ref: "inner", class: _vm.popoverInnerClass, staticStyle: { "position": "relative" } }, [_c('div', [_vm._t("popover")], 2), _vm._v(" "), _vm.handleResize ? _c('ResizeObserver', { on: { "notify": _vm.$_handleResize } }) : _vm._e()], 1), _vm._v(" "), _c('div', { ref: "arrow", class: _vm.popoverArrowClass })])])]);
	}, staticRenderFns: [],
	name: 'VPopover',

	components: {
		ResizeObserver: ResizeObserver
	},

	props: {
		open: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		placement: {
			type: String,
			default: function _default() {
				return getDefault('defaultPlacement');
			}
		},
		delay: {
			type: [String, Number, Object],
			default: function _default() {
				return getDefault('defaultDelay');
			}
		},
		offset: {
			type: [String, Number],
			default: function _default() {
				return getDefault('defaultOffset');
			}
		},
		trigger: {
			type: String,
			default: function _default() {
				return getDefault('defaultTrigger');
			}
		},
		container: {
			type: [String, Object, Element, Boolean],
			default: function _default() {
				return getDefault('defaultContainer');
			}
		},
		boundariesElement: {
			type: [String, Element],
			default: function _default() {
				return getDefault('defaultBoundariesElement');
			}
		},
		popperOptions: {
			type: Object,
			default: function _default() {
				return getDefault('defaultPopperOptions');
			}
		},
		popoverClass: {
			type: [String, Array],
			default: function _default() {
				return getDefault('defaultClass');
			}
		},
		popoverBaseClass: {
			type: [String, Array],
			default: function _default() {
				return directive.options.popover.defaultBaseClass;
			}
		},
		popoverInnerClass: {
			type: [String, Array],
			default: function _default() {
				return directive.options.popover.defaultInnerClass;
			}
		},
		popoverWrapperClass: {
			type: [String, Array],
			default: function _default() {
				return directive.options.popover.defaultWrapperClass;
			}
		},
		popoverArrowClass: {
			type: [String, Array],
			default: function _default() {
				return directive.options.popover.defaultArrowClass;
			}
		},
		autoHide: {
			type: Boolean,
			default: function _default() {
				return directive.options.popover.defaultAutoHide;
			}
		},
		handleResize: {
			type: Boolean,
			default: function _default() {
				return directive.options.popover.defaultHandleResize;
			}
		},
		openGroup: {
			type: String,
			default: null
		}
	},

	data: function data() {
		return {
			isOpen: false,
			id: Math.random().toString(36).substr(2, 10)
		};
	},


	computed: {
		cssClass: function cssClass() {
			return {
				'open': this.isOpen
			};
		},
		popoverId: function popoverId() {
			return 'popover_' + this.id;
		}
	},

	watch: {
		open: function open(val) {
			if (val) {
				this.show();
			} else {
				this.hide();
			}
		},
		disabled: function disabled(val, oldVal) {
			if (val !== oldVal) {
				if (val) {
					this.hide();
				} else if (this.open) {
					this.show();
				}
			}
		},
		container: function container(val) {
			if (this.isOpen && this.popperInstance) {
				var popoverNode = this.$refs.popover;
				var reference = this.$refs.trigger;

				var container = this.$_findContainer(this.container, reference);
				if (!container) {
					console.warn('No container for popover', this);
					return;
				}

				container.appendChild(popoverNode);
				this.popperInstance.scheduleUpdate();
			}
		},
		trigger: function trigger(val) {
			this.$_removeEventListeners();
			this.$_addEventListeners();
		},
		placement: function placement(val) {
			var _this = this;

			this.$_updatePopper(function () {
				_this.popperInstance.options.placement = val;
			});
		},


		offset: '$_restartPopper',

		boundariesElement: '$_restartPopper',

		popperOptions: {
			handler: '$_restartPopper',
			deep: true
		}
	},

	created: function created() {
		this.$_isDisposed = false;
		this.$_mounted = false;
		this.$_events = [];
		this.$_preventOpen = false;
	},
	mounted: function mounted() {
		var popoverNode = this.$refs.popover;
		popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);

		this.$_init();

		if (this.open) {
			this.show();
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.dispose();
	},


	methods: {
		show: function show() {
			var _this2 = this;

			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    event = _ref.event,
			    _ref$skipDelay = _ref.skipDelay,
			    skipDelay = _ref$skipDelay === undefined ? false : _ref$skipDelay,
			    _ref$force = _ref.force,
			    force = _ref$force === undefined ? false : _ref$force;

			if (force || !this.disabled) {
				this.$_scheduleShow(event);
				this.$emit('show');
			}
			this.$emit('update:open', true);
			this.$_beingShowed = true;
			requestAnimationFrame(function () {
				_this2.$_beingShowed = false;
			});
		},
		hide: function hide() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    event = _ref2.event,
			    _ref2$skipDelay = _ref2.skipDelay;

			this.$_scheduleHide(event);

			this.$emit('hide');
			this.$emit('update:open', false);
		},
		dispose: function dispose() {
			this.$_isDisposed = true;
			this.$_removeEventListeners();
			this.hide({ skipDelay: true });
			if (this.popperInstance) {
				this.popperInstance.destroy();

				// destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
				if (!this.popperInstance.options.removeOnDestroy) {
					var popoverNode = this.$refs.popover;
					popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
				}
			}
			this.$_mounted = false;
			this.popperInstance = null;
			this.isOpen = false;

			this.$emit('dispose');
		},
		$_init: function $_init() {
			if (this.trigger.indexOf('manual') === -1) {
				this.$_addEventListeners();
			}
		},
		$_show: function $_show() {
			var _this3 = this;

			var reference = this.$refs.trigger;
			var popoverNode = this.$refs.popover;

			clearTimeout(this.$_disposeTimer);

			// Already open
			if (this.isOpen) {
				return;
			}

			// Popper is already initialized
			if (this.popperInstance) {
				this.isOpen = true;
				this.popperInstance.enableEventListeners();
				this.popperInstance.scheduleUpdate();
			}

			if (!this.$_mounted) {
				var container = this.$_findContainer(this.container, reference);
				if (!container) {
					console.warn('No container for popover', this);
					return;
				}
				container.appendChild(popoverNode);
				this.$_mounted = true;
			}

			if (!this.popperInstance) {
				var popperOptions = _extends$1({}, this.popperOptions, {
					placement: this.placement
				});

				popperOptions.modifiers = _extends$1({}, popperOptions.modifiers, {
					arrow: _extends$1({}, popperOptions.modifiers && popperOptions.modifiers.arrow, {
						element: this.$refs.arrow
					})
				});

				if (this.offset) {
					var offset = this.$_getOffset();

					popperOptions.modifiers.offset = _extends$1({}, popperOptions.modifiers && popperOptions.modifiers.offset, {
						offset: offset
					});
				}

				if (this.boundariesElement) {
					popperOptions.modifiers.preventOverflow = _extends$1({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow, {
						boundariesElement: this.boundariesElement
					});
				}

				this.popperInstance = new Popper(reference, popoverNode, popperOptions);

				// Fix position
				requestAnimationFrame(function () {
					if (!_this3.$_isDisposed && _this3.popperInstance) {
						_this3.popperInstance.scheduleUpdate();

						// Show the tooltip
						requestAnimationFrame(function () {
							if (!_this3.$_isDisposed) {
								_this3.isOpen = true;
							} else {
								_this3.dispose();
							}
						});
					} else {
						_this3.dispose();
					}
				});
			}

			var openGroup = this.openGroup;
			if (openGroup) {
				var popover = void 0;
				for (var i = 0; i < openPopovers.length; i++) {
					popover = openPopovers[i];
					if (popover.openGroup !== openGroup) {
						popover.hide();
						popover.$emit('close-group');
					}
				}
			}

			openPopovers.push(this);

			this.$emit('apply-show');
		},
		$_hide: function $_hide() {
			var _this4 = this;

			// Already hidden
			if (!this.isOpen) {
				return;
			}

			var index = openPopovers.indexOf(this);
			if (index !== -1) {
				openPopovers.splice(index, 1);
			}

			this.isOpen = false;
			if (this.popperInstance) {
				this.popperInstance.disableEventListeners();
			}

			clearTimeout(this.$_disposeTimer);
			var disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout;
			if (disposeTime !== null) {
				this.$_disposeTimer = setTimeout(function () {
					var popoverNode = _this4.$refs.popover;
					if (popoverNode) {
						// Don't remove popper instance, just the HTML element
						popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
						_this4.$_mounted = false;
					}
				}, disposeTime);
			}

			this.$emit('apply-hide');
		},
		$_findContainer: function $_findContainer(container, reference) {
			// if container is a query, get the relative element
			if (typeof container === 'string') {
				container = window.document.querySelector(container);
			} else if (container === false) {
				// if container is `false`, set it to reference parent
				container = reference.parentNode;
			}
			return container;
		},
		$_getOffset: function $_getOffset() {
			var typeofOffset = _typeof(this.offset);
			var offset = this.offset;

			// One value -> switch
			if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
				offset = '0, ' + offset;
			}

			return offset;
		},
		$_addEventListeners: function $_addEventListeners() {
			var _this5 = this;

			var reference = this.$refs.trigger;
			var directEvents = [];
			var oppositeEvents = [];

			var events = typeof this.trigger === 'string' ? this.trigger.split(' ').filter(function (trigger) {
				return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
			}) : [];

			events.forEach(function (event) {
				switch (event) {
					case 'hover':
						directEvents.push('mouseenter');
						oppositeEvents.push('mouseleave');
						break;
					case 'focus':
						directEvents.push('focus');
						oppositeEvents.push('blur');
						break;
					case 'click':
						directEvents.push('click');
						oppositeEvents.push('click');
						break;
				}
			});

			// schedule show tooltip
			directEvents.forEach(function (event) {
				var func = function func(event) {
					if (_this5.isOpen) {
						return;
					}
					event.usedByTooltip = true;
					!_this5.$_preventOpen && _this5.show({ event: event });
				};
				_this5.$_events.push({ event: event, func: func });
				reference.addEventListener(event, func);
			});

			// schedule hide tooltip
			oppositeEvents.forEach(function (event) {
				var func = function func(event) {
					if (event.usedByTooltip) {
						return;
					}
					_this5.hide({ event: event });
				};
				_this5.$_events.push({ event: event, func: func });
				reference.addEventListener(event, func);
			});
		},
		$_scheduleShow: function $_scheduleShow() {
			var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			clearTimeout(this.$_scheduleTimer);
			if (skipDelay) {
				this.$_show();
			} else {
				// defaults to 0
				var computedDelay = parseInt(this.delay && this.delay.show || this.delay || 0);
				this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay);
			}
		},
		$_scheduleHide: function $_scheduleHide() {
			var _this6 = this;

			var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			clearTimeout(this.$_scheduleTimer);
			if (skipDelay) {
				this.$_hide();
			} else {
				// defaults to 0
				var computedDelay = parseInt(this.delay && this.delay.hide || this.delay || 0);
				this.$_scheduleTimer = setTimeout(function () {
					if (!_this6.isOpen) {
						return;
					}

					// if we are hiding because of a mouseleave, we must check that the new
					// reference isn't the tooltip, because in this case we don't want to hide it
					if (event && event.type === 'mouseleave') {
						var isSet = _this6.$_setTooltipNodeEvent(event);

						// if we set the new event, don't hide the tooltip yet
						// the new event will take care to hide it if necessary
						if (isSet) {
							return;
						}
					}

					_this6.$_hide();
				}, computedDelay);
			}
		},
		$_setTooltipNodeEvent: function $_setTooltipNodeEvent(event) {
			var _this7 = this;

			var reference = this.$refs.trigger;
			var popoverNode = this.$refs.popover;

			var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;

			var callback = function callback(event2) {
				var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget;

				// Remove event listener after call
				popoverNode.removeEventListener(event.type, callback);

				// If the new reference is not the reference element
				if (!reference.contains(relatedreference2)) {
					// Schedule to hide tooltip
					_this7.hide({ event: event2 });
				}
			};

			if (popoverNode.contains(relatedreference)) {
				// listen to mouseleave on the tooltip element to be able to hide the tooltip
				popoverNode.addEventListener(event.type, callback);
				return true;
			}

			return false;
		},
		$_removeEventListeners: function $_removeEventListeners() {
			var reference = this.$refs.trigger;
			this.$_events.forEach(function (_ref3) {
				var func = _ref3.func,
				    event = _ref3.event;

				reference.removeEventListener(event, func);
			});
			this.$_events = [];
		},
		$_updatePopper: function $_updatePopper(cb) {
			if (this.popperInstance) {
				cb();
				if (this.isOpen) this.popperInstance.scheduleUpdate();
			}
		},
		$_restartPopper: function $_restartPopper() {
			if (this.popperInstance) {
				var isOpen = this.isOpen;
				this.dispose();
				this.$_isDisposed = false;
				this.$_init();
				if (isOpen) {
					this.show({ skipDelay: true, force: true });
				}
			}
		},
		$_handleGlobalClose: function $_handleGlobalClose(event) {
			var _this8 = this;

			var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if (this.$_beingShowed) return;

			this.hide({ event: event });

			if (event.closePopover) {
				this.$emit('close-directive');
			} else {
				this.$emit('auto-hide');
			}

			if (touch) {
				this.$_preventOpen = true;
				setTimeout(function () {
					_this8.$_preventOpen = false;
				}, 300);
			}
		},
		$_handleResize: function $_handleResize() {
			if (this.isOpen && this.popperInstance) {
				this.popperInstance.scheduleUpdate();
				this.$emit('resize');
			}
		}
	}
};

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
	if (isIOS) {
		document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
			passive: true,
			capture: true
		} : true);
	} else {
		window.addEventListener('click', handleGlobalClick, true);
	}
}

function handleGlobalClick(event) {
	handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
	handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
	var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	// Delay so that close directive has time to set values
	requestAnimationFrame(function () {
		var popover = void 0;
		for (var i = 0; i < openPopovers.length; i++) {
			popover = openPopovers[i];
			if (popover.$refs.popover) {
				var contains = popover.$refs.popover.contains(event.target);
				if (event.closeAllPopover || event.closePopover && contains || popover.autoHide && !contains) {
					popover.$_handleGlobalClose(event, touch);
				}
			}
		}
	});
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_merge = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;
});

function install(Vue) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (install.installed) return;
	install.installed = true;

	var finalOptions = {};
	lodash_merge(finalOptions, defaultOptions, options);

	plugin.options = finalOptions;
	directive.options = finalOptions;

	Vue.directive('tooltip', directive);
	Vue.directive('close-popover', vclosepopover);
	Vue.component('v-popover', Popover);
}

var VTooltip = directive;
var VClosePopover = vclosepopover;
var VPopover = Popover;

var plugin = {
	install: install,

	get enabled() {
		return state.enabled;
	},

	set enabled(value) {
		state.enabled = value;
	}
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}


/* harmony default export */ __webpack_exports__["a"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-focus/dist/vue-focus.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.1.0';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

var focus = {
  inserted: function(el, binding) {
    if (binding.value) el.focus();
    else el.blur();
  },

  componentUpdated: function(el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return;
      }
    }

    if (binding.value) el.focus();
    else el.blur();
  },
};

var mixin = {
  directives: {
    focus: focus,
  },
};

exports.version = version;
exports.focus = focus;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ((function (x) { return x.default || x })(__webpack_require__("./node_modules/vue2-google-maps/dist/components/autocompleteImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ((function (x) { return x.default || x })(__webpack_require__("./node_modules/vue2-google-maps/dist/components/infoWindowImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ((function (x) { return x.default || x })(__webpack_require__("./node_modules/vue2-google-maps/dist/components/mapImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ((function (x) { return x.default || x })(__webpack_require__("./node_modules/vue2-google-maps/dist/components/streetViewPanoramaImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "input",
    _vm._g(_vm._b({ ref: "input" }, "input", _vm.$attrs, false), _vm.$listeners)
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("div", { ref: "flyaway" }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-map-container" },
    [
      _c("div", { ref: "vue-map", staticClass: "vue-map" }),
      _vm._v(" "),
      _c("div", { staticClass: "vue-map-hidden" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm._t("visible")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", [
    _c("span", { domProps: { textContent: _vm._s(_vm.label) } }),
    _vm._v(" "),
    _c("input", {
      ref: "input",
      class: _vm.className,
      attrs: { type: "text", placeholder: _vm.placeholder }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-street-view-pano-container" },
    [
      _c("div", {
        ref: "vue-street-view-pano",
        staticClass: "vue-street-view-pano"
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AJAX-List.vue?vue&type=template&id=0d7862c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: _vm.closeList,
          expression: "closeList"
        }
      ],
      staticClass: "alg-ajax-list"
    },
    [
      _c("div", { staticClass: "control has-icon has-icon-right" }, [
        _c("div", { staticClass: "alg-datalist-container" }, [
          _c("div", {
            ref: "list",
            staticClass: "input single-line",
            attrs: {
              id: _vm.id,
              type: "text",
              autocomplete: "off",
              rows: "1",
              placeholder: _vm.placeholder,
              disabled: _vm.disabled
            },
            domProps: { innerHTML: _vm._s(_vm.value.text) },
            on: {
              input: function($event) {
                _vm.onInput($event.target.textContent)
              },
              keyup: function($event) {
                _vm.onKeyUp($event.keyCode)
              },
              keydown: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                _vm.onEnter($event)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: _vm.name },
            domProps: { value: _vm.value.text }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.showList &&
                    _vm.options.length > 0 &&
                    _vm.value.text.length > 0,
                  expression:
                    "showList && options.length > 0 && value.text.length > 0"
                }
              ],
              staticClass: "box alg-datalist-dropdown"
            },
            [
              _c(
                "ul",
                { staticStyle: { "white-space": "nowrap" } },
                _vm._l(_vm.options, function(option, index) {
                  return _c("li", [
                    _c("a", {
                      class: { "is-highlighted": _vm.activeItem(index) },
                      domProps: { innerHTML: _vm._s(option.name) },
                      on: {
                        click: function($event) {
                          _vm.selectItem(option.name)
                        },
                        mouseover: function($event) {
                          _vm.onHover(option.name)
                        }
                      }
                    })
                  ])
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showCheck,
                  expression: "showCheck"
                }
              ],
              staticClass: "fa fa-check",
              staticStyle: { color: "green" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_id" },
        domProps: { value: _vm.value.id }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_extra" },
        domProps: { value: _vm.extra }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Bookmark.vue?vue&type=template&id=5dd2936d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _c(
        "a",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.bookmarkable,
              expression: "bookmarkable"
            }
          ],
          on: { click: _vm.openModal }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.bookmarkable,
              expression: "!bookmarkable"
            }
          ],
          on: { click: _vm.unBookmark }
        },
        [
          _c("span", { staticClass: "icon" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.loading,
                  expression: "!loading"
                }
              ],
              staticClass: "fas fa-bookmark",
              attrs: { title: "Remove from bookmarks" }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "alg-modal",
        { ref: "modal" },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("\n\t\t\t\tBookmark\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("em", [_vm._v("Add a comment if desired:")]),
          _vm._v(" "),
          _c("wysiwyg", {
            ref: "textarea",
            attrs: { name: _vm.comment },
            model: {
              value: _vm.comment,
              callback: function($$v) {
                _vm.comment = $$v
              },
              expression: "comment"
            }
          }),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
            _c(
              "button",
              {
                staticClass: "button is-success",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [_vm._v("Bookmark")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "icon" }, [
              _c("i", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticClass: "fa fa-spinner fa-pulse fa-3x fa-fw"
              })
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "far fa-bookmark", attrs: { title: "Bookmark" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Button.vue?vue&type=template&id=86da59ae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alg-button" }, [
    _c(
      "a",
      {
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.onClick($event)
          }
        }
      },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c("form", { ref: "form", attrs: { method: "POST", action: _vm.action } }, [
      _c("input", {
        attrs: { type: "hidden", name: "_token" },
        domProps: { value: _vm.token }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "_method" },
        domProps: { value: _vm.method }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DataList.vue?vue&type=template&id=ee5496c2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: _vm.closeList,
          expression: "closeList"
        }
      ],
      staticClass: "alg-datalist alg-datalist-container"
    },
    [
      _c("div", { staticClass: "field has-addons" }, [
        _c("span", { staticClass: "control is-expanded" }, [
          _c("input", {
            directives: [
              {
                name: "focus",
                rawName: "v-focus",
                value: _vm.focused,
                expression: "focused"
              }
            ],
            ref: "textInput",
            staticClass: "input",
            class: { "is-danger": _vm.hasErrors },
            attrs: {
              type: "text",
              name: _vm.name,
              id: _vm.id,
              disabled: _vm.disabled,
              autocomplete: "new-password",
              placeholder: _vm.placeholder,
              autofocus: _vm.autofocus,
              required: _vm.required
            },
            domProps: { value: _vm.value.text },
            on: {
              keyup: function($event) {
                _vm.onKeyUp($event.keyCode)
              },
              keydown: function($event) {
                _vm.onKeyDown($event)
              },
              input: function($event) {
                _vm.update($event.target.value)
              },
              focus: _vm.onFocus,
              blur: _vm.onBlur
            }
          })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "control" }, [
          _c(
            "a",
            {
              staticClass: "button",
              class: { "is-danger": _vm.hasErrors },
              attrs: { disabled: _vm.disabled },
              on: { click: _vm.handleButtonClicked }
            },
            [_vm._m(0)]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showList,
              expression: "showList"
            }
          ],
          staticClass: "box alg-datalist-dropdown"
        },
        [
          _c(
            "ul",
            _vm._l(_vm.options, function(option, index) {
              return _c("li", { ref: "option-" + index, refInFor: true }, [
                _c(
                  "a",
                  {
                    class: { "is-highlighted": _vm.activeItem(index) },
                    on: {
                      click: function($event) {
                        _vm.selectItem(option.name)
                      },
                      mouseover: function($event) {
                        _vm.handleHover(option.name)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\t" + _vm._s(option.name) + "\n\t\t\t\t")]
                )
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: _vm.name + "_id" },
        domProps: { value: _vm.value.id }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-chevron-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Map.vue?vue&type=template&id=20909bf5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-field",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.addMode,
              expression: "addMode"
            }
          ]
        },
        [
          _c(
            "b-radio",
            {
              attrs: { "native-value": null },
              model: {
                value: _vm.addType,
                callback: function($$v) {
                  _vm.addType = $$v
                },
                expression: "addType"
              }
            },
            [_vm._v("None")]
          ),
          _vm._v(" "),
          _c(
            "b-radio",
            {
              attrs: { "native-value": "point" },
              model: {
                value: _vm.addType,
                callback: function($$v) {
                  _vm.addType = $$v
                },
                expression: "addType"
              }
            },
            [_vm._v("Point")]
          ),
          _vm._v(" "),
          _c(
            "b-radio",
            {
              attrs: { "native-value": "area" },
              model: {
                value: _vm.addType,
                callback: function($$v) {
                  _vm.addType = $$v
                },
                expression: "addType"
              }
            },
            [_vm._v("Area")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "gmap-map",
        {
          staticStyle: { width: "100%", height: "400px" },
          attrs: {
            center: _vm.center,
            zoom: _vm.zoom,
            options: { streetViewControl: false, mapTypeControl: false }
          },
          on: {
            dragend: function($event) {
              _vm.onRightClick($event)
            }
          }
        },
        [
          _vm._l(_vm.zones, function(zone) {
            return _c("gmap-polygon", {
              key: "polygon-" + zone.id,
              attrs: {
                path: zone.location.position,
                options: {
                  fillColor: "#" + zone.color,
                  strokeColor: "#" + zone.color
                },
                clickable: true
              },
              on: {
                click: function($event) {
                  _vm.onClickMarker(zone, "area", $event)
                }
              }
            })
          }),
          _vm._v(" "),
          _c("gmap-polygon", {
            attrs: {
              path: _vm.newZone.location.position,
              options: {
                visible: _vm.addType == "area",
                fillColor: "#" + _vm.newZone.color,
                strokeColor: "#" + _vm.newZone.color
              },
              editable: true,
              draggable: true
            },
            on: {
              path_changed: function($event) {
                _vm.updateEdited($event)
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.markerArray, function(marker, index) {
            return _c("gmap-marker", {
              key: "marker-" + marker.id,
              attrs: {
                position: marker.location.position,
                clickable: true,
                icon: _vm.getIcon(marker)
              },
              on: {
                click: function($event) {
                  _vm.onClickMarker(marker, "point")
                }
              }
            })
          }),
          _vm._v(" "),
          _c("gmap-marker", {
            attrs: {
              visible: _vm.addType == "point",
              position: _vm.newMarker.location.position,
              icon: _vm.getIcon(_vm.newMarker),
              draggable: true
            },
            on: {
              dragend: function($event) {
                _vm.onRightClick($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "gmap-info-window",
            {
              attrs: {
                opened: _vm.infoWindow.opened,
                position: _vm.infoWindow.position
              },
              on: {
                closeclick: function($event) {
                  _vm.infoWindow.opened = !_vm.infoWindow.opened
                }
              }
            },
            [
              _c("span", {
                domProps: { innerHTML: _vm._s(_vm.infoWindow.content) }
              })
            ]
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Notification.vue?vue&type=template&id=66002d22&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showNotification,
          expression: "showNotification"
        }
      ],
      class: "notification " + _vm.level
    },
    [
      _c("button", {
        staticClass: "delete",
        on: {
          click: function($event) {
            _vm.showNotification = false
          }
        }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=template&id=3ae5372e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.chars, function(charset) {
      return _c(
        "li",
        _vm._l(charset, function(char) {
          return _c(
            "a",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  _vm.insertCharacter(char)
                }
              }
            },
            [_vm._v("\n      " + _vm._s(char.symbol) + "\n    ")]
          )
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-resource/dist/vue-resource.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(1);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),

/***/ "./node_modules/vue-wysiwyg/dist/vueWysiwyg.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("vueWysiwyg",[],t):"object"==typeof exports?exports.vueWysiwyg=t():e.vueWysiwyg=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-wysiwyg/",n(n.s=18)}([function(e,t,n){"use strict";t.a=function(e,t,n,i,o,r,s,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var u,c="function"==typeof e?e.options:e;t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0);i&&(c.functional=!0);r&&(c._scopeId=r);s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:c}}},function(e,t,n){"use strict";var i=new function(){var e={listeners:{},on:function(t,n){void 0===e.listeners[t]&&(e.listeners[t]=[]),e.listeners[t].push(n)},emit:function(t){for(var n=arguments.length,i=Array(1<n?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];void 0!==e.listeners[t]&&e.listeners[t].forEach(function(e){return e.apply(i)})}};return e};i.options={image:{uploadURL:"None",dropzoneOptions:{}},hideModules:{},paragraphSeparator:"div",maxHeight:void 0,customModules:[]},i.utils={getHTMLOfSelection:function(){if(void 0!==window.getSelection){var e=window.getSelection();if(0<e.rangeCount){var t=e.getRangeAt(0).cloneContents(),n=document.createElement("div");return n.appendChild(t),n.innerHTML}}return""}},t.a=i},function(e,t,n){"use strict";t.__esModule=!0;var i,o=n(20),r=(i=o)&&i.__esModule?i:{default:i};t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(e,t,n){var i=n(9),o=n(10);e.exports=function(e){return i(o(e))}},function(e,t,n){var i=n(37);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,n){"use strict";var i=n(2),o=n.n(i),r=n(1),s=n(50),a=n.n(s),l=n(51),u=n(53),c=n.n(u),d=n(54),p=n.n(d),h=n(55),f=n.n(h),v=n(56),m=n.n(v),g=n(57),b=n.n(g),w=n(58),y=n.n(w),q=n(59),k=n(61),z=n(63),x=n.n(z),F=n(64),E=n.n(F),_=n(65),C=n.n(_),S=n(66),L=n(72),M=n(75),T=n.n(M),A=n(76),O=n.n(A),D=[c.a,p.a,f.a,O.a,m.a,b.a,y.a,O.a,q.a,k.a,x.a,E.a,C.a,O.a,S.a,L.a,O.a,T.a];t.a={model:{prop:"html",event:"html"},props:{html:{type:String,default:""},placeholder:{type:String,default:"Enter text..."},options:Object},components:{Btn:l.a},data:function(){return{selection:""}},computed:{mergedOptions:function(){return o()({},r.a.options,this.options)},modules:function(){var e=this,t=this.mergedOptions.iconOverrides;return D.filter(function(t){return void 0===e.mergedOptions.hideModules||!e.mergedOptions.hideModules[t.title]}).map(function(e){return void 0!==t&&void 0!==t[e.title]&&(e.icon=t[e.title]),e}).concat(this.mergedOptions.customModules)},btnsWithDashboards:function(){return this.modules?this.modules.filter(function(e){return e.render}):[]},innerHTML:{get:function(){return this.$refs.content.innerHTML},set:function(e){this.$refs.content.innerHTML!==e&&(this.$refs.content.innerHTML=e)}}},methods:{saveSelection:function(){if(void 0!==window.getSelection){if(this.selection=window.getSelection(),this.selection.getRangeAt&&this.selection.rangeCount)return this.selection.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},restoreSelection:function(e){e&&(void 0===window.getSelection?document.selection&&e.select&&e.select():(this.selection=window.getSelection(),this.selection.removeAllRanges(),this.selection.addRange(e)))},clearSelection:function(){this.selection=null;var e=window.getSelection();e&&(void 0!==e.empty&&e.empty(),void 0!==e.removeAllRanges&&e.removeAllRanges())},exec:function(e,t,n){!1!==n&&this.selection&&this.restoreSelection(this.selection),document.execCommand(e,!1,t||""),this.clearSelection(),this.$nextTick(this.emit)},onDocumentClick:function(e){for(var t,n=0;n<this.btnsWithDashboards.length;n++)(t=this.$refs["btn-"+this.btnsWithDashboards[n].title][0])&&t.showDashboard&&!t.$el.contains(e.target)&&t.closeDashboard()},emit:function(){this.$emit("html",this.$refs.content.innerHTML),this.$emit("change",this.$refs.content.innerHTML)},onInput:a()(function(){this.emit()},300),onFocus:function(){document.execCommand("defaultParagraphSeparator",!1,this.mergedOptions.paragraphSeparator)},onContentBlur:function(){this.selection=this.saveSelection()},syncHTML:function(){this.html!==this.$refs.content.innerHTML&&(this.innerHTML=this.html)}},mounted:function(){this.unwatch=this.$watch("html",this.syncHTML,{immediate:!0}),document.addEventListener("click",this.onDocumentClick),this.$refs.content.addEventListener("focus",this.onFocus),this.$refs.content.addEventListener("input",this.onInput),this.$refs.content.addEventListener("blur",this.onContentBlur,{capture:!0}),this.$refs.content.style.maxHeight=this.mergedOptions.maxHeight},beforeDestroy:function(){this.unwatch(),document.removeEventListener("click",this.onDocumentClick),this.$refs.content.removeEventListener("blur",this.onContentBlur),this.$refs.content.removeEventListener("input",this.onInput),this.$refs.content.removeEventListener("focus",this.onFocus)}}},function(e,t,n){"use strict";var i=n(1);t.a={props:["module","options"],data:function(){return{showDashboard:!1}},computed:{uid:function(){return this.$parent._uid}},methods:{closeDashboard:function(){this.showDashboard=!1},openDashboard:function(){this.showDashboard=!0},exec:function(){this.$parent.exec.apply(null,arguments)},onBtnClick:function(e){var t=this;if(e.preventDefault(),void 0!==this.module.action)this.exec.apply(null,this.module.action);else if(void 0!==this.module.customAction)this.module.customAction(i.a.utils).forEach(function(e){return t.exec.apply(null,e)});else if(!(void 0===this.module.render||this.$refs.dashboard&&this.$refs.dashboard.contains(e.target)))return this.showDashboard=!this.showDashboard,void i.a.emit(this.uid+"_"+(this.showDashboard?"show":"hide")+"_dashboard_"+this.module.title)}}}},function(e,t,n){"use strict";t.a={title:"headings",description:"Headings (h1-h6)",icon:'<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1682 1664q-44 0-132.5-3.5t-133.5-3.5q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4h-675q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5t-138.5-3.5q-43 0-128 3.5t-127 3.5q-23 0-35.5-21t-12.5-45q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57v-813q0-3 .5-26t0-36.5-1.5-38.5-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5t138.5 3.5q42 0 126.5-3.5t126.5-3.5q25 0 37.5 22t12.5 48q0 30-17 43.5t-38.5 14.5-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13-25.5-49.5q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z"/></svg>',methods:{insertHeading:function(e){this.$parent.closeDashboard(),this.$emit("exec","formatBlock",e.target.textContent)}}}},function(e,t,n){"use strict";var i=n(1);t.a={title:"link",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>',description:"Hyperlink",props:{uid:null},data:function(){return{url:"",title:""}},methods:{insertLink:function(){this.$emit("exec","insertHTML","<a href='"+this.url+"'>"+this.title+"</a>"),this.$parent.closeDashboard(),this.url="",this.title=""}},created:function(){var e=this;i.a.on(this.uid+"_show_dashboard_link",function(){e.$nextTick(function(){e.$refs.url.focus()})})}}},function(e,t,n){"use strict";var i=n(2),o=n.n(i),r=n(67),s=n.n(r),a=(n(1),n(70));n.n(a);t.a={title:"image",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>',description:"Insert Image",props:["options"],components:{Dropzone:s.a},computed:{uploadURL:function(){return this.options.image.uploadURL},dropzoneOptions:function(){return o()({},this.options.image.dropzoneOptions,{id:this._uid+"vwdropzone",url:this.uploadURL,autoProcessQueue:"None"!==this.uploadURL,dictDefaultMessage:'<i class="fa"><svg fill="#666" width="26" height="24" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 864q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zm640 288q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z"/></svg></i><br>Click here to upload...'})}},methods:{fileUploaded:function(e,t){t&&this.$emit("exec","insertHTML","<img src="+t+">")},fileAdded:function(e){var t=this;if(!e||"None"===this.uploadURL){var n=new FileReader;n.addEventListener("load",function(){t.$emit("exec","insertHTML","<img src="+n.result+">")},!1),n.readAsDataURL(e)}}}}},function(e,t,n){"use strict";t.a={title:"table",description:"Insert Table",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>',data:function(){return{rows:2,cols:2}},methods:{insertTable:function(){var e=("<tr>"+"<td></td>".repeat(this.cols)+"</tr>").repeat(this.rows);this.$emit("exec","insertHTML","<table><tbody>"+e+"</tbody></table>"),this.$parent.closeDashboard()}}}},function(e,t,n){e.exports=n(19)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=n.n(i),r=n(48),s=n(1);t.default={install:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};s.a.options=o()({},s.a.options,t),e.component("wysiwyg",r.a)},component:r.a}},function(e,t,n){e.exports={default:n(21),__esModule:!0}},function(e,t,n){n(22),e.exports=n(7).Object.assign},function(e,t,n){var i=n(23);i(i.S+i.F,"Object",{assign:n(33)})},function(e,t,n){var i=n(3),o=n(7),r=n(24),s=n(26),a=function(e,t,n){var l,u,c,d=e&a.F,p=e&a.G,h=e&a.S,f=e&a.P,v=e&a.B,m=e&a.W,g=p?o:o[t]||(o[t]={}),b=g.prototype,w=p?i:h?i[t]:(i[t]||{}).prototype;for(l in p&&(n=t),n)(u=!d&&w&&void 0!==w[l])&&l in g||(c=u?w[l]:n[l],g[l]=p&&"function"!=typeof w[l]?n[l]:v&&u?r(c,i):m&&w[l]==c?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):f&&"function"==typeof c?r(Function.call,c):c,f&&((g.virtual||(g.virtual={}))[l]=c,e&a.R&&b&&!b[l]&&s(b,l,c)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,n){var i=n(25);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var i=n(27),o=n(32);e.exports=n(5)?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(28),o=n(29),r=n(31),s=Object.defineProperty;t.f=n(5)?Object.defineProperty:function(e,t,n){if(i(e),t=r(t,!0),i(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(4);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(5)&&!n(6)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(4),o=n(3).document,r=i(o)&&i(o.createElement);e.exports=function(e){return r?o.createElement(e):{}}},function(e,t,n){var i=n(4);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var i=n(34),o=n(45),r=n(46),s=n(47),a=n(9),l=Object.assign;e.exports=!l||n(6)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=i})?function(e,t){for(var n=s(e),l=arguments.length,u=1,c=o.f,d=r.f;l>u;)for(var p,h=a(arguments[u++]),f=c?i(h).concat(c(h)):i(h),v=f.length,m=0;v>m;)d.call(h,p=f[m++])&&(n[p]=h[p]);return n}:l},function(e,t,n){var i=n(35),o=n(44);e.exports=Object.keys||function(e){return i(e,o)}},function(e,t,n){var i=n(36),o=n(8),r=n(38)(!1),s=n(41)("IE_PROTO");e.exports=function(e,t){var n,a=o(e),l=0,u=[];for(n in a)n!=s&&i(a,n)&&u.push(n);for(;t.length>l;)i(a,n=t[l++])&&(~r(u,n)||u.push(n));return u}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(8),o=n(39),r=n(40);e.exports=function(e){return function(t,n,s){var a,l=i(t),u=o(l.length),c=r(s,u);if(e&&n!=n){for(;u>c;)if((a=l[c++])!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}}},function(e,t,n){var i=n(11),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},function(e,t,n){var i=n(11),o=Math.max,r=Math.min;e.exports=function(e,t){return(e=i(e))<0?o(e+t,0):r(e,t)}},function(e,t,n){var i=n(42)("keys"),o=n(43);e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var i=n(3),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var i=n(10);e.exports=function(e){return Object(i(e))}},function(e,t,n){"use strict";var i=n(12),o=n(77),r=n(0);var s=function(e){n(49)},a=Object(r.a)(i.a,o.a,o.b,!1,s,null,null);t.a=a.exports},function(e,t){},function(e,t){e.exports=function(e,t,n){var i,o,r,s,a;function l(){var u=Date.now()-s;u<t&&u>=0?i=setTimeout(l,t-u):(i=null,n||(a=e.apply(r,o),r=o=null))}null==t&&(t=100);var u=function(){r=this,o=arguments,s=Date.now();var u=n&&!i;return i||(i=setTimeout(l,t)),u&&(a=e.apply(r,o),r=o=null),a};return u.clear=function(){i&&(clearTimeout(i),i=null)},u.flush=function(){i&&(a=e.apply(r,o),r=o=null,clearTimeout(i),i=null)},u}},function(e,t,n){"use strict";var i=n(13),o=n(52),r=n(0),s=Object(r.a)(i.a,o.a,o.b,!1,null,null,null);t.a=s.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{mousedown:e.onBtnClick}},[n("a",{class:"vw-btn-"+e.module.title,domProps:{innerHTML:e._s(e.module.icon)}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDashboard,expression:"showDashboard"}],ref:"dashboard",staticClass:"dashboard"},[e.module.render?e._m(0):e._e()],1)])},o=[function(){var e=this.$createElement;return(this._self._c||e)(this.module,{ref:"moduleDashboard",tag:"component",attrs:{uid:this.uid,options:this.options},on:{exec:this.exec}})}]},function(e,t){e.exports={title:"bold",action:["bold"],description:"Bold",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg>'}},function(e,t){e.exports={title:"italic",description:"Italic",action:["italic"],icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg>'}},function(e,t){e.exports={title:"underline",action:["underline"],description:"Underline",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/></svg>'}},function(e,t){e.exports={title:"justifyLeft",action:["justifyLeft"],description:"Justify Left",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>'}},function(e,t){e.exports={title:"justifyCenter",action:["justifyCenter"],description:"Center",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg>'}},function(e,t){e.exports={title:"justifyRight",action:["justifyRight"],description:"Justify Right",icon:'<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>'}},function(e,t,n){"use strict";var i=n(14),o=n(60),r=n(0),s=Object(r.a)(i.a,o.a,o.b,!1,null,null,null);t.a=s.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H1")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H2")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H3")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H4")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H5")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.insertHeading}},[e._v("H6")])])},o=[]},function(e,t,n){"use strict";var i=n(15),o=n(62),r=n(0),s=Object(r.a)(i.a,o.a,o.b,!1,null,null,null);t.a=s.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){t.preventDefault(),e.insertLink(t)}}},[n("label",[e._v("\n        URL\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],ref:"url",staticStyle:{width:"40%"},attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e._v(" "),n("label",[e._v("\n        Link Title\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticStyle:{width:"40%"},attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Insert")])])},o=[]},function(e,t){e.exports={title:"code",icon:'<svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"><path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/></svg>',description:"Code",action:["formatBlock","pre"]}},function(e,t){e.exports={title:"orderedList",action:["insertOrderedList"],description:"Ordered List (1, 2, 3)",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>'}},function(e,t){e.exports={title:"unorderedList",action:["insertUnorderedList"],description:"Bullet List",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>'}},function(e,t,n){"use strict";var i=n(16),o=n(71),r=n(0),s=Object(r.a)(i.a,o.a,o.b,!1,null,null,null);t.a=s.exports},function(e,t,n){var i;i=function(){"use strict";var e={getSignedURL:function(e,t){var n={filePath:e.name,contentType:e.type};return new Promise(function(i,o){var r=new FormData,s=new XMLHttpRequest,a="function"==typeof t.signingURL?t.signingURL(e):t.signingURL;s.open("POST",a),s.onload=function(){200==s.status?i(JSON.parse(s.response)):o(s.statusText)},s.onerror=function(e){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),o(e)},Object.entries(t.headers||{}).forEach(function(e){var t=e[0],n=e[1];s.setRequestHeader(t,n)}),n=Object.assign(n,t.params||{}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r.append(t,n)}),s.send(r)})},sendFile:function(e,t){var n=new FormData;return this.getSignedURL(e,t).then(function(t){var i=t.signature;return Object.keys(i).forEach(function(e){n.append(e,i[e])}),n.append("file",e),new Promise(function(e,i){var o=new XMLHttpRequest;o.open("POST",t.postEndpoint),o.onload=function(){if(201==o.status){var t=(new window.DOMParser).parseFromString(o.response,"text/xml").firstChild.children[0].innerHTML;e({success:!0,message:t})}else{var n=(new window.DOMParser).parseFromString(o.response,"text/xml").firstChild.children[0].innerHTML;i({success:!1,message:n+". Request is marked as resolved when returns as status 201"})}},o.onerror=function(e){var t=(new window.DOMParser).parseFromString(o.response,"text/xml").firstChild.children[1].innerHTML;i({success:!1,message:t})},o.send(n)})}).catch(function(e){return e})}};return{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":e.includeStyling},attrs:{id:e.id}})},staticRenderFns:[],props:{id:{type:String,required:!0},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1}},data:function(){return{isS3:!1,wasQueueAutoProcess:!0}},computed:{dropzoneSettings:function(){var e={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach(function(t){e[t]=this.options[t]},this),null!==this.awss3&&(e.autoProcessQueue=!1,this.isS3=!0,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue)),e}},methods:{manuallyAddFile:function(e,t){e.manuallyAdded=!0,this.dropzone.emit("addedfile",e),t&&this.dropzone.emit("thumbnail",e,t);for(var n=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0;i<n.length;i++)n[i].style.width=this.dropzoneSettings.thumbnailWidth+"px",n[i].style.height=this.dropzoneSettings.thumbnailHeight+"px",n[i].style["object-fit"]="contain";this.dropzone.emit("complete",e),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(e){this.dropzone.removeAllFiles(e)},processQueue:function(){var e=this,t=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach(function(t){e.getSignedAndUploadToS3(t)}):this.dropzone.processQueue(),this.dropzone.on("success",function(){t.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){t.options.autoProcessQueue=!1})},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(e){return this.dropzone.filesize(e)},accept:function(e,t){return this.dropzone.accept(e,t)},addFile:function(e){return this.dropzone.addFile(e)},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3:function(t){var n=this;e.sendFile(t,this.awss3).then(function(e){e.success?(t.s3ObjectLocation=e.message,setTimeout(function(){return n.dropzone.processFile(t)}),n.$emit("vdropzone-s3-upload-success",e.message)):"undefined"!=typeof message?n.$emit("vdropzone-s3-upload-error",e.message):n.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")}).catch(function(e){alert(e)})},setAWSSigningURL:function(e){this.isS3&&(this.awss3.signingURL=e)}},mounted:function(){if(!this.$isServer||!this.hasBeenMounted){this.hasBeenMounted=!0;var e=n(68);e.autoDiscover=!1,this.dropzone=new e(this.$refs.dropzoneElement,this.dropzoneSettings);var t=this;this.dropzone.on("thumbnail",function(e,n){t.$emit("vdropzone-thumbnail",e,n)}),this.dropzone.on("addedfile",function(e){t.duplicateCheck&&this.files.length&&this.files.forEach(function(n){n.name===e.name&&(this.removeFile(e),t.$emit("duplicate-file",e))},this),t.$emit("vdropzone-file-added",e),t.isS3&&t.wasQueueAutoProcess&&t.getSignedAndUploadToS3(e)}),this.dropzone.on("addedfiles",function(e){t.$emit("vdropzone-files-added",e)}),this.dropzone.on("removedfile",function(e){t.$emit("vdropzone-removed-file",e),e.manuallyAdded&&t.dropzone.options.maxFiles++}),this.dropzone.on("success",function(e,n){t.$emit("vdropzone-success",e,n),t.isS3&&t.wasQueueAutoProcess&&t.setOption("autoProcessQueue",!1)}),this.dropzone.on("successmultiple",function(e,n){t.$emit("vdropzone-success-multiple",e,n)}),this.dropzone.on("error",function(e,n,i){t.$emit("vdropzone-error",e,n,i)}),this.dropzone.on("errormultiple",function(e,n,i){t.$emit("vdropzone-error-multiple",e,n,i)}),this.dropzone.on("sending",function(e,n,i){t.isS3&&i.append("s3ObjectLocation",e.s3ObjectLocation),t.$emit("vdropzone-sending",e,n,i)}),this.dropzone.on("sendingmultiple",function(e,n,i){t.$emit("vdropzone-sending-multiple",e,n,i)}),this.dropzone.on("complete",function(e){t.$emit("vdropzone-complete",e)}),this.dropzone.on("completemultiple",function(e){t.$emit("vdropzone-complete-multiple",e)}),this.dropzone.on("canceled",function(e){t.$emit("vdropzone-canceled",e)}),this.dropzone.on("canceledmultiple",function(e){t.$emit("vdropzone-canceled-multiple",e)}),this.dropzone.on("maxfilesreached",function(e){t.$emit("vdropzone-max-files-reached",e)}),this.dropzone.on("maxfilesexceeded",function(e){t.$emit("vdropzone-max-files-exceeded",e)}),this.dropzone.on("processing",function(e){t.$emit("vdropzone-processing",e)}),this.dropzone.on("processing",function(e){t.$emit("vdropzone-processing",e)}),this.dropzone.on("processingmultiple",function(e){t.$emit("vdropzone-processing-multiple",e)}),this.dropzone.on("uploadprogress",function(e,n,i){t.$emit("vdropzone-upload-progress",e,n,i)}),this.dropzone.on("totaluploadprogress",function(e,n,i){t.$emit("vdropzone-total-upload-progress",e,n,i)}),this.dropzone.on("reset",function(){t.$emit("vdropzone-reset")}),this.dropzone.on("queuecomplete",function(){t.$emit("vdropzone-queue-complete")}),this.dropzone.on("drop",function(e){t.$emit("vdropzone-drop",e)}),this.dropzone.on("dragstart",function(e){t.$emit("vdropzone-drag-start",e)}),this.dropzone.on("dragend",function(e){t.$emit("vdropzone-drag-end",e)}),this.dropzone.on("dragenter",function(e){t.$emit("vdropzone-drag-enter",e)}),this.dropzone.on("dragover",function(e){t.$emit("vdropzone-drag-over",e)}),this.dropzone.on("dragleave",function(e){t.$emit("vdropzone-drag-leave",e)}),t.$emit("vdropzone-mounted")}},beforeDestroy:function(){this.destroyDropzone&&this.dropzone.destroy()}}},e.exports=i()},function(e,t,n){"use strict";(function(e){var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(){i(this,e)}return t(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];for(var r=0,s=s=t;;){if(r>=s.length)break;s[r++].apply(this,i)}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var i=0;i<n.length;i++){if(n[i]===t){n.splice(i,1);break}}return this}}]),e}(),r=function(e){function r(e,t){i(this,r);var o,s=n(this,(r.__proto__||Object.getPrototypeOf(r)).call(this)),a=void 0;if(s.element=e,s.version=r.version,s.defaultOptions.previewTemplate=s.defaultOptions.previewTemplate.replace(/\n*/g,""),s.clickableElements=[],s.listeners=[],s.files=[],"string"==typeof s.element&&(s.element=document.querySelector(s.element)),!s.element||null==s.element.nodeType)throw new Error("Invalid dropzone element.");if(s.element.dropzone)throw new Error("Dropzone already attached.");r.instances.push(s),s.element.dropzone=s;var l,u=null!=(o=r.optionsForElement(s.element))?o:{};if(s.options=r.extend({},s.defaultOptions,u,null!=t?t:{}),s.options.forceFallback||!r.isBrowserSupported())return l=s.options.fallback.call(s),n(s,l);if(null==s.options.url&&(s.options.url=s.element.getAttribute("action")),!s.options.url)throw new Error("No URL provided.");if(s.options.acceptedFiles&&s.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(s.options.uploadMultiple&&s.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return s.options.acceptedMimeTypes&&(s.options.acceptedFiles=s.options.acceptedMimeTypes,delete s.options.acceptedMimeTypes),null!=s.options.renameFilename&&(s.options.renameFile=function(e){return s.options.renameFilename.call(s,e.name,e)}),s.options.method=s.options.method.toUpperCase(),(a=s.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==s.options.previewsContainer&&(s.options.previewsContainer?s.previewsContainer=r.getElement(s.options.previewsContainer,"previewsContainer"):s.previewsContainer=s.element),s.options.clickable&&(!0===s.options.clickable?s.clickableElements=[s.element]:s.clickableElements=r.getElements(s.options.clickable,"clickable")),s.init(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o),t(r,null,[{key:"initClass",value:function(){this.prototype.Emitter=o,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,n=n=this.element.getElementsByTagName("div");;){if(t>=n.length)break;var i=n[t++];if(/(^| )dz-message($| )/.test(i.className)){e=i,i.className="dz-message";break}}e||(e=r.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var o=e.getElementsByTagName("span")[0];return o&&(null!=o.textContent?o.textContent=this.options.dictFallbackMessage:null!=o.innerText&&(o.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,n,i){var o={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},r=e.width/e.height;null==t&&null==n?(t=o.srcWidth,n=o.srcHeight):null==t?t=n*r:null==n&&(n=t/r);var s=(t=Math.min(t,o.srcWidth))/(n=Math.min(n,o.srcHeight));if(o.srcWidth>t||o.srcHeight>n)if("crop"===i)r>s?(o.srcHeight=e.height,o.srcWidth=o.srcHeight*s):(o.srcWidth=e.width,o.srcHeight=o.srcWidth/s);else{if("contain"!==i)throw new Error("Unknown resizeMethod '"+i+"'");r>s?n=t/r:t=n*r}return o.srcX=(e.width-o.srcWidth)/2,o.srcY=(e.height-o.srcHeight)/2,o.trgWidth=t,o.trgHeight=n,o},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=r.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-name]");;){if(n>=i.length)break;var o=i[n++];o.textContent=e.name}for(var s=0,a=a=e.previewElement.querySelectorAll("[data-dz-size]");!(s>=a.length);)(o=a[s++]).innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=r.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink));for(var l=function(n){return n.preventDefault(),n.stopPropagation(),e.status===r.UPLOADING?r.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?r.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)},u=0,c=c=e.previewElement.querySelectorAll("[data-dz-remove]");;){if(u>=c.length)break;c[u++].addEventListener("click",l)}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(n>=i.length)break;var o=i[n++];o.alt=e.name,o.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(n>=i.length)break;i[n++].textContent=t}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,n){if(e.previewElement)for(var i=0,o=o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(i>=o.length)break;var r=o[i++];"PROGRESS"===r.nodeName?r.value=t:r.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var o=0,r=r=n;;){if(o>=r.length)break;var s=r[o++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),t(r,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(e){return this.files.filter(function(t){return t.status===e}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(r.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(r.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(r.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===r.UPLOADING||e.status===r.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var e=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(r.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length){!function t(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var n=e.hiddenFileInput.files;if(n.length)for(var i=0,o=o=n;!(i>=o.length);){var r=o[i++];e.addFile(r)}return e.emit("addedfiles",n),t()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(var t=0,n=n=this.events;;){if(t>=n.length)break;var i=n[t++];this.on(i,this.options[i])}this.on("uploadprogress",function(){return e.updateTotalUploadProgress()}),this.on("removedfile",function(){return e.updateTotalUploadProgress()}),this.on("canceled",function(t){return e.emit("complete",t)}),this.on("complete",function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)});var o=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return o(t),e.emit("dragenter",t)},dragover:function(t){var n=void 0;try{n=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",o(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return o(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach(function(t){return e.listeners.push({element:t,events:{click:function(n){return(t!==e.element||n.target===e.element||r.elementInside(n.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,r.instances.splice(r.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,n=0;if(this.getActiveFiles().length){for(var i=0,o=o=this.getActiveFiles();;){if(i>=o.length)break;var r=o[i++];t+=r.upload.bytesSent,n+=r.upload.total}e=100*t/n}else e=100;return this.emit("totaluploadprogress",e,n,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var n='<div class="dz-fallback">';this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var i=r.createElement(n);return"FORM"!==this.element.tagName?(t=r.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(i):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:i}},{key:"getExistingFallback",value:function(){for(var e=function(e){for(var t=0,n=n=e;;){if(t>=n.length)break;var i=n[t++];if(/(^| )fallback($| )/.test(i.className))return i}},t=["div","form"],n=0;n<t.length;n++){var i,o=t[n];if(i=e(this.element.getElementsByTagName(o)))return i}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var n in e.events){var i=e.events[n];t.push(e.element.addEventListener(n,i,!1))}return t}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var n in e.events){var i=e.events[n];t.push(e.element.removeEventListener(n,i,!1))}return t}()})}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.files.map(function(t){return e.cancelUpload(t)})}},{key:"enable",value:function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,n="b";if(e>0){for(var i=["tb","gb","mb","kb","b"],o=0;o<i.length;o++){var r=i[o];if(e>=Math.pow(this.options.filesizeBase,4-o)/10){t=e/Math.pow(this.options.filesizeBase,4-o),n=r;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[n]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);var t=e.dataTransfer.files;if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(void 0!==(t=null!=e?e.clipboardData:void 0)&&null!==t?function(e){return e.items}(t):void 0)){var t;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){var t=this;return e.map(function(e){return t.addFile(e)})}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){for(var n=[],i=0,o=o=e;;){if(i>=o.length)break;var r,s=o[i++];null!=s.webkitGetAsEntry&&(r=s.webkitGetAsEntry())?r.isFile?n.push(t.addFile(s.getAsFile())):r.isDirectory?n.push(t._addFilesFromDirectory(r,r.name)):n.push(void 0):null!=s.getAsFile&&(null==s.kind||"file"===s.kind)?n.push(t.addFile(s.getAsFile())):n.push(void 0)}return n}()}},{key:"_addFilesFromDirectory",value:function(e,t){var n=this,i=e.createReader(),o=function(e){return t=console,n="log",i=function(t){return t.log(e)},void 0!==t&&null!==t&&"function"==typeof t[n]?i(t,n):void 0;var t,n,i};return function e(){return i.readEntries(function(i){if(i.length>0){for(var o=0,r=r=i;!(o>=r.length);){var s=r[o++];s.isFile?s.file(function(e){if(!n.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,n.addFile(e)}):s.isDirectory&&n._addFilesFromDirectory(s,t+"/"+s.name)}e()}return null},o)}()}},{key:"accept",value:function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):r.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;return e.upload={uuid:r.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e),chunked:this.options.chunking&&(this.options.forceChunking||e.size>this.options.chunkSize),totalChunkCount:Math.ceil(e.size/this.options.chunkSize)},this.files.push(e),e.status=r.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,n=n=e;;){if(t>=n.length)break;var i=n[t++];this.enqueueFile(i)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==r.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=r.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(n){return e.emit("thumbnail",t,n),e._processingThumbnail=!1,e._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===r.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,n=n=this.files.slice();;){if(t>=n.length)break;var i=n[t++];(i.status!==r.UPLOADING||e)&&this.removeFile(i)}return null}},{key:"resizeImage",value:function(e,t,n,i,o){var s=this;return this.createThumbnail(e,t,n,i,!1,function(t,n){if(null===n)return o(e);var i=s.options.resizeMimeType;null==i&&(i=e.type);var a=n.toDataURL(i,s.options.resizeQuality);return"image/jpeg"!==i&&"image/jpg"!==i||(a=u.restore(e.dataURL,a)),o(r.dataURItoBlob(a))})}},{key:"createThumbnail",value:function(e,t,n,i,o,r){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,n,i,o,r);null!=r&&r(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(e,t,n,i,o,r,s){var a=this,u=document.createElement("img");return s&&(u.crossOrigin=s),u.onload=function(){var s=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&o&&(s=function(e){return EXIF.getData(u,function(){return e(EXIF.getTag(this,"Orientation"))})}),s(function(o){e.width=u.width,e.height=u.height;var s=a.options.resize.call(a,e,t,n,i),c=document.createElement("canvas"),d=c.getContext("2d");switch(c.width=s.trgWidth,c.height=s.trgHeight,o>4&&(c.width=s.trgHeight,c.height=s.trgWidth),o){case 2:d.translate(c.width,0),d.scale(-1,1);break;case 3:d.translate(c.width,c.height),d.rotate(Math.PI);break;case 4:d.translate(0,c.height),d.scale(1,-1);break;case 5:d.rotate(.5*Math.PI),d.scale(1,-1);break;case 6:d.rotate(.5*Math.PI),d.translate(0,-c.height);break;case 7:d.rotate(.5*Math.PI),d.translate(c.width,-c.height),d.scale(-1,1);break;case 8:d.rotate(-.5*Math.PI),d.translate(-c.width,0)}l(d,u,null!=s.srcX?s.srcX:0,null!=s.srcY?s.srcY:0,s.srcWidth,s.srcHeight,null!=s.trgX?s.trgX:0,null!=s.trgY?s.trgY:0,s.trgWidth,s.trgHeight);var p=c.toDataURL("image/png");if(null!=r)return r(p,c)})},null!=r&&(u.onerror=r),u.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,n=t;if(!(t>=e)){var i=this.getQueuedFiles();if(i.length>0){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,e-t));for(;n<e;){if(!i.length)return;this.processFile(i.shift()),n++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,n=n=e;;){if(t>=n.length)break;var i=n[t++];i.processing=!0,i.status=r.UPLOADING,this.emit("processing",i)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter(function(t){return t.xhr===e}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===r.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),n=0,i=i=t;;){if(n>=i.length)break;i[n++].status=r.CANCELED}void 0!==e.xhr&&e.xhr.abort();for(var o=0,s=s=t;;){if(o>=s.length)break;var a=s[o++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==r.ADDED&&e.status!==r.QUEUED||(e.status=r.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.apply(this,n)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,function(n){if(e[0].upload.chunked){var i=e[0],o=n[0];i.upload.chunks=[];var s=function(){for(var n=0;void 0!==i.upload.chunks[n];)n++;if(!(n>=i.upload.totalChunkCount)){0;var s=n*t.options.chunkSize,a=Math.min(s+t.options.chunkSize,i.size),l={name:t._getParamName(0),data:o.webkitSlice?o.webkitSlice(s,a):o.slice(s,a),filename:i.upload.filename,chunkIndex:n};i.upload.chunks[n]={file:i,index:n,dataBlock:l,status:r.UPLOADING,progress:0,retries:0},t._uploadData(e,[l])}};if(i.upload.finishedChunkUpload=function(n){var o=!0;n.status=r.SUCCESS,n.dataBlock=null;for(var a=0;a<i.upload.totalChunkCount;a++){if(void 0===i.upload.chunks[a])return s();i.upload.chunks[a].status!==r.SUCCESS&&(o=!1)}o&&t.options.chunksUploaded(i,function(){t._finished(e,"",null)})},t.options.parallelChunkUploads)for(var a=0;a<i.upload.totalChunkCount;a++)s();else s()}else{for(var l=[],u=0;u<e.length;u++)l[u]={name:t._getParamName(u),data:n[u],filename:e[u].upload.filename};t._uploadData(e,l)}})}},{key:"_getChunk",value:function(e,t){for(var n=0;n<e.upload.totalChunkCount;n++)if(void 0!==e.upload.chunks[n]&&e.upload.chunks[n].xhr===t)return e.upload.chunks[n]}},{key:"_uploadData",value:function(e,t){for(var n=this,i=new XMLHttpRequest,o=0,s=s=e;;){if(o>=s.length)break;s[o++].xhr=i}e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=i);var a=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e);i.open(a,l,!0),i.timeout=this.resolveOption(this.options.timeout,e),i.withCredentials=!!this.options.withCredentials,i.onload=function(t){n._finishedUploading(e,i,t)},i.onerror=function(){n._handleUploadError(e,i)},(null!=i.upload?i.upload:i).onprogress=function(t){return n._updateFilesUploadProgress(e,i,t)};var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var c in this.options.headers&&r.extend(u,this.options.headers),u){var d=u[c];d&&i.setRequestHeader(c,d)}var p=new FormData;if(this.options.params){var h=this.options.params;for(var f in"function"==typeof h&&(h=h.call(this,e,i,e[0].upload.chunked?this._getChunk(e[0],i):null)),h){var v=h[f];p.append(f,v)}}for(var m=0,g=g=e;;){if(m>=g.length)break;var b=g[m++];this.emit("sending",b,i,p)}this.options.uploadMultiple&&this.emit("sendingmultiple",e,i,p),this._addFormElementData(p);for(var w=0;w<t.length;w++){var y=t[w];p.append(y.name,y.data,y.filename)}this.submitRequest(i,p,e)}},{key:"_transformFiles",value:function(e,t){for(var n=this,i=[],o=0,r=function(r){n.options.transformFile.call(n,e[r],function(n){i[r]=n,++o===e.length&&t(i)})},s=0;s<e.length;s++)r(s)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,n=n=this.element.querySelectorAll("input, textarea, select, button");;){if(t>=n.length)break;var i=n[t++],o=i.getAttribute("name"),r=i.getAttribute("type");if(r&&(r=r.toLowerCase()),void 0!==o&&null!==o)if("SELECT"===i.tagName&&i.hasAttribute("multiple"))for(var s=0,a=a=i.options;;){if(s>=a.length)break;var l=a[s++];l.selected&&e.append(o,l.value)}else(!r||"checkbox"!==r&&"radio"!==r||i.checked)&&e.append(o,i.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,n){var i=void 0;if(void 0!==n){if(i=100*n.loaded/n.total,e[0].upload.chunked){var o=e[0],r=this._getChunk(o,t);r.progress=i,r.total=n.total,r.bytesSent=n.loaded;o.upload.progress=0,o.upload.total=0,o.upload.bytesSent=0;for(var s=0;s<o.upload.totalChunkCount;s++)void 0!==o.upload.chunks[s]&&void 0!==o.upload.chunks[s].progress&&(o.upload.progress+=o.upload.chunks[s].progress,o.upload.total+=o.upload.chunks[s].total,o.upload.bytesSent+=o.upload.chunks[s].bytesSent);o.upload.progress=o.upload.progress/o.upload.totalChunkCount}else for(var a=0,l=l=e;;){if(a>=l.length)break;var u=l[a++];u.upload.progress=i,u.upload.total=n.total,u.upload.bytesSent=n.loaded}for(var c=0,d=d=e;;){if(c>=d.length)break;var p=d[c++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;i=100;for(var f=0,v=v=e;;){if(f>=v.length)break;var m=v[f++];100===m.upload.progress&&m.upload.bytesSent===m.upload.total||(h=!1),m.upload.progress=i,m.upload.bytesSent=m.upload.total}if(h)return;for(var g=0,b=b=e;;){if(g>=b.length)break;var w=b[g++];this.emit("uploadprogress",w,i,w.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,n){var i=void 0;if(e[0].status!==r.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(i=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{i=JSON.parse(i)}catch(e){n=e,i="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,i,n):this._handleUploadError(e,t,i)}}},{key:"_handleUploadError",value:function(e,t,n){if(e[0].status!==r.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var i=this._getChunk(e[0],t);if(i.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[i.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var o=0,s=s=e;;){if(o>=s.length)break;s[o++];this._errorProcessing(e,n||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}}},{key:"submitRequest",value:function(e,t,n){e.send(t)}},{key:"_finished",value:function(e,t,n){for(var i=0,o=o=e;;){if(i>=o.length)break;var s=o[i++];s.status=r.SUCCESS,this.emit("success",s,t,n),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,n){for(var i=0,o=o=e;;){if(i>=o.length)break;var s=o[i++];s.status=r.ERROR,this.emit("error",s,t,n),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),r}();r.initClass(),r.version="5.3.0",r.options={},r.optionsForElement=function(e){return e.getAttribute("id")?r.options[a(e.getAttribute("id"))]:void 0},r.instances=[],r.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},r.autoDiscover=!0,r.discover=function(){var e=void 0;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){for(var n=[],i=0,o=o=t;;){if(i>=o.length)break;var r=o[i++];/(^| )dropzone($| )/.test(r.className)?n.push(e.push(r)):n.push(void 0)}return n}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){for(var t=[],n=0,i=i=e;;){if(n>=i.length)break;var o=i[n++];!1!==r.optionsForElement(o)?t.push(new r(o)):t.push(void 0)}return t}()},r.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],r.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,n=n=r.blacklistedBrowsers;;){if(t>=n.length)break;n[t++].test(navigator.userAgent)&&(e=!1)}else e=!1;else e=!1;return e},r.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),o=new Uint8Array(i),r=0,s=t.length,a=0<=s;a?r<=s:r>=s;a?r++:r--)o[r]=t.charCodeAt(r);return new Blob([i],{type:n})};var s=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},a=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};r.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},r.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},r.getElement=function(e,t){var n=void 0;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return n},r.getElements=function(e,t){var n=void 0,i=void 0;if(e instanceof Array){i=[];try{for(var o=0,r=r=e;!(o>=r.length);)n=r[o++],i.push(this.getElement(n,t))}catch(e){i=null}}else if("string"==typeof e){i=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)n=a[s++],i.push(n)}else null!=e.nodeType&&(i=[e]);if(null==i||!i.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return i},r.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},r.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var n=e.type,i=n.replace(/\/.*$/,""),o=0,r=r=t;;){if(o>=r.length)break;var s=r[o++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new r(this,e)})}),void 0!==e&&null!==e?e.exports=r:window.Dropzone=r,r.ADDED="added",r.QUEUED="queued",r.ACCEPTED=r.QUEUED,r.UPLOADING="uploading",r.PROCESSING=r.UPLOADING,r.CANCELED="canceled",r.ERROR="error",r.SUCCESS="success";var l=function(e,t,n,i,o,r,s,a,l,u){var c=function(e){e.naturalWidth;var t=e.naturalHeight,n=document.createElement("canvas");n.width=1,n.height=t;var i=n.getContext("2d");i.drawImage(e,0,0);for(var o=i.getImageData(1,0,1,t).data,r=0,s=t,a=t;a>r;)0===o[4*(a-1)+3]?s=a:r=a,a=s+r>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,n,i,o,r,s,a,l,u/c)},u=function(){function e(){i(this,e)}return t(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",n=void 0,i=void 0,o="",r=void 0,s=void 0,a=void 0,l="",u=0;r=(n=e[u++])>>2,s=(3&n)<<4|(i=e[u++])>>4,a=(15&i)<<2|(o=e[u++])>>6,l=63&o,isNaN(i)?a=l=64:isNaN(o)&&(l=64),t=t+this.KEY_STR.charAt(r)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),n=i=o="",r=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var n=this.decode64(e.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),o=this.exifManipulation(t,i);return"data:image/jpeg;base64,"+this.encode64(o)}},{key:"exifManipulation",value:function(e,t){var n=this.getExifArray(t),i=this.insertExif(e,n);return new Uint8Array(i)}},{key:"getExifArray",value:function(e){for(var t=void 0,n=0;n<e.length;){if(255===(t=e[n])[0]&225===t[1])return t;n++}return[]}},{key:"insertExif",value:function(e,t){var n=e.replace("data:image/jpeg;base64,",""),i=this.decode64(n),o=i.indexOf(255,3),r=i.slice(0,o),s=i.slice(o),a=r;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,n=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var i=t+(256*e[t+2]+e[t+3])+2,o=e.slice(t,i);n.push(o),t=i}if(t>e.length)break}return n}},{key:"decode64",value:function(e){var t=void 0,n=void 0,i="",o=void 0,r=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>4,n=(15&o)<<4|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>2,i=(3&r)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==r&&l.push(n),64!==s&&l.push(i),t=n=i="",o=r=s="",a<e.length;);return l}}]),e}();u.initClass();r._autoDiscoverFunction=function(){if(r.autoDiscover)return r.discover()},function(e,t){var n=!1,i=!0,o=e.document,r=o.documentElement,s=o.addEventListener?"addEventListener":"attachEvent",a=o.addEventListener?"removeEventListener":"detachEvent",l=o.addEventListener?"":"on",u=function i(r){if("readystatechange"!==r.type||"complete"===o.readyState)return("load"===r.type?e:o)[a](l+r.type,i,!1),!n&&(n=!0)?t.call(e,r.type||r):void 0};if("complete"!==o.readyState){if(o.createEventObject&&r.doScroll){try{i=!e.frameElement}catch(e){}i&&function e(){try{r.doScroll("left")}catch(t){return void setTimeout(e,50)}return u("poll")}()}o[s](l+"DOMContentLoaded",u,!1),o[s](l+"readystatechange",u,!1),e[s](l+"load",u,!1)}}(window,r._autoDiscoverFunction)}).call(t,n(69)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this.$createElement;return(this._self._c||e)("Dropzone",{ref:"dropzone",attrs:{options:this.dropzoneOptions,id:this._uid+"vwdropzone"},on:{"vdropzone-success":this.fileUploaded,"vdropzone-file-added":this.fileAdded}})},o=[]},function(e,t,n){"use strict";var i=n(17),o=n(74),r=n(0);var s=function(e){n(73)},a=Object(r.a)(i.a,o.a,o.b,!1,s,"data-v-ebce4d12",null);t.a=a.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),e.insertTable(t)}}},[n("label",[n("div",[e._v("Rows")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rows,expression:"rows"}],staticStyle:{width:"60px"},attrs:{type:"number",min:"2"},domProps:{value:e.rows},on:{input:function(t){t.target.composing||(e.rows=t.target.value)}}})]),e._v(" "),n("label",[n("div",[e._v("Columns")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cols,expression:"cols"}],staticStyle:{width:"60px"},attrs:{type:"number",min:"2"},domProps:{value:e.cols},on:{input:function(t){t.target.composing||(e.cols=t.target.value)}}})]),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Insert")])])},o=[]},function(e,t){e.exports={title:"removeFormat",action:["removeFormat"],description:"Remove formatting.\nClears headings, bold, italic, underlined text, etc.",icon:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>'}},function(e,t){e.exports={title:"separator",icon:"<i class='vw-separator'></i>"}},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editr"},[n("div",{staticClass:"editr--toolbar"},e._l(e.modules,function(t,i){return n("Btn",{key:t.title+i,ref:"btn-"+t.title,refInFor:!0,attrs:{module:t,options:e.mergedOptions,title:t.description||""}})})),n("div",{ref:"content",staticClass:"editr--content",attrs:{contenteditable:"true",tabindex:"1",placeholder:e.placeholder}})])},o=[]}])});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_vue_vue_type_template_id_2c922d06___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autocomplete_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__autocomplete_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__autocomplete_vue_vue_type_template_id_2c922d06___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__autocomplete_vue_vue_type_template_id_2c922d06___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2c922d06', component.options)
    } else {
      api.reload('2c922d06', component.options)
    }
    module.hot.accept("./autocomplete.vue?vue&type=template&id=2c922d06&", function () {
      api.rerender('2c922d06', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/vue2-google-maps/dist/components/autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___["b"]; });


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocompleteImpl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _simulateArrowDown = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js");

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/circle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infoWindow_vue_vue_type_template_id_17fc7ddc___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infoWindow_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__infoWindow_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__infoWindow_vue_vue_type_template_id_17fc7ddc___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__infoWindow_vue_vue_type_template_id_17fc7ddc___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('17fc7ddc', component.options)
    } else {
      api.reload('17fc7ddc', component.options)
    }
    module.hot.accept("./infoWindow.vue?vue&type=template&id=17fc7ddc&", function () {
      api.rerender('17fc7ddc', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/vue2-google-maps/dist/components/infoWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___["b"]; });


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindowImpl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_vue_vue_type_template_id_85ca06a4___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__map_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__map_vue_vue_type_template_id_85ca06a4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__map_vue_vue_type_template_id_85ca06a4___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('85ca06a4', component.options)
    } else {
      api.reload('85ca06a4', component.options)
    }
    module.hot.accept("./map.vue?vue&type=template&id=85ca06a4&", function () {
      api.rerender('85ca06a4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/vue2-google-maps/dist/components/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___["b"]; });


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mapElementMixin = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementMixin.js");

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapElementMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapImpl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mountableMixin = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js");

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/marker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInput.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placeInput_vue_vue_type_template_id_c1ab87be___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placeInputImpl_js_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&");
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__placeInputImpl_js_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__placeInputImpl_js_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__placeInputImpl_js_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__placeInput_vue_vue_type_template_id_c1ab87be___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__placeInput_vue_vue_type_template_id_c1ab87be___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('c1ab87be', component.options)
    } else {
      api.reload('c1ab87be', component.options)
    }
    module.hot.accept("./placeInput.vue?vue&type=template&id=c1ab87be&", function () {
      api.rerender('c1ab87be', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/vue2-google-maps/dist/components/placeInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___["b"]; });


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__placeInputImpl_js_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _simulateArrowDown = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js");

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/polygon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/polyline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/rectangle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__streetViewPanorama_vue_vue_type_template_id_ed35740a___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__streetViewPanorama_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__streetViewPanorama_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__streetViewPanorama_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__streetViewPanorama_vue_vue_type_template_id_ed35740a___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__streetViewPanorama_vue_vue_type_template_id_ed35740a___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('ed35740a', component.options)
    } else {
      api.reload('ed35740a', component.options)
    }
    module.hot.accept("./streetViewPanorama.vue?vue&type=template&id=ed35740a&", function () {
      api.rerender('ed35740a', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__style_loader_index_js_css_loader_index_js_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___["b"]; });


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanoramaImpl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mountableMixin = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js");

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/lazyValue.js");

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__("./node_modules/vue2-google-maps/dist/manager.js");

var _marker = __webpack_require__("./node_modules/vue2-google-maps/dist/components/marker.js");

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__("./node_modules/vue2-google-maps/dist/components/polyline.js");

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__("./node_modules/vue2-google-maps/dist/components/polygon.js");

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__("./node_modules/vue2-google-maps/dist/components/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__("./node_modules/vue2-google-maps/dist/components/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__("./node_modules/vue2-google-maps/dist/components/infoWindow.vue");

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__("./node_modules/vue2-google-maps/dist/components/map.vue");

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__("./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue");

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__("./node_modules/vue2-google-maps/dist/components/placeInput.vue");

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__("./node_modules/vue2-google-maps/dist/components/autocomplete.vue");

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementMixin.js");

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__("./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google for Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded form goole maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'http://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/bindEvents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/bindProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__("./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/lazyValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/mountableMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__("./resources/assets/js/bootstrap.js");

__webpack_require__("./node_modules/typeface-lato/index.css");

__webpack_require__("./resources/assets/js/validation.js");
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */


Vue.component('alg-floating-typewriter', function (resolve) {
  __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/FloatingTypewriter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-form-filter', function (resolve) {
  __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/FormFilter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-datalist', __webpack_require__("./resources/assets/js/components/DataList.vue").default);
Vue.component('alg-multi-datalist', function (resolve) {
  __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Multi-DataList.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-tabs', function (resolve) {
  __webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Tabs.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-tab', function (resolve) {
  __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Tab.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-radio-toggle', function (resolve) {
  __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Radio-Toggle.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-form-search', function (resolve) {
  __webpack_require__.e/* require */(28).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Form-Search.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-ajaxlist', __webpack_require__("./resources/assets/js/components/AJAX-List.vue").default);
Vue.component('alg-sources', function (resolve) {
  __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Sources.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-paginated-list', function (resolve) {
  __webpack_require__.e/* require */(26).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Paginated-List.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-filter-list', function (resolve) {
  __webpack_require__.e/* require */(29).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Filter-List.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-notification', __webpack_require__("./resources/assets/js/components/Notification.vue").default);
Vue.component('alg-initial-changes', function (resolve) {
  __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Initial-Changes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-bookmark', __webpack_require__("./resources/assets/js/components/Bookmark.vue").default);
Vue.component('alg-modal', function (resolve) {
  __webpack_require__.e/* require */(27).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Modal.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-button', __webpack_require__("./resources/assets/js/components/Button.vue").default);
Vue.component('alg-map', __webpack_require__("./resources/assets/js/components/Map.vue").default);
Vue.component('alg-network', function (resolve) {
  __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Network.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-file-upload', function (resolve) {
  __webpack_require__.e/* require */(30).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/FileUpload.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-typewriter', function (resolve) {
  __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Typewriter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-preview', function (resolve) {
  __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Preview.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-form', function (resolve) {
  __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/Form.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-model-form', function (resolve) {
  __webpack_require__.e/* require */(33).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/ModelForm.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-order', function (resolve) {
  __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Order.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-tag-input', function (resolve) {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Tag-Input.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
}); // Delete me

Vue.component('alg-taginput', function (resolve) {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/TagInput.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-tag', function (resolve) {
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/Tag.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-value-input', function (resolve) {
  __webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Value-Input.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-phoneme-examples', function (resolve) {
  __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Phoneme-Examples.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-paradigm-search', function (resolve) {
  __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/Paradigm-Search.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-basic-paradigm-search', function (resolve) {
  __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/Basic-Paradigm-Search.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-advanced-paradigm-search', function (resolve) {
  __webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/Advanced-Paradigm-Search.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-nominal-paradigm-search', function (resolve) {
  __webpack_require__.e/* require */(31).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/search/Nominal-Paradigm.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-phoneme-search', function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/forms/search/Phoneme.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-source-index', function (resolve) {
  __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Source-Index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-pagination-limited', function (resolve) {
  __webpack_require__.e/* require */(24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Pagination-Limited.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-pagination-full', function (resolve) {
  __webpack_require__.e/* require */(25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Pagination-Full.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-filter', function (resolve) {
  __webpack_require__.e/* require */(34).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/Filter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-select-all', function (resolve) {
  __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/SelectAll.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('alg-paradigm-table', function (resolve) {
  __webpack_require__.e/* require */(32).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/ParadigmTable.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('paradigm-language-suggest', {
  methods: {
    suggest: function suggest(data) {
      EventManager.$emit('addLanguageGroup', data);
    }
  }
});
Vue.component('paradigm-mode-select', {
  data: function data() {
    return {
      selected: "indicativeOnly"
    };
  }
});
window.EventManager = new Vue();
var app = new Vue({
  el: '#body-wrapper',
  data: function data() {
    return {
      mobileNavbarOpen: false,
      showFlash: true,
      testVal: {
        text: '',
        id: ''
      }
    };
  }
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_retry__ = __webpack_require__("./node_modules/axios-retry/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_portal_vue__ = __webpack_require__("./node_modules/portal-vue/dist/portal-vue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_portal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_portal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buefy__ = __webpack_require__("./node_modules/buefy/dist/buefy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_wysiwyg__ = __webpack_require__("./node_modules/vue-wysiwyg/dist/vueWysiwyg.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_wysiwyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_tooltip__ = __webpack_require__("./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_wysiwyg_SpecialCharacter__ = __webpack_require__("./resources/assets/js/components/wysiwyg/SpecialCharacter.vue");




__webpack_require__("./resources/assets/js/polyfill/scrollIntoViewIfNeeded.js");

window._ = __webpack_require__("./node_modules/lodash/lodash.js");
/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");




__webpack_require__("./node_modules/vue-resource/dist/vue-resource.esm.js");


Vue.use(__WEBPACK_IMPORTED_MODULE_5_vee_validate__["default"], {//delay: 1000
});
Vue.use(__WEBPACK_IMPORTED_MODULE_4_v_tooltip__["a" /* default */]);
Vue.use(__WEBPACK_IMPORTED_MODULE_1_portal_vue___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_3_vue_wysiwyg___default.a, {
  hideModules: {
    "headings": true,
    "code": true,
    "image": true
  },
  customModules: [__WEBPACK_IMPORTED_MODULE_6__components_wysiwyg_SpecialCharacter__["a" /* default */]],
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
    'removeFormat': '<span class="icon"><i class="fas fa-eraser"></i></span>'
  },
  forcePlainTextOnPaste: true
});
Vue.use(__WEBPACK_IMPORTED_MODULE_2_buefy___default.a);
/**
 * Import Pug to allow for fully extendable Vue components
 */
// window.Pug = require('pug');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__("./node_modules/axios/index.js");
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};
window.axios.defaults.timeout = 10000;
__WEBPACK_IMPORTED_MODULE_0_axios_retry___default()(window.axios, {
  retries: 5,
  retryCondition: function retryCondition(error) {
    return !error.response || error.response.status == 400;
  }
});
/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push(function (request, next) {
  request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
  next();
});
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

Array.prototype.clone = function () {
  return this.slice(0);
};

/***/ }),

/***/ "./resources/assets/js/components/AJAX-List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AJAX_List_vue_vue_type_template_id_0d7862c4___ = __webpack_require__("./resources/assets/js/components/AJAX-List.vue?vue&type=template&id=0d7862c4&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AJAX_List_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/AJAX-List.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__AJAX_List_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__AJAX_List_vue_vue_type_template_id_0d7862c4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__AJAX_List_vue_vue_type_template_id_0d7862c4___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('0d7862c4', component.options)
    } else {
      api.reload('0d7862c4', component.options)
    }
    module.hot.accept("./AJAX-List.vue?vue&type=template&id=0d7862c4&", function () {
      api.rerender('0d7862c4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/AJAX-List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AJAX-List.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AJAX_List_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AJAX-List.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AJAX_List_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/AJAX-List.vue?vue&type=template&id=0d7862c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AJAX_List_vue_vue_type_template_id_0d7862c4___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AJAX-List.vue?vue&type=template&id=0d7862c4&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AJAX_List_vue_vue_type_template_id_0d7862c4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AJAX_List_vue_vue_type_template_id_0d7862c4___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/Bookmark.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bookmark_vue_vue_type_template_id_5dd2936d___ = __webpack_require__("./resources/assets/js/components/Bookmark.vue?vue&type=template&id=5dd2936d&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bookmark_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Bookmark.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Bookmark_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Bookmark_vue_vue_type_template_id_5dd2936d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Bookmark_vue_vue_type_template_id_5dd2936d___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('5dd2936d', component.options)
    } else {
      api.reload('5dd2936d', component.options)
    }
    module.hot.accept("./Bookmark.vue?vue&type=template&id=5dd2936d&", function () {
      api.rerender('5dd2936d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Bookmark.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Bookmark.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmark_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Bookmark.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmark_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Bookmark.vue?vue&type=template&id=5dd2936d&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmark_vue_vue_type_template_id_5dd2936d___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Bookmark.vue?vue&type=template&id=5dd2936d&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmark_vue_vue_type_template_id_5dd2936d___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmark_vue_vue_type_template_id_5dd2936d___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/Button.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue_vue_type_template_id_86da59ae___ = __webpack_require__("./resources/assets/js/components/Button.vue?vue&type=template&id=86da59ae&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Button.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Button_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Button_vue_vue_type_template_id_86da59ae___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Button_vue_vue_type_template_id_86da59ae___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('86da59ae', component.options)
    } else {
      api.reload('86da59ae', component.options)
    }
    module.hot.accept("./Button.vue?vue&type=template&id=86da59ae&", function () {
      api.rerender('86da59ae', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Button.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Button.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Button.vue?vue&type=template&id=86da59ae&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_86da59ae___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Button.vue?vue&type=template&id=86da59ae&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_86da59ae___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_86da59ae___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/DataList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataList_vue_vue_type_template_id_ee5496c2___ = __webpack_require__("./resources/assets/js/components/DataList.vue?vue&type=template&id=ee5496c2&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataList_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/DataList.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__DataList_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__DataList_vue_vue_type_template_id_ee5496c2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__DataList_vue_vue_type_template_id_ee5496c2___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('ee5496c2', component.options)
    } else {
      api.reload('ee5496c2', component.options)
    }
    module.hot.accept("./DataList.vue?vue&type=template&id=ee5496c2&", function () {
      api.rerender('ee5496c2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/DataList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/DataList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataList_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DataList.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataList_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/DataList.vue?vue&type=template&id=ee5496c2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataList_vue_vue_type_template_id_ee5496c2___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DataList.vue?vue&type=template&id=ee5496c2&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataList_vue_vue_type_template_id_ee5496c2___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataList_vue_vue_type_template_id_ee5496c2___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/Map.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Map_vue_vue_type_template_id_20909bf5___ = __webpack_require__("./resources/assets/js/components/Map.vue?vue&type=template&id=20909bf5&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Map.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Map_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Map_vue_vue_type_template_id_20909bf5___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Map_vue_vue_type_template_id_20909bf5___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('20909bf5', component.options)
    } else {
      api.reload('20909bf5', component.options)
    }
    module.hot.accept("./Map.vue?vue&type=template&id=20909bf5&", function () {
      api.rerender('20909bf5', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Map.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Map.vue?vue&type=template&id=20909bf5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_20909bf5___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Map.vue?vue&type=template&id=20909bf5&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_20909bf5___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_20909bf5___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/Notification.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_vue_vue_type_template_id_66002d22___ = __webpack_require__("./resources/assets/js/components/Notification.vue?vue&type=template&id=66002d22&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Notification_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Notification_vue_vue_type_template_id_66002d22___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Notification_vue_vue_type_template_id_66002d22___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('66002d22', component.options)
    } else {
      api.reload('66002d22', component.options)
    }
    module.hot.accept("./Notification.vue?vue&type=template&id=66002d22&", function () {
      api.rerender('66002d22', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Notification.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Notification.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/Notification.vue?vue&type=template&id=66002d22&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66002d22___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Notification.vue?vue&type=template&id=66002d22&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66002d22___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66002d22___["b"]; });


/***/ }),

/***/ "./resources/assets/js/components/wysiwyg/SpecialCharacter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpecialCharacter_vue_vue_type_template_id_3ae5372e___ = __webpack_require__("./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=template&id=3ae5372e&");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpecialCharacter_vue_vue_type_script_lang_js___ = __webpack_require__("./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__SpecialCharacter_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__SpecialCharacter_vue_vue_type_template_id_3ae5372e___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__SpecialCharacter_vue_vue_type_template_id_3ae5372e___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/etc/httpd/docs/alglang.localhost/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3ae5372e', component.options)
    } else {
      api.reload('3ae5372e', component.options)
    }
    module.hot.accept("./SpecialCharacter.vue?vue&type=template&id=3ae5372e&", function () {
      api.rerender('3ae5372e', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/components/wysiwyg/SpecialCharacter.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecialCharacter_vue_vue_type_script_lang_js___ = __webpack_require__("./node_modules/babel-loader/lib/index.js??ref--4-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=script&lang=js&");
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecialCharacter_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ "./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=template&id=3ae5372e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecialCharacter_vue_vue_type_template_id_3ae5372e___ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/wysiwyg/SpecialCharacter.vue?vue&type=template&id=3ae5372e&");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecialCharacter_vue_vue_type_template_id_3ae5372e___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecialCharacter_vue_vue_type_template_id_3ae5372e___["b"]; });


/***/ }),

/***/ "./resources/assets/js/polyfill/scrollIntoViewIfNeeded.js":
/***/ (function(module, exports) {

/**
 * Polyfill for Webkit scrollIntoViewIfNeeded()
 *
 * from https://gist.github.com/jocki84/6ffafd003387179a988e by jocki84
 */
if (!Element.prototype.scrollIntoViewIfNeeded) {
  Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
    "use strict";

    function makeRange(start, length) {
      return {
        "start": start,
        "length": length,
        "end": start + length
      };
    }

    function coverRange(inner, outer) {
      if (false === centerIfNeeded || outer.start < inner.end && inner.start < outer.end) {
        return Math.max(inner.end - outer.length, Math.min(outer.start, inner.start));
      }

      return (inner.start + inner.end - outer.length) / 2;
    }

    function makePoint(x, y) {
      return {
        "x": x,
        "y": y,
        "translate": function translate(dX, dY) {
          return makePoint(x + dX, y + dY);
        }
      };
    }

    function absolute(elem, pt) {
      while (elem) {
        pt = pt.translate(elem.offsetLeft, elem.offsetTop);
        elem = elem.offsetParent;
      }

      return pt;
    }

    var target = absolute(this, makePoint(0, 0)),
        extent = makePoint(this.offsetWidth, this.offsetHeight),
        elem = this.parentNode,
        origin;

    while (elem instanceof HTMLElement) {
      // Apply desired scroll amount.
      origin = absolute(elem, makePoint(elem.clientLeft, elem.clientTop));
      elem.scrollLeft = coverRange(makeRange(target.x - origin.x, extent.x), makeRange(elem.scrollLeft, elem.clientWidth));
      elem.scrollTop = coverRange(makeRange(target.y - origin.y, extent.y), makeRange(elem.scrollTop, elem.clientHeight)); // Determine actual scroll amount by reading back scroll properties.

      target = target.translate(-elem.scrollLeft, -elem.scrollTop);
      elem = elem.parentNode;
    }
  };
}

/***/ }),

/***/ "./resources/assets/js/util/SpecialCharacters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpecialCharacter */
/* unused harmony export Diacritic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dictionary; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpecialCharacter =
/*#__PURE__*/
function () {
  function SpecialCharacter(symbol, code) {
    _classCallCheck(this, SpecialCharacter);

    this.symbol = symbol;
    this.code = code;
  }

  _createClass(SpecialCharacter, [{
    key: "triggeredBy",
    value: function triggeredBy(key) {
      return key == this.code;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return "Alt + " + this.code;
    }
  }, {
    key: "insertInto",
    value: function insertInto(string, index) {
      return string.substr(0, index) + this.symbol + string.substr(index);
    }
  }]);

  return SpecialCharacter;
}();

var Diacritic =
/*#__PURE__*/
function (_SpecialCharacter) {
  _inherits(Diacritic, _SpecialCharacter);

  function Diacritic(symbol, code, modificationTable) {
    var _this;

    _classCallCheck(this, Diacritic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Diacritic).call(this, symbol, code));
    _this.table = modificationTable || {};
    return _this;
  }

  _createClass(Diacritic, [{
    key: "modify",
    value: function modify(letter) {
      if (letter in this.table) {
        return this.table[letter];
      }

      return letter + this.symbol;
    }
  }, {
    key: "insertInto",
    value: function insertInto(string, index) {
      var left = string.slice(0, index);
      var right = string.slice(index);

      if (length.length == 0) {
        return left + this.symbol + right;
      }

      return left.slice(0, -1) + this.modify(left[left.length - 1]) + right;
    }
  }]);

  return Diacritic;
}(SpecialCharacter);

var dictionary = [// Consonants
[new SpecialCharacter("ʃ", "5"), new SpecialCharacter("š", "s"), new SpecialCharacter("č", "c"), new SpecialCharacter("θ", "t"), new SpecialCharacter("ŋ", "n"), new SpecialCharacter("ɾ", "r"), new SpecialCharacter("ð", "d"), new SpecialCharacter("ʔ", "?"), new SpecialCharacter("∅", "0")], // Vowels
[new SpecialCharacter("ɑ", "A"), new SpecialCharacter("æ", "a"), new SpecialCharacter("ɔ", "o"), new SpecialCharacter("ɛ", "3"), new SpecialCharacter("ə", "e")], // Diacritics
[new Diacritic("\u0301", "'", {
  'a': 'á',
  'e': 'é',
  'i': 'í',
  'o': 'ó',
  'u': 'ú',
  'ǽ': 'ǽ'
}), // Acute
new Diacritic("\u0300", "`", {
  'a': 'à',
  'e': 'è',
  'i': 'ì',
  'o': 'ò',
  'u': 'ù'
}), // Grave
new Diacritic("\u0302", "^", {
  'a': 'â',
  'e': 'ê',
  'i': 'î',
  'o': 'ô',
  'u': 'û'
}), // Circumflex
new Diacritic("\u0306", "u", {
  'a': 'ă',
  'e': 'ĕ',
  'i': 'ĭ',
  'o': 'ŏ',
  'u': 'ŭ'
}), // Breve
new Diacritic("\u0304", "-", {
  'a': 'ā',
  'e': 'ē',
  'i': 'ī',
  'o': 'ō',
  'u': 'ū'
}), // Macron
new Diacritic("\u0303", "~", {
  'a': 'ã',
  'e': 'ẽ',
  'i': 'ĩ',
  'o': 'õ',
  'u': 'ũ'
}), // Tilde
new Diacritic("ː", ":"), new Diacritic("·", "."), new Diacritic("\u0325", null), // Voiceless
new SpecialCharacter("→", null)]];


/***/ }),

/***/ "./resources/assets/js/validation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function hasMorpheme(value, target) {
  var found = false;
  var segments = value.split('-');

  for (var i = 0; i < segments.length && !found; i++) {
    var tokens = segments[i].split('|');
    var morpheme = tokens[tokens.length - 1];
    found = morpheme === target;
  }

  return found;
}

function hasTag(value, target) {
  var result = true;

  if (value.length > 0) {
    result = value.find(function (item) {
      return target.includes(item.name.replace(/[-*]/g, ''));
    });
  }

  return typeof result !== 'undefined';
}

__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('datalist_required', {
  getMessage: function getMessage(field) {
    return "The " + field + " field is required.";
  },
  validate: function validate(value) {
    return value.text && value.text.length > 0;
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('datalist_exists', {
  getMessage: function getMessage(field) {
    return "The " + field + " field is invalid.";
  },
  validate: function validate(value) {
    return value.text.length == 0 || isNumeric(value.id);
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('isHyphenated', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field is invalid. (Make sure there is a hyphen on one or both sides.)";
  },
  validate: function validate(value, args) {
    return value.charAt(0) == '-' || value.charAt(value.length - 1) == '-';
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('noInternalHyphens', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field should only contain one morpheme.";
  },
  validate: function validate(value, args) {
    var index = value.substring(1).indexOf('-');
    return index < 0 || index == value.length - 2;
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('hasMorpheme', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field must contain a " + args[0] + " morpheme.";
  },
  validate: function validate(value, args) {
    return hasMorpheme(value, args[0]);
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('notHasMorpheme', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field cannot contain a " + args[0] + " morpheme.";
  },
  validate: function validate(value, args) {
    return !hasMorpheme(value, args[0]);
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('hasTag', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field must contain a " + args[0] + " morpheme.";
  },
  validate: function validate(value, args) {
    return hasTag(value, args);
  }
});
__WEBPACK_IMPORTED_MODULE_0_vee_validate__["Validator"].extend('notHasTag', {
  getMessage: function getMessage(field, args) {
    return "The " + field + " field cannot contain an abstract stem.";
  },
  validate: function validate(value, args) {
    return value.length == 0 || !hasTag(value, args);
  }
});

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);