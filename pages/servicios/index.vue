<template>
  <div>
    <JumboSecondary title="Servicios">
      <Container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-left" v-html="body"></div>
      </Container>
    </JumboSecondary>
  </div>
</template>

<script>
import servicesTexts from '~/content/static/services.json'

export default {
  name: 'Servicios',
  layout: 'default',
  created() {
    this.body = servicesTexts.body
  },
}
</script>
