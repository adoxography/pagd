
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('alg-datalist',       require('./components/DataList.vue'));
Vue.component('alg-multi-datalist', require('./components/Multi-DataList.vue'));
Vue.component('alg-tabs',           require('./components/Tabs.vue'));
Vue.component('alg-tab',            require('./components/Tab.vue'));
Vue.component('model-card-tab',     require('./components/Model-Tab.vue'));
Vue.component('alg-message',        require('./components/Message.vue'));

Vue.component("form-search-form", {
	props: ['arguments', 'classes', 'modes', 'orders', 'languages'],
	template: `
		<form class="form-search-form" method="GET" action="/search/form">
			<div class="columns">
				<div class="column is-one-quarter">
					<p class="control">
						<label class="radio">
							<input name="searchAll" type="radio" class="radio" v-model="searchAllLanguages" :value="true" />
							All languages
						</label>
					</p>
					<p class="control">
						<label class="radio">
							<input name="searchAll" type="radio" class="radio" v-model="searchAllLanguages" :value="false" />
							The following languages...
						</label>
						<div class="box">
							<alg-multi-datalist :list="languages" name="languages[]" :disabled="searchAllLanguages"></alg-multi-datalist>
						</div>
					</p>
				</div>
				<div class="column">
					<div v-for="(line, index) in lines" class="box">
						<div class="columns">

							<div class="column">
								<h5 class="title is-5">Class</h5>
								<p class="control" style="padding-top: 1.5rem;">
									<span class="select">
										<select name="classes[]" v-model="line.formClass">
											<option v-for="formClass in classArray" :value="formClass.id">{{ formClass.name }}</option>
										</select>
									</span>
								</p>
							</div>

							<div class="column">
								<h5 class="title is-5" style="margin-bottom: 1rem;">Arguments</h5>
								<div class="control is-horizontal">
									<div class="control is-grouped">
										<p class="control">
											<label class="label argument-label">Subject</label>
											<span class="select">
												<select name="subjects[]" v-model="line.subject">
													<option v-for="argument in argumentArray" :value="argument.id">{{ argument.name }}</option>
												</select>
											</span>
										</p>								
										<p class="control">
											<label class="label argument-label">P. Object</label>
											<span class="select">
												<select name="primaryObjects[]" v-model="line.primaryObject">
													<option value="0">None</option>
													<option v-for="argument in argumentArray" :value="argument.id">{{ argument.name }}</option>
												</select>
											</span>
										</p>								
										<p class="control">
											<label class="label argument-label">S. Object</label>
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
								<p class="control" style="padding-top: 1.5rem;">
									<span class="select">
										<select name="orders[]" v-model="line.order">
											<option v-for="order in orderArray" :value="order.id">{{ order.name }}</option>
										</select>
									</span>
								</p>
							</div>					

							<div class="column">
								<h5 class="title is-5">Mode</h5>
								<p class="control" style="padding-top: 1.5rem;">
									<span class="select">
										<select name="modes[]" v-model="line.mode">
											<option v-for="mode in modeArray" :value="mode.id">{{ mode.name }}</option>
										</select>
									</span>
								</p>
							</div>

							<div class="column">
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="isNegative[]" v-model="line.isNegative" />
										Negative
									</label>
								</p>								
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" name="isDiminutive[]" v-model="line.isDiminutive" />
										Diminutive
									</label>
								</p>
							</div>
						</div>
					</div>
					<div class="level">
						<div class="level-left">
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
				</div>
			</div>
			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<button type="submit" class="button is-success">Search</button>
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
				formClass: 1,
				subject: 1,
				primaryObject: 0,
				secondaryObject: 0,
				order: 1,
				mode: 1,
				isNegative: false,
				isDiminutive: false
			}],

			searchAllLanguages: true
		};
	},

	computed: {
		numLines() {
			return this.lines.length;
		}
	},

	created() {
		this.argumentArray = JSON.parse(this.arguments);
		this.classArray    = JSON.parse(this.classes);
		this.modeArray     = JSON.parse(this.modes);
		this.orderArray    = JSON.parse(this.orders);
	},

	methods: {
		addLine() {
			if(this.numLines < 10) {
				let newLine = JSON.parse(JSON.stringify(this.lines[this.lines.length - 1]));
				this.lines.push(newLine);
			}
		},

		removeLine() {
			if(this.numLines > 1){
				this.lines.pop();
			}
		},

		addLanguage(line) {
			if(line.numLanguages < 5) {
				line.numLanguages++;
			}
		},

		removeLanguage(line) {
			if(line.numLanguages > 1) {
				line.numLanguages--;
			}
		}
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
		<div class="column" :class="{'width': width}">
		<div class="card" style="box-shadow:none;">
			<div class="card-header" style="box-shadow:none;">
				<slot name="label"></slot>
			</div>
			<div class="card-content" style="padding-left: .75rem; padding-bottom: 0; padding-top: 0;">
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	`
});

const app = new Vue({
    el: '#root'
});
