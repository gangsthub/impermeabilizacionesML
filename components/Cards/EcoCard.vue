<template>
  <v-card class="rounded-lg d-flex justify-space-between" nuxt :to="link">
    <CardsCardImage
      v-if="service.thumbnail"
      :src="service.thumbnail"
      height="500"
      width="500"
    />
    <div>
      <v-card-title class="primary--text">{{ service.title }}</v-card-title>
      <v-card-text class="grey--text text--darken-4">{{
        service.short_text
      }}</v-card-text>
    </div>
  </v-card>
</template>

<script>
/**
 * @typedef Service
 * @property {string} title
 * @property {string} short_text
 * @property {string} slug
 * @property {string} thumbnail
 * @property {string} [long_text]
 */
export default {
  props: {
    service: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    link() {
      return '/servicios/' + this.service.slug
    },
  },
}
</script>
