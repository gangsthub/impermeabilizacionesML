<template>
  <div>
    <JumboSecondary class="text-left" :title="title">
      <Container>
        <form v-if="!confirmed" autocomplete="off" @submit="handleSubmit">
          <v-text-field
            id="password"
            outlined
            prepend-icon="mdi-security"
            type="password"
            autocomplete="off"
            name="password"
            placeholder="password..."
            @click="showError = false"
          />
          <p v-if="showError" class="red--text font-weight-bold">
            Password equivocado
          </p>
          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
        <v-scroll-y-transition>
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-if="confirmed"
            class="texts px-5 px-sm-0 body-wrapper"
            v-html="body || 'Texto'"
          />
        </v-scroll-y-transition>
      </Container>
    </JumboSecondary>
  </div>
</template>

<script>
import contenido from './contenido.md'

export default {
  asyncData() {
    return {
      title: 'Tutorial',
      body: contenido,
    }
  },
  data() {
    return {
      confirmed: false,
      showError: false,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Tutorial' },
        {
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const password = e.target.password.value
      if (password === 'enrique') {
        this.confirmed = true
      } else {
        this.showError = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#password {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 2px;
}

// content
::v-deep :where(h2, h3, h4, h5, h6) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.body-wrapper::v-deep img {
  max-width: 100%;
  height: auto;
}
</style>
