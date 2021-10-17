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

        
            <XyzTransition class="get" xyz="fade left-100%">
                <div v-if="text">
                    <a href="#">get a free quote online now!<i class="fas fa-truck"></i></a>
                </div>
            </XyzTransition>
                
    </div>
    
</template>   
             
            
<script>
export default {
    name: 'Hero',
    data() {
        return {
            text: false
        }
    },
    mounted() {
        this.text = true;
    }
}
</script>

<style scoped lang="scss">

@import '../css/commons.scss';

.hero-box-container{
    width: 100%;
    z-index: 700;

    .hero-box{
        width: 100%;
        height: calc(100vh - 45px);
        position: relative;
        background-image: url(../images/avada-movers-homeherobackground-final.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 800;
        @include positionElm;

        .hero-text {

            text-align: center;
            margin-bottom: 50px;
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
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 120px;
        background-color: $colorSecondary;
        z-index: 998;
        @include positionElm;
        --xyz-duration: 3s;

        a{
            text-decoration: none;
            color:#fff;
            text-transform: uppercase;
            letter-spacing: 5px;
            transition: .3s;
            &:hover{
                font-weight: bold;
            }

            i{
                margin-left: 20px;
                font-size: 50px;
                transition: .3s;
                vertical-align: middle;
            }
        }
    }
}

        


</style>