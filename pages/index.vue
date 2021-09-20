<template>
  <div>
    <Jumbo />
    <!-- -->
    <v-container>
      <v-row class="py-16 mt-10">
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="4">
          <v-card flat>
            <v-img
              height="250"
              src="https://picsum.photos/id/178/371/250.jpg"
            ></v-img>
            <v-card-title class="primary--text">{{service.title}}</v-card-title>
            <v-card-text class="grey--text text--darken-4">{{service.text}}</v-card-text>
            <v-card-actions>
              <v-btn text color="primary" :to="service.link" nuxt>Leer más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- -->
    <v-container class="other-services">
      <v-card flat class="d-flex flex-column align-center">
        <v-responsive
          min-height="400"
          class="w-100p"
          content-class="w-100p d-flex flex-column align-center justify-space-around"
        >

          <v-card-title tag="h3" class="text-h4 mb-10">Otros servicios</v-card-title>
          <v-card-text class="w-100p d-flex justify-space-around">
            <v-card class="transparent" flat>
              <v-img
                height="150"
                src="https://picsum.photos/id/178/371/150.jpg"
              ></v-img>
              <v-card-title class="pl-0">Formación de pendientes</v-card-title>
              <v-card-text class="px-0">Hormigón celular</v-card-text>
              <v-card-actions class="px-0"><PrimaryButton depressed to="/contacto" class="px-6" /></v-card-actions>
            </v-card>
            <v-card class="transparent" flat>
              <v-img
                height="150"
                src="https://picsum.photos/id/178/371/150.jpg"
              ></v-img>
              <v-card-title class="pl-0">Fachadas</v-card-title>
              <v-card-text class="px-0">Proyectadas con corcho natural</v-card-text>
              <v-card-actions class="px-0"><PrimaryButton depressed to="/contacto" class="px-6" /></v-card-actions>
            </v-card>
          </v-card-text>
        </v-responsive>
      </v-card>
    </v-container>
    <!-- -->
    <v-container class="mt-10">
      <v-row>
        <v-col>
          <v-card flat rounded class="mt-10" color="primary" dark min-height="500px">
            <v-card-text class="py-16">
              <h2 class="text-h5 text-center mb-4">
                <span class="d-inline-block">Trabajamos en toda</span>
                <span class="d-inline-block">el área de <strong>Barcelona</strong></span>
                <span class="d-inline-block">y parte de <strong>Tarragona</strong></span>
              </h2>
              <v-row class="mt-8">
                <v-col>
                  <v-list flat dense color="transparent" class="pl-6">
                    <v-list-item>
                      Garraf
                    </v-list-item>
                    <v-list-item>
                      Baix Penedes
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col>
                  <v-img
                    :src="require('~/assets/img/Mapa_comarcal_de_Catalunya.svg')"
                  ></v-img>
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
export default {
  data() {
    return {
      services: Object.freeze([
        {
          title: 'Servicio 1',
          text: 'Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 Texto del servicio 1 ',
          link: '/servicios/1',
        },
        {
          title: 'Servicio 2',
          text: 'Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 Texto del servicio 2 ',
          link: '/servicios/2',
        },
        {
          title: 'Servicio 3',
          text: 'Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 Texto del servicio 3 ',
          link: '/servicios/3',
        },
        {
          title: 'Servicio 4',
          text: 'Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 Texto del servicio 4 ',
          link: '/servicios/4',
        },
        {
          title: 'Servicio 5',
          text: 'Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 Texto del servicio 5 ',
          link: '/servicios/5',
        },
        {
          title: 'Servicio 6',
          text: 'Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 Texto del servicio 6 ',
          link: '/servicios/6',
        },
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbo {
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:before {
    background-color: #fff;
    background-image: url('~assets/img/bcn.jpg');
    background-size: cover;
    background-position-y: -128px;
    z-index: 0;
  }
  &:after {
    background: linear-gradient(to top, transparent, #fff),
    linear-gradient(to left, transparent, #fff),
    linear-gradient(to bottom, transparent 60%, #fff),
      rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
}
</style>
