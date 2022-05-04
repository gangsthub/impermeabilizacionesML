<template>
  <div>
    <v-img
      :lazy-src="$img(service.thumbnail, { width: 10, quality: 70 })"
      :src="$img(service.thumbnail)"
      max-height="500"
      class="reserve-500"
    />
    <Container class="mt-n16 mx-auto white pt-12 relative z-1">
      <h1
        class="
          font-weight-bold
          text-md-h3 text-sm-h3 text-xs-h5
          mb-4
          px-5 px-sm-0
        "
      >
        {{ service.title }}
      </h1>
      <!-- eslint-disable vue/no-v-html -->
      <div class="texts mt-10 px-5 px-sm-0" v-html="service.long_text"></div>
    </Container>
    <Container class="mt-12">
      <v-divider class="mb-8" />
      <div class="text-center">
        <PrimaryButton exact outlined to="/servicios" nuxt class="px-6 mx-auto"
          >Volver a servicios</PrimaryButton
        >
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'ServiciosDynamic',
  layout: 'default',
  async asyncData({ params, error }) {
    let service
    try {
      service = await import(
        '~/content/static/services/' + params.slug + '.json'
      ).then((m) => m.default)
    } catch (_e) {
      error({ statusCode: 404, message: 'service not found' })
    }
    return { service }
  },
  data() {
    return {
      service: {},
    }
  },
  head() {
    return {
      title: this.service.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.service.short_text,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.reserve-500 {
  min-height: 500px;
}
</style>
