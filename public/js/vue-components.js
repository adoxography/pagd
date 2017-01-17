Vue.component("form-search-dropdown", {
	props: {
		options: {
			type: Array
		},
		name: {
			type: String
		},
		nullable: {
			default: false
		}
	},
	template: `
		<p class="control">
			<span class="select">
				<select :name="name" @input="updateSelection($event.target.value)">
					<option v-if="nullable" value="0">None</option>
					<option v-for="option in options" :value="option.id">{{ option.name }}</option>
				</select>
			</span>
		</p>
	`,
	methods: {
		updateSelection(newSelection) {
			this.$emit('input', newSelection);
		}
	}
})

Vue.component("form-search-form", {
	props: ['arguments','classes','modes','orders'],

	template: `
		<form class="box">
			<div class="columns">
				<div class="column box">
					<h5 class="title is-5">Class</h5>
					<form-search-dropdown name="classes[]" v-model="classValue" :options="classArray"></form-search-dropdown>
				</div>
				<div class="column box">
					<h5 class="title is-5">Arguments</h5>
					<div class="control is-horizontal">
						<div class="control is-grouped">
							<form-search-dropdown name="subjects[]" v-model="subjectValue" :options="argumentArray"></form-search-dropdown>							
							<form-search-dropdown name="primaryObjects[]" v-model="primaryObjectValue" :options="argumentArray" nullable="true"></form-search-dropdown>								
							<form-search-dropdown name="secondaryObjects[]" v-model="secondaryObjectValue" :options="argumentArray" nullable="true"></form-search-dropdown>								
						</div>
					</div>
				</div>
				<div class="column box">
					<h5 class="title is-5">Order</h5>
					<form-search-dropdown name="orders[]" v-model="orderValue" :options="orderArray"></form-search-dropdown>
				</div>				
				<div class="column box">
					<h5 class="title is-5">Mode</h5>
					<form-search-dropdown name="modes[]" v-model="modeValue" :options="modeArray"></form-search-dropdown>
				</div>
				<div class="column box">
					<p class="control">
						<label class="radio">
							<input type="radio" name="allLanguages" v-model="languageSearchChoice" value="all" @change="selectAllLanguages" />
							All languages
						</label>
					</p>					
					<p class="control">
						<label class="radio">
							<input type="radio" name="allLanguages" v-model="languageSearchChoice" value="some" />
							The following languages...
						</label>
					</p>
					<div class="box">
						<p class="control">
							<input type="text" class="input" name="languages[]" v-model="languageValue" :disabled="this.languageSearchChoice == 'all'" />
						</p>
					</div>
				</div>
			</div>
			<button type="submit" class="button is-success">Search</button>
		</form>
	`,

	data() {
		return {
			argumentArray: [],
			classArray: [],
			modeArray: [],
			orderArray: [],

			classValue: 1,
			modeValue: 1,
			orderValue: 1,
			primaryObjectValue: 0,
			secondaryObjectValue: 0,
			subjectValue: 1,

			languageSearchChoice: 'all',

			languageValue: ''
		};
	},

	created() {
		this.classArray = JSON.parse(this.classes);
		this.argumentArray = JSON.parse(this.arguments);
		this.orderArray = JSON.parse(this.orders);
		this.modeArray = JSON.parse(this.modes);
	},

	methods: {
		selectAllLanguages() {
			this.languageValue = '';
		}
	}
});

Vue.component("alg-tabs", {
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{'is-active': tab.isActive }">
						<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
					</li>
				</ul>
			</div>

			<div class="tabs-details">
				<slot></slot>
			</div>
		</div>
	`,

	data() {
		return {
			tabs: []
		};
	},

	created() {
		this.tabs = this.$children;
	},

	mounted() {
		let hash = location.hash;

		if(hash != '') {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.href == location.hash);
			});
		}
	},

	methods: {
		selectTab(targetTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == targetTab.name);
			});
		}
	}
});

Vue.component("model-card-tab", {
	template: `
		<div class="card-content" v-show="isActive">
			<div class="tabs-details">
				<div class="content">
					<div class="columns is-multiline">
						<slot></slot>
					</div>
					<div class="level">
						<div class="level-right">
							<slot name="tags"></slot>
						</div>					
					</div>
				</div>
			</div>
		</div>
	`,

	props: {
		name: { required: true },
		selected: { default: false }
	},

	data() {
		return {
			isActive: false
		};
	},

	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {
		this.isActive = this.selected;
	}
});

Vue.component("model-card", {
	template: `
		<div class="card">

			<header class="card-header">
				<p class="card-header-title is-4" style="font-size: 20px;">
					<slot name="header"></slot>
				</p>
			</header>

			<alg-tabs>
				<slot></slot>
			</alg-tabs>

			<footer class="card-footer">
				<slot name="footer"></slot>
			</footer>
		</div>
	`
});

Vue.component("field-card", {
	props: ['width'],
	template: `
		<div class="column" :class="width">
		<div class="card" style="box-shadow:none;">
			<div class="card-header">
				<slot name="label"></slot>
			</div>
			<div class="card-content">
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	`
});

Vue.component("alg-message", {
	template: `
		<article class="message is-info" v-show="this.isVisible">
			<div class="message-header">
				<p>
					<slot name="header"></slot>
				</p>
				<button class="delete" @click="hide($event)"></button>
			</div>
			<div class="message-body">
				<slot></slot>
			</div>
		</article>
	`,

	data() {
		return {
			isVisible: true
		};
	},

	methods: {
		hide(event) {
			event.preventDefault();
			this.isVisible = false;
		}
	}
});

new Vue({
	el: '#root'
});