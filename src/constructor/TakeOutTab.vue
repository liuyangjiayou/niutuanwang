<template>
  <!--这是外卖的路由导航列表-->
  <div>
    <div class="take-out-box">
      <div class="take-title">
        <img src="" alt="">
        <p>商家分类</p>
      </div>
      <ul class="take-nav-list">
        <li>全部</li>
        <li>美食</li>
        <li>正餐优选</li>
        <li>超市</li>
        <li>精选小吃</li>
        <li>鲜果购</li>
        <li>下午茶</li>
      </ul>
    </div>
    <takeOutList></takeOutList>
  </div>

</template>
<script>
  import TakeOutList from '../constructor/TakeOutList.vue'
    export default {
        data(){
            return {}
        },
        components: {
          TakeOutList,
        },
        methods: {}
    }
</script>
<style scoped>
  .take-out-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .15rem 0;
    height: 1.54rem;
    background-color: #fff;
  }
  .take-nav-list{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .take-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: .66rem;
    font-size: .23rem;
    font-weight: 900;
    color: #021b2f;
  }
  .take-title img{
    margin-left: .3rem;
    margin-right: .16rem;
    width: .36rem;
    height: .28rem;
  }
  .take-nav-list li{
    margin-right: .3rem;
    color: #848b95;
  }
</style>
