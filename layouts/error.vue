<template>
  <v-app>
    <Container class="text-center mt-10">
      <h1 v-if="error.statusCode === 404" class="text-h2 mb-10 text-secondary">
        {{ pageNotFound }}
      </h1>
      <h1 v-else class="text-h2 mb-10 text-secondary">
        {{ otherError }}
      </h1>
      <v-btn rounded color="primary" to="/"> Ir a la página principal </v-btn>
    </Container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Página no encontrada',
      otherError: 'Error :/',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
