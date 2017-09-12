<script>
import Form from './Form';
import { Datalist } from '../../Datalist';

export default {
	extends: Form,

	props: ['oldType', 'oldIsArchiphoneme'],

	data() {
		return {
			type: '',
			isArchiphoneme: false,

			language: new Datalist,

			// Consonant features
			place:   new Datalist,
			manner:  new Datalist,
			voicing: new Datalist,

			// Vowel features
			height:   new Datalist,
			backness: new Datalist,
			length:   new Datalist,

			// Cluster features
			firstSegment:  new Datalist,
			secondSegment: new Datalist
		};
	},

    computed: {
        fieldConstraints() {
            return this.isArchiphoneme ? "datalist_exists" : "datalist_required|datalist_exists";
        },

        archiphonemeDescriptionConstraints() {
            return this.isArchiphoneme ? 'required' : '';
        },

        typeConstraints() {
            return this.isArchiphoneme ? 'required|not_in:clusterTypes' : 'required';
        }
    },

	created() {
		if(this.oldType) {
			this.type = this.oldType;
		}

		if(this.oldIsArchiphoneme) {
			this.isArchiphoneme = this.oldIsArchiphoneme;
		}

		let dict = {
			en: {
				custom: {
					featurable_type: {
						not_in: 'Clusters cannot be archiphonemes'
					}
				}
			}
		}

		this.$validator.updateDictionary(dict);
	},

	watch: {
		language() {
			this.firstSegment =  new Datalist;
			this.secondSegment = new Datalist;
		},

        type(value) {
		    if (value == 'clusterTypes') {
		        this.isArchiphoneme = false;
            }
        }
	}
};
</script>
