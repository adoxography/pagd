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
			requiredFields: ['place', 'manner', 'height', 'backness'],

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
					phonemeable_type: {
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

		isArchiphoneme(value) {
            this.setFieldConstraints(value);

		    if (value) {
                this.$validator.attach('archiphonemeDescription', 'required', { prettyName: 'description'} );
                this.$validator.attach('phonemeable_type', 'required|not_in:clusterTypes', { prettyName: 'type'} );
		    } else {
                this.$validator.attach('archiphonemeDescription', '', { prettyName: 'description'} );
                this.$validator.attach('phonemeable_type', 'required', { prettyName: 'type'} );
            }
		},

        type(value) {
		    if (value == 'clusterTypes') {
		        this.isArchiphoneme = false;
            }
        }
	},

    methods: {
	    setFieldConstraints(val) {
	        let constraint = 'datalist_exists';

	        if (!val) {
	            constraint = 'datalist_required|' + constraint;
            }

            console.log(constraint);

            this.requiredFields.forEach(field => {
                this.$validator.attach(field, constraint);
            });
        }
    }
};
</script>
