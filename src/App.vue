<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
          <v-list class="routerBtn"  dense>
            <router-link to="/">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </router-link>
            <router-link to="/home">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Courses</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </router-link>
            <router-link to="/courses/:cid/chapters/:chid/questions">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Questions</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
          <v-toolbar-title>עורך השאלות</v-toolbar-title>
          <v-spacer></v-spacer>
           <logout></logout>
          <login></login>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
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