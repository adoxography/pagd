<template>
	<div>
		<div class="box">
			<label class="label">Sources</label>
			<div class="box">
				<div class="control is-grouped">
					<alg-ajaxlist v-model="oldSource"
								  uri="/autocomplete/sources"
								  placeholder="Search for an existing source"
								  @input="handleOldSourceInput"
								  ref="oldSource"
								  :disabled="disabled">
					</alg-ajaxlist>
					<a class="button"
					   @click="open"
					   :class="{ 'is-disabled': disabled }">Add a new source</a>
				</div>
			</div>

			<ul>
				<div v-for="(source, index) in value">
					<div class="columns">
						<input type="hidden"
							   v-model="source.id"
							   :name="'sources['+index+'][id]'" />
						<input type="hidden"
							   v-model="source.short"
							   :name="'sources['+index+'][short]'" />
						<div class="column is-one-quarter">
							<div>
								<p>{{ index + 1 }}. {{ source.short }}</p>
								<span class="help is-danger"
									v-show="duplicateSource(source.id)" 
									v-text="'This source is already listed'">
								</span>
							</div>
						</div>
						<div class="column is-8">
							<p class="control">
								<input type="text"
									   class="input is-expanded"
									   :name="'sources['+index+'][extraInfo]'"
									   v-model="source.extraInfo"
									   placeholder="chapter, page number, etc..."
									   ref="extrainfo"
									   :disabled="disabled"
									   autocomplete="off" />
							</p>
						</div>
						<div class="column is-1">
							<a class="button"
							   @click="remove(index)"
							   :disabled="disabled">Remove</a>
						</div>
					</div>
				</div>
			</ul>
		</div>

		<alg-new-source v-show="showModal"
						@close="close"
						@input="add($event)">
		</alg-new-source>
	</div>
</template>

<script>
	import  { focus } from 'vue-focus';

	export default {
		props: ['value', 'disabled'],

		data() {
			return {
				showModal: false,

				oldSource: {
					text: '',
					id: ''
				}
			};
		},

		computed: {
			hasDuplicates() {
				let sources = this.value;
				let found = false;

				for(let i = 0; i < sources.length && !found; i++) {
					found = this.duplicateSource(sources[i].id);
				}

				return found;
			}
		},

		directives: {
			focus: focus
		},

		methods: {
			open() {
				this.showModal = true;
			},

			close() {
				this.showModal = false;
			},

			add(data) {
				let newSources = this.value;
				newSources.push({
					short: data.short,
					id: data.id,
					extraInfo: ''					
				});

				this.$emit('input', newSources);

				Vue.nextTick(() => {
					this.$refs.extrainfo[this.value.length - 1].focus();
				});
			},

			remove(index) {
				let sources = this.value;
				sources.splice(index, 1);

				this.$emit('input', sources);
			},

			duplicateSource(index) {
				let sources = this.value;
				let found = false;
				let duplicate = false;

				if(sources) {
					sources.forEach(source => {
						if(source.id == index) {
							if(!found) {
								found = true;
							}
							else {
								duplicate = true;
							}
						}
					});
				}

				return duplicate;
			},

			extractExtraInfo(source) {
				if(source.pivot) {
					return source.pivot.extraInfo;
				}
				else {
					return source.extraInfo;
				}
			},

			handleOldSourceInput() {
				Vue.nextTick(() => {
					if(this.$refs.oldSource.showCheck) {
						this.add({
							short: this.oldSource.text,
							id: this.oldSource.id
						});

						this.oldSource.text = '';
						this.oldSource.id = '';
					}
				});
			}
		}
	}
</script>