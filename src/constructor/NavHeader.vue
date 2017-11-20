<template>
    <div>
      <!--这是页面的最上面的头部导航-->
      <nav>
        <!--这是地理位置-->
        <div class="nav-header-map">
          <img src="">
          <span>北京</span>
        </div>
        <!--这是注册-->
        <div class="nav-header-signin">
          你好，请登录
          <span>免费注册</span>
        </div>
        <!--这是导航列表-->
        <ul class="nav-header-list">
          <li>我的订单</li>
          <li>我的牛团</li>
          <li>企业采购</li>
          <li>客户服务</li>
          <li>网站导航</li>
          <li>手机牛团</li>
        </ul>
      </nav>
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
  nav{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: .40rem;
    border-bottom: 1px solid #f1f1f3;
    background-color: #e3e3e5;
    font-size: .12rem;
  }
  .nav-header-map{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 4.60rem;
    text-align: right;
    height: .40rem;
  }
  .nav-header-map img{
    margin-right: .05rem;
    width: .14rem;
    height: .18rem;
    background-color: red;
  }
  .nav-header-signin{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: .15rem;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 5.63rem;
    color: #959597;
  }
  .nav-header-signin span{
    margin-left: .05rem;
    color: #fa2239;
    cursor: pointer;
  }
  .nav-header-list{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-header-list li{
    width: .9rem;
    border-left: 1px solid #cfd0d2;
    text-align: center;
    color: #959597;
    cursor: pointer;
  }
</style>
