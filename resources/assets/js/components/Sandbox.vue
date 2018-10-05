<template>
  <div class="sandbox">
    <div role="pagination">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <a class="pagination-previous" :disabled="page <= 1" @click="page--">Previous</a>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a class="pagination-next" :disabled="page >= numPages" @click="page++">Next</a>
          </div>
        </div>
      </div>
      <nav class="pagination" aria-label="pagination">
        <ul class="pagination-list" v-if="forms && forms.length > 0">
          <li v-for="i in numPages">
            <a class="pagination-link" :class="{'is-current': page == i}" :aria-label="'Goto page'+i" @click="page = i">{{ i }}</a>
          </li>
        </ul>
      </nav>

      <div class="filter-panel" v-show="showFilter">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Shape</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input type="text" class="input" v-model="shape" @input="debounceGetForms()" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal" v-for="filter in filters">
          <div class="field-label is-normal">
            <label class="label">{{ filter.label }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select v-model="filter.value" @change="getForms()">
                    <option :value="-1" default="default">All</option>
                    <option v-for="option in filter.options" :value="option.id">{{ option.name }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span class="is-pulled-right">
        <a v-if="showFilter" @click="showFilter = false">Hide filters</a>
        <a v-else @click="showFilter=true">Filter</a>
      </span>
    </div>

    <hr />

    <div v-if="!forms">
      <p>Loading...</p>
    </div>

    <table v-else-if="forms.length > 0" class="table">
      <thead>
        <tr>
          <th>Forms</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody v-for="form in forms">
        <tr v-if="form.examples.length > 0" v-for="(example, i) in form.examples">
          <td v-if="i == 0" v-html="form.html" :rowspan="form.examples.length"></td>
          <td v-html="example.html"></td>
        </tr>
        <tr v-else>
          <td v-html="form.html"></td>
          <td>No examples in the database</td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      <p>No forms in the database match that description.</p>
    </div>
  </div>
</template>

<script>
class Filter {
  constructor(label, options) {
    this.label = label;
    this.value = -1;
    this.options = options;
  }
}

export default {
  props: {
    'language': {
      default: 0
    },
    'languages': {
      default: null
    },
    'morpheme': {
      default: null
    },
    'source': {
      default: null
    },
    'filterData': {},
    'uri': {},
    'perPage': {
      default: 20
    }
  },

  data() {
    return {
      forms: null,
      numPages: 0,
      page: 1,
      showFilter: false,
      shape: '',
      filters: []
    }
  },

  watch: {
    page() {
      this.getForms();
    }
  },

  created() {
    if (this.languages) {
      this.filters.push(new Filter('Language', this.languages));
    }

    this.getForms();

    for (let filterName in this.filterData) {
      this.filters.push(new Filter(filterName, this.filterData[filterName]));
    }
  },

  methods: {
    getForms() {
      this.forms = null;

      let params = {
        'perPage': this.perPage,
        'page': this.page
      };

      if (this.language) {
        params['language'] = this.language;
      }

      if (this.morpheme) {
        params['morpheme'] = this.morpheme;
      }

      if (this.source) {
        params['source'] = this.source;
      }

      for (let filter of this.filters) {
        params[_.camelCase(filter.label)] = filter.value;
      }

      axios.get(this.uri, {
        params: params
      }).then(response => {
          this.forms = response.data.data;
          this.numPages = response.data.last_page;

          this.forms.forEach (form => {
            if (form.examples.length == 0) {
              form.examples.push({ html: '<p class="table-note">No examples in the database</p>' });
            }
          });
        });
    },

    debounceGetForms: _.debounce(function (e) {
      this.getForms();
    }, 300)
  }
}
</script>

<style lang="scss">
.table tbody tr:last-child td {
  border-bottom-width: thin;
}

.sandbox {
  .table-note {
    font-style: italic;
  }

  .level {
    margin-bottom: .5em;
  }

  .filter-panel {
    margin-top: 1em;
  }
}
</style>
