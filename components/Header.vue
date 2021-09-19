<template>
  <v-app-bar
    fixed
    app
    shrink-on-scroll
    prominent
    hide-on-scroll
    flat
    color="accent"
    class="header px-0"
  >
    <v-toolbar flat class="transparent flex-row w-100p">
      <v-spacer></v-spacer>

      <v-toolbar-title>
        <v-icon>mdi-whatsapp</v-icon> teléfono
        <v-icon>mdi-whatsapp</v-icon> teléfono
      </v-toolbar-title>
    </v-toolbar>
    <v-toolbar flat class="transparent flex-row w-100p">
      <v-toolbar-title> Logo </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title> Enlaces </v-toolbar-title>
    </v-toolbar>
    <v-spacer />
  </v-app-bar>
</template>

<style lang="scss">
.header > .v-toolbar__content {
  display: flex;
  flex-direction: column;
}
</style>
