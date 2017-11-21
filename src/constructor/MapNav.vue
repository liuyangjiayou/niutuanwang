<template>
  <!--这是首页的地理位置导航-->
    <div class="mapNav-box">
      <!--这是全部区域-->
      <div class="map-all-box">
        <div class="map-all">
          <img src="" alt="">
          <span>全部区域</span>
        </div>
        <ul class="map-list">
          <li>桥东区</li>
          <li>长安区</li>
          <li>桥西区</li>
          <li>裕华区</li>
          <li>新华区</li>
          <li>开发区</li>
          <li>辛集市</li>
          <li>藁城区</li>
          <li>井陉县</li>
        </ul>
        <div class="map-all-more">
          <span>更多</span>
          <img src="../../static/img/arrow.png" alt="">
        </div>
      </div>
      <!--这是热门商圈-->
      <div class="map-all-box map-all-two">
        <div class="map-all">
          <img src="" alt="">
          <span>热门商圈</span>
        </div>
        <ul class="map-list">
          <li>万达广场</li>
          <li>红旗大街</li>
          <li>桃园</li>
          <li>怀特商城</li>
          <li>东胜广场</li>
          <li>新百广场</li>
          <li>空中花园</li>
          <li>益友百货</li>
        </ul>
      </div>
      <!--这是两个展示图-->
      <div class="cart-img-box">
        <div class="cart-img-item">
          <img src="../../static/img/shiwu1.png" alt="">
          <div class="content">
            <div class="text">
              <p>名厨</p>
              <span>金鸡贺春，建议10人使用，提供免费阿达撒大声地奥数阿萨德</span>
            </div>
            <div class="num">
              ¥ 1088
            </div>
          </div>
        </div>
        <div class="cart-img-item">
          <img src="../../static/img/shiwu1.png" alt="">
          <div class="content">
            <div class="text">
              <p>名厨</p>
              <span>金鸡贺春，建议10人使用，提供免费阿达撒大声地奥数阿萨德</span>
            </div>
            <div class="num">
              ¥ 1088
            </div>
          </div>
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
        methods: {}
    }
</script>
<style scoped>
  .mapNav-box{
    margin-left: .2rem;
    box-sizing: border-box;
    padding: .2rem .15rem 0 .2rem;
    width: 9.29rem;
    border: 1px solid #f2f2f2;
    font-size: .14rem;
  }
  .map-all-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: .65rem;
    border: 1px solid #eeeeee;
    border-left: none;
    border-right: none;
  }
  .map-all-two{
    border-top: none;
  }
  .map-all{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  .map-all img{
    width: .16rem;
    height: .2rem;
    margin-right: .08rem;
    margin-left: .03rem;
    background-color: red;
  }
  .map-all span{
    margin-right: .28rem;
    color: #959595;
    cursor: pointer;
  }
  .map-list{
    display: flex;
    flex-direction: row;
  }
  .map-list li{
    margin-right: .3rem;
    color: #666;
    cursor: pointer;
  }
  .map-all-more{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: .05rem;
    width: .54rem;
    height: .25rem;
    border: 1px solid #eeeeee;
    font-size: .12rem;
    color: #676767;
  }
  .map-all-more img{
    margin-left: .08rem;
    width: .07rem;
    height: .03rem;
  }
  .cart-img-box{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-top: .12rem;
    width: 100%;
  }
  .cart-img-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cart-img-item{
    width: 4.32rem;
  }
  .cart-img-box img{
    width: 4.32rem;
    height: 2.9rem;
  }
  .cart-img-box .content{
    display: flex;
    flex-direction: row;
    margin-top: .29rem;
  }
  .cart-img-box .content .text{
    width: 2.64rem;
  }
  .cart-img-box .content .text p{
    font-size: .18rem;
    font-weight: 900;
    color: #605e5f;
  }
  .cart-img-box .content .text span{
    display: block;
    margin-top: .13rem;
    font-size: .14rem;
    color: #979797;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    vertical-align: bottom;
  }
  .cart-img-box .content .num{
    padding-left: .5rem;
    font-size: .3rem;
    font-weight: 900;
    color: #ee6328;
  }
</style>
