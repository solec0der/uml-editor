<template>
  <v-card elevation="2" class="square"> </v-card>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import WElement from './WElement'
@Component
export default class WSquare extends WElement {}
</script>

<style scoped lang="scss">
.square {
  height: 50px;
  width: 50px;
  background-color: red;
}
</style>
