<template>
  <v-row justify="space-around" class="flex-nowrap flex-column flex-md-row">
    <div class="flex pl-3 pa-md-3">
      <v-avatar tile size="300">
        <slot name="image" />
      </v-avatar>
    </div>
    <v-col cols="12" sm="9" lg="10" xs="12" class="pl-md-5">
      <h3 class="text-h4 mb-2 primary--text">
        <slot name="title" />
      </h3>
      <h4 class="overline py-0 secondary--text mb-5">
        <slot name="subtitle" />
      </h4>
      <p class="texts"><slot name="description"></slot></p
    ></v-col>
  </v-row>
</template>
