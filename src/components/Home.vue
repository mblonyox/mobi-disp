<template>
    <div id="home">
        <v-layout wrap="true" row>
            <Card v-for="surat, key in surats" :surat="surat" :key="key"></Card>
        </v-layout>
    </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
      Card
  },
  props: ['surats']
}
</script>
