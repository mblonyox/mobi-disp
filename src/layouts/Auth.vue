<template>
    <v-app id="auth">
        <v-toolbar class="cyan darken-4" light>
            <v-toolbar-title>Login to Mobile Disposition</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
        <v-footer class="cyan darken-4">
            <v-spacer></v-spacer>
            <span>© Sukirno {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
