<template lang="pug">
	include Tag-Input.pug
</template>

<script>
import InputTag from 'vue-input-tag';
import draggable from 'vuedraggable';
import VueTypeahead from 'vue-typeahead';
import { directive as onClickaway } from 'vue-clickaway';
import { invertColour as fontColour } from '../util/Colour'

export default {
	extends: InputTag,

	mixins: [VueTypeahead],

	directives: {
		onClickaway: onClickaway
	},

	props: {
		source: {
			default: []
		},

		tags: {
			default: []
		},

		name: {
			type: String
		},

		allowHyphens: {
			type: Boolean,
			default: true
		},

		allowPeriods: {
			type: Boolean,
			default: true
		},

		allowDuplicates: {
			type: Boolean,
			default: true
		},

		allowNew: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		src() {
			if (_.isString(this.source) && this.ajaxOptions) {
				let options = '';

				_.forEach(this.ajaxOptions(), (value, key) => {
					if (options.length > 0) {
						options += '&';
					}

					options += `options[${key}]=${value}`;
				});

				if (options.length > 0) {
					options = '?' + options;
				}

				return this.source + options;
			}

			return this.source;
		}
	},

	data() {
		return {
			keyCodes: [13, 188, 9],
			$http: axios,
			queryParamName: 'term',
			defaultColor: "#fff74a"
		};
	},

	components: {
		draggable
	},

	created() {
		if (!this.allowHyphens) {
			this.keyCodes.push(189);
		}

		if (!this.allowPeriods) {
			this.keyCodes.push(110, 190);
		}
	},

	mounted() {
		this.query = () => {
			return this.newTag;
		}
	},

	methods: {
		triggerUpdate() {
			if (Array.isArray(this.src)) {
				this.filter();
			} else {
				this.update();
			}
		},

		filter() {
			this.items = this.source.filter(item => {
				return item.name.toLowerCase().includes(this.newTag.toLowerCase());
			});
		},

		onHit(item) {
			if (_.isString(item)) {
				item = {
					name: item,
					color: "#fff74a",
					id: 0
				}
			}

			this.addNew(item);
			this.items = [];
			this.resetActive();
			this.$emit('input', this.tags);
		},

		removeTag(index) {
			this.remove(index);
			this.$forceUpdate();
			this.$emit('input', this.tags);
		},

		toggleList() {
			if (this.hasItems) {
				this.items = [];
			} else {
				this.triggerUpdate();

				if (!this.hasItems && Array.isArray(this.source)) {
					this.items = this.source;
				}
			}
		},

		onEnter(event) {
			if (this.keyCodes.indexOf(event.keyCode) >= 0) {
				if (this.current >= 0) {
					event.preventDefault();
					this.hit();
				} else if (this.newTag.length > 0 && this.allowNew) {
					event.preventDefault();
					this.onHit(this.newTag);
				}
			} else if (event.keyCode == 46 || event.keyCode == 8) { // delete or backspace
				this.removeLastTag();
			} else if (event.keyCode == 38) { // up
				this.up();
			} else if (event.keyCode == 40) { // down
				if (this.hasItems) {
					this.down();
				} else {
					this.toggleList();
				}
			}
		},

		resetActive() {
			this.current = -1;
		},

	    addNew (tag) {
	        if (tag && (this.tags.indexOf(tag) === -1 || this.allowDuplicates) && this.validateIfNeeded(tag)) {
	          	this.tags.push(tag)
	          	this.tagChange()
	        }
	        this.newTag = ''
	    },

	    prepareResponseData(data) {
	    	for (let i = 0; i < data.length; i++) {
	    		data[i]['name'] = data[i].name.replace(/<\/?a(?=[ >])[^>]*>/gi, ""); // Get rid of anchor tags
	    	}

	    	return data;
	    },

	    closeList() {
	    	this.items = [];
	    },

	    // Override if desired
	    onClickTag(tag) {},

	    fontColour: fontColour
	}
}
</script>

<style>
.vue-input-tag-wrapper {
	overflow: initial;
}

.vue-input-tag-wrapper .new-tag {
	margin: 0;
	color: initial;
	font-size: 1rem;
	width: initial;
}

.tags-field .tag {
	font-size: 1rem;
}

.tags-field .tag span {
	cursor: default;
}

.typeahead-dropdown {
	position: absolute;
	z-index: 1000;
	padding: 0;
}

li.active {
	background-color: grey;
}
</style>
