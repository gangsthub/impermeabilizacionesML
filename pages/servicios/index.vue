<template>
  <div>
    <JumboSecondary title="Servicios" :subtitle="subtitle" min-height="40vh">
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
          <ServiceCard :service="service" flat class="mb-10" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3 class="text-h4 text-center font-bold mb-12">Más Servicios</h3>
      <v-row class="py-16 mt-10">
        <v-col
          v-for="service in moreServices"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <ServiceCard :service="service" flat static-card class="mb-10" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import servicesTexts from '~/content/static/services/page_texts.json'
import { getServices, getMoreServices } from '~/core/getContent'

export default {
  name: 'Servicios',
  layout: 'default',
  asyncData() {
    return {
      services: getServices(),
      moreServices: getMoreServices(),
      body: servicesTexts.body,
      subtitle: servicesTexts.subtitle,
    }
  },
  data() {
    return {
      body: '',
      subtitle: '',
      services: [],
      moreServices: [],
    }
  },
}
</script>
