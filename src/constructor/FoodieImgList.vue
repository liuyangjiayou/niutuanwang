<template>
  <!--这是首页美食的模块的列表-->
  <div>
    <!--这是首页的title大标题-->
    <div class="scroll-box">
      <h3>{{this.title}}</h3>
    </div>
    <div class="foodie-list-box">
      <div class="list-box">
        <ul>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img class="list-img" src="../../static/img/meishi-5.png" alt="">
            </div>
            <div class="content-box">
              <p class="title">【万达广场】比亚森啤酒健康自助烤肉</p>
              <p class="content">午餐健康资助烤肉，提供免费WiFi</p>
              <div class="num">
                <p><span>¥53</span><span>门店价¥59</span></p>
                <p><span>已售53799</span></p>
              </div>
              <div class="evaluate">
                <img src="" alt="">
                <span>3092人评价</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="more">
      <div>更多{{this.title}}团购，请点击查看</div>
      <p> > </p>
    </div>
  </div>
</template>
<script>
    export default {
        props : ['title'],
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
  .scroll-box{
    margin-bottom: .3rem;
    width: 100%;
    height: .35rem;
    background: url("../../static/img/dian.png") repeat-x 0 18px;
  }
  .scroll-box h3{
    width: 2.3rem;
    height: .35rem;
    line-height: .45rem;
    font-size: .26rem;
    font-weight: 400;
    color: #333;
    background-color: #f6f6f6;
    font-family: 'microsoft yahei', arial;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  .foodie-list-box{
    box-sizing: border-box;
    padding: .06rem 0 .03rem .06rem;
    width: 14.90rem;
    margin: 0 auto;
    background-color: #fff;
  }
  .list-box{
    width: 14.71rem;
    border-top: 1px solid #eeeeee;
    border-left: 1px solid #eeeeee;
  }
  .list-box ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .list-box li{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 3.67rem;
    padding: .15rem .2rem .14rem .2rem;
    border-right: 1px solid #eee;
    font-size: .16rem;
  }
  .list-box li .list-img{
    width: 3.27rem;
    height: 1.96rem;
  }
  .content-box .title{
    margin-top: .22rem;
    text-align: left;
    font-weight: 800;
    color: #6c6c62;
  }
  .content-box .content{
    padding-left: .02rem;
    margin-top: .13rem;
    color: #9e9fa3;
  }
  .content-box .num{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: .22rem;
  }
  .content-box .num span{
    color: #838e92;
  }
  .content-box .num p:nth-child(1) span:nth-child(1){
    margin-right: .1rem;
    font-size: .20rem;
    color: #f05e11;
  }
  .content-box .evaluate img{
    width: .77rem;
  }
  .content-box .evaluate{
    text-align: right;
    margin-top: .15rem;
    color: #838e92;
  }
  .more{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .14rem;
    color: #605c73;
  }
  .more div{
    margin-right: .03rem;
    cursor: pointer;
  }
  .more p{
    color: #7ab0b0;
  }
</style>
