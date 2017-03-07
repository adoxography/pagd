<template>
	<div class="order-languages">
		<draggable v-model="listArray" @change="onChange($event, listArray)">
			<div v-for="group in listArray">
				<div :id="group.name" class="card" v-if="group.languages.length > 0" style="border-radius: 1rem; margin-bottom: 1rem">
					<header class="card-header">
						<p class="card-header-title" :class="{'is-danger': group.newPosition < 0 && listArray.length > 1}">
							{{ group.name }}
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<draggable v-model="group.languages" @change="onChange($event, group.languages)">
								<div v-for="language in group.languages">
									<p :class="{'is-danger': language.newPosition < 0 && group.languages.length > 1}">
										{{ language.name }}
									</p>
								</div>
							</draggable>
						</div>
					</div>
				</div>
			</div>
		</draggable>
		<button type="submit" class="button" @click="save">Save</button>
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
		onChange(event, list) {
			if(event.moved) {
				event.moved.element.newPosition = event.moved.newIndex;

				if(event.moved.newIndex > event.moved.oldIndex) { // Moved down
					this.reassessIndices(list, event.moved.oldIndex, event.moved.newIndex);
				} else { // Moved up
					this.reassessIndices(list, event.moved.newIndex + 1, event.moved.oldIndex + 1);
				}
			}
		},

		reassessIndices(list, start, end) {
			for(let i = start; i < end; i++) {
				list[i].newPosition = i;
			}
		},

		save() {
			// Finalize the positions
			this.listArray.forEach((group, i) => {
				group.newPosition = i;
				group.languages.forEach((language, j) => {
					language.newPosition = j;
				});
			});

			// Submit them
			axios.post("/languages/order", this.listArray)
				 .then(response => {
				 	alert("Order saved.");
				 	console.log(response);
				 });
		}
	},

	created() {
		JSON.parse(this.list).forEach(group => {
			if(group.languages.length > 0) {

				group.newPosition = group.position;
				group.languages.forEach(language => {
					language.newPosition = language.position;
				});

				this.listArray.push(group);
			}
		});
	}
};
</script>