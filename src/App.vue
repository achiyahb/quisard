<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">


        <v-app-bar
                app
                color="indigo"
                dark
        >
          <v-toolbar-title>עורך השאלות</v-toolbar-title>
          <v-spacer></v-spacer>
           <logout></logout>
          <login></login>
        </v-app-bar>

        <v-main>
          <v-container
                  class="fill-height"
                  fluid
          >
            <v-row
                    align="center"
                    justify="center"
            >
              <router-view></router-view>
            </v-row>
          </v-container>
        </v-main>
        <v-footer
                color="indigo"
                app
        >
          <span class="white--text">&copy; 2019</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Home from './views/Settings';
import Logout from "./components/logOut";
import Login from "./views/Login";

export default {
  name: 'App',

  components: {
    Login,
    Logout,
    Home,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.routerBtn{
  text-decoration-line: none;
}

.fas {
  margin: 6px;
}

  a {
    text-decoration-line: none;
  }
</style>