<template>
  <div id="app">
    <Award/>
    <FullService/>
    <Move/>
    <Testimonial/>
    <Request/>
    <Footer/>
  </div>
</template>

<script>
import Award from './Award.vue'
import FullService from './FullService.vue'
import Move from './Move.vue'
import Testimonial from './Testimonial.vue'
import Request from './Request.vue'
import Footer from './Footer.vue'

export default {
  name: 'Main',
  components: {
    Award,
    FullService,
    Move,
    Testimonial,
    Request,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';
</style>