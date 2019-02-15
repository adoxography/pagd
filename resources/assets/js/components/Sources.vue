<template>
  <div>
    <b-field>
      <b-autocomplete :data="ajaxList"
                      @keyup.native="onAutocompleteKeyUp($event)"
                      field="name"
                      :loading="loading"
                      @select="addSource"
                      :clear-on-select="true"
                      expanded
                      placeholder="Look up an existing source">
      </b-autocomplete>
      <p class="control">
        <a class="button is-info"
           title="Add a new source"
           @click="isNewSourceModalOpen = true">
          <span class="icon">
            <i class="fas fa-ellipsis-h"></i>
          </span>
        </a>
      </p>
    </b-field>

    <ol class="source-list" style="margin-left: 1rem;">
      <li v-for="(source, i) in value">
        <div class="source-entry">
          <input type="hidden" :name="'sources['+i+'][id]'" :value="source.id" />
          <input type="hidden" :name="'sources['+i+'][description]'" :value="source.pivot.description" />
          <p class="source-long" v-html="removeTags(source.long)" :title="removeTags(source.long, true)"></p>
          <b-input class="source-extra-info"
                   :name="'sources['+i+'][extra_info]'"
                   v-model="source.pivot.extra_info">
          </b-input>
          <a class="button"
             :class="{'is-info': source.pivot.description && source.pivot.description.length > 0}"
             title="Add description"
             @click="openDescriptionModal(source)">
            <span class="icon">
              <i class="fas fa-align-justify"></i>
            </span>
          </a>
          <a class="button is-danger"
             title="Remove source"
             @click="removeSource(i)">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </a>
        </div>
      </li>
    </ol>

    <b-modal :active.sync="isDescriptionModalOpen" has-modal-card>
      <description-modal v-bind="descriptionSource"></description-modal>
    </b-modal>

    <b-modal :active.sync="isNewSourceModalOpen" has-modal-card>
      <new-source @change="addSource"></new-source>
    </b-modal>
  </div>
</template>

<script>
const NewSource = {
  template: `
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head" style="margin-bottom: 0;">
        <p class="modal-card-title">Add new source</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Author"
                 :type="{'is-danger': errors.has('source-author')}"
                 :message="errors.first('source-author')">
          <b-input v-model="formData.author"
                   name="source-author"
                   v-validate="'required'"
                   data-vv-as="author">
          </b-input>
        </b-field>
        <b-field label="Year"
                 :type="{'is-danger': errors.has('source-year')}"
                 :message="errors.first('source-year')">
          <b-input v-model="formData.year"
                   name="source-year"
                   v-validate="'required'"
                   data-vv-as="year">
          </b-input>
        </b-field>
        <input type="hidden"
               v-model="formData.long"
               name="source-long"
               v-validate="'required'"
               data-vv-as="full citation"
        />
        <b-field label="Full citation"
                 :type="{'is-danger': errors.has('source-long')}"
                 :message="errors.first('source-long')">
          <wysiwyg v-model="formData.long"></wysiwyg>
        </b-field>
        <b-field label="URL">
          <b-input v-model="formData.url"></b-input>
        </b-field>
        <b-field label="Notes">
          <wysiwyg v-model="formData.notes"></wysiwyg>
        </b-field>
        <footer class="modal-card-foot">
          <a class="button is-primary has-text-grey-dark"
             @click="onSubmit"
             :disabled="errors.any()">
             Submit
          </a>
          <a class="button is-danger" @click="$parent.close()">Cancel</a>
        </footer>
      </section>
    </div>
  `,

  data() {
    return {
      formData: {
        author: '',
        year: '',
        long: '',
        url: '',
        notes: ''
      }
    }
  },

  $_veeValidate: {
    validator: 'new'
  },

  methods: {
    onSubmit() {
      this.$validator.validateAll();

      if (!this.errors.any()) {
        axios.post('/sources', this.formData)
        .then(response => {
          this.$emit('change', response.data);
          this.$parent.close();
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }
};

const DescriptionModal = {
  props: ['source'],

  data() {
    return {
      description: ''
    };
  },

  template: `
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head" style="margin-bottom: 0;">
        <p class="modal-card-title">Description of {{ source.author }} ({{ source.year }})</p>
      </header>
      <section class="modal-card-body">
        <wysiwyg v-model="description"></wysiwyg>
        <footer class="modal-card-foot">
          <a class="button is-primary has-text-grey-dark"
             @click="onSubmit">
             Save
          </a>
          <a class="button is-danger" @click="$parent.close()">Cancel</a>
        </footer>
      </section>
    </div>
  `,

  created() {
    this.description = this.source.pivot.description;
  },

  methods: {
    onSubmit() {
      this.source.pivot.description = this.description;
      this.$parent.close();
    }
  }
};

export default {
  components: {
    NewSource,
    DescriptionModal
  },

  props: ['value'],

  data() {
    return {
      sources: [],

      ajaxList: [],
      loading: false,

      isNewSourceModalOpen: false,
      isDescriptionModalOpen: false,
      descriptionSource: { source: {} }
    };
  },

  methods: {
    onAutocompleteKeyUp(event) {
      if (event.key.length == 1) {
        this.loadSources(event.target.value);
      }
    },

    loadSources: _.debounce(function(query) {
      this.loading = true;
      axios.get('/autocomplete/sources', {
        params: { term: query }
      }).then(response => {
        this.loading = false;
        this.ajaxList = response.data;
      }).catch(error => {
        console.error(error);
      });
    }, 500),

    addSource(source) {
      if (source) {
        // Give the source extra_info and description fields, and make them
        // reactive
        let pivot = {extra_info: '', description: ''};
        this.$set(source, 'pivot', pivot);

        let newValue = this.value.clone();
        newValue.push(source);
        this.$emit('input', newValue);
      }
    },

    removeTags(string, all=false) {
      if (all) {
        string = string.replace(/<[^>]+>/g, '');
      } else {
        let match = string.match(/<([^\s>]+)[^>]*>(.*)<\/\1>/)
        if (match) {
          string = match[2];
        }
      }

      return string.replace('&nbsp;', ' ');
    },

    removeSource(index) {
      let newValue = this.value.clone();
      newValue.splice(index, 1);
      this.$emit('input', newValue);
    },

    openDescriptionModal(source) {
      this.descriptionSource.source = source;
      this.isDescriptionModalOpen = true;
    }
  }
}
</script>

<style lang="sass">
.source-list {
  margin-left: 1rem;

  li:not(:first-child) {
    margin-top: .75rem;
  }

  .source-entry {
    display: flex;

    .source-long {
      flex: 1;
      max-width: 15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 1rem;
    }

    .source-extra-info {
      flex: 2;
    }
  }
}
</style>
