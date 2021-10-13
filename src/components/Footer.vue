<template>
    <section class="box-footer">
        <FooterUp/>
        <FooterDown/>
    </section>
</template>

<script>
import FooterUp from './FooterUp.vue'
import FooterDown from './FooterDown.vue'

export default {
  name: 'Footer',
  components: {
    FooterUp,
    FooterDown
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-footer{
    width: 100%;
    border-top: 15px solid $colorPrimary;
}
</style>