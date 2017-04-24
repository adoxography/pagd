<template>
	<div class="control" :class="{ 'mce-disabled': disabled }">
		<textarea :value="value"
				  class="textarea"
				  :name="name"
				  :id="name"
				  :placeholder="placeholder"
				  :disabled="disabled">
		</textarea>
	</div>	
</template>

<script>
export default {
	props: ['value', 'disabled', 'placeholder', 'name', 'height'],

	data() {
		return {
			editor: null
		};
	},

	watch: {
		disabled: function(value) {
			this.editor.getBody().setAttribute('contenteditable', !value);
		}
	},

	mounted() {
		let options = {
			target: this.$el.children[0],
			skin_url: '/css/skins/lightgray',
			plugins: 'table charmap link lists',
			link_title: false,
			charmap: [
				['643', 'esh'],
				['353', 's - hacek']
			],
			toolbar: 'undo redo | bold italic underline | link | charmap | bullist numlist outdent indent | table',
			menubar: false,
			statusbar: false,
			setup: (editor) => {
				editor.on('change', (e) => {
					this.updateValue(editor.getContent());
				});

				editor.on('input', (e) => {
					this.updateValue(editor.getContent());
				});

				editor.on('click', e => {
					tinymce.remove(this.$el.children[0]);
				});
			}
		};

		if(this.height) {
			options.height = this.height;
		}

		tinymce.init(options)
		.then(response => {
			// Save a reference to the editor for later
			this.editor = response[0];
		});
	},

	methods: {
		updateValue(value) {
			this.$emit('input', value.trim());
		}
	}
}
</script>