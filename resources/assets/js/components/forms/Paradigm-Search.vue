<template>
	<form class="paradigm-search-form"
		  action="/search/paradigm"
		  method="GET"
		  @keydown="form.errors.clear($event.target.name)">
		<div class="columns">
			<div class="column box is-2">
				<h5 class="title is-5">Class</h5>
				<div class="field is-grouped">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="1"
								   name="classes[]"
								   v-model="form.classes.AI.checked">
							AI
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="2"
								   name="classes[]"
								   v-model="form.classes.II.checked">
							II
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   value="4"
								   name="classes[]"
								   v-model="form.classes.TI.checked">
							TI
						</label>
					</p>
				</div>

				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.classes.TA.checked"
							   value="3"
							   name="classes[]"
							   @change="onSelectAI($event.target.checked)">
						TA
					</label>
				</p>
				<div class="box">
					<p v-for="subclass in form.subclasses" class="control">
						<label class="checkbox">
							<input type="checkbox"
								   v-model="subclass.checked"
								   name="subclasses[]"
								   :value="subclass.id"
								   @change="onSelectSubclass($event.target.checked)">
							{{ subclass.id }}
						</label>
					</p>
				</div>

				<div class="field is-grouped">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   v-model="form.classes.AIO.checked"
								   name="classes[]">
							AI+O
						</label>
					</p>
					<p class="control">
						<label class="checkbox">
							<input type="checkbox"
								   v-model="form.classes.TAO.checked"
								   name="classes[]">
							TA+O
						</label>
					</p>
				</div>
			</div>

			<div class="column box is-2">
				<h5 class="title is-5">Order</h5>
				<p v-for="order in form.orders" class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="order.checked"
							   :value="order.id"
							   name="orders[]">
						{{ order.name }}
					</label>
				</p>				
			</div>

			<div class="column box is-3">
				<h5 class="title is-5">Mode</h5>
				<p class="control">
					<label class="radio">
						<input type="radio"
							   name="modeSelect"
							   value="indicativeOnly"
							   v-model="form.modeSelect">
						Indicative only
					</label>
				</p>
				<p class="control">
					<label class="radio">
						<input type="radio"
							   name="modeSelect"
							   value="allModes"
							   v-model="form.modeSelect">
						All available modes
					</label>
				</p>
				<p class="control">
					<label class="radio">
						<input type="radio"
							   name="modeSelect"
							   value="selectModes"
							   v-model="form.modeSelect">
						The following modes...
					</label>
				</p>

				<div class="box" style="max-height: 10em; overflow: scroll; overflow-x: auto; padding-top: 0;" :class="{ disabled: form.modeSelect != 'selectModes' }">
					<p v-for="mode in form.modes" class="control">
						<label class="checkbox">
							<input type="checkbox"
								   :disabled="form.modeSelect != 'selectModes'"
								   v-model="mode.checked"
								   :value="mode.id"
								   name="modes[]">
							{{ mode.name }}
						</label>
					</p>
				</div>
			</div>

			<div class="column box is-2">
				<h5 class="title is-5">Other features</h5>
				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.affirmative"
							   name="affirmative">
						Affirmative
					</label>
				</p>
				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.negative"
							   name="negative">
						Negative
					</label>
				</p>
				<p class="control">
					<label class="checkbox">
						<input type="checkbox"
							   v-model="form.diminutive"
							   name="diminutive">
						Diminutive
					</label>
				</p>
			</div>

			<div class="column box" style="margin-bottom: 1.5rem;">
				<h5 class="title is-5">Language</h5>
				<alg-multi-datalist :list="languages" name="languages[]" v-model="form.languages"></alg-multi-datalist>
			</div>
		</div>

		<div class="control">
			<label class="checkbox">
				<input type="checkbox" name="showMorphology" v-model="form.showMorphology" />
				Show Morphology
			</label>
		</div>
		<button type="submit" class="button is-success">Search</button>
	</form>
</template>

<script>
export default {
	props: ['method', 'action', 'orders', 'modes', 'languages', 'preset'],

	data() {
		return {
			loading: false,
			orderArray: [],

			form: {
			},

			form: new Form({
				modeSelect: 'indicativeOnly',
				languages: [{
					text: 'Proto-Algonquian',
					id: '1'
				}],
				affirmative: true,
				negative: false,
				diminutive: false,
				classes: {
					AI: { id: 1, checked: false },
					II: { id: 2, checked: false },
					TI: { id: 3, checked: false },
					TA: { id: 4, checked: true },
					AIO: { id: 5, checked: false },
					TAO: { id: 6, checked: false }
				},
				subclasses: [
					{ id: 'Local', checked: true },
					{ id: 'Mixed', checked: true },
					{ id: 'Non-local', checked: true },
					{ id: 'Inanimate', checked: false },
					{ id: 'Impersonal', checked: false },
					{ id: 'Obviative', checked: false }
				],
				orders: [],
				modes: [],
				showMorphology: false
			})
		};
	},

	methods: {
		onSubmit() {
			// this.injectIntoForm('classes');
			this.injectIntoForm('subclasses');
			this.injectIntoForm('orders');
			this.injectIntoForm('modes');
			// this.loading = true;

			// this.form.get('/search/paradigm');
		},

		injectIntoForm(name) {
			let temp = [];
			let array = this.form[name];

			array.forEach(value => {
				if(value.checked) {
					temp.push(value.id);
				}
			});

			this.form[name] = temp;
		},

		onSelectSubclass(checked) {
			if(checked) {
				this.form.classes.TA.checked = true;
			}
			else {
				let found = false;

				for(let i = 0; i < this.form.subclasses.length && !found; i++) {
					if(this.form.subclasses[i].checked) {
						found = true;
					}
				}

				this.form.classes.TA.checked = found;
			}
		},

		onSelectAI(checked) {
			this.form.subclasses.forEach(subclass => {
				subclass.checked = checked;
			});
		},

		loadCheck(array, field) {
			if(field.constructor === Array) {
				field.forEach(value => {
					this.loadCheck(array, value);
				});
			}
			else if(array[field]) {
					this.form[field] = true;
			}
		},

		loadSeries(array, field) {
			if(field.constructor === Array) {
				field.forEach(value => {
					this.loadSeries(array, value);
				});
			}
			else if(array[field]) {
				array[field].forEach(value => {
					let found = false;
					for(let i = 0; i < this.form[field].length && !found; i++) {
						this.form[field][i].checked = true;
						found = true;
					}
				})
			}
		}
	},

	created() {
		this.form.orders = JSON.parse(this.orders);
		this.form.modes = JSON.parse(this.modes);

		if(this.preset) {
			let presetArray = JSON.parse(this.preset);
			
			this.loadCheck(presetArray, ['affirmative', 'negative', 'diminutive', 'showMorphology']);
			this.loadSeries(presetArray, ['orders', 'modes', 'subclasses']);

			this.form.modeSelect = presetArray.modeSelect;

			if(presetArray.classes) {
				presetArray.classes.forEach(formClass => {
					_.forEach(this.form.classes, value => {
						if(value.id == formClass) {
							value.checked = true;
							return false;
						}
					});
				});
			}

			if(presetArray.languages) {
				let temp = [];

				for(let i = 0; i < presetArray.languages.length; i+=2) {
					temp.push({
						text: presetArray.languages[i],
						id: presetArray.languages[i + 1]
					});
				}

				this.form.languages = temp;
			}
		}
	}
}
</script>