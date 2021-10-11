<template>
  <v-card flat>
    <cld-image
      :public-id="service.thumbnail"
      height="250"
      gravity="auto:subject"
      crop="scale"
      loading="lazy"
      class="cld"
      alt=""
    >
      <cld-transformation height="250" />
      <cld-placeholder type="blur" />
    </cld-image>
    <v-card-title class="primary--text">{{ service.title }}</v-card-title>
    <v-card-text class="grey--text text--darken-4 line-clamp-3 pb-0">{{
      service.short_text
    }}</v-card-text>
    <v-card-actions class="mt-4">
      <ClientOnly>
        <PrimaryButton
          outlined
          :to="'/servicios/' + service.slug"
          nuxt
          class="px-6"
          >Leer más</PrimaryButton
        >
      </ClientOnly>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: () => ({
        title: '',
        short_text: '',
        slug: '',
        thumbnail: '',
      }),
    },
  },
}
</script>

<style scoped>
.cld {
  height: 250px;
}
</style>
