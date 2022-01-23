<template>
  <div
    class="tel d-flex"
    :class="{
      horizontal: direction === 'horizontal',
      'vertical flex-column': direction === 'vertical',
    }"
  >
    <span v-for="(tel, index) of telephones" :key="tel">
      <v-btn
        v-bind="buttonProps"
        :small="$vuetify.breakpoint.smAndDown"
        :href="`tel:+34 ${tel}`"
        class="py-2 px-4"
        :class="{
          'mb-5': direction === 'vertical' && index !== telephones.length - 1,
          'ml-3': direction === 'horizontal' && index !== 0,
        }"
        ><v-icon class="mr-2">mdi-phone</v-icon> {{ tel }}</v-btn
      ></span
    >
  </div>
</template>

<script>
export default {
  name: 'Telephones',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
    },
    buttonProps: {
      type: Object,
      default: () => ({
        text: true,
        color: 'info',
      }),
    },
  },
  data() {
    return {
      telephones: ['605 78 42 14', '605 94 01 67'],
    }
  },
}
</script>
