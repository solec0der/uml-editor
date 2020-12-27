<template>
  <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30" color="white">mdi-web</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-subheader>
        {{ $t('LANGUAGE_CHANGER.LANGUAGE_SELECTION') }}
      </v-subheader>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in this.availableLanguages"
            :key="i"
            @click="setLanguage(item.locale)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.displayValue }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.locale }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <span v-if="activeLanguage === item.locale">
                {{ $t('LANGUAGE_CHANGER.ACTIVE') }}
              </span>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LanguageChangerMenu extends Vue {
  private activeLanguage = 'en-US'

  private readonly activeLanguageKey = 'activeLanguage'
  private readonly availableLanguages = [
    {
      displayValue: 'English',
      locale: 'en-US',
    },
    {
      displayValue: 'Deutsch',
      locale: 'de-CH',
    },
  ]

  mounted() {
    if (localStorage.getItem(this.activeLanguageKey) === null) {
      localStorage.setItem(this.activeLanguageKey, 'en-US')
    }

    this.activeLanguage = localStorage.getItem(this.activeLanguageKey) || ''
    this.$i18n.locale = this.activeLanguage
  }

  public setLanguage(locale: string) {
    localStorage.setItem(this.activeLanguageKey, locale)
    this.activeLanguage = locale
    this.$i18n.locale = locale
  }
}
</script>
