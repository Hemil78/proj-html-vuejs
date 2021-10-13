<template>
    <section class="box-footer">
        <FooterUp/>
    </section>
</template>

<script>
import FooterUp from './FooterUp.vue'

export default {
  name: 'Footer',
  components: {
    FooterUp
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