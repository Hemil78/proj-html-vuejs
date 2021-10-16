<template>
    <section class="container">
        <div class="box-footer-up">

            <div class="section-footer-up">
                <div class="text-footer-up">
                    <h4>about</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quam placeat? Accusantium expedita aliquam amet porro deserunt tenetur eligendi iure voluptas.</p>
                </div>
                <div class="logo-footer-up">
                    <img src="../images/avada-movers-logo.png">
                </div>
            </div>

            <div class="section-footer-up">

                <div class="avada-footer-up">
                    <h4>avada movers</h4>
                    <XyzTransitionGroup tag="ul" :appear-visible="{ threshold: 0.5, rootMargin: '50px' }" xyz="fade down-100% back-5 stagger-6">
                    
                        <li v-for="(link, index) in menu" :key="index">
                            <a :href="link.url" :class="{active : link.current}">
                                <i class="fas fa-chevron-right"></i> {{link.text}}
                            </a>
                        </li>
                    </XyzTransitionGroup>
                </div>
            </div>

            <div class="section-footer-up">
                <div class="avada-footer-up">
                    <h4>recent posts</h4>
                    <XyzTransitionGroup tag="ul" :appear-visible="{ threshold: 0.5, rootMargin: '50px' }" xyz="fade down-100% back-5 stagger-6">
                        <li v-for="(post, index) in posts" :key="index">
                            <a :href="post.url" :class="{active : post.current}">
                                <i class="fas fa-chevron-right"></i> {{post.text}}
                            </a>
                        </li>
                    </XyzTransitionGroup>
                </div>
            </div>

        </div>

    </section>
</template>
                


<script>


export default {
  name: 'FooterUp',
  data() {
      return{
        menu: [
            {
                text: 'Home',
                url: '#',
                current: false
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
                text: 'Blog',
                url: '#',
                current: false
            },
            {
                text: 'Free Quote',
                url: '#',
                current: false
            }
            
        ],
        posts: [
            {
                text: 'Heading Out To College?',
                url: '#',
                current: false
            },
            {
                text: 'Moving Your Business?',
                url: '#',
                current: false
            },
            {
                text: 'Outstanding Quality',
                url: '#',
                current: false
            },
            {
                text: 'Cost of Moving',
                url: '#',
                current: false
            },
            {
                text: 'Best Moving Tips',
                url: '#',
                current: false
            }
            
        ]
      }
    
  }
}
</script>

<style scoped lang="scss">
@import '../css/commons.scss';

.box-footer-up{
    width: 100%;
    display: flex;
    margin: 80px 0;

    .section-footer-up{
        width: calc(100% / 3);

        .text-footer-up{
            padding-right: 60px;

            h4{
                margin-bottom: 30px;
            }
            p{
                line-height: 30px;
            }
        }
        .logo-footer-up{
            margin-top: 60px;
        }
        .avada-footer-up{

            h4{
                margin-bottom: 20px;
            }

            ul{
                list-style: none;
            }
            li{
                line-height: 53px;

                a{
                   color: #000; 
                   text-decoration: none;
                   font-weight: bold;
                    &:hover{
                        color: $colorPrimary;
                    }

                   i{
                       font-size: 11px;
                       margin-right: 5px;
                   }
                }
                
            }
        }
    }
}



</style>