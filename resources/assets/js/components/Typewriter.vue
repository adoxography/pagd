<template>
    <div
        class="alg-typewriter-wrapper"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
        @keydown="onKeyDown($event)"
    >
        <transition name="fade">
            <ul class="box alg-typewriter" v-show="shouldShow" :style="{bottom: options.size + 'rem'}">
                <li v-for="charset in chars">
                    <a
                        v-for="char in charset"
                        class="button alg-typewriter-button"
                        @click="insertCharacter(char)"
                        @mousedown.prevent="getPosition"
                        :title="char.getCommand()"
                    >
                        {{ char.symbol }}
                    </a>
                </li>
            </ul>
        </transition>
        <slot></slot>
        <portal :to="portalName">
          <a class="button" @click="toggle" title="Special characters">
            <i class="fa fa-keyboard-o"></i>
          </a>
        </portal>
    </div>
</template>

<script>
import { dictionary } from '../util/SpecialCharacters'

export default {
    props: {
        disabled: { default: false },

        startHidden: { default: false },

        typewriterId: { default: null },

        options: {
            default() {
                return { size: 1 };
            }
        }
    },

    data() {
        return {
            show: false,
            turnedOff: false,

            chars: dictionary,

            keys: []
        }
    },

    computed: {
        inputField() {
            let defaultSlot = this.$slots.default[0].elm;

            if (defaultSlot.className.includes("input")) {
                return defaultSlot;
            }

            return defaultSlot.getElementsByClassName("input")[0];
        },

        shouldShow() {
            return this.show && !this.disabled && !this.turnedOff;
        },

        portalName() {
            let name = 'typewriter-toggle';

            if (this.typewriterId !== null) {
                name += '-' + this.typewriterId;
            }

            return name;
        }
    },

    created() {
        if (this.startHidden) {
            this.turnedOff = true;
        }
    },

    methods: {
        onFocusIn() {
            this.show = true;
        },

        onFocusOut() {
            this.show = false;
        },

        toggle() {
            this.inputField.focus();
            if (this.shouldShow) {
              this.turnedOff = true;
            } else {
              this.turnedOff = false;
              this.show = true;
            }
        },

        getPosition() {
            if (this.inputField.tagName == 'DIV') {
              this.cursorPosition = window.getSelection().anchorOffset;
            } else {
              this.cursorPosition = this.inputField.selectionStart;
            }
        },

        insertCharacter(char) {
            let event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            if (this.inputField.tagName == 'DIV') {
                let initialLength = this.inputField.innerHTML.length;
                this.inputField.innerHTML = this.insertCharacterIntoString(this.inputField.innerHTML, char, this.cursorPosition);
                this.cursorPosition += this.inputField.innerHTML.length - initialLength;
            } else {
                let initialLength = this.inputField.value.length;
                this.inputField.value = this.insertCharacterIntoString(this.inputField.value, char, this.cursorPosition);
                this.cursorPosition += this.inputField.value.length - initialLength;
            }

            this.inputField.dispatchEvent(event);

            if (this.inputField.tagName == 'DIV') {
              let range = document.createRange();
              let selection = window.getSelection();
              let line = this.inputField.childNodes[0];

              range.setStart(line, this.cursorPosition);
              range.setEnd(line, this.cursorPosition);

              selection.removeAllRanges();
              selection.addRange(range);
            } else {
              this.inputField.selectionStart = this.cursorPosition;
              this.inputField.selectionEnd = this.cursorPosition;
            }
        },

        insertCharacterIntoString(oldText, char, index) {
            let merged = char.insertInto(oldText, index);
            return merged;
        },

        onKeyDown(event) {
            if (event.altKey) {
                let triggered = null;

                for (let i = 0; i < this.chars.length && !triggered; i++) {
                    triggered = this.chars[i].find(char => {
                        return char.triggeredBy(event.key);
                    });
                }

                if (triggered) {
                    event.preventDefault();
                    this.insertCharacter(triggered);
                }
            }
        }
    }
}
</script>

<style lang="scss">
.alg-typewriter-wrapper {
    position: relative;

    .alg-typewriter {
        position: absolute;
        z-index: 1000;
        padding: .5rem;

        .alg-typewriter-button {
            width: 2rem;
            height: 2rem;
        }
    }
}
</style>
