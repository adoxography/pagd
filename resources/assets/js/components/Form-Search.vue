<template>
	<div>
		<div v-for="(line, index) in lines" class="box">
			<div class="columns">

				<div class="column">
					<h5 class="title is-5">Class</h5>
					<p class="control" style="padding-top: 1.5rem;">
						<span class="select">
							<select :name="'classes['+index+']'" v-model="line.verbClass">
								<option v-for="verbClass in classes" :value="verbClass.id">{{ verbClass.name }}</option>
							</select>
						</span>
					</p>
				</div>

				<div class="column">
					<h5 class="title is-5" style="margin-bottom: 1rem;">Arguments</h5>
					<div class="control is-horizontal">
						<div class="field is-grouped">
							<p class="control">
								<label class="label argument-label">Subject</label>
								<span class="select">
									<select :name="'subjects['+index+']'" v-model="line.subject">
										<option v-for="argument in args" :value="argument.id">{{ argument.name }}</option>
									</select>
								</span>
							</p>								
							<p class="control">
								<label class="label argument-label">P. Object</label>
								<span class="select">
									<select :name="'primaryObjects['+index+']'" v-model="line.primaryObject">
										<option value="0">None</option>
										<option v-for="argument in args" :value="argument.id">{{ argument.name }}</option>
									</select>
								</span>
							</p>								
							<p class="control">
								<label class="label argument-label">S. Object</label>
								<span class="select">
									<select :name="'secondaryObjects['+index+']'" v-model="line.secondaryObject">
										<option value="0">None</option>
										<option v-for="argument in args" :value="argument.id">{{ argument.name }}</option>
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
							<select :name="'orders['+index+']'" v-model="line.order">
								<option v-for="order in orders" :value="order.id">{{ order.name }}</option>
							</select>
						</span>
					</p>
				</div>					

				<div class="column">
					<h5 class="title is-5">Mode</h5>
					<p class="control" style="padding-top: 1.5rem;">
						<span class="select">
							<select :name="'modes['+index+']'" v-model="line.mode">
								<option v-for="mode in modes" :value="mode.id">{{ mode.name }}</option>
							</select>
						</span>
					</p>
				</div>

				<div class="column">
					<p class="control">
						<label class="checkbox">
							<input type="checkbox" :name="'isNegative['+index+']'" v-model="line.isNegative" />
							Negative
						</label>
					</p>								
					<p class="control">
						<label class="checkbox">
							<input type="checkbox" :name="'isDiminutive['+index+']'" v-model="line.isDiminutive" />
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
					<a class="button is-primary" @click="addLine" :disabled="numLines >= 10" title="Add">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
					</a>
				</div>
				<div class="level-item">
					<a class="button is-primary" @click="removeLine" :disabled="numLines <= 1" title="Remove">
						<span class="icon">
							<i class="fa fa-minus"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['args', 'classes', 'modes', 'orders'],

		data() {
			return {
				lines: [{
					verbClass: 1,
					subject: 1,
					primaryObject: 0,
					secondaryObject: 0,
					order: 1,
					mode: 1,
					isNegative: false,
					isDiminutive: false
				}]
			};
		},

		computed: {
			numLines() {
				return this.lines.length;
			}
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
	}
</script>