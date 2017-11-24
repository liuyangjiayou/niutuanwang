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
      <hotelModel></hotelModel>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../constructor/NavHeader.vue'
  import NavSearch from '../constructor/NavSearch.vue'
  import HomeNavList from '../constructor/HomeNavList.vue'
  import HotelMap from '../constructor/HotelMap.vue'
  import HotelModel from '../constructor/HotelModel.vue'
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
