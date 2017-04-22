<template>
	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Proto-Algonquian
			</p>
			<a class="card-header-icon" @click="toggleMenu" title="Menu">
				<span class="icon">
					<i class="fa fa-angle-double-right" v-if="isOpen"></i>
					<i class="fa fa-angle-double-left" v-else></i>
				</span>
			</a>
		</header>
		<div>
			<div class="language-menu" :class="{ 'is-open': isOpen }" v-on-clickaway="clickaway">
				<nav class="panel">
					<div class="panel-tabs">
						<a v-for="tab in tabs" :class="{ 'is-active': tab.name == activeTab.name }" @click="activeTab = tab">
							<nobr>{{ tab.name }}</nobr>
						</a>
					</div>
					<a v-for="subtab in activeTab.subtabs" class="panel-block" :class="{ 'is-active': subtab.name == activeSubtab.name }" @click="onClickSubtab(subtab)">
						<span class="panel-icon">
							<i class="fa fa-circle"></i>
						</span>
						{{ subtab.name }}
					</a>
				</nav>
			</div>
			<div class="card-content">
				<div class="content">
					<div 
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import  { directive as onClickaway } from 'vue-clickaway';

export default {
	data() {
		return {
			isOpen: true,
			tabs: [],
			subtabs: [],
			activeTab: {},
			activeSubtab: ''
		}
	},

	directives: {
		onClickaway: onClickaway
	},

	created() {
		this.tabs = this.$children;
	},

	mounted() {
		this.activeTab = this.tabs[0];

		this.tabs.forEach(tab => {
			this.subtabs = this.subtabs.concat(tab.subtabs);
		});

		this.activeSubtab = this.subtabs[0];

		this.selectSubtab(this.activeSubtab);
	},

	methods: {
		toggleMenu() {
			if(this.isOpen) {
				this.isOpen = false;
			} else {
				this.isOpen = true;
				this.justOpened = true;
			}
		},

		clickaway() {
			if(this.isOpen) {
				if(this.justOpened) {
					this.justOpened = false;
				} else {
					this.isOpen = false;
				}
			}
		},

		onClickSubtab(subtab) {
			this.activeSubtab = subtab;

			this.selectSubtab(subtab);

			// this.isOpen = false;
		},

		selectSubtab(subtab) {
			this.subtabs.forEach(currSubtab => {
				currSubtab.show = currSubtab.name == subtab.name;
			});
		}
	}
}
</script>