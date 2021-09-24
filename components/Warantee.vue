<template>
  <div>
    <ul class="list-reset">
      <li v-for="(g, i) of warantees" :key="i" class="md-and-up:max-w90p">
        <h3 class="text-h5 mb-3">
          <v-icon class="pr-4" color="primary">{{ g.icon }}</v-icon
          >{{ g.title }}
        </h3>
        <p class="mb-5">{{ g.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warantees: [
        {
          title: 'Garantía firmada',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorem placeat illo molestias quidem, nesciunt voluptates?',
          icon: 'mdi-license',
        },
        {
          title: 'Presupuesto sin compromiso',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorem placeat illo molestias quidem, nesciunt voluptates?',
          icon: 'mdi-clipboard-file',
        },
        {
          title: 'Atención al Cliente',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorem placeat illo molestias quidem, nesciunt voluptates?',
          icon: 'mdi-account-check',
        },
      ],
    }
  },
}
</script>
