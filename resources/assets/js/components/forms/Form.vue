<template>
  <form :method="method"
        :action="action"
        ref="form"
        @submit.prevent="validateBeforeSubmit($event)">
    <input name="_token" type="hidden" :value="csrfToken" />
    <slot></slot>
    <div class="field">
      <button type="submit" class="button is-primary" :disabled="errors.any()">Submit</button>
    </div>
  </form>
</template>

<script>
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

export default {
  mixins: [oldErrors, oldSources],

  props: ['method', 'action'],

  data() {
    return {
      sources: [],
      csrfToken: Laravel.csrfToken
    }
  },

  methods: {
    validateBeforeSubmit(event) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$refs.form.submit();
        }
      });
    }
  }
}
</script>
