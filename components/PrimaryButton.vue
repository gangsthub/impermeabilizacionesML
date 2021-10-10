<script>
export default {
  name: 'PrimaryButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<template>
  <v-btn rounded large :color="color" v-bind="[$attrs]">
    <slot>Pide tu presupuesto</slot>
  </v-btn>
</template>
