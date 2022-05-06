<template>
  <v-card
    class="rounded-lg d-flex flex-column flex-sm-row justify-space-between"
    nuxt
    :to="link"
  >
    <CardsCardImage
      v-if="service.thumbnail1"
      :src="service.thumbnail1"
      height="400"
      width="250"
    />
    <div class="d-flex flex-column justify-center pa-6">
      <v-card-title class="primary--text flex-column align-start">
        <p
          class="
            overline
            green--text
            text--darken-3
            font-weight-bold
            mb-3
            text-wrap
            break-normal
          "
        >
          <v-icon class="pr-2" color="green darken-3">mdi-recycle</v-icon>
          <span>Sistema Sostenible con el Medio Ambiente</span>
        </p>
        <h3 class="v-card__title pa-0 text-wrap break-normal">
          {{ service.title }}
        </h3>
      </v-card-title>
      <v-card-text class="grey--text text--darken-4">{{
        service.short_text
      }}</v-card-text>
      <v-card-actions class="">
        <ClientOnly>
          <PrimaryButton outlined class="px-6" @click.prevent
            >Leer más</PrimaryButton
          >
        </ClientOnly>
      </v-card-actions>
    </div>
    <CardsCardImage
      v-if="service.thumbnail2"
      class="hide-on-small-screen rounded-0"
      :src="service.thumbnail2"
      height="400"
      width="250"
    />
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
      return { path: '/servicios/' + this.service.slug, query: { eco: true } }
    },
  },
}
</script>

<style scoped>
@media (max-width: 960px) {
  .hide-on-small-screen {
    display: none;
  }
}
</style>
