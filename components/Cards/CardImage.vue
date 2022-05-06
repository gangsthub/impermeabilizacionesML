<template>
  <nuxt-img loading="lazy" v-bind="$attrs" class="cld" :src="src" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
