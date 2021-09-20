<template>
  <div class="tel d-flex"
    :class="{
      'horizontal': direction === 'horizontal',
      'vertical flex-column': direction === 'vertical',
    }"
  >
    <v-btn v-bind="buttonProps" href="tel:+34 605 94 01 67" class="py-2 px-4"><v-icon class="mr-2">mdi-whatsapp</v-icon> 605 94 01 67</v-btn>
    <v-btn v-bind="buttonProps" href="tel:+34 605 94 01 67" class="py-2 px-4" :class="{
      'ml-3': direction === 'horizontal',
      'mt-3': direction === 'vertical',
     }"><v-icon class="mr-2">mdi-whatsapp</v-icon> 605 94 01 67</v-btn>
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
