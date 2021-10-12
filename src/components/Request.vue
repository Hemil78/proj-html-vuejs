<template>
  <section class="box-request">
      <div class="text-request">
          <h2>Request A Free Quote</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque tempore expedita, eaque delectus dolorem, fugit hic sequi aspernatur fugiat voluptatum labore.</p>
          <button>click here</button>
      </div>
  </section>
</template>

<script>


export default {
  name: 'Request',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-request{
    width: 100%;
    @include positionElm;
    background-image: url(../images/avada-movers-request-quote-background.jpg);
    @include positionImage;
    min-height: 500px;

    .text-request{
        width: 50%;
        text-align: center;

        h4{
            @include textSecondary;
            margin-bottom: 15px;
        }
        h2{
            color: $colorPrimary;
            margin-bottom: 30px;
        }
        p{
           @include parStyle; 
        }
        button{
            @include btn;
            margin-top: 40px;
        }
    }
}
</style>