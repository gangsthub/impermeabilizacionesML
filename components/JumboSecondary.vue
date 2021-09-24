<template>
  <v-sheet class="jumbo" min-height="600">
    <v-container>
      <v-row no-gutters style="height: 60vh" tag="section">
        <v-col style="z-index: 1; isolation: isolate">
          <v-sheet
            class="
              d-flex
              flex-column
              fill-height
              transparent
              align-center
              justify-start
              pt-16
            "
          >
            <h1
              v-if="title"
              class="font-weight-bold text-md-h2 text-sm-h3 text-xs-h5 mb-3"
            >
              {{ title }}
            </h1>

            <h2
              v-if="subtitle"
              class="
                font-weight-light
                text-md-h4 text-xs-h6 text-center text-md-left
                mb-8
                xs-only:w80p
              "
            >
              {{ subtitle }}
            </h2>
            <slot />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'JumboSecondary',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
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
