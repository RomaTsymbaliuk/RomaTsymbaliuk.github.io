<template>
<div>
<nav class="profile-nav">
<a class="profile-link" href="#">Profile</a>
<a class="profile-link" href="./page.html">Account</a>
<a class="profile-link" href="#">Price Plans</a>
</nav>

</div>
</template>

<script>
export default {
  name: 'links',
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


$profile-link-m-right: 20px;
$profile-ling-height: 3;
$profile-text-size: 16px;

.profile-link {
    display: inline-block;
    margin-right: $profile-link-m-right;
    color: $profile-text-color;
    line-height: $profile-ling-height;
    font-size: $profile-text-size;
    text-decoration: none;
    cursor: pointer;
}

.profile-link:after {
    background-color: $profile-link-hover;
    display: block;
    content: "";
    
    height: 3px;
    width: 0%;
    -webkit-transition: width .3s ease-in-out;
    -moz--transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
}
.profile-link:hover:after,
.profile-link:focus:after {
    width: 100%;
}


.profile-nav{
    float:left;
}

</style>