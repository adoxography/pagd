<template>
    <div class="alg-preview" :style="{'max-height': height}">
        <div v-show="overflowing && !show" class="preview-gradient" :style="{'height': height}"></div>
        <div ref="slot" class="preview-content">
            <slot></slot>
        </div>
        <div v-show="overflowing" class="toggle-bar">
            <a @click="toggle">{{ toggleText }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['preview'],

    data() {
        return {
           show: true,
           overflowing: false
        };
    },

    computed: {
        height() {
            return this.show ? '100%' : this.preview;
        },

        toggleText() {
            return this.show ? 'Show less...' : 'Show more...';
        },

        previewHeight() {
            return /\d+/.exec(this.preview)[0];
        }
    },

    methods: {
        toggle() {
            this.show = !this.show;
        }
    },

    mounted() {
        this.overflowing = this.$refs.slot.offsetHeight > this.previewHeight;
        this.show = false
    }
};
</script>

<style lang="scss">
    .alg-preview {
        overflow: hidden;
        display: flex;

        .preview-gradient {
            position: absolute;
            background: linear-gradient(rgba(0,0,0,0) 70%, rgba(255,255,255,0.8));
            width: 100%;
        }

        .preview-content {
            width: 100%;
        }

        .toggle-bar {
            position: absolute;
            width: 100%;
            display: flex;
            align-self: flex-end;
            justify-content: center;
        }
    }
</style>
