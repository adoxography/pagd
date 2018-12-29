<template>
  <ul>
    <li v-for="charset in chars">
      <a v-for="char in charset"
         class="button"
         @click="insertCharacter(char)">
        {{ char.symbol }}
      </a>
    </li>
  </ul>
</template>

<script>
import { dictionary } from '../../util/SpecialCharacters'

export default {
  title: 'specialCharacter',

  icon: '<span class="icon"><i class="fas fa-keyboard"></i></span>',

  description: 'Special Character',

  data() {
    return {
      chars: dictionary
    };
  },

  methods: {
    insertCharacter(char) {
      this.$emit('exec', 'insertHTML', char.symbol);
      this.$parent.closeDashboard();
    }
  }
}
</script>
