<template>
  <v-row
    justify="space-around"
    class="w-card flex-nowrap flex-column flex-md-row"
  >
    <div class="flex pl-3 pa-md-3 text-center">
      <v-avatar tile size="300">
        <slot name="image" />
      </v-avatar>
    </div>
    <v-col cols="12" md="9" lg="10" xs="12" class="pl-md-5">
      <h3 class="text-h5 mb-2 primary--text text-center text-md-left">
        <slot name="title" />
      </h3>
      <h4 class="overline py-0 secondary--text mb-1 text-center text-md-left">
        <slot name="subtitle" />
      </h4>
      <p class="texts"><slot name="description"></slot></p
    ></v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.w-card {
  margin-bottom: 6rem;

  @include onDesktop {
    margin-bottom: 4rem;
  }
}
</style>
