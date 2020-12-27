<template>
  <v-card class="mx-auto overflow-hidden navigation">
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>UML Editor</v-app-bar-title>
      <span class="right-elements"
        ><ThemeChangerMenu /> <LanguageChangerMenu
      /></span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
          @change="redirect"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <slot />
  </v-card>
</template>

<script lang="ts">
import ThemeChangerMenu from './ThemeChangerMenu.vue'
import { Component, Vue } from 'vue-property-decorator'
import LanguageChangerMenu from './LanguageChangerMenu.vue'

const map: {
  [key: number]: string
} = {
  0: '/',
  1: '/example',
}

@Component({
  components: {
    LanguageChangerMenu,
    ThemeChangerMenu,
  },
})
export default class Header extends Vue {
  drawer = false
  group = null
  redirect = (i: number) => map[i] != null && this.$router.push(map[i])
}
</script>

<style scoped lang="scss">
.navigation {
  height: 100%;
  width: 100%;
}
.right-elements {
  margin-left: auto;
}
</style>
