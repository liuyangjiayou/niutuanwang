<template>
  <div>
    <div>
      <!--这是导航列表-->
      <div class="nav-list">
        <div>全部分类</div>
        <router-link to="/home">首页</router-link>
        <router-link to="/cate">美食</router-link>
        <router-link to="/hotel">酒店</router-link>
        <router-link to="/film">电影</router-link>
        <router-link to="/beauty">丽人</router-link>
        <router-link to="/travel">旅游</router-link>
        <router-link to="/leisure">娱乐休闲</router-link>
        <router-link to="/takeOut">外卖</router-link>
        <router-link to="/service">生活服务</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    components: {},
    methods: {
        changeClass(e){
          console.log(e.target);
        }
    }
  }
</script>
<style scoped>

  .nav-list {
    display: flex;
    flex-direction: row;
  }
  .nav-list a{
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex: 3;
    height: .59rem;
    line-height: .59rem;
    font-size: .28rem;
    font-weight: 900;
    background-color: #e11222;
    color: #fff;
  }
  .nav-list div{
    width: 3.09rem;
    height: .59rem;
    line-height: .59rem;
    box-sizing: border-box;
    padding-left: .28rem;
    margin-right: 2px;
    justify-content: flex-start;
    font-size: .28rem;
    font-weight: 900;
    background-color: #e11222;
    color: #fff;
  }
  .nav-list .router-link-exact-active{
    color: #f48d24;
  }
  .nav-list .router-link-active{
    color: #f48d24;
  }
</style>
