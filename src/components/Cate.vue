<template>
  <!--这是美食页面-->
  <div>
    <!--这是页面的上导航条-->
    <navHeader></navHeader>
    <!--这页面的主体部分-->
    <div class="main">
      <!--这是搜索-->
      <navSearch></navSearch>
      <!--这是Tab导航列表-->
      <homeNavList></homeNavList>
      <!--这是分类导航-->
      <classifyNav></classifyNav>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../constructor/NavHeader.vue'
  import NavSearch from '../constructor/NavSearch.vue'
  import HomeNavList from '../constructor/HomeNavList.vue'
  import ClassifyNav from '../constructor/ClassifyNav.vue'
  export default {
    data(){
      return {}
    },
    components: {
      NavHeader,
      NavSearch,
      HomeNavList,
      ClassifyNav,
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
