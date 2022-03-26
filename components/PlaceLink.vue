<template>
  <nuxt-link :to="placeLink">{{ place }}</nuxt-link>
</template>

<script>
import { slugify } from '~/core/slugify'

export default {
  name: 'PlaceLink',
  props: {
    place: {
      type: String,
      required: true,
    },
  },
  computed: {
    placeLink() {
      return `/impermeabilizaciones/${slugify(this.place)}`
    },
  },
}
</script>
