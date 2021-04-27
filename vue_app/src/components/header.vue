<template>
    
        <div class="header">
            <img src = "./img/header-img/flex.svg" class="header-mountains">
            
                <span class="header-text-dev">Devias Kit</span>
                <label class="header-free">FREE</label>
            
            <span class="header-long-text">See our PRO version for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</span>
            <img class="header-image" src = "./img/header-img/exit.png">
            <img class="header-image" src="./img/header-img/bell.png"> 
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
    
$header-color : #3F51B5;
$header-free-color: #26A69A;
$header-text-block-color: #333333;
$header-height: 64px;
$header-margin-top: 15px;
$header-margin-left: 30px;
$header-text-size: 20px;
$header-text-bottom: 10px;
$header-free-radius: 5px;
$header-padding: 10px;

$header-free-left: 40px;
$header-free-bottom: 10px; 

$header-long-text-size: 14px;
$header-long-text-left: 40px;
$header-long-text-bottom: 10px;

$header-image-top: 25px;
$header-image-right: 10px;
$grid-margin: 10px;

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: $grid-margin;
        margin-left: $grid-margin;
    }
    .header{
        background-color: $header-color;
        height: $header-height;
        width: 100% ;
        &-mountains{
            margin-top: $header-margin-top;
            margin-left: $header-margin-left;
        }
        
        &-text-dev{
            
            position: relative;
            text-align: center;
            color: white;
            size: $header-text-size;
            bottom: $header-text-bottom;
            left: ($header-text-bottom / 2);
        }

        &-free{

            color: white;
            background-color: $header-free-color;
            size: ($header-text-size / 2);
            border-radius: $header-free-radius;
            padding-left: $header-padding;
            padding-right: $header-padding;
            padding-top: $header-padding;
            padding-bottom: $header-padding;

            position: relative;
            left: $header-free-left;
            bottom: $header-free-bottom;

        }

        &-long-text{
            color: white;
            size: $header-long-text-size;
            position: relative;
            left: $header-long-text-left;
            bottom: $header-long-text-bottom;
        }


        &-image{
            float: right;
            margin-top: $header-image-top;
            margin-right: $header-image-right;
        }
        
    } 
      

</style>