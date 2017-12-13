<template>
    <div id="select-all-section">
        <a class="button" @click="toggle(true)">Select all</a>
        <a class="button" @click="toggle(false)">Select none</a>
        <slot></slot>
    </div>
</template>

<script>
export default {
    computed: {
        checkboxes() {
            return $("#select-all-section input:checkbox");
        }
    },

    methods: {
        toggle(setting) {
            this.checkboxes.prop("checked", setting);
        }
    }
};
</script>
