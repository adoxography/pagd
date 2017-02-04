<template>
	<div>
		<div :class="{ 'tabs': tabs.length > 0}">
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
</template>

<script>
	export default {
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
	}
</script>