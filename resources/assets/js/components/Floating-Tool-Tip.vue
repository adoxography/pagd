<template>
    <transition name="fade">
        <div class="floating-tool-tip box" v-show="options.show" :style="{top: top, left: left}" v-html="options.content"></div>
    </transition>
</template>

<script>
export default {
    name: 'floating-tool-tip',

    props: {
        options: {
            default: {
                show: false,
                content: '',
                x: 0,
                y: 0
            }
        }
    },

    computed: {
        top() {
            return (this.options.y - 10) + 'px';
        },

        left() {
            return (this.options.x - 10) + 'px';
        }
    }
};
</script>

<style>
.floating-tool-tip {
    position: absolute;
    padding: 0.25rem;
    border-radius: 0;
}
</style>
