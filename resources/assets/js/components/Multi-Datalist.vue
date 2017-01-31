<template>
	<div>
		<alg-datalist ref="datalists" :list="list" v-for="n in numFields" :name="name" :disabled="disabled"></alg-datalist>
		<div class="level">
			<div class="level-left">
			</div>
			<div class="level-right">
				<div class="level-item">	
					<a class="button is-info is-small" :class="{ 'is-disabled': numFields >= 5 || disabled }" @click="addField()">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
					</a>
				</div>
				<div class="level-item">
					<a class="button is-info is-small" :class="{ 'is-disabled': numFields <= 1 || disabled }" @click="removeField()">
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
		props: ['list', 'name', 'disabled'],

		data() {
			return {
				numFields: 1
			};
		},

		created() {
			Event.$on('addLanguageGroup', (data) => {
				let $firstTime = true;

				this.numFields = data.length;

				Vue.nextTick(() => {
					data.forEach((item, index) => {
						this.$refs.datalists[index].text = item;
					});
				});
			});
		},

		methods: {
			addField() {
				if(this.numFields < 5) {
					this.numFields++;
				}
			},

			removeField() {
				if(this.numFields > 1) {
					this.numFields--;
				}
			}
		}
	}
</script>