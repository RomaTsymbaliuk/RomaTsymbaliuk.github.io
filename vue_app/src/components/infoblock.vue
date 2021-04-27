<template>
    <div>
        <div class="info-block">

            <div class="info-block-together">
                <h2 class="info-block-header__text">Basic profile</h2>
                <span class="info-block__text">The information can be edited from your profile page</span>
            </div>
            <hr class="info-block__line">
            <form class="info-form">
                <input type="text" class="info-form__input" name="firstname" placeholder="First Name">
                <input type="text" class="info-form__input" name="lastname" placeholder="Last Name">
                <input type="text" class="info-form__input" name="email" placeholder="Email">
                <input type="text" class="info-form__input" name="phone" placeholder="Phone">
                <input type="text" class="info-form__input" name="country" placeholder="Country">
                <input type="text" class="info-form__input" name="city" placeholder="City">
            </form>
            <button class="info-block__button">SAVE SETTINGS</button>
        </div>
        <div class="info-block">
            <div class="info-block-together">
                <h2>Notifications</h2>
                <span class="info-block__text">Mange the notifications emailing</span>
            </div>
            <hr class="info-block__line">
            <div class="info-block-together-title">
                <h2>Notifications</h2>
                <h2>Messages</h2>
            </div>
            <div class="info-block__text">
                <span class="info-form__text"><input class="info__input" type ="checkbox"> Email</span>
                <span class="info-form__text"><input class="info__input" type="checkbox">Email</span>
            </div>
            <div class="info-block__notifications">
                <span class="info-form__text"><input class="info__input" type ="checkbox">Push Notifications</span>
                <span class="info-form__text"><input class="info__input" type="checkbox">Push Notifications</span>
            </div>
            <div class="info-block__textmessages">
                <span class="info-form__text"><input class="info__input" type ="checkbox">Text Messages</span>
                <span class="info-form__text"><input class="info__input" type="checkbox">Text Messages</span>
            </div>
            <button class="info-block__button-notification">SAVE</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  },
  
}
</script>
<style scoped lang="scss">
$info-block-color : #425A70;
$info-block-background-color: #F2F2F2;
$info-line-color: #E4E7EB;
$info-button-color: #1665D8;

$info-block-top: 22px;
$info-block-left: 30px;
$info-block-width: 150%;
$info-block-height: 80%;
$info-block-radius: 15px;

$info-together-left: 10px;

$info-text-size : 14px;
$info-text-top: 25px;
$info-text-left: 15px;

$info-form-width: 40%;
$info-form-padding: 15px;
$info-form-m-top: 20px;
$info-form-m-bottom: 20px;
$info-form-m-left: 10px;
$info-form-m-right: 10px;

$info-button-padding: 15px;
$info-button-m-top: 30px;
$info-button-m-bottom: 20px;
$info-button-m-left: 10px;
$info-button-radius: 5px;

$info-together-m-right: 100px;
$info-together-m-left: 10px;

$info-multiple-m-left: 20px;
$info-f-multiple-right: 40px;
$info-f-multiple-left: 10px;

$info-block__text-m-right: 140px;

.info-block{

    margin-top: $info-block-top;
    margin-left: $info-block-left;
    background-color: white;
    width: $info-block-width;
    height: $info-block-height;
    border-radius: $info-block-radius;
    
}
.info-block-header__text{
    display: inline-block;
}
.info-block-together{
    margin-left: $info-together-left;
    display: flex;
}

.info-block__text{
    
    color: #66788A;
    font-size: $info-text-size;
    margin-top: $info-text-top;
    margin-left: $info-text-left;
    
}

.info-block__line{

    color: $info-line-color;
    
}
.info-form__input{

    width: $info-form-width;
    padding: $info-form-padding;
    margin-top: $info-form-m-top;
    margin-bottom: $info-form-m-bottom;
    margin-left: $info-form-m-left;
    margin-right: $info-form-m-right;
    
}
.info-block__button{

    border: none;
    box-shadow: none;
    outline: none;
    color: white;
    background-color: $info-button-color;
    padding: $info-button-padding;
    margin-top: $info-button-m-top;
    margin-bottom: $info-button-m-bottom;
    margin-left: $info-button-m-left;
    border-radius: $info-button-radius;
}

.info-block-together-title{
    display: flex;
    
    justify-content: space-between;
    margin-right: $info-together-m-right;
    margin-left: $info-together-m-left;
   
}
.info-form__multiple-text{
    margin-left: $info-multiple-m-left;

}

.info-form__multiple{
    margin-right: $info-f-multiple-right;
    margin-left: $info-f-multiple-left;
}
.info-block__text{
    @extend .info-block-together-title;
    margin-right: $info-block__text-m-right;
    
}

$info-block__notify-m-right: 55px;
$info-block__notify-m-top: 20px;

.info-block__notifications{
    @extend .info-block-together-title;
    margin-right: $info-block__notify-m-right;
    margin-top: $info-block__notify-m-top;
    
}

$info-block__messages-m-left: 10px;
$info-block__messages-m-right: 80px;
$info-block__messages-m-top: 20px;

.info-block__textmessages{

    display: flex;
    justify-content: space-between;
    margin-left: $info-block__messages-m-left;
    margin-right: $info-block__messages-m-right;
    margin-top: $info-block__messages-m-top;
    
}

$info-form__text-size: 16px;

.info-form__text{

    font-size: $info-form__text-size;
    color: #000000;
    
}

.info__input{
    
    background-color: $info-button-color;
    
}

.info-block__button-notification{
    @extend .info-block__button;
    background-color: white;
    color: $info-button-color;
    box-shadow: $info-line-color;
}

</style>