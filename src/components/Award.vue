<template>
  <section class="box-award">

      <XyzTransition class="text-award" 
                    xyz="fade left-100% duration-15" 
                    appear-visible>

            <div class="animation1">
                <h4>headache free</h4>
                <h2>Award Winning<br>Moving Company</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque tempore expedita, eaque delectus dolorem, fugit hic sequi aspernatur fugiat voluptatum labore suscipit eum numquam. Provident voluptatibus veniam sint fuga optio?</p>
                
                <button>read our testimonials</button>
            </div>
            
      </XyzTransition>

  </section>
</template>


<script>

export default {
  name: 'Award',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-award{
    width: 100%;
    @include positionElm;
    background-color: $bgColorSection;
    min-height: 600px;

    .text-award{
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