<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

export default {
	extends: Form,

    props: ['init-glosses'],

	data() {
		return {
			language: new Datalist,
			slot:     new Datalist,
			parent:   new Datalist,
			glosses: []
		};
	},

    created() {
        if (this.initGlosses) {
            this.glosses = this.initGlosses;
        }
    }
};
</script>
