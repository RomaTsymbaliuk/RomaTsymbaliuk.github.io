<template>
  <div id="page">
    <div class="row">
      <Header msg="message"/>
    </div>
    <div class="row">
      <div class="column-2">
        <NavBar/>
      </div>
      <div class="column-9">
        <Search/>
        <PageBlock :data="start_user" />
        <PageBlock v-for="user in users" :key="user" :data="user" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import NavBar from '../components/navbar.vue'
import Search from '../components/search.vue'
import PageBlock from '../components/pageblock.vue'
export default {
  name: 'Page',
  
  components: {
    Header,
    NavBar,
    Search,
    PageBlock
  },
  data() {
    return {
      users:[],
      start_user : {
      login : 'User',
      id : 'id',
      html_url : 'html URL',
      type : 'User type'
    }
  }
},
  mounted(){
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => data.forEach(element => {
          this.users.push(element);
        })
        )
    console.log(this.users);
  }
}
</script>

<style lang="scss">
  $grid-columns : 12;
  $grid-max-width : 1920 px;
  $breakpoint-small: "only screen and (min-width: 20em)";
  $breakpoint-medium: "only screen and (min-width: 30em)";
  $background-color: #9EA0A5;
  $grid-margin: 10px;

  .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: $grid-margin;
      margin-left: $grid-margin;
  }
  .wrapper {
      width: 100%;
      margin: 0 auto;
  }
  [class*='column-'] {
      float: left;
      padding: 1em;
      width: 100%;
      min-height: 1px; 
  }

  @media #{$breakpoint-medium} {
      .wrapper {      
          width: 95%;
          max-width: $grid-max-width;     
          }
      @for $i from 1 through $grid-columns {      
          .column-#{$i} {         
              width: 100% / $grid-columns * $i;   
              }           
          }   
      }
  #page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .column-9{
      background-color: #f2f2f2;
    }
  }

</style>