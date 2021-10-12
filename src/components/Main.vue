<template>
  <div id="app">
    <Award/>
  </div>
</template>

<script>
import Award from './Award.vue'

export default {
  name: 'Main',
  components: {
    Award
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';
</style>