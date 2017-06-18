<template>
    <v-flex xs12 sm6 md4 lg3>
        <v-card>
            <v-card-row class="green darken-1">
                <v-card-title>
                    <span class="white--text">{{ surat.nomor }}</span>
                    <v-spacer></v-spacer>
                    <v-menu bottom left origin="top right" transition="v-scale-transition">
                        <v-btn icon="icon" slot="activator" class="white--text">
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-item>
                                <v-list-tile>
                                    <v-list-tile-title>Lihat detil</v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile>
                                    <v-list-tile-title>Sematkan</v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile>
                                    <v-list-tile-title>Arsipkan</v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
            </v-card-row>
            <v-card-row :img="surat.image" height="300px"></v-card-row>
            <v-card-text>
                <div>{{ surat.perihal }}</div>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  props: ['surat']
}
</script>
