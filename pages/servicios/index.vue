<template>
  <div>
    <JumboSecondary title="Servicios" :subtitle="subtitle" />
  </div>
</template>

<script>
import servicesTexts from '~/content/static/services.json'

export default {
  name: 'Servicios',
  layout: 'default',
  created() {
    this.subtitle = servicesTexts.body
  },
}
</script>
