<template>
  <div id="app">
    <Award/>
    <FullService/>
    <Move/>
    <Testimonial/>
    <Request/>
  </div>
</template>

<script>
import Award from './Award.vue'
import FullService from './FullService.vue'
import Move from './Move.vue'
import Testimonial from './Testimonial.vue'
import Request from './Request.vue'

export default {
  name: 'Main',
  components: {
    Award,
    FullService,
    Move,
    Testimonial,
    Request
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';
</style>