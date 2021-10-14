<template>
  <section class="box-move">
      
    
      <div class="text-move">
          <h4>we remove the headache from moving</h4>
          <h2>Move With Ease</h2>
          <hr>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque tempore expedita, eaque delectus dolorem, fugit hic sequi aspernatur fugiat voluptatum labore suscipit eum numquam. Provident voluptatibus veniam sint fuga optio?</p>
          <button>get a free quote now</button>
      </div>
    
        

  </section>
</template>

<script>


export default {
  name: 'Move',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-move{
    width: 100%;
    background-image: url(../images/avada-movers-movewithease-background-new.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    display: flex;
    align-items: center;

    .text-move{
        position: relative;
        left: 55%;
        width: 40%;
        text-align: center;
        background-color: #6abf17;
        border: 15px solid #5aa511;
        padding: 40px;
        color: #fff;

        h4{
            text-transform: uppercase;
        }
        h2{
            margin: 20px 0;
        }
        hr{
            width: 350px;
            margin: 0 auto;
            border-color: #a4f752;
        }
        p{
            line-height: 40px;
            font-weight: bold;
            margin: 30px 0;
        }
        button{
            @include btn;
            background-color: #5aa511;
            &:before{
                border: $colorPrimary solid 4px;
            }
        }
    }
}

</style>