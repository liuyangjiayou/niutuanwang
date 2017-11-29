<template>
  <!--这是热门团购组件-->
    <div class="film-hot-box">
      <div class="film-hot-title"><span>热门</span><span>团购</span></div>
      <div class="film-hot-map">
        <img src="" alt="">
        <p>区域：</p>
        <p>全部</p>
        <ul>
          <li>桥西区</li>
        </ul>
      </div>
      <div>
        <ul class="film-hot-list">
          <li class="film-list">
          <div class="film-hot-img">
            <img src="../../static/img/dainyingdatu.png" alt="">
          </div>
          <div class="film-hot-text">
            <div class="title">【石家庄等】星美汇</div>
            <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
            <div class="num">
              <p><span>¥</span><span>299</span></p>
              <p><span>门店价</span><del>¥414</del></p>
            </div>
            <div class="evaluate">
              <p><span>已售</span><span>1</span></p>
              <span>暂无评价</span>
            </div>
          </div>
        </li>
          <li class="film-list">
            <div class="film-hot-img">
              <img src="../../static/img/dainyingdatu.png" alt="">
            </div>
            <div class="film-hot-text">
              <div class="title">【石家庄等】星美汇</div>
              <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
              <div class="num">
                <p><span>¥</span><span>299</span></p>
                <p><span>门店价</span><del>¥414</del></p>
              </div>
              <div class="evaluate">
                <p><span>已售</span><span>1</span></p>
                <span>暂无评价</span>
              </div>
            </div>
          </li>
          <li class="film-list">
            <div class="film-hot-img">
              <img src="../../static/img/dainyingdatu.png" alt="">
            </div>
            <div class="film-hot-text">
              <div class="title">【石家庄等】星美汇</div>
              <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
              <div class="num">
                <p><span>¥</span><span>299</span></p>
                <p><span>门店价</span><del>¥414</del></p>
              </div>
              <div class="evaluate">
                <p><span>已售</span><span>1</span></p>
                <span>暂无评价</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="film-hot-list">
          <li class="film-list">
            <div class="film-hot-img">
              <img src="../../static/img/dainyingdatu.png" alt="">
            </div>
            <div class="film-hot-text">
              <div class="title">【石家庄等】星美汇</div>
              <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
              <div class="num">
                <p><span>¥</span><span>299</span></p>
                <p><span>门店价</span><del>¥414</del></p>
              </div>
              <div class="evaluate">
                <p><span>已售</span><span>1</span></p>
                <span>暂无评价</span>
              </div>
            </div>
          </li>
          <li class="film-list">
            <div class="film-hot-img">
              <img src="../../static/img/dainyingdatu.png" alt="">
            </div>
            <div class="film-hot-text">
              <div class="title">【石家庄等】星美汇</div>
              <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
              <div class="num">
                <p><span>¥</span><span>299</span></p>
                <p><span>门店价</span><del>¥414</del></p>
              </div>
              <div class="evaluate">
                <p><span>已售</span><span>1</span></p>
                <span>暂无评价</span>
              </div>
            </div>
          </li>
          <li class="film-list">
            <div class="film-hot-img">
              <img src="../../static/img/dainyingdatu.png" alt="">
            </div>
            <div class="film-hot-text">
              <div class="title">【石家庄等】星美汇</div>
              <div class="content">浪漫红酒双人套餐，提供免费WiFi</div>
              <div class="num">
                <p><span>¥</span><span>299</span></p>
                <p><span>门店价</span><del>¥414</del></p>
              </div>
              <div class="evaluate">
                <p><span>已售</span><span>1</span></p>
                <span>暂无评价</span>
              </div>
            </div>
          </li>
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
  /*热门团购标题样式*/
  .film-hot-box{
    width: 15.40rem;
    margin: .15rem auto 0;
  }
  .film-hot-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: .23rem;
    box-sizing: border-box;
    height: .78rem;
    font-size: .23rem;
    font-weight: 900;
    border: 1px solid #ededed;
  }
  .film-hot-title span:nth-child(1) {
    color: #fc5700;
  }
  /*热门团购地理位置导航样式*/
  .film-hot-map{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: .67rem;
    border: 1px solid #ededed;
    border-top: none;
  }
  .film-hot-map img{
    margin-right: .15rem;
    width: .25rem;
    height: .25rem;
  }
  .film-hot-map p:nth-child(3){
    margin-right: .32rem;
    width: .51rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    border-radius: .05rem;
    border: 1px solid #14b09a;
    background-color: #2cbaae;
    color: #fff;
  }
  /*热门团购商品列表*/
  .film-hot-list{
    display: flex;
    flex-direction: row;
  }
  .film-list{
    display: inline-block;
    padding-top: .17rem;
    margin-right: .26rem;
    width: 4.93rem;
    border: 1px solid #ededed;
  }
  .film-hot-list .film-list:last-child{
    margin-right: 0;
  }
  .film-hot-img{
    width: 100%;
  }
  .film-hot-img img{
    width: 100%;
    height: 3.04rem;
  }
  .film-hot-text{
    box-sizing: border-box;
    padding-left: .23rem;
  }
  .film-hot-text .title{
    margin-top: .2rem;
    font-size: .21rem;
    font-weight: 900;
  }
  .film-hot-text .content{
    margin-top: .17rem;
    font-size: .21rem;
    color: #a59da8;
  }
  .film-hot-text .num{
    margin-top: .45rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: #b2b2b2;
  }
  .film-hot-text .num p:nth-child(1){

    margin-right: .30rem;
    font-size: .18rem;
    font-weight: 900;
    color: #f1621e;
  }
  .film-hot-text .num p:nth-child(1) span:nth-child(2){
    font-size: .30rem;
  }
  .film-hot-text .evaluate{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: .25rem;
    height: .55rem;
    background-color: #f9f9f9;
  }
  .film-hot-text .evaluate p span:nth-child(2){
    color: #fe682b;
  }
</style>
