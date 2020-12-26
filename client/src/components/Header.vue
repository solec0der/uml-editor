<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <v-app-bar-title style="color: white">UML Editor</v-app-bar-title>
    </div>
    <v-spacer></v-spacer>
    <ThemeChangerMenu />
  </v-app-bar>
</template>

<script lang="ts">
import ThemeChangerMenu from '@/components/ThemeChangerMenu.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ThemeChangerMenu,
  },
})
export default class Header extends Vue {}
</script>
