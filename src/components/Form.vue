<template>

    <section class="form-container">

        <form class="form-box">

            <div class="form-title">
                <h2>Quote Request Form</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ex possimus aut. Delectus repudiandae corporis omnis nam </p>
            </div>

            <div class="form-layout">
                <div class="form-text">
                    <input type="text" placeholder="Your Name">
                    <input type="mail" placeholder="Your Email">
                    <input type="tel" placeholder="Your Telephone">
                    <input type="text" placeholder="Start Location">
                </div>
                <div class="form-text">
                    <input type="text" placeholder="Destination">
                    <input type="number" placeholder="House Size at Start Location">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                </div>
            </div>
            <div class="form-button">
                <button tipe="submit">SEND</button>
            </div>
        </form>

    </section>
    
</template>   
       
        
               
             
            
<script>
export default {
    name: 'Form'
    
}
</script>

<style scoped lang="scss">

@import '../css/commons.scss';

.form-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 120px;
    z-index: 999 !important;

    .form-box{
        width: 70%;
        margin: auto;
        padding: 50px;
        border-radius: 20px;
        background-color: $bgColorSection;
        border: 3px solid #aaaaaa;

        input,
        textarea{
            display: block;
            width: 500px;
            border: 1px solid #aaaaaa;
            padding: 15px;
            margin: 20px 0;
            border-radius: 20px;
            font-size: 16px;
        }

        .form-title{
            width: 100%;
            text-align: center;

            h2{
                margin-bottom: 10px;
                color: $colorPrimary;
            }
        }

        .form-layout{
            width: 100%;
            margin: 20px auto;
            display: flex;
            

            .form-text{
                width: calc(100% / 2);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                
            }
        }
        .form-button{
            width: 100%;
            text-align: center;

            button{
                border: none;
                padding: 12px 25px;
                font-size: 18px;
                font-weight: bold;
                border-radius: 10px;
                background-color: $colorPrimary;
                color: #fff;
            }
        }
    }
    
}

</style>