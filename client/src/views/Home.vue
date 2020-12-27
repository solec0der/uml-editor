<template>
  <div class="home">
    <h1>{{ $t('HOME.TITLE') }}</h1>
    <p>{{ $t('HOME.SUBTITLE') }}</p>
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
