<template>
    <v-app id="main">
        <v-navigation-drawer persistent light v-model="drawer">
        </v-navigation-drawer>
        <v-toolbar fixed class="cyan darken-4" light>
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Mobile Disposition</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon light @click.native="doLogout">
                <v-icon>power_settings_new</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view :surats="surats"></router-view>
            </v-container>
        </main>
        <v-footer class="cyan darken-4">
            <v-spacer></v-spacer>
            <span>© Sukirno {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import {auth, database} from '@/services/firebase'

export default {
    methods: {
        doLogout: function() {
            auth.signOut().then(() => { this.$router.push({ name: 'Login'})})
        }
    },
    firebase: {
        surats: database.ref('surats')
    }
}
</script>
