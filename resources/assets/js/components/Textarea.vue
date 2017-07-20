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
			content_css: [ '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i' ],
			link_title: false,
			charmap: [
				['643', 'esh'],
				['353', 's - hacek']
			],
			toolbar: 'undo redo | bold italic underline | link | charmap | bullist numlist outdent indent | table | clearformatting',
			menubar: false,
			statusbar: false,
			setup: function(editor) {
				editor.on('change', (e) => {
					this.updateValue(editor.getContent());
				});

				editor.on('input', (e) => {
					this.updateValue(editor.getContent());
				});

				editor.on('click', e => {
					tinymce.remove(this.$el.children[0]);
				});

				function clearFormatting() {
					let text = editor.getContent({format: "raw"});

					text = text.replace(/(?:<|<\/)(?!p|\/p|ul|\/ul|li|\/li|ol|\/ol)(?:.|\n)*?>/gm, '');
					text = text.replace(/style=['"][^>]*['"]/gm, '');

					editor.setContent(text);
				}

			    editor.addButton('clearformatting', {
			      image: 'https://cdn4.iconfinder.com/data/icons/text-editor-3/100/Minio_Text_Editor_Bold-16-512.png',
			      tooltip: "Clear Formatting",
			      onclick: clearFormatting
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