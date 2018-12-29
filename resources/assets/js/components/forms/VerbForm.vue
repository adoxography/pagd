<template>
  <form @submit.prevent="validateBeforeSubmit">
    <table class="table details">
      <tbody>
        <tr>
          <th><label>Status</label></th>
          <td>
            <b-radio v-model="empty"
                     :native-value="false">
              Form exists
            </b-radio>
            <b-radio v-model="empty"
                     :native-value="true">
              Form does not exist
            </b-radio>
          </td>
        </tr>

        <!--Language-->
        <tr>
          <th><label for="language-input">Language</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('language-id')}"
                     :message="errors.first('language-id')">
              <b-autocomplete id="language-input"
                              name="language-id"
                              v-model="data.language.name"
                              :data="languages"
                              @select="obj => data.language.id = obj.id"
                              field="name"
                              :open-on-focus="true"
                              v-validate="'required|exists:languages,name'">
              </b-autocomplete>
            </b-field>
          </td>
        </tr>

        <!--Surface form-->
        <tr>
          <th><label for="name-input">Surface form</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('name')}"
                     :message="errors.first('name')">
              <b-input id="name-input"
                       name="name"
                       v-model="data.name"
                       autocomplete="new-password"
                       placeholder="the form as written in a text"
                       :disabled="empty"
                       v-validate="{required: !empty}">
              </b-input>
            </b-field>
          </td>
        </tr>

        <!--Phonemic form-->
        <tr>
          <th><label for="phonemic-form-input">Phonemic form</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('phonemic-form')}"
                     :message="errors.first('phonemic-form')">
              <b-input id="phonemic-form-input"
                       name="phonemic-form"
                       v-model="data.phonemicForm"
                       autocomplete="new-password"
                       :disabled="empty"
                       placeholder="the Algonquianist phonemic representation">
              </b-input>
            </b-field>
          </td>
        </tr>

        <!--Arguments-->
        <tr>
          <th><label>Arguments</label></th>
          <td class="argument-inputs">
            <b-field grouped>
              <b-field :type="{'is-danger': errors.has('subject')}"
                       :message="errors.first('subject')"
                       expanded>
                <label class="is-hidden-visual" for="subject-input">Subject</label>
                <b-autocomplete id="subject-input"
                                name="subject"
                                v-model="data.structure.subject.name"
                                :data="features"
                                @select="obj => data.structure.subject.id = obj.id"
                                field="name"
                                :open-on-focus="true"
                                placeholder="subject"
                                v-validate="'required|exists:features,name'">
                </b-autocomplete>
              </b-field>
              <b-field :type="{'is-danger': errors.has('primary-object')}"
                       :message="errors.first('primary-object')"
                       expanded>
                <label class="is-hidden-visual" for="primary-object-input">Primary object</label>
                <b-autocomplete id="primary-object-input"
                                name="primary-object"
                                v-model="data.structure.primaryObject.name"
                                :data="features"
                                @select="obj => data.structure.primaryObject.id = obj.id"
                                field="name"
                                :open-on-focus="true"
                                placeholder="primary object"
                                v-validate="'exists:features,name'">
                </b-autocomplete>
              </b-field>
              <b-field :type="{'is-danger': errors.has('secondary-object')}"
                       :message="errors.first('secondary-object')"
                       expanded>
                <label class="is-hidden-visual" for="secondary-object-input">Primary object</label>
                <b-autocomplete id="secondary-object-input"
                                name="secondary-object"
                                v-model="data.structure.secondaryObject.name"
                                :data="features"
                                @select="obj => data.structure.secondaryObject.id = obj.id"
                                field="name"
                                :open-on-focus="true"
                                placeholder="secondary object"
                                v-validate="'exists:features,name'">
                </b-autocomplete>
              </b-field>
            </b-field>
          </td>
        </tr>

        <!--Class-->
        <tr>
          <th><label for="class-input">Class</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('verb-class')}"
                     :message="errors.first('verb-class')">
              <b-autocomplete id="class-input"
                              name="verb-class"
                              v-model="data.structure.verb_class.name"
                              :data="classes"
                              @select="obj => data.structure.verb_class.id = obj.id"
                              field="name"
                              :open-on-focus="true"
                              v-validate="'required|exists:classes,name'">
              </b-autocomplete>
            </b-field>
          </td>
        </tr>

        <!--Order-->
        <tr>
          <th><label for="order-input">Order</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('order')}"
                     :message="errors.first('order')">
              <b-autocomplete id="order-input"
                              name="order"
                              v-model="data.structure.order.name"
                              :data="orders"
                              @select="obj => data.structure.order.id = obj.id"
                              field="name"
                              :open-on-focus="true"
                              v-validate="'required|exists:orders,name'">
              </b-autocomplete>
            </b-field>
          </td>
        </tr>

        <!--Mode-->
        <tr>
          <th><label for="mode-input">Mode</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('mode')}"
                     :message="errors.first('mode')">
              <b-autocomplete id="mode-input"
                              name="mode"
                              v-model="data.structure.mode.name"
                              :data="modes"
                              @select="obj => data.structure.mode.id = obj.id"
                              field="name"
                              :open-on-focus="true"
                              v-validate="'required|exists:modes,name'">
              </b-autocomplete>
            </b-field>
          </td>
        </tr>

        <!--Submode-->
        <tr>
          <th><label>Submode</label></th>
          <td>
            <b-checkbox v-model="data.structure.isNegative">Negative</b-checkbox>
            <b-checkbox v-model="data.structure.isDiminutive">Diminutive</b-checkbox>
          </td>
        </tr>

        <!--Definiteness-->
        <tr>
          <th><label for="definiteness-input">Definiteness</label></th>
          <td>
            <b-field :type="{'is-danger': errors.has('definiteness')}"
                     :message="errors.first('definiteness')">
              <b-autocomplete id="definiteness-input"
                              name="definiteness"
                              v-model="data.structure.isAbsolute"
                              :data="definitenesses"
                              :open-on-focus="true"
                              v-validate="'required|exists:definitenesses'">
              </b-autocomplete>
            </b-field>
          </td>
        </tr>
                              

        
      </tbody>
    </table>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Form from './Form';
import HasMorphemes from '../../mixins/HasMorphemes';
import { Datalist } from '../../Datalist.js';
import debounce from 'lodash/debounce';


function updateData(data, initial) {
  for (let [key, v] of Object.entries(data)) {
    if (key == 'fields') {
      for (let [field, value] of Object.entries(v)) {
        if (initial && initial.hasOwnProperty(field)) {
          value = initial[field];
        }
        Vue.set(data, field, value);
      }
    } else if (data.hasOwnProperty(key)) {
      updateData(v, initial ? initial[key] : null);
    }
  }
}

export default {
	extends: Form,

	props: [
    'is-empty',
    'initial',
    'languages',
    'features',
    'classes',
    'orders',
    'modes'
  ],

	mixins: [ HasMorphemes ],

	data() {
		return {
      data: {
        fields: {
          name: '',
          phonemicForm: '',
          historicalNotes: '',
          usageNotes: '',
          allomorphyNotes: '',
          privateNotes: ''
        },
        language: { fields: {name: '', id: 0} },
        parent: { fields: {name: '', id: 0} },
        structure: {
          fields: {isNegative: false, isDiminutive: false, isAbsolute: 'N/A'},
          subject:         { fields: {name: '', id: 0} },
          primaryObject:   { fields: {name: '', id: 0} },
          secondaryObject: { fields: {name: '', id: 0} },
          verb_class:      { fields: {name: '', id: 0} },
          order:           { fields: {name: '', id: 0} },
          mode:            { fields: {name: '', id: 0} },
        }
      },

      definitenesses: ['absolute', 'objective', 'N/A'],

      morphemes: [],
      empty: false,
      isFetching: false,
      parentData: []
		};
	},

	created() {
    updateData(this.data, this.initial);

    this.$validator.extend('exists', (value, [arr, key]) => {
      return this[arr].some(el => (key ? el[key] : el) === value);
    });

    if(this.isEmpty) {
      this.empty = this.isEmpty;
    }
	},

  methods: {
    getAsyncData: debounce(function () {
      if (!this.parent.length) {
        this.parentData = [];
        return;
      }

      this.isFetching = true;

      axios.get('/autocomplete/formParents', {
        params: {
          options: {
            language: this.language_id,
            type: 'verb'
          },
          term: this.parent
        }
      })
        .then(response => {
          this.parentData = [];
          response.parentData.forEach(item => this.parentData.push(item));
        })
        .catch(error => {
          this.parentData = [];
          console.error(error);
        })
        .finally(() => {
          this.isFetching = false;
        });
    }, 500)
  }
}
</script>

<style>
.argument-inputs .field.has-addons {
    display: block !important;
}
</style>
