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
                        @click="append(char)"
                        @mousedown.prevent=""
                        :title="char.getCommand()"
                    >
                        {{ char.symbol }}
                    </a>
                </li>
            </ul>
        </transition>
        <slot></slot>
        <portal :to="portalName">
          <a class="button" @click="toggle">
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

        append(char) {
            let event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });

            if (this.inputField.tagName == 'DIV') {
                this.inputField.innerHTML += char.symbol;
            } else {
                this.inputField.value += char.symbol;
            }

            this.inputField.dispatchEvent(event);
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
                    this.append(triggered);
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
