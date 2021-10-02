<script>
export default {
  name: 'PrimaryButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  render(h) {
    return h(
      'v-btn',
      {
        props: {
          rounded: true,
          large: true,
          color: this.$props.color || 'primary',
          ...this.$attrs,
        },
      },
      this.$slots.default ? this.$slots.default : ['Pide tu presupuesto']
    )
  },
}
</script>
