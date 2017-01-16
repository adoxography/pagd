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
				<button class="delete" @click="hide"></button>
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
		hide() {
			this.isVisible = false;
		}
	}
});

new Vue({
	el: '#root'
});