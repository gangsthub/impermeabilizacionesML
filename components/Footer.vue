<template>
  <v-footer color="primary" class="footer overflow-hidden">
    <v-row no-gutters class="w100p">
      <v-col cols="8" class="m-auto">
        <v-row>
          <v-col class="d-flex flex-column pa-6 mt-4" cols="12" sm="12" md="6">
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
          <v-col cols="12" sm="12" md="6">
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
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-card tile flat color="transparent" class="text-center w100p">
        <v-card-text class="white--text text-center py-0 mb-8">
          <div aria-hidden="true">
            <img src="/logobig.svg" height="80" class="footer-logo" />
          </div>
          <div>
            {{ new Date().getFullYear() }} -
            <strong>{{ $config.BRAND_NAME }} &copy;</strong>
          </div>
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

<style lang="scss" scoped>
.footer {
  flex-direction: column;
}
.footer-logo {
  mix-blend-mode: luminosity;
  filter: invert(1);
}
</style>
