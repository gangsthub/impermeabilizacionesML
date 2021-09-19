<template>
  <div>
    <v-sheet min-height="600">
      <v-row class="jumbo" no-gutters style="height: 80vh" tag="section">
        <v-col style="z-index: 1; isolation: isolate">
          <v-sheet
            class="
              d-flex
              flex-column
              fill-height
              transparent
              align-start
              justify-center
              text-xs-left
              pl-6
            "
          >
            <h1 class="font-weight-bold text-h2 mb-3">
              Expertos en impermeabilizaciones
            </h1>

            <h2 class="font-weight-light mb-4">
              Con más de 20 años de experiencia
            </h2>
            <p>
              <PrimaryButton />
            </p>
          </v-sheet>
        </v-col>
        <v-spacer />
      </v-row>
    </v-sheet>
    <!-- -->
    <v-container>
      <v-row>
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" class="pa-0">
          <v-card min-height="300" flat fill-height>
            <v-card-title>Servicio</v-card-title>
            <v-card-text class="grey--text text--darken-4">Texto</v-card-text>
            <v-card-actions>
              <v-btn text color="primary">Leer más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- -->
    <v-container class="other-services">
      <v-card color="accent" dark class="d-flex flex-column align-center">
        <v-responsive
          min-height="400"
          class="w-100p"
          content-class="w-100p d-flex flex-column align-center justify-space-around"
        >
          <v-card-title tag="h3" class="text-h4">Otros servicios</v-card-title>
          <v-card-body class="w-100p d-flex justify-space-around">
            <v-card class="transparent" flat>
              <v-card-title class="pl-0">asdf</v-card-title>
              <v-card-body><PrimaryButton /></v-card-body>
            </v-card>
            <v-card class="transparent" flat>
              <v-card-title class="pl-0">asdf</v-card-title>
              <v-card-body><PrimaryButton /></v-card-body>
            </v-card>
          </v-card-body>
        </v-responsive>
      </v-card>
    </v-container>
  </div>
</template>

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
    background: linear-gradient(transparent, #fff), rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
}
</style>
