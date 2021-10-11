<template>
  <div>
    <Jumbo />
    <!-- -->
    <Container style="min-height: 50vh" class="my-8">
      <Warantee direction="horizontal" :fill="false" />
    </Container>

    <!-- -->
    <div class="secondary white--text mb-16 overflow-hidden">
      <v-container class="py-12">
        <h2 class="text-center font-bold mb-12 text-h3">Servicios</h2>
        <v-row class="mb-10">
          <v-col
            v-for="service of services"
            :key="service.title"
            cols="12"
            sm="6"
            md="4"
          >
            <ServiceCard
              :key="service.title"
              :service="service"
              color="white"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- -->
    <v-container class="other-services">
      <h2 class="text-center mb-10 text-h4">Más servicios</h2>
      <v-row>
        <v-col
          v-for="service of moreServices"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <ServiceCard :service="service" static-card />
        </v-col>
      </v-row>
    </v-container>
    <!-- -->
    <Zones />
  </div>
</template>

<script>
import { getMoreServices, getServices } from '~/core/getContent'

export default {
  asyncData() {
    const services = getServices()
    const moreServices = getMoreServices()

    return {
      services,
      moreServices,
    }
  },
  data() {
    return {
      services: [],
      moreServices: [],
    }
  },
}
</script>
