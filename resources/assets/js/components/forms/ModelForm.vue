<script>
function existsValidator(value, [arr, key]) {
  return arr.some(el => (key ? el[key] : el) === value);
}

function updateData(data, initial) {
  if (data !== null) {
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
}

function turnOffAutocompletes(parent) {
  let inputs = parent.getElementsByTagName('input');
  for (let input of inputs) {
    input.autocomplete = 'off';
  }
}

function normalizeTextareas(parent) {
  let wysiwygs = parent.getElementsByClassName('editr');

  for (let wysiwyg of wysiwygs) {
    let content = wysiwyg.getElementsByClassName('editr--content')[0];
    content.tabIndex = null;
  }
}

function normalizeRadios(parent) {
  let els = parent.getElementsByClassName('radio');
  for (let el of els) {
    el.getElementsByTagName('input')[0].tabIndex = -1;
  }
}

export default {
  props: {
    lists: {
      type: Object,
      default: () => {}
    },

    initial: {
      type: Object,
      default: () => {}
    },

    template: {
      type: Object,
      default: () => {}
    },

    oldErrors: {},
    oldValues: {}
  },

	data() {
		return {
      data: {},
      filteredLists: {},
      stringifiedData: ''
		};
	},

	created() {
    this.filteredLists = JSON.parse(JSON.stringify(this.lists));

    this.$validator.extend('exists', existsValidator);

    this.data = this.template;
    if (this.oldValues) {
      updateData(this.data, this.oldValues);
    } else {
      updateData(this.data, this.initial);
    }
	},

  mounted() {
    turnOffAutocompletes(this.$vnode.elm);
    normalizeTextareas(this.$vnode.elm);
    normalizeRadios(this.$vnode.elm);

		if (this.oldErrors) {
      this.updateErrors(this.oldErrors);
    };
  },

  methods: {
    filterList(listName, query) {
      query = query.toLowerCase();
      this.filteredLists[listName] = this.lists[listName].filter(item => item.name.toLowerCase().includes(query));
    },

    updateErrors(errorList) {
      for (let [field, errors] of Object.entries(errorList)) {
        errors.forEach(msg => this.errors.add({field, msg}));
      }
    },

    beforeSubmit() {
      this.stringifiedData = JSON.stringify(this.data);
    }
  }
};
</script>
