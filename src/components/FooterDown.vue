<template>
    <div class="box-footer-down">

        <div class="copyright">
            <span>
                <i class="far fa-copyright"></i> Copyright 2012 - 2020  |   
                Avada Theme by <a href="#">ThemeFusion</a>  |  All Rights Reserved  |  
                Powered By <a href="#">WordPress</a>
            </span>
        </div>

        <div class="icons-footer">
            <ul>
                <li v-for="(icon, index) in icons" :key="index">
                    <a :href="icon.url"><i :class="icon.name"></i></a>
                </li>
            </ul>
        </div>

        <a href="#">
            <div class="square">
                <i class="far fa-hand-point-up"></i>
            </div>
        </a>
        
    </div>
</template>
<script>
export default {
    name: 'FooterDown', 
    data() {
        return {
                icons: [
                {
                    name: 'fab fa-facebook-f',
                    url: '#'
                },
                {
                    name: 'fab fa-twitter',
                    url: '#'
                },
                {
                    name: 'fab fa-instagram',
                    url: '#'
                },
                {
                    name: 'fab fa-youtube',
                    url: '#'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">

@import '../css/commons.scss';

.box-footer-down{
    position: relative;
    width: 100%;
    background-color: $colorPrimary;
    padding: 30px 0;

    .copyright{
        width: 100%;
        text-align: center;

        span{
            font-size: 13px;
            color: #fff;

            a{
                text-decoration: none;
                color: #fff;
                transition: .3s;
                &:hover{
                    color: $colorSecondary;
                    text-decoration: underline;
                }
            }
        }
    }
    .icons-footer{
        width: 100%;
        text-align: center;
        margin-top: 20px;

        ul{ 

            li{
                display: inline-block;
                list-style: none;

                a{
                    color: #fff;
                    font-size: 25px;
                    margin: 0 15px;
                }
            }
        }
    }
    .square{
        position: absolute;
        bottom: 30px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border:5px solid $colorSecondary;
        display: flex;
        align-items: center;
        justify-content: center; 
        position: fixed;
        z-index: 600;
        opacity: 0.5;
        transition: .3s;
        &:hover{
            opacity: 1;
        } 
        
        i{
            color: $colorSecondary;
            font-size: 35px;
        }
    }
}

</style>