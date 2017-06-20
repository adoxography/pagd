<template>
	<div class="order-languages">
		<draggable v-model="listArray">
			<div v-for="(item, n) in listArray">
				<div
					:id="item.name"
					style="border: 1px solid black; border-radius: 1rem; margin-bottom: 1rem; padding: .5rem; cursor: move"
				>
					<p :class="{'is-danger': item.position < 0 && listArray.length > 1}">
						{{ renderName(item) }}
					</p>
					<input type="hidden" name="ids[]" :value="item.id" />
					<input type="hidden" name="types[]" :value="item.type" />
					<input type="hidden" name="positions[]" :value="n" />
				</div>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	props: ['list'],

	components: {
		draggable
	},

	data() {
		return {
			listArray: []
		};
	},

	methods: {
		renderName(item) {
			let name = item.name;

			if(item.type == 'App\\Group') {
				name += " languages";
			}

			return name;
		}
	},

	created() {
		this.listArray = _.sortBy(this.list, item => {
			return item.position;
		});
	}
};
</script>