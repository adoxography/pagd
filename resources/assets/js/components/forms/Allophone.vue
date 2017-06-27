<template>
	<div>
		<div v-for="(row, n) in rows" class="field is-grouped">
			<p class="control">
				<input
					name="allophones[]"
					type="text"
					class="input"
					@input="onInput(n)"
					v-model="row.allophone"
					placeholder="allophone"
					autocomplete="off"
				/>
			</p>
			<p class="control is-expanded">
				<input
					name="environments[]"
					type="text"
					class="input"
					@input="onInput(n)"
					v-model="row.environment"
					placeholder="environment (leave blank if elsewhere case)"
					autocomplete="off"
				/>
			</p>
			<p class="control">
				<a
					class="button is-danger"
					@click="onDelete(n)"
					:disabled="rows.length == 1 && row.isEmpty()"
					tabindex="-1"
				>
					<span class="icon">
						<i class="fa fa-times"></i>
					</span>
				</a>
			</p>
		</div>
	</div>
</template>

<script>
class Row {
	constructor(allophone = '', environment = '') {
		this.allophone = allophone;
		this.environment = environment;
	}

	isEmpty() {
		return this.allophone.length == 0 && this.environment.length == 0;
	}

	clear() {
		this.allophone = '';
		this.environment = '';
	}
}

export default {
	props: ['old'],

	data() {
		return {
			rows: []
		};
	},

	created() {
		if(this.old && this.old.length > 0) {
			this.old.forEach(row => {
				this.rows.push(new Row(row.name.replace(/[\[\]\*]/g, ''), row.environment));
			});
		}

		this.rows.push(new Row());
	},

	methods: {
		onInput(index) {
			if(index == this.rows.length - 1) {
				this.rows.push(new Row());
			}
		},

		onDelete(index) {
			if(this.rows.length > 1) {
				this.rows.splice(index, 1);
			} else {
				this.rows[0].clear();
			}
		}
	}
}
</script>