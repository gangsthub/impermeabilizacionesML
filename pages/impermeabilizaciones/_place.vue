<template>
  <div>
    <JumboSecondary
      :title="worksByPlace[0].place"
      :subtitle="'Impermeabilizaciones en ' + worksByPlace[0].place"
      min-height="10vh"
    >
    </JumboSecondary>
    <Container class="pb-16 md:px-5">
      <v-row
        v-for="(work, i) of worksByPlace"
        :key="i"
        justify="space-around"
        class="flex-nowrap flex-column flex-md-row"
      >
        <div class="flex pa-3">
          <v-avatar tile size="300">
            <CardImage :src="work.thumbnail" width="300" height="300" />
          </v-avatar>
        </div>
        <v-col cols="12" sm="9" lg="10" xs="12" class="pl-md-5">
          <h3 class="text-h4 mb-2 primary--text">
            {{ work.title }}
          </h3>
          <h4 class="overline py-0 secondary--text mb-5">
            {{ work.service }}
          </h4>
          <p class="texts">{{ work.seoDescription }}</p></v-col
        >
      </v-row>
    </Container>
  </div>
</template>

<script>
import { getWorks } from '~/core/getContent'
import { slugify } from '~/core/slugify'

export default {
  name: 'TrabajosEn',
  layout: 'default',
  asyncData({ params: { place } }) {
    return { place }
  },
  data() {
    return {
      worksByPlace: [],
      subtitle: '',
    }
  },
  head() {
    return {
      title: `Impermeabilizaciones en ${this.place}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Últimos trabajos realizados en ${this.place}. Impermeabilizaciones, cubiertas, pisos, paredes, techos, entre otros.`,
        },
      ],
    }
  },
  created() {
    this.worksByPlace = Array.from(getWorks())
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      .filter((work) => {
        return slugify(work.place) === this.place
      })
  },
}
</script>
