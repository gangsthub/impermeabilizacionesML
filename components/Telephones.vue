<template>
  <div
    class="tel d-flex"
    :class="{
      horizontal: direction === 'horizontal',
      'vertical flex-column': direction === 'vertical',
    }"
  >
    <span>
      <v-btn
        v-bind="buttonProps"
        :small="$vuetify.breakpoint.smAndDown"
        href="tel:+34 605 94 01 67"
        class="py-2 px-4"
        :class="{
          'mb-5': direction === 'vertical',
        }"
        ><v-icon class="mr-2">mdi-phone</v-icon> 605 94 01 67</v-btn
      ></span
    >
    <span>
      <v-btn
        v-bind="buttonProps"
        :small="$vuetify.breakpoint.smAndDown"
        href="tel:+34 605 94 01 67"
        class="py-2 px-4"
        :class="{
          'ml-3': direction === 'horizontal',
        }"
        ><v-icon class="mr-2">mdi-phone</v-icon> 605 94 01 67</v-btn
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
}
</script>
