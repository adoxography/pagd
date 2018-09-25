<script>
import Form from './Form';
import { Datalist } from '../../Datalist.js';

/**
 * Datatype that holds information on IGT lines
 */
class IGTLine {
  /**
   * Ininitializes the IGTLine
   *
   * @param text  The text of the line
   * @param type  An object representing the line's formatting type
   */
  constructor(text='', type=null) {
    this.text = text;
    this.type = type;
  }
}

export default {
  extends: Form,

  props: [
    'lineTypes',
    'oldLines'
  ],

  data() {
    return {
      language: new Datalist,
      lines: [new IGTLine]
    };
  },

  created() {
    // If old lines were passed in, prepopulate the form with them
    if (this.oldLines) {
      this.lines = this.oldLines.map(line => {
        let type = this.lineTypes.find(type => type.id == line.type_id);
        return new IGTLine(line.text, type);
      });
    }

    // Ensure that all lines have a type
    this.lines.forEach(line => {
      if (!line.type) {
        line.type = this.lineTypes[0];
      }
    });

    // Make sure that everything is aligned properly to start off with
    this.align();
  },

  methods: {
    /**
     * Adds a line to the IGT
     *
     * Gives focus to the newly added line.
     *
     * @param index  The index to add the line after
     */
    addLine(index) {
      let newIndex = index + 1;
      this.lines.splice(newIndex, 0, new IGTLine('', this.lineTypes[0]));

      // Wait for the page to re-render before focusing the new element
      Vue.nextTick(() => this.$refs["line-"+newIndex][0].focus());
    },

    /**
     * Removes a line of IGT
     *
     * Gives focus to the line before the line that was removed, or the first
     * line if the first line was removed. Will do nothing if there is only
     * one line.
     *
     * @param index  The index of the line to remove
     */
    removeLine(index) {
      if (this.lines.length > 1) {
        this.lines.splice(index, 1);

        let remainingLine = Math.max(index-1, 0);

        Vue.nextTick(() => this.$refs["line-"+remainingLine][0].focus());
      }
    },

    /**
     * Lines up all of the aligning lines in the IGT
     */
    align() {
      let horizontal = this.lines.map(line => line.text.split(/\s+/));
      let vertical = _.zip.apply(_, horizontal)
      let exclude = [];

      for (let i = 0; i < this.lines.length; i++) {
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

    /**
     * Ensures all members of an array are the same length by padding them
     * with a given character
     *
     * @param arr      An array of strings
     * @param str      The string to pad the members of the array with
     * @param exclude  The indices to exclude from the padding
     * @return  An array of strings which are all the same length
     */
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
    }

  }
}
</script>

<style>
.igt-line {
  margin: inherit;
}
</style>
