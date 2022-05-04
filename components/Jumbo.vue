<template>
  <div class="jumbo-image" :style="{ '--bg-image': bgImageResolved }">
    <v-container class="overflow-hidden">
      <v-row no-gutters tag="section" class="min-h">
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
            Con más de <strong>30 años de experiencia</strong>
          </h2>
          <p>
            <PrimaryButton color="secondary" to="/contacto" nuxt />
          </p>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    bgImageResolved() {
      const imgUrl = this.$img('/images/img3.jpg')
      return `url('${imgUrl}')`
    },
  },
}
</script>

<style lang="scss" scoped>
.min-h {
  height: 60vh;
  @include onMobile {
    height: 40vh;
  }
}
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
    z-index: 0;
  }
  &:before {
    background-color: #fff;
    background-image: var(--bg-image);
    background-size: cover;
    background-position: 150px 40%;
    background-attachment: fixed;
    @include onMobile {
      background-position: center;
      background-attachment: fixed;
    }
  }
  &:after {
    background: linear-gradient(to top, transparent 30%, #fff),
      linear-gradient(to left, transparent, #fff),
      linear-gradient(to bottom, transparent 30%, #fff);
  }
}

.text-wrap {
  word-break: break-word;
  hyphens: auto;
}
</style>
