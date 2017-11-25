<template>
  <!--这是酒店页面高级酒店组件-->
    <div>
      <div class="hotel-box">
        <div class="box">
          <div>
            <div class="hotel-box-header">
              <div class="header-title">
                <h1>品牌旗舰店</h1>
              </div>
            </div>
            <div class="hotel-list">
              <div>
                <ul class="hotel-img">
                  <li>
                    <img src="../../static/img/jiudian-2.png">
                    <p class="num-price">香格里拉酒店集团旗舰店</p>
                  </li>
                  <li>
                    <img src="../../static/img/jiudian-2.png">
                    <p class="num-price">香格里拉酒店集团旗舰店</p>
                  </li>
                  <li>
                    <img src="../../static/img/jiudian-2.png">
                    <p class="num-price">香格里拉酒店集团旗舰店</p>
                  </li>
                  <li>
                    <img src="../../static/img/jiudian-2.png">
                    <p class="num-price">香格里拉酒店集团旗舰店</p>
                  </li>
                </ul>
              </div>
              <div class="hotel-right">
                <div>
                  <img src="../../static/img/jiudian-5.png">
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
    width: 100%;
    background-color: #fff;
  }
  .hotel-box-header{
    display: flex;
    flex-direction: column;

  }
  .hotel-box-header .header-title{
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 2px solid #403480;
  }
  .hotel-box-header h1{
    padding: .3rem .14rem .12rem;
    cursor: pointer;
    font-size: .3rem;
    color: #403480;
  }
  .hotel-list{
    display: flex;
    flex-direction: row;
    padding-top: .13rem;
  }
  .hotel-img{
    margin-bottom: .14rem;
    display: flex;
    flex-direction: row;
  }
  .hotel-img li{
    margin-right: .12rem;
    padding-bottom: .1rem;
    min-width: 2.98rem;
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
    height: 2.34rem;
  }
</style>
