<template>
  <div>
    <Jumbo />
    <!-- -->
    <Container>
      <Warantee direction="horizontal" :fill="false" />
    </Container>

    <!-- -->
    <v-container class="py-16">
      <h2 class="text-center mb-12 text-h4">Servicios</h2>
      <v-row>
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <ServiceCard :service="service" />
        </v-col>
      </v-row>
    </v-container>
    <!-- -->
    <v-container class="other-services">
      <h2 class="text-center mb-10 text-h4">Más servicios</h2>
      <v-row>
        <v-col
          v-for="service in moreServices"
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
    <v-container
      v-if="zones && zones.length"
      v-intersect="onIntersect"
      class="mt-10"
    >
      <v-row>
        <v-col>
          <v-card
            flat
            rounded
            class="zones mt-10"
            color="primary"
            dark
            min-height="500px"
            :class="{ visible: isZonesVisible }"
          >
            <v-card-text class="py-16 relative z-1">
              <h2 class="text-h5 text-center mb-4">
                <span class="d-inline-block">Trabajamos en toda</span>
                <span class="d-inline-block"
                  >el área de <strong>Barcelona</strong></span
                >
                <span class="d-inline-block"
                  >y parte de <strong>Tarragona</strong></span
                >
              </h2>
              <v-row class="mt-8">
                <v-col
                  cols="12"
                  sm="12"
                  md="6"
                  :order="$vuetify.breakpoint.smAndDown ? -1 : 'unset'"
                >
                  <v-list flat dense color="transparent" class="pl-6">
                    <v-list-item v-for="(zone, i) of zones" :key="i">{{
                      zone
                    }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import homeTexts from '~/content/static/home.json'
import { getMoreServices, getServices } from '~/core/getContent'

export default {
  asyncData() {
    const { zones } = homeTexts
    const services = getServices()
    const moreServices = getMoreServices()

    return {
      services,
      moreServices,
      zones,
    }
  },
  data() {
    return {
      services: [],
      isZonesVisible: false,
      zones: [],
    }
  },
  methods: {
    onIntersect(entries) {
      this.isZonesVisible = entries[0].isIntersecting
    },
  },
}
</script>

<style lang="scss" scoped>
.zones {
  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  &::before {
    background-image: url('~/assets/img/Mapa_comarcal_de_Catalunya.svg');
    background-size: 50%;
    background-position: 105% 130%;
    will-change: transform;
    transition: transform 0.5s;
    transform: rotateX(40deg);
    opacity: 0.3;
    @include onMobile {
      background-size: 80%;
      background-position: right bottom;
    }
  }
  &::after {
    background-image: linear-gradient(
      to top,
      transparent,
      map-get($grey, 'darken-4')
    );
  }
}
.zones.visible::before {
  transform: none;
}
</style>
