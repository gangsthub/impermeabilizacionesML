<template>
  <v-form
    :name="formName"
    action="/gracias"
    method="post"
    data-netlify
    data-netlify-honeypot="bot-field"
  >
    <p class="hb" aria-hidden="true">
      <label for="form-name"
        >Por favor, no rellenes este campo si eres una persona. Si este campo
        tiene algún valor, no se enviará el formulario. Es una manera de evitar
        spam.</label
      >
    </p>
    <input id="form-name" type="hidden" name="form-name" :value="formName" />
    <v-text-field
      id="phone"
      label="Teléfono"
      required
      outlined
      type="tel"
      name="phone"
      input-mode="decimal"
      prepend-icon="mdi-phone"
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      id="place"
      label="Localidad"
      auto-complete="home city"
      required
      outlined
      name="place"
      prepend-icon="mdi-map-marker"
      :rules="[rules.required]"
    ></v-text-field>
    <v-textarea
      outlined
      name="comments"
      label="Comentarios (opcional)"
      prepend-icon="mdi-comment"
    ></v-textarea>
    <v-btn large rounded color="secondary" type="submit" class="w90p ml-9"
      ><v-icon class="pr-5">mdi-email-fast</v-icon> Enviar</v-btn
    >
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formName: 'Contact',
      rules: {
        required: (value) => !!value || 'Este campo es obligatorio.',
      },
    }
  },
}
</script>

<style></style>
