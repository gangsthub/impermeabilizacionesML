<template>
  <div>
    <JumboSecondary
      title="Trabajos"
      subtitle="Últimos trabajos realizados"
      min-height="10vh"
    >
    </JumboSecondary>
    <Container>
      <v-row
        v-for="(work, i) of works"
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
            {{ work.service
            }}<span v-if="work.place">&nbsp;- {{ work.place }}</span>
          </h4>
          <p class="texts">{{ work.seoDescription }}</p></v-col
        >
      </v-row>
    </Container>
  </div>
</template>

<script>
import worksTexts from '~/content/static/works.json'
import { getWorks } from '~/core/getContent'

export default {
  name: 'Trabajos',
  layout: 'default',
  data() {
    return {
      works: [],
      subtitle: '',
    }
  },
  created() {
    // eslint-disable-next-line no-console
    this.works = Array.from(getWorks()).sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    this.subtitle = worksTexts.body
  },
}
</script>
