<template>
    <div v-if="attached && closable" class="tags has-addons">
        <span
            class="tag"
            :style="styles"
            :class="[type, size, { 'is-rounded': rounded }]">
            <span :class="{ 'has-ellipsis': ellipsis }">
                <slot/>
            </span>
        </span>
        <a
            class="tag is-delete"
            role="button"
            :tabindex="tabstop ? 0 : false"
            :disabled="disabled"
            :class="[size, { 'is-rounded': rounded }]"
            @click="close()"
            @keyup.delete.prevent="close()"
        />
    </div>
    <span
        v-else
        class="tag"
        :style="styles"
        :class="[type, size, { 'is-rounded': rounded }]">
        <span :class="{ 'has-ellipsis': ellipsis }">
            <slot/>
        </span>

        <a
            v-if="closable"
            role="button"
            class="delete is-small"
            :disabled="disabled"
            :tabindex="tabstop ? 0 : false"
            @click="close()"
            @keyup.delete.prevent="close()"
        />
    </span>
</template>

<script>
import Tag from 'buefy/src/components/tag/Tag.vue';
import { invertColour } from '../../util/Colour.js';

/**
 * Tag component
 *
 * Subclass of Buefy's Tag component, which adds some extra functionality:
 *  - Adds props for background and text colour
 */
export default {
  extends: Tag,
  props: ['backgroundColor', 'textColor'],
  computed: {
    styles() {
      let styles = {};

      if (this.backgroundColor) {
        styles['background-color']  = this.backgroundColor;

        if (this.textColor === 'invert') {
          styles['color'] = invertColour(this.backgroundColor);
        }
      }

      if (this.textColor && this.textColor !== 'invert') {
        styles['color'] = this.textColor;
      }

      return styles;
    }
  }
}
</script>
