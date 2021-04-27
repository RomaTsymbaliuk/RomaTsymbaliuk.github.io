<template>
    
        <div>
            <span class ="nav-text">Roman Kutepov</span>
            <img class="nav-photo" src="./img/nav-img/Oval.svg">
            <span class="nav-bottom-text">Main Director</span>
            <hr class="nav-line">

            <nav class="navigation-nav">
                <ul>
                    <li><img src="./img/nav-img/Dashboard.png"><a class="nav-link" href="#">Dashboard</a></li>
                    <li><img src="./img/nav-img/Authentication.png"><a class="nav-link" href="#">Users</a></li>
                    <li><img src="./img/nav-img/Authentication.png"><a class="nav-link" href="#">Products</a></li>
                    <li><img src="./img/nav-img/Authentication.png"><a class="nav-link" href="#">Authentication</a></li>
                    <li><img src="./img/nav-img/Typography.png"><a class="nav-link" href="#">Typography</a></li>
                    <li><img src="./img/nav-img/Authentication.png"><a class="nav-link" href="#">Icons & Images</a></li>
                    
                </ul>
            </nav>
            <hr class="nav-line">
            <span class = "nav-bottom-text">Support</span>
            <div class="nav-photo">
                <img class="sup-icon" src="./img/nav-img/Authentication.png">
                <a href="#" class="nav-link-sup">Support</a>
            </div>
        
        </div>
</template>
<script>
export default {
  name: 'left-navbar',
  props: {
    msg: String
  },
  
}
</script>
<style scoped lang="scss">
    $gray: #9EA0A5;
    $nav-line-color: #E4E7EB;
    $nav-text-color: #66788A;
    $grid-columns : 12;
    $grid-max-width : 1920 px;
    $breakpoint-small: "only screen and (min-width: 20em)";
    $breakpoint-medium: "only screen and (min-width: 30em)";
    $background-color: #9EA0A5;
    $grid-margin: 10px;


    .nav-photo{

        float: center;
        display: block;
    }

    .nav-text{

        display: block;
        font-size: 16px;
        margin-left: 40px;
        
        
    }


    .nav-line{

        margin-top: 20px;
        color: $nav-line-color;

    }

    .nav-link{

        text-decoration: none;
        color: $nav-text-color;
        width : 100%;
        
    }

    li {
        list-style-type: none;
        margin-bottom: 30px;
    }

    .navigation-nav{
        float: center;
        img{
            float: left;
        }
    }
    .nav-text{
        font-size: 15px;
        float: left;
        margin-bottom: 10px;
    }

    .nav-bottom-text{
        font-size: 10px;
        float: center;
        margin-top: 10px;
        margin-right: 30px;
        color: $gray;
    }

    .nav-photo{

        margin-left: 40px;
        margin-top: 20px;
        .nav-link-sup{

            text-decoration: none;
            color: $nav-text-color;
            width : 100%;
        
        }

        .sup-icon{
            float:left;
        }


    }

    .new-line{
        color: $nav-line-color;
        float: left;
    }
</style>