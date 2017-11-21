<template>
  <div>
    <!--这是页面的上导航条-->
    <navHeader></navHeader>
    <!--这页面的主体部分-->
    <div class="main">
      <navSearch></navSearch>
      <homeNavList></homeNavList>
      <!--这是导航列表下的子导航-->
      <div class="map-list-box">
        <subnav></subnav>
        <mapNav></mapNav>
        <homeTwoCode></homeTwoCode>
      </div>
      <!--这是吃货秒杀-->
      <foodieSeckill></foodieSeckill>
      <!--这是领卷中心-->
      <roll></roll>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../constructor/NavHeader.vue'
  import NavSearch from '../constructor/NavSearch.vue'
  import HomeNavList from '../constructor/HomeNavList.vue'
  import Subnav from '../constructor/Subnav.vue'
  import MapNav from '../constructor/MapNav.vue'
  import HomeTwoCode from '../constructor/HomeTwoCode.vue'
  import FoodieSeckill from '../constructor/FoodieSeckill.vue'
  import Roll from '../constructor/Roll.vue'
  export default {
    data(){
      return {}
    },
    components: {
      NavHeader,
      NavSearch,
      HomeNavList,
      Subnav,
      MapNav,
      HomeTwoCode,
      FoodieSeckill,
      Roll,
    },
    methods: {}
  }
</script>
<style scoped>
  .main {
    width: 15rem;
    margin: 0 auto;
  }
  .map-list-box{
    display: flex;
    flex-direction: row;
  }

</style>
