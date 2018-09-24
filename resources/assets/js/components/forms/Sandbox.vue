<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

class XIGTLine {
  constructor(text='', type=null) {
    this.text = text;
    this.type = type;
  }
}

export default {
  extends: Form,

  data() {
    return {
      language: new Datalist,

      lines: [new XIGTLine],
      lineTypes: [
        { name: 'Morphemes',             align: true  },
        { name: 'Glosses',                align: true  },
        { name: 'Slots',                 align: true  },
        { name: 'Partial translations',  align: true  },
        { name: 'Full translation',     align: false },
        { name: 'Other (aligning)',     align: true  },
        { name: 'Other (non-aligning)', align: false }
      ]
    };
  },

  created() {
    this.lines.forEach(line => {
      if (!line.type) {
        line.type = this.lineTypes[0];
      }
    });
  },

  methods: {
    addLine(index) {
      let newIndex = index + 1;
      this.lines.splice(newIndex, 0, new XIGTLine('', this.lineTypes[0]));

      // Wait for the page to re-render before focusing the new element
      Vue.nextTick(() => this.$refs["line-"+newIndex][0].focus());
    },

    removeLine(index) {
      if (this.lines.length > 1) {
        this.lines.splice(index, 1);

        let remainingLine = Math.max(index-1, 0);

        Vue.nextTick(() => this.$refs["line-"+remainingLine][0].focus());
      }
    },

    align() {
      let horizontal = this.lines.map(line => line.text.split(/\s+/));
      let vertical = _.zip.apply(_, horizontal)
      let exclude = [];

      for (let i = 0; i < this.lines.length; i++) {
        //let type = this.lines[i].type;
        //if (!this.lineTypes[type].align) {
        if (!this.lines[i].type.align) {
          exclude.push(i);
        }
      }

      vertical = vertical.map(tokens => this.__padArray(tokens, ' ', exclude));
      horizontal = _.zip.apply(_, vertical);

      for (let i = 0; i < horizontal.length; i++) {
        this.lines[i].text = horizontal[i].join(' ').trim();
      }
    },

    __padArray(arr, str, exclude=null) {
      exclude = exclude || [];
      let size = 0;

      for (let i = 0; i < arr.length; i++) {
        if (!exclude.includes(i)) {
          let token = arr[i] || '';
          size = Math.max(size, token.length);
        }
      }

      for (let i = 0; i < arr.length; i++) {
        if (!exclude.includes(i)) {
          let token = arr[i] || '';
          let addon = str.repeat(size - token.length);
          arr[i] = token + addon;
        }
      }

      return arr;

      /*
       *let size = Math.max(...arr.map(token => token ? token.length : 0));
       *return arr.map(token => {
       *  token = token || '';
       *  let addon = str.repeat(size - token.length);
       *  return token + addon;
       *});
       */
    }

  }
}
</script>

<style>
.igt-line {
  margin: inherit;
}
</style>
