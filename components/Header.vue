<template>
  <div>
    <v-app-bar
      fixed
      app
      shrink-on-scroll
      scroll-threshold="100"
      hide-on-scroll
      clipped-left
      prominent
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
