<template>
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
              pl-16
            "
          >
            <h1 class="font-weight-bold text-h2 mb-3">
              Expertos en impermeabilizaciones
            </h1>

            <h2 class="font-weight-light text-h4 mb-8">
              Con más de 20 años de experiencia
            </h2>
            <p>
              <PrimaryButton color="secondary" to="/contacto" nuxt />
            </p>
          </v-sheet>
        </v-col>
        <v-spacer />
      </v-row>
    </v-sheet>
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
    background: linear-gradient(to top, transparent, #fff),
    linear-gradient(to left, transparent, #fff),
    linear-gradient(to bottom, transparent 60%, #fff),
      rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
}
</style>
