<template>
  <div>
    <JumboSecondary title="Trabajos" subtitle="Últimos trabajos realizados">
      <div class="text-left w80p" v-html="subtitle"></div>
    </JumboSecondary>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col v-for="(work, i) of works" :key="i" cols="12" xs="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>
                  <h3 class="headline mb-0">
                    {{ work.title }} - {{ work.service }}
                  </h3>
                </v-card-title>
                <v-card-text>
                  {{ work.seoDescription }}
                </v-card-text>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="work.thumbnail"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
