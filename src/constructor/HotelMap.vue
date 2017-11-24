<template>
    <div class="hotel-box">
  <div class="box">
    <div>
      <div class="box-header">
        <h1>快速找酒店</h1>
        <div class="header-nav">
          <ul>
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>成都</li>
            <li>深圳</li>
            <li>杭州</li>
          </ul>
          <div>
            <select name="select" id="">
              <option value="北京">北京</option>
              <option value="上海">上海</option>
              <option value="广州">广州</option>
            </select>
          </div>
        </div>
      </div>
      <div class="nav-box">
        <div class="nav-list">
          <ul>
            <li>品牌</li>
            <li>如家</li>
            <li>汉庭</li>
            <li>速8</li>
            <li>锦江之星</li>
            <li>维也纳</li>
            <li>格林豪泰</li>
          </ul>
          <ul>
            <li>房价</li>
            <li>150-300</li>
            <li>301-450</li>
            <li>451-600</li>
            <li>600以上</li>
          </ul>
          <ul>
            <li>星级</li>
            <li>经济/客栈</li>
            <li>三星/舒适</li>
            <li>四星/高档</li>
            <li>五星/豪华</li>
          </ul>
        </div>
        <div class="map-icon">
          <div>
            <img src="../../static/img/hoteicon-1.png" alt="">
            <p>商业区</p>
          </div>
          <div>
            <img src="../../static/img/hoteicon-1.png" alt="">
            <p>行政区</p>
          </div>
          <div>
            <img src="../../static/img/hoteicon-1.png" alt="">
            <p>火车站</p>
          </div>
          <div>
            <img src="../../static/img/hoteicon-1.png" alt="">
            <p>机场</p>
          </div>
          <div>
            <img src="../../static/img/hoteicon-1.png" alt="">
            <p>地铁</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right">
    <h1>最新资讯</h1>
    <ul>
      <li>[特惠]预付酒店预订享受更多价格优惠</li>
      <li>[促销]途家618全新出发</li>
      <li>[促销]成功入驻京东酒店享京豆大放送</li>
      <li>[促销]广州金马国旅门票低至8元起</li>
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
  .hotel-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15.63rem;
  }
  .box{
    padding-left: .48rem;
    width: 12.38rem;
    background-color: #fff;
  }
  .box-header{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-top: .3rem;
    padding-bottom: .12rem;
    font-size: .12rem;
    border-bottom: 2px solid #29a8eb;
  }
  .box-header h1{
    font-size: .3rem;
    color: #29a8eb;
  }
  .right {
    width: 2.68rem;
    background-color: #fff;
  }
  .right h1{
    padding-top: .3rem;
    padding-bottom: .12rem;
    font-size: .3rem;
    color: #69655a;
    border-bottom: 2px solid #69655a;
  }
  .right ul li{
    margin: .18rem 0;
    font-size: .12rem;
  }
  .header-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 4.85rem;
    width: 5.89rem;
  }
  .header-nav ul{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header-nav ul li{
    width: .66rem;
    font-size: .17rem;
    height: .17rem;
    line-height: .17rem;
    color: #29a8eb;
    text-align: center;
    border-left: 1px solid #29a8eb;
    cursor: pointer;
  }
  .header-nav ul li:nth-child(1){
    margin-right: .03rem;
    width: .57rem;
    height: .26rem;
    line-height: .26rem;
    border-radius: .03rem;
    color: #fff;
    background-color: #29a8eb;
  }
  .box-header select{
    width: 1.57rem;
    color: #717171;
    border-color: #cbcbcb;
    cursor: pointer;
  }
  .box .nav-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .nav-list{
    padding: .12rem .08rem .46rem 0;
    font-size: .14rem;
  }
  @media screen and (max-width : 1270px){
    .nav-list{
      min-width: 6rem;
    }
  }
  .nav-list ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: .06rem;
    height: .33rem;
  }
  .nav-list ul li{
    padding: 0 .11rem;
    border-left: 2px solid #a8bdd0;
    color: #6b6981;
    cursor: pointer;
  }
  .nav-list ul li:nth-child(1){
    width: .44rem;
    height: .33rem;
    line-height: .33rem;
    text-align: center;
    color: #b2b6b7;
    background-color: #fcfcfa;
    border-left: none;
  }
  .nav-list ul li:nth-child(2){
    border-left: none;
  }
  .map-icon{
    display: flex;
    flex-direction: row;
    width: 7.3rem;
  }
  .map-icon div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: .16rem;
  }
  .map-icon div img{
    width: .7rem;
    height: .8rem;
    cursor: pointer;
  }

</style>
