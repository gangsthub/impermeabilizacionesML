<template>
  <div>
    <JumboSecondary
      title="Trabajos"
      subtitle="Últimos trabajos realizados"
      min-height="30vh"
    >
      <Container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-left" v-html="subtitle"></p>
      </Container>
    </JumboSecondary>
    <Container>
      <v-row justify="space-around">
        <v-col v-for="(work, i) of works" :key="i" cols="12" xs="12">
          <v-card flat>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" size="125" tile>
                <v-img :src="work.thumbnail"></v-img>
              </v-avatar>

              <div class="flex">
                <v-card-title class="pt-0 primary--text">
                  <h3 class="headline">
                    {{ work.title }}
                  </h3>
                </v-card-title>
                <v-card-subtitle class="overline py-0 secondary--text">{{
                  work.service
                }}</v-card-subtitle>
                <v-card-text>
                  {{ work.seoDescription }}
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </Container>
  </div>
</template>

<script>
import worksTexts from '~/content/static/works.json'

const getWorks = () => {
  const context = require.context('~/content/blog/posts', false, /\.json$/)
  const works = context.keys().map(context)
  return works
}

export default {
  name: 'Trabajos',
  layout: 'default',
  data() {
    return {
      works: [],
    }
  },
  created() {
    // eslint-disable-next-line no-console
    this.works = getWorks()
    this.subtitle = worksTexts.body
  },
}
</script>
