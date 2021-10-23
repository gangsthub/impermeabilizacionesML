<template>
  <div>
    <v-app-bar
      fixed
      app
      shrink-on-scroll
      scroll-threshold="100"
      hide-on-scroll
      clipped-left
      :prominent="$vuetify.breakpoint.mdAndUp"
      flat
      color="white"
      class="header px-0"
    >
      <v-toolbar flat class="first-nav secondary flex-row w100p" tag="div">
        <v-app-bar-nav-icon
          dark
          class="hidden-sm-and-up"
          @click.stop="isDrawerOpen = !isDrawerOpen"
        ></v-app-bar-nav-icon>
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
        class="second-nav transparent flex-row w100p py-0 px-0 hidden-xs-only"
        tag="nav"
      >
        <v-toolbar-items class="w100p white">
          <v-btn nuxt text to="/" active-class="transparent">
            <img
              src="logobig.svg"
              height="48"
              alt="Home"
              title="Ir al inicio"
            />
          </v-btn>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn
            v-for="item in menu"
            :key="item.title"
            class="hidden-xs-only"
            text
            nuxt
            exact
            :to="item.page"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="isDrawerOpen" app temporary width="300">
      <v-list-item to="/" active-class="transparent">
        <v-list-item-content>
          <v-list-item-title>{{ $config.BRAND_NAME }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in menu" :key="item.title" :to="item.page">
          <v-list-item-content>
            <v-list-item-title>- {{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import hasMenu from '@/mixins/hasMenu'
export default {
  mixins: [hasMenu],
  data() {
    return {
      isDrawerOpen: false,
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
