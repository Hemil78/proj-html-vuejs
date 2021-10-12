<template>
  <div id="app">
    <Award/>
    <FullService/>
  </div>
</template>

<script>
import Award from './Award.vue'
import FullService from './FullService.vue'

export default {
  name: 'Main',
  components: {
    Award,
    FullService
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';
</style>