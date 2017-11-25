<template>
  <!--这是酒店-->
  <div>
    <!--这是页面的上导航条-->
    <navHeader></navHeader>
    <!--这页面的主体部分-->
    <div class="main">
      <navSearch></navSearch>
      <homeNavList></homeNavList>
      <hotelMap></hotelMap>
      <!--这是今日特价-->
      <hotelModel :price="true" :hotel="false"></hotelModel>
      <!--这是酒店列表-->
      <hotelModel :hotel="true" :price="false"></hotelModel>
      <!--这是品牌旗舰店-->
      <hotelBrand></hotelBrand>
      <!--这是酒店的底部导航列表-->
      <bottomTab></bottomTab>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../constructor/NavHeader.vue'
  import NavSearch from '../constructor/NavSearch.vue'
  import HomeNavList from '../constructor/HomeNavList.vue'
  import HotelMap from '../constructor/HotelMap.vue'
  import HotelModel from '../constructor/HotelModel.vue'
  import HotelBrand from '../constructor/HotelBrand.vue'
  import BottomTab from '../constructor/BottomTab.vue'
  export default {
    data(){
      return {}
    },
    components: {
      NavHeader,
      NavSearch,
      HomeNavList,
      HotelMap,
      HotelModel,
      HotelBrand,
      BottomTab,
    },
    methods: {}
  }
</script>
<style scoped>
  .main {
    width: 15rem;
    margin: 0 auto;
  }
</style>
