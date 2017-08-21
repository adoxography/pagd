<template>
	<div
		class="alg-typewriter-wrapper"
		@focusin="onFocusIn"
		@focusout="onFocusOut"
		@keydown="onKeyDown($event)"
	>
		<transition name="fade">
			<ul class="box alg-typewriter" v-show="show">
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
	</div>
</template>

<script>
import { dictionary } from '../util/SpecialCharacters'

export default {
	data() {
		return {
			show: false,

			chars: dictionary,

			keys: []
		}
	},

	computed: {
		inputField() {
			let defaultSlot = this.$slots.default[0].elm;

			return defaultSlot.className == "input" ? defaultSlot : defaultSlot.getElementsByClassName("input")[0];
		}
	},

	methods: {
		onFocusIn() {
			this.show = true;
		},

		onFocusOut() {
			this.show = false;
		},

		append(char) {
		    let event = new Event('input', {
		        'bubbles': true,
		        'cancelable': true
		    });

			this.inputField.value += char.symbol;
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
		bottom: 1rem;
		z-index: 1000;
		padding: .5rem;

		.alg-typewriter-button {
			width: 2rem;
			height: 2rem;
		}
	}
}
</style>
