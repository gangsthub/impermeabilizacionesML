<template>
  <div>
    <JumboSecondary
      :title="title"
      subtitle="Somos un grupo de profesionales con más de 30 años de experiencia."
    >
      <Container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-left" v-html="body"></p>
      </Container>
    </JumboSecondary>

    <Container class="pb-16 mb-16">
      <Warantee />
    </Container>
  </div>
</template>

<script>
const title = 'Quienes somos'

export default {
  name: title,
  layout: 'default',
  data() {
    return {
      title,
    }
  },
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Quienes somos - Impermeabilizaciones en todo el área de Barcelona y parte de Tarragona',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.first-col {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    right: 10%;
    width: 80%;
    height: 1px;
    background-color: #e9e9e9;
  }
  @include onDesktop {
    &:after {
      content: '';
      top: 10%;
      right: 5%;
      width: 1px;
      height: 80%;
    }
  }
}
</style>
