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
    <!--这是满屏的横条图片-->
    <scrollimg></scrollimg>
    <div class="main">
      <!--这是横条大标题-->
      <scrollTitle title="购特色"></scrollTitle>
    </div>
    <!--这是购特色的图片列表-->
    <featureImg></featureImg>
    <scrollimg class="scroll-img"></scrollimg>
    <!--这是主题模块-->
    <div class="main">
      <foodieImgList title="美食"></foodieImgList>
      <foodieImgList title="休闲娱乐"></foodieImgList>
      <foodieImgList title="酒店"></foodieImgList>
      <foodieImgList title="电影"></foodieImgList>
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
  import Scrollimg from '../constructor/Scrollimg.vue'
  import ScrollTitle from '../constructor/ScrollTitle.vue'
  import FeatureImg from '../constructor/FeatureImg.vue'
  import FoodieImgList from '../constructor/FoodieImgList.vue'
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
      Scrollimg,
      ScrollTitle,
      FeatureImg,
      FoodieImgList,
    },
    methods: {}
  }
</script>
<style scoped>
  .main {
    width: 15rem;
    margin: 0 auto;
  }

  .map-list-box {
    display: flex;
    flex-direction: row;
  }

  .scroll-img {
    margin-top: .36rem;
  }
</style>
