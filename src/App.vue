<template>
  <div id="app">
    <Header/>
    <Hero/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main
  }
}
</script>

<style lang="scss">
@import './css/commons.scss';
</style>
