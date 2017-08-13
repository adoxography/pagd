<script>
import VeeValidate from 'vee-validate';
import oldErrors from '../../mixins/OldErrors';
import oldSources from '../../mixins/OldSources';

Vue.use(VeeValidate);

export default {
    mixins: [oldErrors, oldSources],

    data() {
        return {
            sources: []
        }
    }
}
</script>
