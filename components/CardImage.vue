<template>
  <ClientOnly>
    <img loading="lazy" v-bind="$attrs" class="cld" :src="srcComputed" />
  </ClientOnly>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: [String, Number],
      default: '',
    },
    width: {
      type: [String, Number],
      default: '',
    },
    imgProps: {
      type: Object,
      default: () => ({
        crop: 'crop',
      }),
    },
  },
  computed: {
    options() {
      return {
        ...(this.height && { height: this.height }),
        ...(this.width && { width: this.width }),
        gravity: 'auto:subject',
        ...this.imgProps,
      }
    },
    srcComputed() {
      return this.fetchRemote(this.src, this.options)
    },
  },
  methods: {
    fetchRemote(url, options = {}) {
      return this.$cloudinary.image.fetchRemote(url, options)
    },
  },
}
</script>
