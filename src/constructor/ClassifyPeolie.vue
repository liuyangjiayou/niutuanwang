<template>
  <!--这是美食界面的人数选择列表-->
  <div>
    <div class="class-nav">
      <p class="title">人数 ：</p>
      <ul>
        <li>全部</li>
        <li>单人餐</li>
        <li>双人餐</li>
        <li>3-4人</li>
        <li>5-6人</li>
        <li>7-8人</li>
        <li>9-10人</li>
        <li>10人以上</li>
        <li>其他</li>
      </ul>
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
  .class-nav{
    display: flex;
    flex-direction: row;
    padding-top: .26rem;
    font-size: .16rem;
    margin-bottom: .17rem;
  }
  .class-nav ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 12.80rem;
  }
  .class-nav .title{
    width: .77rem;
    height: 100%;
    line-height: .30rem;
  }
  .class-nav ul li{
    margin-right: .4rem;
    height: .28rem;
    line-height: .28rem;
    border-radius: .04rem;
    text-align: center;
    font-weight: 500;
    color: #747474;
    cursor: pointer;
  }
  .class-nav ul li:nth-child(1){
    margin-right: .38rem;
    width: .48rem;
    height: .28rem;
    line-height: .28rem;
    background-color: #27b9a4;
    border-radius: .04rem;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
</style>
