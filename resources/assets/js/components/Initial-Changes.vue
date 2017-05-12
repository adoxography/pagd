<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>Language</th>
					<th>Morpheme</th>
					<th>Initial Change #</th>
					<th>Initial Change</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, index) in rows">
					<td><a :href="'/languages/'+row.morpheme.language.iso">{{ row.morpheme.language.name }}</a></td>
					<td><a :href="'/morphemes/'+row.morpheme.id" v-html="row.morpheme.uniqueName"></a></td>
					<td>{{ row.disambiguator }}</td>
					<td>{{ row.change }}</td>
					<td>
						<a class="button">
							<span v-if="deleting != row.id" class="icon" title="delete" @click="deleteRow(row, index)">
								<i class="fa fa-times"></i>
							</span>
							<span v-else class="icon">
								<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
							</span>
						</a>
					</td>
				</tr>
			</tbody>
		</table>

		<form @submit.prevent="onSubmit"
			  @keydown="form.errors.clear($event.target.name)">
			<div class="columns">
				<div class="column is-one-third">
					<label for="language" class="label">Language</label>
					<alg-datalist v-model="form.language"
								  :list="languages"
								  name="language"
								  required="required"
								  :disabled="loading"
								  @input="onLanguageInput"
								  :classes="{'is-danger': form.errors.has('language')}"
								  autofocus="autofocus">
					</alg-datalist>
					<span class="help is-danger"
						  v-show="form.errors.has('language')"
						  v-text="form.errors.get('language')">
					</span>
				</div>

				<div class="column is-one-third">
					<label for="morpheme" class="label">Morpheme</label>
					<alg-ajaxlist v-model="form.morpheme"
								  uri="/autocomplete/morphemes"
								  :with="form.language.id"
								  :disabled="loading || !form.language.id"
								  placeholder="Make sure to select the language first"
								  :classes="{'is-danger': form.errors.has('morpheme')}"
								  required="required">
					</alg-ajaxlist>
					<span class="help is-danger"
						  v-show="form.errors.has('morpheme')"
						  v-text="form.errors.get('morpheme')">
					</span>
				</div>

				<div class="column is-one-third">
					<label for="change" class="label">Change</label>
					<p class="control">
						<input type="text"
							   class="input"
							   v-model="form.change"
							   autocomplete="off"
							   name="change"
							   required="required"
							   :disabled="loading"
							   :class="{'is-danger': form.errors.has('change')}" />
					</p>
					<span class="help is-danger"
						  v-show="form.errors.has('change')"
						  v-text="form.errors.get('change')">
					</span>
				</div>
			</div>
			<button class="button" type="submit" :disabled="form.errors.any() || loading">Submit</button>
			<span class="icon">
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw" v-show="loading"></i>
			</span>
		</form>
	</div>
</template>

<script>
export default {
	props: ['languages', 'changes'],

	data() {
		return {
			rows: [],
			loading: false,
			deleting: 0,
			form: new Form({
				language: {
					text: '',
					id: ''
				},
				morpheme: {
					text: '',
					id: ''
				},
				change: ''
			})
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			this.form.post("/changes")
				.then(response => {
					this.loading = false;
					this.rows.push(response);
				})
				.catch(error => {
					this.loading = false;
				});
		},

		deleteRow(row, index) {
			this.deleting = row.id;
			axios.delete("/changes/"+row.id)
				.then(response => {
					this.deleting = 0;
					this.rows.splice(index, 1);
				})
				.catch(error => {
					this.deleting = 0;
				});
		},

		onLanguageInput() {
			this.form.morpheme = {
				text: '',
				id: ''
			}
		}
	},

	created() {
		this.rows = this.changes;
	}
}
</script>