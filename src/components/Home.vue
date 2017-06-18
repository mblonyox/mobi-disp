<template>
  <div id="home">
    <v-btn floating router :to="{name: 'Rekam'}">
      <v-icon>create</v-icon>
    </v-btn>
    <v-layout wrap="true" row>
      <Card v-for="surat, key in surats" :surat="surat" :key="key"></Card>
    </v-layout>
  </div>
</template>

<script>
import Card from './CardSurat'

export default {
  components: {
    Card
  },
  props: ['surats']
}
</script>
