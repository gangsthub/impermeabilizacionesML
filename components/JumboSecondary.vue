<template>
  <v-sheet class="jumbo mb-16" :style="{ '--bg-image': bgImageResolved }">
    <v-container>
      <v-row no-gutters :style="{ minHeight }" tag="section">
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
              class="
                font-weight-bold
                text-md-h2 text-sm-h3 text-xs-h5
                mb-3
                text-center
              "
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
                px-5
              "
            >
              {{ subtitle }}
            </h2>
            <div class="text-left px-5 w100p pt-16"><slot /></div>
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
    minHeight: {
      type: String,
      default: '50vh',
    },
    bgImage: {
      type: String,
      default: '~assets/img/bcn.jpg',
    },
  },
  computed: {
    bgImageResolved() {
      const imgUrl = this.$img(this.bgImage)
      return `url('${imgUrl}')`
    },
  },
}
</script>

<style lang="scss" scoped>
.jumbo {
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &::before {
    background-color: #fff;
    background-image: var(--bg-image);
    background-position: center;
    background-size: cover;
    @include onDesktop {
      background-position-y: -128px;
    }
    z-index: 0;
  }
  &::after {
    background: linear-gradient(to top, transparent, #fff),
      linear-gradient(to left, transparent, #fff),
      linear-gradient(to bottom, transparent 60%, #fff),
      rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
}
</style>
