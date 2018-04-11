import Loading from 'components/Loading'

export default {
  name: 'List',
  components: {
    Loading
  },
  props: {
    'list-style': Object,
    icon: {
      type: String,
      default: '',
    },
    title: String,
    data: Array,
    loading: Boolean,
    icon: String,
    error: String,
  },
  methods: {
    onClickPrev: function(e) {
      this.$emit('clickPrev')
    },
    onClickNext: function() {
      this.$emit('clickNext')
    },
    onClickItem: function(user) {
      this.$emit('clickItem', user)
    }
  }
}