<template>
  <div @mouseleave="open=false" class="floating-typewriter">
    <a @mouseover="open=true" class="toggle">
      <span class="icon is-medium">
        <i class="fas fa-2x fa-keyboard"></i>
      </span>
    </a>
    <transition name="slide-from-right">
      <div v-show="open" class="panel">
        <ul>
          <li v-for="list in characters">
            <a v-for="char in list"
               class="button"
               @click="insertCharacter(char.symbol)">
              {{ char.symbol }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { dictionary } from '../util/SpecialCharacters.js';

export default {
  data() {
    return {
      lastFocus: null,
      open: false,
      characters: dictionary
    };
  },

  methods: {
    insertCharacter(text) {
      if (this.lastFocus) {
        if (this.lastFocus.tagName === 'DIV') {
          let selection = window.getSelection();
          let range = selection.getRangeAt(0);
          range.deleteContents();

          let node = document.createTextNode(text);
          range.insertNode(node);
          range.collapse(false);

        } else {
          let startIndex = this.lastFocus.selectionStart;
          let endIndex = this.lastFocus.selectionEnd;
          let currentValue = this.lastFocus.value;

          let newValue = currentValue.slice(0, startIndex) + text + currentValue.slice(endIndex);

          this.lastFocus.value = newValue;
          this.lastFocus.selectionStart = this.lastFocus.selectionEnd = startIndex + text.length;
        }

        let event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
        this.lastFocus.dispatchEvent(event);
        this.lastFocus.focus();
      }


    }
  },

  mounted() {
    let inputs = document.querySelectorAll(
      'input[type="text"], div[contenteditable="true"]'
    );

    for (let input of inputs) {
      input.addEventListener('focus', () => {
        this.lastFocus = input;
      });
    }

    console.log(inputs);
  }
}
</script>

<style lang="sass">
.floating-typewriter {
  z-index: 100;
  position: absolute;
  right: 4rem;
  bottom: 3rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  .toggle {
    background-color: rgba(222, 255, 0, 0.5);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .panel {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: .5rem;
    margin-right: 1rem;

    .button {
      width: 32px;
      height: 32px;
    }
  }
}

.slide-from-right-enter-active, .slide-from-right-leave-active {
  transition: all .3s ease;
}

.slide-from-right-enter, .slide-from-right-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
