<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <v-app-bar-title style="color: white">UML Editor</v-app-bar-title>
    </div>
    <v-spacer></v-spacer>
    <LanguageChangerMenu />
    <ThemeChangerMenu />
  </v-app-bar>
</template>

<script lang="ts">
import ThemeChangerMenu from '@/components/ThemeChangerMenu.vue'
import { Component, Vue } from 'vue-property-decorator'
import LanguageChangerMenu from '@/components/LanguageChangerMenu.vue'

@Component({
  components: {
    LanguageChangerMenu,
    ThemeChangerMenu,
  },
})
export default class Header extends Vue {}
</script>
