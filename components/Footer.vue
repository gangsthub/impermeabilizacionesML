<template>
  <v-footer app absolute color="primary" ligth padless>
    <v-col class="text-center white--text" cols="12">
      <span
        >&copy; {{ $config.BRAND_NAME }} - {{ new Date().getFullYear() }}</span
      >
    </v-col>
  </v-footer>
</template>
