<template>
  <div class="home">
    <h1>{{ $t('WHITEBOARD.TITLE') }}</h1>
    <v-card elevation="2" id="workplace">
      <v-toolbar dense>
        <v-btn icon @click="addSquare">
          <v-icon>mdi-shape-square-plus</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
      <template v-for="child in children">
        <component :is="child" :key="child.name" />
      </template>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ExtendedVue } from 'vue/types/vue'
import Square from '../../components/whiteboard/elements/WSquare.vue'
@Component
export default class Home extends Vue {
  children: Array<
    ExtendedVue<Vue, unknown, unknown, unknown, Record<never, unknown>>
  > = []
  addSquare = () => {
    const example = Vue.extend(Square)
    this.children.push(example)
  }
}
</script>

<style scoped lang="scss">
div.home {
  text-align: center;
  height: 100%;
  #workplace {
    margin: auto;
    height: 85%;
    width: 85%;
  }
}
</style>
