<template>
   <div class="profile-block">
        
        <h3 class="profile-header">Adrian Stefan</h3>
        
        <div class="profile-horizontal">
            <div>
            <span class="profile-block-text">Rm. Valcea</span>
            <span class="profile-block-text">4:32PM (GMT-4)</span>
            </div>
            <img class="profile-photo" src="./img/profile-img/Rectangle.png">
        </div>
        <hr>
        <button class="profile-button">UPLOAD PICTURE</button>
        <button class="profile-button">REMOVE PICTURE</button>
    </div> 
</template>

<script>
export default {
  name: 'profile-block',
  props: {
    msg: String
  },
  
}
</script>
<style scoped lang="scss">
$profile-text-color : #3A3B3F;
$profile-link-hover : #1665D8;
$profile-line-color: #E4E7EB;
$profile-block-color: #F2F2F2;
$profile-background-color: #9EA0A5;
$profile-button-color : #1665D8;
$profile-button-text-color : #425A70;
.profile-block{
    height : 40%;
    width : 110%;
    background-color: white;
    border-radius: 15px;
}
.profile-photo{
    margin-left: 20%;
}
.profile-header{

    font-size: 24px;
    padding-top: 17px;
    margin-right: 190px;
}

.profile-horizontal{
    display: flex;
}

.profile-block-text{

    display: block;
    color: $profile-text-color;
    font-size: 14px;
    margin-top: 5px;
    
}

.profile-button{
    border: 0;
    appearance: none;
    background-color: white;
    color: $profile-button-text-color;
    padding: 15px;
}

.profile-button:hover{
    color: $profile-button-color;
}

.profile-button:focus{
    outline: none;
    box-shadow: none;
}
</style>