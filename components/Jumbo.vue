<template>
  <div class="jumbo-image">
    <v-container class="overflow-hidden">
      <v-row no-gutters style="height: 60vh" tag="section">
        <v-sheet
          style="z-index: 1; isolation: isolate"
          class="
            d-flex
            flex-column
            fill-height
            transparent
            align-start
            justify-center
            text-xs-left
          "
        >
          <h1
            class="
              text-wrap
              font-weight-bold
              text-md-h2 text-sm-h3 text-xs-h5
              mb-3
            "
          >
            <div>Expertos en</div>
            <div>impermeabilizaciones</div>
          </h1>

          <h2 class="font-weight-light text-md-h4 text-xs-h6 mb-8">
            Con más de <strong>20 años de experiencia</strong>
          </h2>
          <p>
            <PrimaryButton color="secondary" to="/contacto" nuxt />
          </p>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import '~vuetify/src/components/VStepper/_variables.scss';
.jumbo-image {
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
    z-index: 0;
    background-color: #fff;
    background-image: url('~assets/img/img3.jpg');
    background-size: cover;
    background-position: 150px 40%;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      background-position: center;
      background-attachment: fixed;
    }
  }
  &:after {
    background: linear-gradient(to top, transparent, #fff),
      linear-gradient(to left, transparent, #fff),
      linear-gradient(to bottom, transparent, #fff);
    z-index: 0;
  }
}

.text-wrap {
  word-break: break-word;
  hyphens: auto;
}
</style>
