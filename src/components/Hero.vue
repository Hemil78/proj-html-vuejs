<template>
    <div class="hero-box-container">

        <div class="hero-box">
            <XyzTransition class="hero-text" xyz>
                <div class="title-text" v-if="text">
                    <h4>moving without the hassle</h4>
                    <h1>we make it simple</h1>
                    <h4>professional service with quality and customer satisfaction</h4>
                </div>    
            </XyzTransition>
        </div>

        <div class="get">
            <a href="#"><i class="far fa-paper-plane"></i>get a free quote online now!</a>
        </div>
            
                
            
       
    </div>
</template>
<script>
export default {
    name: 'Hero',
    data() {
        return {
            text: false,
            icon: false
        }
    },
    mounted() {
        this.text = true;
        this.icon = true;
    }
}
</script>

<style scoped lang="scss">

@import '../css/commons.scss';
.hero-box-container{
    width: 100%;

    .hero-box{
        width: 100%;
        min-height: 590px;
        background-image: url(../images/avada-movers-homeherobackground-final.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .hero-text {

            text-align: center;
            margin-top: 80px;
            --xyz-opacity: 0;
            --xyz-duration: 4s;

            h4{
                @include textPrimary;
            }
            h1{
                text-transform: uppercase;
                color: #000;
                font-size: 65px;
                font-weight: bold;
                padding: 15px 0;
            }
        }
        
    }
    .get{
        width: 100%;
        background-color: $colorSecondary;
        @include positionElm;

        a{
            text-decoration: none;
            color:#fff;
            text-transform: uppercase;
            letter-spacing: 5px;
            padding: 60px 0;
            transition: .3s;
            &:hover{
                font-weight: bold;
            }

            i{
                margin-right: 10px;
                font-size: 20px;
                transition: .3s;
            }
        }
    }
}

        


</style>