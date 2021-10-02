<template>
  <v-footer app absolute color="primary" ligth padless>
    <v-row>
      <v-col class="d-flex flex-column pa-6 mt-4">
        <v-btn
          v-for="item in menu"
          :key="item.title"
          text
          dark
          color="white"
          active-class="transparent"
          class="my-2 py-4 text-capitalize"
          large
          :to="item.page"
          nuxt
          >{{ item.title }}</v-btn
        >
      </v-col>
      <v-col>
        <v-card tile flat color="transparent" class="text-center w100p">
          <v-card-text class="white--text pt-0 text-center">
            <p class="text-h5 text-center pt-10">Teléfonos</p>
            <Telephones
              class="justify-center pb-10"
              :button-props="{
                text: true,
                color: 'white',
                large: true,
              }"
              direction="vertical"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="w100p">
      <v-card tile flat color="transparent" class="text-center w100p">
        <v-card-text class="white--text text-center">
          {{ new Date().getFullYear() }} -
          <strong>{{ $config.BRAND_NAME }} &copy;</strong>
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
import hasMenu from '@/mixins/hasMenu'
export default {
  mixins: [hasMenu],
}
</script>
