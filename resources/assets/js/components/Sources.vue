<template>
	<div>
		<div class="box">
			<label class="label">Sources</label>
			<div class="box">
				<div class="control is-grouped">
					<alg-old-source @input="add($event)"></alg-old-source>
					<a class="button" @click="open">Add a new source</a>
				</div>
			</div>

			<ul>
				<div class="columns" v-for="(source, index) in sources">
					<input type="hidden" v-model="source.id" :name="'sources['+index+'][id]'" />
					<input type="hidden" v-model="source.short" :name="'sources['+index+'][short]'" />
					<div class="column is-one-quarter">
						<p>{{ index + 1 }}. {{ source.short }}</p>
					</div>
					<div class="column is-8">
						<p class="control">
							<input type="text" class="input is-expanded" :name="'sources['+index+'][extraInfo]'" v-model="source.extraInfo" placeholder="chapter, page number, etc..." ref="extrainfo" />
						</p>
					</div>
					<div class="column is-1">
						<a class="button" @click="remove(index)">Remove</a>
					</div>
				</div>
			</ul>
		</div>

		<alg-new-source v-show="showModal" @close="close" @input="add($event)"></alg-new-source>
	</div>
</template>

<script>
	import  { focus } from 'vue-focus';

	export default {
		props: ['value'],

		data() {
			return {
				showModal: false,
				sources: [],
				initSources: []
			};
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
				this.sources.push({ short: data.short, id: data.id, extraInfo: "" });

				Vue.nextTick(() => {
					this.$refs.extrainfo[this.sources.length - 1].focus();
				});
			},

			remove(index) {
				this.sources.splice(index, 1);
			},

			extractExtraInfo(source) {
				if(source.pivot) {
					return source.pivot.extraInfo;
				}
				else {
					return source.extraInfo;
				}
			}
		},

		created() {
			if(this.value) {
				let sources = JSON.parse(this.value);

				sources.forEach(source => {
					this.sources.push({
						short: source.short,
						id: source.id,
						extraInfo: this.extractExtraInfo(source)
					});
				});
			}
		}
	}
</script>