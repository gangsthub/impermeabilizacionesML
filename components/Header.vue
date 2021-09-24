<template>
  <v-app-bar
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
    <v-toolbar flat class="first-nav secondary flex-row w100p" tag="div">
      <v-spacer></v-spacer>

      <v-toolbar-title>
        <Telephones
          :button-props="{
            text: true,
            color: 'white',
          }"
        />
      </v-toolbar-title>
    </v-toolbar>
    <v-toolbar
      flat
      class="second-nav transparent flex-row w100p py-0 px-0"
      tag="nav"
    >
      <v-toolbar-items class="hidden-xs-only w100p">
        <v-btn nuxt text to="/" active-class="transparent"> Logo </v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in menu"
          :key="item.title"
          class="hidden-xs-only"
          text
          nuxt
          :to="item.page"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: 'Servicios', page: 'servicios' },
        { title: 'Trabajos', page: 'trabajos' },
        { title: 'Contacto', page: 'contacto' },
      ],
    }
  },
}
</script>

<style lang="scss">
[aria-current='page'].transparent {
  &:before {
    background-color: transparent;
  }
}
.header > .v-toolbar__content,
.second-nav > .v-toolbar__content {
  padding: 0;
}
.header > .v-toolbar__content {
  display: flex;
  flex-direction: column;
}
</style>
