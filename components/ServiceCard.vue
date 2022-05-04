<template>
  <v-card
    v-bind="$attrs"
    class="rounded-lg h100p d-flex flex-column justify-space-between"
    :class="{
      'elevation-0': staticCard,
    }"
  >
    <nuxt-link v-if="!staticCard" :to="link">
      <CardImage :src="service.thumbnail" height="500" width="500" />
    </nuxt-link>
    <CardImage v-else :src="service.thumbnail" height="500" width="500" />
    <v-card-title class="px-6 primary--text">
      <h3 class="v-card__title pa-0 text-wrap break-normal">
        {{ service.title }}
      </h3>
    </v-card-title>
    <v-card-text
      class="px-6 grey--text text--darken-4 pb-0 mb-auto"
      :class="{
        'mb-6': staticCard,
      }"
      >{{ service.short_text }}</v-card-text
    >
    <v-card-actions v-if="!staticCard" class="mt-4 mb-6 px-6">
      <ClientOnly>
        <PrimaryButton outlined :to="link" nuxt class="px-6"
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
    staticCard: {
      // no links
      type: Boolean,
      default: false,
    },
  },
  computed: {
    link() {
      return '/servicios/' + this.service.slug
    },
  },
}
</script>

<style scoped>
.cld {
  height: 250px;
}
</style>
