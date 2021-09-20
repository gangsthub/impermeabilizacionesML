<template>
  <v-app-bar
    v-mutate="onMutate"
    fixed
    app
    shrink-on-scroll
    scroll-threshold="100"
    hide-on-scroll
    prominent
    flat
    color="white"
    class="header px-0"
  >
    <v-toolbar flat class="secondary flex-row w-100p" tag="div">
      <v-spacer></v-spacer>

      <v-toolbar-title>
        <Telephones :button-props="{
        text: true,
        color: 'white',
      }" />
      </v-toolbar-title>
    </v-toolbar>
    <v-toolbar flat class="subheader transparent flex-row w-100p py-0 px-0" tag="nav">
      <v-toolbar-items class="hidden-xs-only w-100p">
        <v-btn nuxt text to="/" active-class="transparent">Logo</v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(item) in menu"
          :key="item.title"
          class="hidden-xs-only"
          text
          nuxt
          :to="item.page">
          {{ item.title }}
        </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Servicios', page: 'servicios' },
        { title: 'Trabajos', page: 'trabajos' },
        { title: 'Contacto', page: 'contacto' },
      ]
    }
  },
  methods: {
    onMutate() {
      // eslint-disable-next-line no-console
      console.log('mutates')
    }
  }
}
</script>

<style lang="scss">
[aria-current="page"].transparent {
  &:before {
        background-color: transparent;
  }
}
.header > .v-toolbar__content,
.subheader > .v-toolbar__content{
  padding: 0;
}
.header > .v-toolbar__content {
  display: flex;
  flex-direction: column;
}
</style>
