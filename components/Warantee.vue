<template>
  <div>
    <ul
      v-if="waranteeValues && waranteeValues.length"
      class="list-reset"
      :class="{
        'd-flex': !isVertical,
      }"
    >
      <li
        v-for="(g, i) of waranteeValues"
        :key="i"
        class="md-and-up:max-w90p"
        :class="{
          'mr-8': !isVertical && i !== waranteeValues.length - 1,
        }"
      >
        <div
          :class="{
            'd-flex': isVertical,
          }"
        >
          <div
            class=""
            :class="{
              'text-center mb-8': !isVertical,
              'mr-3 mb-3': isVertical,
            }"
          >
            <v-avatar
              :color="fill ? 'secondary' : 'transparent'"
              :size="isVertical ? 42 : 64"
              :class="{
                border: !fill,
              }"
            >
              <v-icon :color="fill ? 'white' : 'primary'">{{ g.icon }}</v-icon>
            </v-avatar>
          </div>
          <h3
            class="text-h5 mb-3"
            :class="{
              'text-center': !isVertical,
            }"
          >
            {{ g.title }}
          </h3>
        </div>
        <p class="mb-5 text-justify">{{ g.subtitle }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'vertical',
    },
    fill: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      waranteeValues: [
        {
          title: 'Garantía',
          subtitle:
            'Máxima calidad y seguridad en nuestros trabajos garantizados hasta 15 años según el sistema solicitado.',
          icon: 'mdi-license',
        },
        {
          title: 'Presupuesto sin compromiso',
          subtitle:
            'Realizamos presupuestos ajustados al valor de su problema con precios comprometidos al mercado encontrarás una empresa seria y dispuesta a ayudarte en todas tus necesidades. Con la mejor relación calidad-precio.',
          icon: 'mdi-clipboard-file',
        },
        {
          title: 'Atención al Cliente',
          subtitle:
            'Valoramos cada proyecto de forma independiente y orientamos al cliente para encontrar la mejor solución de impermeabilización.',
          icon: 'mdi-account-check',
        },
      ],
    }
  },
  computed: {
    isVertical() {
      return this.direction === 'vertical' || this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid currentColor !important;
}
</style>
