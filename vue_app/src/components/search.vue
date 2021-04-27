<template>
    <div>
        <button class="page__filter">FILTER</button>    
        <input class="page__input" placeholder="Search users for name," type="text">
        <button class="page__addbutton">+ ADD USER</button>
    </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    msg: String
  },
  
}
</script>
<style scoped lang="scss">
 $page-button-color: #1665D8;
.page__input{
    width: 60%;
}

.page__filter{
    border: 0;
    padding: 10px;
    width: 10%;
    background-color: white;
}

.page__addbutton{

    border: 0;
    padding: 10px;
    width: 12%;
    background-color: $page-button-color;
    color: white;
    margin-left: 80px;

}
</style>