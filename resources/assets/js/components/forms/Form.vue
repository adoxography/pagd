<template>
  <form :method="method == 'GET' ? method : 'POST'"
        :action="action"
        ref="form"
        @submit.prevent="validateBeforeSubmit($event)">
    <input name="_token" type="hidden" :value="csrfToken" />
    <input v-if="method != 'POST' && method != 'GET'"
           type="hidden"
           name="_method"
           :value="method" />
    <slot></slot>
    <div class="field">
      <button type="submit" class="button is-primary has-text-grey-dark" :disabled="errors.any()">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['method', 'action', 'oldErrors'],

  data() {
    return {
      csrfToken: Laravel.csrfToken
    }
  },

  mounted() {
		if(this.oldErrors) {
      _.forEach(this.oldErrors, (errors, field) => {
        errors.forEach(message => this.$root.errors.add({field: field, msg: message}));
      });
    };
  },

  methods: {
    validateBeforeSubmit(event) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$children.forEach(child => {
            if (child.beforeSubmit) {
              child.beforeSubmit();
            }
          });
          
          this.$nextTick(() => this.$refs.form.submit());
        }
      });
    }
  }
}
</script>
