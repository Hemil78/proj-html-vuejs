<template>

    <section class="box-fullService">

        <div class="container">

            <div class="text-fullService">
                <h4>we are a professional</h4>
                <h2>Full-Service Solution</h2>
            </div>


                <XyzTransitionGroup class="img-fullService" :appear-visible="{ threshold: 0.5, rootMargin: '50px' }" xyz="fade small out-down out-rotate-right appear-stagger">
                    <div class="box-card" v-for="(card, index) in cards" :key="index">
                        <div class="img-card">
                            <img :src="card.url">
                        </div>
                        <div class="text-card">
                            <h3>{{card.title}}</h3>
                            <p>{{card.text}}</p>
                            <button>read more</button>
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
                    url: require('../images/avada-movers-serviceonephoto-final-400x255.jpg'),
                    title: 'Two Man Teams',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque, saepe ab voluptas, obcaecati quo, quis harum suscipit laborum!'
                },
                {
                    url: require('../images/avada-movers-servicetwophoto-final-400x255.jpg'),
                    title: 'Two Man Teams',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque, saepe ab voluptas, obcaecati quo, quis harum suscipit laborum!'
                },
                {
                    url: require('../images/avada-movers-servicethreephoto-final-400x255.jpg'),
                    title: 'Two Man Teams',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nulla quibusdam temporibus atque fugiat ullam itaque, saepe ab voluptas, obcaecati quo, quis harum suscipit laborum!'
                }
                
            ]
            
        }
    }
    
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-fullService{
    width: 100%;
    padding: 100px 0;

    .text-fullService{
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
    .img-fullService{
        width: 100%;
        display: flex;

        .box-card{
            width: calc(100% / 3 - 40px);
            background-color: $bgColorSection;
            padding: 20px;
            margin: 0 20px;

            .img-card{
                width: 100%;

                img{
                    width: 100%;
                }
            }
            .text-card{
                background-color: #fff;
                text-align: center;
                margin-top: 16px;
                padding: 10px;

                h3{
                    color: $colorSecondary;
                    padding: 20px 0;
                }
                p{
                    @include parStyle;
                }
                button{
                    @include btn;
                    margin: 20px 0 25px 0;
                    
                }

            }
        }
    }
}

</style>