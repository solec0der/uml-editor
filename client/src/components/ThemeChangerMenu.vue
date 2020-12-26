<template>
  <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30" color="white">mdi-palette</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Dark Mode
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="isDarkModeEnabled" />
        </v-list-item-action>
      </v-list-item>
      <v-divider />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class ThemeChangerMenu extends Vue {
  private isDarkModeEnabled = false
  private readonly isDarkModeEnabledKey = 'isDarkModeEnabled'

  mounted() {
    if (localStorage.getItem(this.isDarkModeEnabledKey) === null) {
      localStorage.setItem(this.isDarkModeEnabledKey, 'false')
    }

    this.isDarkModeEnabled =
      localStorage.getItem(this.isDarkModeEnabledKey) === 'true'
    this.$vuetify.theme.dark = this.isDarkModeEnabled
  }

  @Watch('isDarkModeEnabled')
  onDarkModeToggle() {
    localStorage.setItem(
      this.isDarkModeEnabledKey,
      this.isDarkModeEnabled.toString()
    )
    this.$vuetify.theme.dark = this.isDarkModeEnabled
  }
}
</script>
