<template>
  <!--这是搜索input部分-->
    <div class="search-module">
      <div class="logo">
        <img src="../../static/img/long.png" alt="">
      </div>
      <div class="content">
        <form>
          <input type="text" placeholder="礼品">
          <span data-type="text"></span>
        </form>
        <ul class="form-nav-list">
          <li>肯德基</li>
          <li>烤鱼</li>
          <li>勒泰</li>
          <li>牛排</li>
          <li>春园</li>
          <li>蛋糕</li>
          <li>黄记煌</li>
          <li>汉堡王</li>
          <li>过桥缘</li>
        </ul>
      </div>
      <div class="shop-cart">
        <img src="" alt="">
        <span>我的购物车</span>
        <span class="num">0</span>
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
  .search-module{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 1.54rem;
  }
  .logo{
    width: 3.18rem;
    height: 100%;
  }
  .logo img{
    margin-top: .35rem;
    width: 2.5rem;
    height: 1rem;
  }
  .content{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: .87rem;
    width: 8.14rem;
    height: 100%;
  }
  .content form{
    display: flex;
    flex-direction: row;
    margin-top: .3rem;
  }
  .content form input{
    padding-left: .1rem;
    width: 6.24rem;
    height: .44rem;
    box-sizing: border-box;
    border-left: .02rem solid #f35a6c;
    border-top: .02rem solid #f35a6c;
    border-bottom: .02rem solid #f35a6c;
    border-right: .01rem solid #f35a6c;
    color: #c6cbc7;
  }
  .content form span{
    margin-left: .02rem;
    width: .63rem;
    height: .45rem;
    background-color: #f10215;
  }
  .content .form-nav-list{
    display: flex;
    flex-direction: row;
    margin-top: .1rem;
    height: .24rem;
    font-size: .12rem;
    font-weight: 900;
    color: #6b6b6b;
  }
  .content .form-nav-list li{
    margin-left: .2rem;
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    cursor: pointer;
  }
  .shop-cart{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: .3rem;
    width: 2.37rem;
    height: .44rem;
    border: 1px solid #e7e7e7;
    font-size: .12rem;
    background-color: #fff;
  }
  .shop-cart img{
    margin-right: .08rem;
    width: .2rem;
    height: .2rem;
  }
  .shop-cart span{
    color: red;
  }
  .shop-cart .num{
    display: inline-block;
    margin-top: -.16rem;
    width: .17rem;
    height: .17rem;
    line-height: .17rem;
    border-radius: 50%;
    text-align: center;
    background-color: red;
    color: #fff;
  }
</style>
