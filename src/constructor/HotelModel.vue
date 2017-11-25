<template>
  <!--这是酒店下面的今日特价与酒店分类组件-->
  <div>
    <div class="hotel-box">
      <div class="box">
        <div>
          <div v-show="this.price" class="price-box-header">
            <div class="header-title">
              <h1>今日特价</h1>
              <h1>限时抢购</h1>
            </div>
            <div class="header-nav">
              <ul>
                <li>北京</li>
                <li>上海</li>
                <li>广州</li>
                <li>成都</li>
                <li>深圳</li>
                <li>杭州</li>
                <li>更多酒店 >></li>
              </ul>
            </div>
          </div>
          <div v-show="this.hotel" class="hotel-box-header">
            <div class="header-title">
              <h1>高端酒店</h1>
              <h1>经济型酒店</h1>
              <h1>连锁酒店</h1>
            </div>
            <div class="header-nav">
              <ul>
                <li>北京</li>
                <li>上海</li>
                <li>广州</li>
                <li>成都</li>
                <li>深圳</li>
                <li>杭州</li>
                <li>更多酒店 >></li>
              </ul>
            </div>
          </div>
          <div v-show="this.price" class="price-list">
            <div class="price-box">
              <div class="price-img">
                <ul class="img-list">
                  <li>
                    <img src="../../static/img/kezhan-2.png" alt="">
                    <p><span>¥</span><span>129</span></p>
                  </li>
                  <li>
                    <img src="../../static/img/kezhan-2.png" alt="">
                    <p><span>¥</span><span>129</span></p>
                  </li>
                  <li>
                    <img src="../../static/img/kezhan-2.png" alt="">
                    <p><span>¥</span><span>129</span></p>
                  </li>
                  <li>
                    <img src="../../static/img/kezhan-2.png" alt="">
                    <p><span>¥</span><span>129</span></p>
                  </li>
                </ul>
              </div>
              <div class="price-text">
                <ul class="text-list">
                  <li>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                  </li>
                  <li>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                  </li>
                  <li>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                  </li>
                  <li>
                    <div><p>密云区 | 北京司马台长城云...</p><p><span>¥</span><span>129</span></p></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <img src="../../static/img/kezhan-11.png" alt="">
            </div>
          </div>
          <div v-show="this.hotel" class="hotel-list">
            <div>
              <ul class="hotel-img">
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
              </ul>
              <ul class="hotel-img">
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
                <li>
                  <img src="../../static/img/jiudian-2.png">
                  <p class="num-price">北京天伦王朝酒店(王府井)</p>
                  <div class="num">
                    <p><span>¥</span><span>690</span></p>
                    <img src="../../static/img/xingxing-3.png" alt=""></div>
                </li>
              </ul>
            </div>
            <div class="hotel-right">
              <div>
                <img src="../../static/img/jiudian-4.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      props : ['price','hotel'],
    data(){
      return {
//        price : false,
        //控制特价的模板显示
//        hotel : true, //控制酒店的模板显示
      }
    },
    components: {},
    mounted(){
      console.log(this.price);
    },
    methods: {}
  }
</script>
<style scoped>
  /*这是当price为true的时候生效的样式*/
  .hotel-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15.63rem;
  }
  .box{
    padding-left: .48rem;
    width: 100%;
    background-color: #fff;
  }
  .header-nav{
    display: flex;
    flex-direction: row;
    margin: .1rem 0 .19rem 0;
    width: 100%;
  }
  .header-nav ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .price-box-header .header-title{
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 2px solid #ff7d1d;
  }
  .price-box-header h1{
    margin-bottom: 1px;
    padding: .3rem .14rem .12rem;
    border-bottom: 2px solid #ff7d1d;
    cursor: pointer;
    font-size: .3rem;
    color: #ff7d1d;
  }
  .price-box-header .header-nav ul li{
    padding: 0 .15rem;
    font-size: .17rem;
    height: .17rem;
    line-height: .17rem;
    color: #ff7d1d;
    text-align: center;
    border-left: 1px solid #ff7d1d;
    cursor: pointer;
  }
  .header-nav ul li:nth-child(1){
    margin-right: .03rem;
    padding: 0;
    width: .57rem;
    height: .26rem;
    line-height: .26rem;
    border-radius: .03rem;
    color: #fff;
    background-color: #ff7d1d;
  }
  .header-nav ul li:last-child{
    margin-left: 1.2rem;
    border-left: none;
  }
  .box-header select{
    width: 1.57rem;
    color: #717171;
    border-color: #cbcbcb;
    cursor: pointer;
  }
  .price-list{
    display: flex;
    flex-direction: row;
  }
  .price-img .img-list{
    display: flex;
    flex-direction: row;
  }
  .price-img .img-list li{
    display: flex;
    flex-direction: column;
    margin-right: .12rem;
    width: 2.98rem;
    border: 1px solid #ebeaef;
  }
  .price-img .img-list li img{
    width: 100%;
    height: 2.34rem;
  }
  .price-img .img-list li p{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding-left: .1rem;
    height: .5rem;
    font-size: .17rem;
    font-weight: 900;
    color: #f03232;
  }
  .price-img .img-list li p span:nth-child(2){
    font-weight: 900;
    font-size: .26rem;
  }
  .price-text .text-list{
    display: flex;
    flex-direction: row;
    font-size: .14rem;
  }
  .price-text .text-list li div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: .2rem;
    margin-right: .12rem;
    box-sizing: border-box;
    padding-left: .1rem;
    width: 2.98rem;

  }
  .price-text div p:nth-child(2) span{
    color: #f03232;
  }
  .price-text div p:nth-child(2) span:nth-child(2){
    font-size: .16rem;
    font-weight: 900;
  }
  .right{
    width: 2.63rem;
  }
  .right img{
    width: 100%;
    height: 3.87rem;
  }
  /*这是当hotel为true时生效的样式*/
  .hotel-box-header{
    display: flex;
    flex-direction: column;

  }
  .hotel-box-header .header-title{
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 2px solid #27941f;
  }
  .hotel-box-header h1{
    margin-bottom: 1px;
    padding: .3rem .14rem .12rem;
    border-bottom: 2px solid #27941f;
    cursor: pointer;
    font-size: .3rem;
    color: #27941f;
  }
  .hotel-box-header .header-nav ul li{
    padding: 0 .15rem;
    font-size: .17rem;
    height: .17rem;
    line-height: .17rem;
    color: #27941f;
    text-align: center;
    border-left: 1px solid #27941f;
    cursor: pointer;
  }
  .hotel-box-header .header-nav ul li:nth-child(1){
    margin-right: .03rem;
    padding: 0;
    width: .57rem;
    height: .26rem;
    line-height: .26rem;
    border-radius: .03rem;
    color: #fff;
    background-color: #27941f;
  }
  .hotel-box-header .header-nav ul li:last-child{
    margin-left: 1.2rem;
    border-left: none;
  }
  .hotel-list{
    display: flex;
    flex-direction: row;
  }
  .hotel-img{
    margin-bottom: .14rem;
    display: flex;
    flex-direction: row;
  }
  .hotel-img li{
    margin-right: .12rem;
    padding-bottom: .1rem;
    width: 2.98rem;
    border: 1px solid #ebeaef;
  }
  .hotel-img li img{
    width: 100%;
    height: 1.85rem;
  }
  .hotel-img li .num-price{
    padding-left: .14rem;
    font-size: .17rem;
    color: #5d596a;
  }
  .hotel-img li .num{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: .14rem;
    padding: 0 .14rem;
    font-size: .17rem;
  }
  .hotel-img li .num p span:nth-child(1){
    margin-right: .08rem;
    color: #d93c67;
  }
  .hotel-img li .num p span:nth-child(2){
    font-size: .26rem;
    font-weight: 900;
    color: #d93c67;
  }
  .hotel-img li .num img{
    width: 1.09rem;
    height: .19rem;
  }
  .hotel-right div{
    width: 2.63rem;
  }
  .hotel-right div img{
    width: 100%;
    height: 5.5rem;
  }
</style>
