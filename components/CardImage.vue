<template>
  <ClientOnly>
    <cld-image
      :public-id="src"
      :height="height"
      gravity="auto:subject"
      crop="scale"
      loading="lazy"
      class="cld"
      alt=""
    >
      <cld-transformation height="250" />
      <cld-placeholder type="blur" />
    </cld-image>
  </ClientOnly>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: [String, Number],
      default: 250,
    },
  },
}
</script>
