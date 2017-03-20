<template>
	<div>
		<div :class="{ 'tabs': tabs.length > 0}">
			<ul>
				<li v-for="tab in tabs" :class="{'is-active': tab.isActive }" style="margin-top: 0;">
					<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
				</li>
			</ul>
		</div>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['active'],

		data() {
			return {
				tabs: []
			};
		},

		created() {
			this.tabs = this.$children;
		},

		mounted() {
			if(!this.active) {
				let hash = location.hash;

				if(hash != '') {
					this.tabs.forEach(tab => {
						tab.isActive = (tab.href == location.hash);
					});
				}
			}
			else {
				this.selectTabByName(this.active);
			}
		},

		methods: {
			selectTab(targetTab) {
				this.selectTabByName(targetTab.name);

				this.$emit('tabChanged', targetTab.name);
			},

			selectTabByName(name) {
				this.tabs.forEach(tab => {
					tab.isActive = (tab.name === name);
				});
			}
		}
	}
</script>