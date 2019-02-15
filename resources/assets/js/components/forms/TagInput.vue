<template>
    <div class="taginput control" :class="rootClasses">
        <div
            class="taginput-container"
            :class="[statusType, size, containerClasses]"
            :disabled="disabled"
            @click="hasInput && focus($event)">
            <draggable
                v-model="tags"
                @change="onDrag">
              <alg-tag
                  v-for="(tag, index) in tags"
                  :key="index"
                  :type="type"
                  :size="size"
                  :rounded="rounded"
                  :text-color="typeof tag === 'string' ? 'inherit' : 'invert'"
                  :background-color="typeof tag === 'string' ? null : tag.colour"
                  :attached="attached"
                  :tabstop="false"
                  :disabled="disabled"
                  :ellipsis="ellipsis"
                  :closable="closable"
                  @close="removeTag(index)">
                  <span @click="tagClicked(tag)">
                    <slot name="tagDisplay" :tag="tag">
                      {{ getNormalizedTagText(tag) }}
                    </slot>
                  </span>
              </alg-tag>
            </draggable>

            <b-autocomplete
                ref="autocomplete"
                v-if="hasInput"
                v-model="newTag"
                v-bind="$attrs"
                :data="data"
                :field="field"
                :icon="icon"
                :icon-pack="iconPack"
                :maxlength="maxlength"
                :has-counter="false"
                :size="size"
                :disabled="disabled"
                :loading="loading"
                :keep-first="!allowNew"
                @focus="onFocus"
                @blur="customOnBlur"
                @keydown.native="keydown"
                @select="onSelect">
                <template :slot="headerSlotName">
                    <slot name="header" />
                </template>
                <template
                    :slot="defaultSlotName"
                    slot-scope="props">
                    <slot
                        :option="props.option"
                        :index="props.index" />
                </template>
                <template :slot="emptySlotName">
                    <slot name="empty" />
                </template>
            </b-autocomplete>
        </div>

        <p v-if="maxtags || maxlength" class="help counter">
            <template v-if="maxlength && valueLength > 0">
                {{ valueLength }} / {{ maxlength }}
            </template>
            <template v-else-if="maxtags">
                {{ tagsLength }} / {{ maxtags }}
            </template>
        </p>
    </div>
</template>

<script>
import Taginput from 'buefy/src/components/taginput/Taginput.vue';
import draggable from 'vuedraggable';

export default {
  extends: Taginput,
  components: { draggable },
  props: ['onClickTag'],

  watch: {
    /**
     * Watch the tags object for new strings
     */
    tags: function (newTags) {
      // If the component doesn't allow new elements, isn't dealing with
      // objects, or there are no strings in the tags, exit early
      if (!this.allowNew || !this.field || newTags.every(tag => typeof tag !== 'string')) {
        return;
      }

      // Convert any strings in the tags to objects
      this.tags = newTags.map(tag => {
        if (typeof tag !== 'string') {
          return tag;
        }
        
        let replacementTag = {};
        replacementTag[this.field] = tag;
        return replacementTag;
      });

      this.$emit('input', this.tags);
    }
  },

  methods: {
    onDrag() {
      this.$emit('input', this.tags);
    },

    tagClicked(tag) {
      if (this.onClickTag) {
        this.onClickTag(tag);
        console.log(tag);
        this.$emit('input', this.tags);
      }
    },

    keydown(event) {
      if (this.removeOnKeys.indexOf(event.keyCode) !== -1 && !this.newTag.length) {
        this.removeLastTag();
      }

      // Stop if is to accept select only
      if (this.autocomplete && !this.allowNew) {
        return;
      }

      if (this.confirmKeyCodes.indexOf(event.keyCode) >= 0 && this.newTag.length) {
        event.preventDefault();
        this.addTag();
      }
    }
  }
};
</script>
