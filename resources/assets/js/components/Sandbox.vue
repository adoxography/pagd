<template>
	<div>
		<transition name="fade">
			<div class="field tags-field" v-show="tags.length > 0" style="margin-bottom: 0;">
				<div class="control">
					<div class="input">
						<draggable v-model="tags">
							<span
								v-for="(tag, index) in tags"
								:key="index"
								class="tag"
								:style="{ 'background-color': tag.colour ? tag.colour : defaultColor, 'color' : fontColour(tag.colour ? tag.colour : defaultColor) }"
							>
						      	<span v-html="tag.name"></span>
						      	<a v-if="!readOnly" @click.prevent.stop="remove(index)" class="delete is-small"></a>
						      	<input type="hidden" v-model="tag.name" :name="name + '['+index+'][name]'" />
						      	<input type="hidden" v-model="tag.id" :name="name + '['+index+'][id]'" />
					    	</span>
						</draggable>
					</div>
				</div>
			</div>
		</transition>
		<div class="alg-datalist alg-datalist-container" v-on-clickaway="closeList">
			<div class="field has-addons" style="margin-bottom: 0;">
				<div class="control is-expanded" :class="{ 'is-loading': loading }">
			    	<input
			    		v-if="!readOnly"
			    		:placeholder="placeholder"
			    		type="text"
			    		v-model="newTag"
			    		@keydown="onEnter($event)"
			    		@input="triggerUpdate"
			    		class="input"
			    	/>
			  	</div>
			  	<div class="control">
			  		<a class="button" @click="toggleList">
				  		<span class="icon">
				  			<i class="fa fa-angle-down"></i>
				  		</span>
			  		</a>
			  	</div>
		  	</div>

			<div class="box alg-datalist-dropdown" v-show="hasItems" @mouseleave="resetActive">
				<ul>
					<li v-for="(item, $item) in items" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
						<span v-html="item.name"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>

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

		name: {
			type: String
		},

		allowHyphens: {
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
			if (Array.isArray(this.source)) {
				return this.source
			} else if (_.isString(this.source)) {
				return this.source + "?options[language]=1";
			}
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
			this.items = this.src.filter(item => {
				return item.name.toLowerCase().includes(this.query.toLowerCase());
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