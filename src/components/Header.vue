<template>
    <header>
        <div class="header-up">

            <div class=" box-header-up container">
                <div class="call">
                     <a href="#"><i class="fas fa-phone"></i> Call us for a Free Quote 1.800.555.6789</a>                                               
                </div>
                <div class="icons-header">
                    <ul>
                        <li v-for="(icon, index) in icons" :key="index">
                            <a :href="icon.url"><i :class="icon.name"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                    
        <div class="header-down">
            <div class="box-header-down container">

                <div class="logo-header">
                    <img src="../images/avada-movers-logo.png" alt="logo-movers">
                </div>

                <div class="nav-header">
                    
                    <div class="nav">
                        <XyzTransitionGroup tag="ul" class="item-group" xyz="fade stagger">
                            <li v-for="(link, index) in menu" :key="index" class="square xyz-in" xyz="inherit up">
                                <a :href="link.url" :class="{active : link.current}" v-if="true">{{link.text}}</a>
                            </li>
                        </XyzTransitionGroup>

                    </div>

                    <button>free quote</button>
                </div>

            </div>

        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
        icons: [
            {
                name: 'fab fa-facebook-f',
                url: '#',
                current: true
            },
            {
                name: 'fab fa-twitter',
                url: '#',
                current: false
            },
            {
                name: 'fab fa-instagram',
                url: '#',
                current: false
            },
            {
                name: 'fab fa-youtube',
                url: '#',
                current: false
            }
        ],
        menu: [
            {
                text: 'Home',
                url: '#',
                current: true
            },
            {
                text: 'Rates',
                url: '#',
                current: false
            },
            {
                text: 'Testimonials',
                url: '#',
                current: false
            },
            {
                text: 'FAQ',
                url: '#',
                current: false
            },
            {
                text: 'Blog',
                url: '#',
                current: false
            },
            {
                text: 'Contact',
                url: '#',
                current: false
            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../css/commons.scss';

.header-up{
    width: 100%;
    height: 45px;
    background-color: $colorPrimary;

    .box-header-up{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;

        .call{

            a{
                color: #fff;
                text-decoration: none;
                font-size: 14px;

                i{
                    margin-right: 10px;
                }
            } 
        }
        .icons-header{
            display: flex;

            ul{
                list-style: none;
                
                li{
                    display: inline-block;
                    
                    a{
                        color: #fff;
                        margin-left: 25px;
                    }
                }
            }
        }
    }
}
.header-down{
    width: 100%;
    background-color: transparent;
    position: absolute;
    top: 45px;
    z-index: 999;

    .box-header-down{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;

        .logo-header{
            display: flex;
            align-items: center;
        }

        .nav-header{
            display: flex;

            .nav{
                display: flex;
                align-items: center;
                ul{
                    list-style: none;
                    &:root {
                        --xyz-translate-default: 300%;
                        --xyz-ease-default: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        --xyz-stagger-default: 0.1s;
                    }
                    li{
                        display: inline-block;
                        
                        a{
                            text-decoration: none;
                            margin-left: 40px;
                            font-weight: bold;
                            color: #000;

                            &.active{
                                color: $colorPrimary;
                            }
                        }
                    }
                }
            }
            button{
                @include btn;
                margin-left: 40px;
                cursor: pointer;
            }
        }
    }
}


</style>




