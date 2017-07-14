<template>
	<div>
		<div class="field" v-for="(row, n) in rows">
			<div class="field has-addons">
				<p class="control">
					<label :for="'file-upload-'+n" class="button" :class="{ 'is-primary': row.isEmpty, 'is-success': !row.isEmpty }">
						<input ref="fileInput" :id="'file-upload-'+n" type="file" :name="name" :accept="accept" @change="onFileChange($event.target.files, row)" />
						{{ row.buttonText() }}
					</label>
				</p>
				<p v-if="showText" class="control is-expanded">
					<input type="text" class="input" :name="name + '_name'" v-model="row.text" :disabled="row.isEmpty" />
				</p>
				<p v-if="multi" class="control">
					<a class="button is-danger" :disabled="row.isEmpty">
						<span class="icon" @click="onDelete(n)">
							<i class="fa fa-times"></i>
						</span>
					</a>
				</p>
			</div>
			<p v-if="row.hasErrors" class="help is-danger">
				{{ row.errors.first() }}
			</p>
		</div>
	</div>
</template>

<script>
class Errors {

	constructor() {
		this.errors = [];
	}

	any() {
		return this.errors.length > 0;
	}

	record(error) {
		this.errors.push(error);
	}

	clear() {
		this.errors = [];
	}

	first() {
		return this.errors[0];
	}
}

class File {
	constructor(text = '') {
		this.text = text;
		this.isEmpty = text.length == 0;
		this.errors = new Errors;
	}

	buttonText() {
		if(this.isEmpty) {
			return 'Upload new file';
		} else {
			return 'File is ready!';
		}
	}

	reset() {
		this.text = '';
		this.isEmpty = true;
	}

	store(file) {
		let valid = this.validate(file);
		const pattern = /(.*)\.([^\.]*$)/;

		if(valid) {
			this.text = file.name.match(pattern)[1];
			this.errors.clear();
			this.isEmpty = false;
		} else {
			this.errors.record("That file type is not allowed.");
		}

		return valid;
	}

	validate(file) {
		const pattern = /^audio\/.*/;

		return file && file.type && file.type.match(pattern);
	}

	hasErrors() {
		return this.error.length > 0;
	}
}

export default {
	props: ['multi', 'name', 'showText', 'accept'],

	data() {
		return {
			rows: []
		};
	},

	methods: {
		onFileChange(files, row) {
			if(row.store(files[0])) {
				this.$emit('upload', {
					name: row.text
				});

				if(this.multi) {
					this.rows.push(new File);
				}
			}
		},

		onDelete(index) {
			this.rows.splice(index, 1);

			if(this.rows.length == 0) {
				this.rows.push(new File);
			}
		}
	},

	created() {
		this.rows.push(new File);
	}
}
</script>