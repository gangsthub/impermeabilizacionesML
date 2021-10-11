<template>
  <v-card flat>
    <nuxt-link v-if="!staticCard" :to="link">
      <CardImage :src="service.thumbnail" />
    </nuxt-link>
    <CardImage v-else :src="service.thumbnail" />
    <v-card-title class="primary--text">{{ service.title }}</v-card-title>
    <v-card-text class="grey--text text--darken-4 line-clamp-3 pb-0">{{
      service.short_text
    }}</v-card-text>
    <v-card-actions v-if="!staticCard" class="mt-4">
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
