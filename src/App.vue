<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      v-if="!$vuetify.breakpoint.xsOnly"
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense clipped-left>
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.xsOnly"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify Capacitor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>mdi-user</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation :value="vvv" app v-if="$vuetify.breakpoint.xsOnly">
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/about">
        <span>About</span>

        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer app v-if="!$vuetify.breakpoint.xsOnly">
      &copy; Fifcan.ORG</v-footer
    >
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    vvv: null,
  }),
};
</script>
