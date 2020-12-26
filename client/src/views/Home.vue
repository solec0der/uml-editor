<template>
  <div class="home">
    <h1>The most advanced UML Editor, ever.</h1>
    <p>Built by Andrea and Yannick</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
div.home {
  text-align: center;
}
</style>
