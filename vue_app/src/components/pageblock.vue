<template>
    <div>
        <div class="page-block">
            <input class="page__checkbox" type="checkbox">
            <span class="page__username">{{ data.login }}</span>
            <span class="page__username">{{ data.id }}</span>
            <span class="page__username">{{ data.html_url }}</span>
            <span class="page__username">{{ data.type }}</span>
            <span class="page__username"></span>
        </div>
        <hr class="page__line">
    </div>
</template>

<script>
export default {
  name: 'PageBlock',
  props:  [ 'data' ]
}
</script>
<style scoped lang="scss">
.page__username{
    
    
    width: 100%;
    color: #3A3B3F;
    font-size: 14px;
    
}
.page-block{

    display: flex;
    height: 3%;
    margin-top: 30px;  
    background-color: white;

}
.page__line{
    width: 100%;
    color: #E4E7EB;
}
</style>