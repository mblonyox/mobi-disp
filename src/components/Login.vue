<template>
  <div id="login">
    <v-alert error :value="error">
      {{ error }}
    </v-alert>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs12>
            <v-text-field name="email" label="Email address" prepend-icon="email" type="email" required autofocus v-model="email"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-text-field name="password" label="Your password" prepend-icon="lock" :append-icon="visible ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (visible = !visible)" :type="visible ? 'text' : 'password'" required v-model="password"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 md6 offset-md3>
            <v-btn round block primary light :loading="loading" @click.native="submitLogin">Log In</v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { auth } from '@/services/firebase'

export default {
  data: () => ({
    email: '',
    password: '',
    visible: false,
    loading: false,
    error: ''
  }),
  methods: {
    submitLogin: function () {
      this.loading = true
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => { this.$router.push({ name: 'Home' }) })
        .catch(err => { this.loading = false; this.error = err.message; })
    }
  }
}
</script>
