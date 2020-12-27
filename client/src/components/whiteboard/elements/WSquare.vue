<template>
  <v-card elevation="2" class="square">
    <div id="resizer"></div>
  </v-card>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import WElement from './WElement'
import Hammer from 'hammerjs'
@Component
export default class WSquare extends WElement {
  mounted() {
    if (!(this.$el instanceof HTMLElement)) return
    const me = new Hammer(document.getElementById('resizer'))
    me.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }))
    me.on('pan', this.onResize)
  }
}
</script>

<style scoped lang="scss">
.square {
  height: 50px;
  width: 50px;
  background-color: red;
  display: flex;
  #resizer {
    height: 10px;
    width: 10px;
    margin-top: auto;
    margin-left: auto;
    background-color: white;
  }
}
</style>
