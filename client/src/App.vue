<template>
  <v-app>
    <Header>
      <v-main>
        <router-view></router-view>
      </v-main>
    </Header>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/header/Header.vue'

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style>
html {
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: normal;
}

.full-width {
  width: 100%;
}
</style>
