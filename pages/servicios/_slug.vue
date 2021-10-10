<template>
  <div>
    <JumboSecondary :title="service.title" :bg-image="service.thumbnail">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text-left text-h5" v-html="service.long_text"></div>
    </JumboSecondary>
  </div>
</template>

<script>
export default {
  name: 'ServiciosDynamic',
  layout: 'default',
  async asyncData({ params, error }) {
    // eslint-disable-next-line no-console
    console.log({ p: params.slug })
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
