<template>
  <div class="mt-10">
    <Container
      v-if="zones && zones.length"
      v-intersect="onIntersect"
      class="primary"
    >
      <v-card
        flat
        rounded
        class="zones"
        dark
        color="transparent"
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
    </Container>
  </div>
</template>

<script>
import homeTexts from '~/content/static/home.json'

export default {
  data() {
    const { zones } = homeTexts

    return {
      zones,
      isZonesVisible: false,
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
