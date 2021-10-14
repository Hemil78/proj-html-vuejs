<template>

    <section class="testimonials">

        <div class="container">

            <div class="text-testimonials">
                <h4>happy customers</h4>
                <h2>Testimonials</h2>
            </div>

            <XyzTransitionGroup class="img-testimonials" 
                :appear-visible="{ threshold: 0.5, rootMargin: '50px' }" xyz="fade small out-down out-rotate-right appear-stagger">

                <div class="box-card" v-for="(card, index) in cards" :key="index">
                    <div class="img-card">
                        <img :src="card.url">
                    </div>
                    <div class="text-card">
                        <h3>{{card.title}}</h3>
                        <p>{{card.text}}</p>
                        <button class="btn-test">read more testimonials</button>
                    </div>
                </div>
                

            </XyzTransitionGroup>

        </div>

    </section>

</template>

<script>


export default {
  name: 'FullService',
    
    data() {
        return {
            cards: [
                {
                    url: require('../images/avada-movers-johndoe-final-200x200.jpg'),
                    title: 'John Doe',
                    text: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque"'
                },
                {
                    url: require('../images/avada-movers-janedoe-final-200x200.jpg'),
                    title: 'Jane Doe',
                    text: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque"'
                },
                {
                    url: require('../images/avada-movers-johnsmith-final-200x200.jpg'),
                    title: 'John Smith',
                    text: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque"'
                }
                
            ],
            upHere : false
            
        }
    }
    
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.testimonials{
    width: 100%;
    padding: 100px 0;
    background-image: url(../images/avada-movers-testimonial-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    .text-testimonials{
        width: 100%;
        text-align: center;
        padding: 10px 0;
        margin-bottom: 50px;

        h4{
            @include textSecondary;
        }
        h2{
            color: $colorPrimary;
        }
    }
    .img-testimonials{
        width: 100%;
        display: flex;

        .box-card{
            width: calc(100% / 3);
            &:hover .btn-test{
                opacity: 1;
            }
            
            .img-card{
                width: 100%;
                text-align: center;
                overflow: hidden;

                img{
                    width: 150px;
                  border-radius: 50%;  
                }
            }
            .text-card{
                text-align: center;
                margin-top: 16px;
                padding: 10px;

                h3{
                    color: $colorSecondary;
                    padding: 20px 0;
                }
                p{
                    @include parStyle;
                    line-height: 30px;
                    font-style: italic;
                }
                button{
                    @include btn;
                    margin-top: 100px;
                    opacity: 0;
                    transition: .5s;
                }

            }
        }
    }
}

</style>