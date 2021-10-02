<template>
  <div>
    <JumboSecondary title="Servicios">
      <Container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-left" v-html="body"></div>
      </Container>
    </JumboSecondary>
    <!-- -->
    <v-container>
      <v-row class="py-16 mt-10">
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card flat>
            <v-img height="250" :src="service.thumbnail"></v-img>
            <v-card-title class="primary--text">{{
              service.title
            }}</v-card-title>
            <v-card-text class="grey--text text--darken-4">{{
              service.short_text
            }}</v-card-text>
            <v-card-actions>
              <PrimaryButton outlined :to="service.link" nuxt class="px-6"
                >Leer más</PrimaryButton
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import servicesTexts from '~/content/static/services/page_texts.json'

const getServices = () => {
  const context = require.context('~/content/static/services', false, /\.json$/)
  const services = context
    .keys()
    .filter((t) => t !== './page_texts.json') // filter page texts out
    .map(context)
  return services
}

export default {
  name: 'Servicios',
  layout: 'default',
  data() {
    return {
      body: '',
      services: [],
    }
  },
  created() {
    // eslint-disable-next-line no-console
    this.services = getServices()
    this.body = servicesTexts.body
  },
}
</script>
