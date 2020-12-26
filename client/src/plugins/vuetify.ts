import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0097a7',
        secondary: '#FF3366',
        accent: '#FF3366',
        error: '#b71c1c',
      },
      dark: {
        primary: '#0097a7',
        secondary: '#FF3366',
        accent: '#FF3366',
        error: '#b71c1c',
      },
    },
  },
})
