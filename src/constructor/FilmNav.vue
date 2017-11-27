<template>
  <!--电影页面的tab导航-->
    <div>
      <div class="film-nav">
        <router-link to="/film/home">电影首页</router-link>
        <router-link to="/film/home">电影院</router-link>
        <router-link to="/film/home">电影票团购</router-link>
        <router-link to="/film/home">在线选座</router-link>
        <router-link to="/film/home">最新电影</router-link>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
  .film-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .31rem auto 0;
    width: 15rem;
    height: .84rem;
    font-size: .2rem;
  }
  a{
    text-decoration: none;
    margin-right: .45rem;
    color: #150005;
  }
  .router-link-exact-active{
    color: #40bcb4;
  }
</style>
