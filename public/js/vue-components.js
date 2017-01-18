Vue.component("form-search-form", {
	props: ['arguments', 'classes', 'modes', 'orders'],
	template: `
		<form>
			<div v-for="line in lines" class="box">
				<div class="columns">

					<div class="column">
						<h5 class="title is-5">Class</h5>
						<p class="control">
							<span class="select">
								<select name="classes[]" v-model="line.formClass">
									<option v-for="formClass in classArray" :value="formClass.id">{{ formClass.name }}</option>
								</select>
							</span>
						</p>
					</div>

					<div class="column">
						<h5 class="title is-5">Arguments</h5>
						<div class="control is-horizontal">
							<div class="control is-grouped">
								<p class="control">
									<span class="select">
										<select name="subjects[]" v-model="line.subject">
											<option v-for="argument in argumentArray" :value="argument.id">{{ argument.name }}</option>
										</select>
									</span>
								</p>								
								<p class="control">
									<span class="select">
										<select name="primaryObjects[]" v-model="line.primaryObject">
											<option value="0">None</option>
											<option v-for="argument in argumentArray" :value="argument.id">{{ argument.name }}</option>
										</select>
									</span>
								</p>								
								<p class="control">
									<span class="select">
										<select name="secondaryObjects[]" v-model="line.secondaryObject">
											<option value="0">None</option>
											<option v-for="argument in argumentArray" :value="argument.id">{{ argument.name }}</option>
										</select>
									</span>
								</p>
							</div>
						</div>
					</div>

					<div class="column">
						<h5 class="title is-5">Order</h5>
						<p class="control">
							<span class="select">
								<select name="orders[]" v-model="line.order">
									<option v-for="order in orderArray" :value="order.id">{{ order.name }}</option>
								</select>
							</span>
						</p>
					</div>					

					<div class="column">
						<h5 class="title is-5">Order</h5>
						<p class="control">
							<span class="select">
								<select name="modes[]" v-model="line.mode">
									<option v-for="mode in modeArray" :value="mode.id">{{ mode.name }}</option>
								</select>
							</span>
						</p>
					</div>

					<div class="column">
						<p class="control">
							<label class="radio">
								<input :name="'searchAll['+line.index+']'" type="radio" class="radio" v-model="line.searchAllLanguages" value="true" />
								All languages
							</label>
						<p>						
						<p class="control">
							<label class="radio">
								<input name="searchAll" type="radio" class="radio" v-model="line.searchAllLanguages" value="false" />
								The following languages...
							</label>
							<div class="box">
								<p class="control">
									<input type="text" class="input" :disabled="line.searchAllLanguages == 'true'" v-model="line.language" />
								</p>
							</div>
						<p>
					</div>

				</div>
			</div>

			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<button type="submit" class="button is-success">Search</button>
					</div>
				</div>
				<div class="level-right">
					<div class="level-item">
						<a class="button is-info" @click="addLine" :disabled="numLines >= 10" title="Add">
							<span class="icon">
								<i class="fa fa-plus"></i>
							</span>
						</a>
					</div>
					<div class="level-item">
						<a class="button is-info" @click="removeLine" :disabled="numLines <= 1" title="Remove">
							<span class="icon">
								<i class="fa fa-minus"></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</form>
	`,

	data() {
		return {
			argumentArray: [],
			classArray: [],
			modeArray: [],
			orderArray: [],

			lines: [{
				index: 0,

				name: "",
				formClass: 1,
				subject: 1,
				primaryObject: 0,
				secondaryObject: 0,
				order: 1,
				mode: 1,
				language: '',

				searchAllLanguages: "true"
			}]
		};
	},

	computed: {
		numLines() {
			return this.lines.length;
		}
	},

	created() {
		this.argumentArray = JSON.parse(this.arguments);
		this.classArray = JSON.parse(this.classes);
		this.modeArray = JSON.parse(this.modes);
		this.orderArray = JSON.parse(this.orders);
	},

	methods: {
		addLine() {
			if(this.numLines < 10) {
				let newLine = JSON.parse(JSON.stringify(this.lines[this.lines.length - 1]));
				newLine.index++;
				this.lines.push(newLine);
			}
		},

		removeLine() {
			if(this.numLines > 1){
				this.lines.pop();
			}
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

Vue.component("alg-tab", {
	props: {
		name: { required: true },
		selected: { default: false }
	},

	template: `
		<div class="content" v-show="isActive">
			<div class="tabs-details">
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	`,

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

Vue.component("model-index", {
	template: `
		<ul class="box">
			<slot>Nothing to display!</slot>
		</ul>
	`
});

Vue.component("model-index-line", {
	props: ['name', 'model', 'id'],
	template: `
		<li class="level">
			<div class="level-left">
				<div class="level-item">
					<a :href="'/'+model+'/'+id">{{ name }}</a>
				</div>
			</div>
			<slot></slot>
		</li>
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