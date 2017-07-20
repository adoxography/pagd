<script>
import { Datalist } from '../../../Datalist.js';

export default {
	props: ['oldLanguages'],

	data() {
		return {
			languages: [new Datalist]
		};
	},

	created() {
		if(this.oldLanguages && Array.isArray(this.oldLanguages)) {
			let languages = [];

			for(let i = 0; i < this.oldLanguages.length; i += 2) {
				languages.push(new Datalist(this.oldLanguages[i], this.oldLanguages[i + 1]));
			}

			this.languages = languages;
		}
	}
}
</script>