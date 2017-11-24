<template>
  <!--这是美团的下载手机端的组件-->
  <div class="box">
    <div class="down-box">
      <div class="down-list">
        <img src="../../static/img/meituandown-3.png" alt="">
        <img src="../../static/img/meituandown-3.png" alt="">
        <img src="../../static/img/meituandown-3.png" alt="">
        <img src="../../static/img/meituandown-3.png" alt="">
      </div>
      <div class="down-list">
        <h4 class="title">猜你喜欢</h4>
        <div>
          <img src="../../static/img/meitianD-4.png" alt="">
          <p class="content">【22店通用】德克士2人餐</p>
          <div class="num">
            <p><span>¥</span><span>29.9</span></p>
            <p><span>已售</span><span>54351</span></p>
          </div>
        </div>
        <div>
          <img src="../../static/img/meitianD-4.png" alt="">
          <p class="content">【22店通用】德克士2人餐</p>
          <div class="num">
            <p><span>¥</span><span>29.9</span></p>
            <p><span>已售</span><span>54351</span></p>
          </div>
        </div>
        <div>
          <img src="../../static/img/meitianD-4.png" alt="">
          <p class="content">【22店通用】德克士2人餐</p>
          <div class="num">
            <p><span>¥</span><span>29.9</span></p>
            <p><span>已售</span><span>54351</span></p>
          </div>
        </div>
        <div>
          <img src="../../static/img/meitianD-4.png" alt="">
          <p class="content">【22店通用】德克士2人餐</p>
          <div class="num">
            <p><span>¥</span><span>29.9</span></p>
            <p><span>已售</span><span>54351</span></p>
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
  .down-box{
    width: 3.67rem;
    margin-left: .08rem;
    border-top: 2px solid #f2f2f2;
    border-left: 2px solid #f2f2f2;

  }
  .down-list {
    margin: .1rem auto 0;
    width: 3.05rem;
    background-color: #fff;
    font-size: .17rem;
  }
  .down-list img {
    width: 100%;
    height: 1.84rem;
    border: none;
  }
  .down-list .title{
    height: .77rem;
    line-height: .77rem;
    font-size: .26rem;
  }
  .down-list .content{
    margin-top: .25rem;
    width: 100%;
    font-size: .17rem;
    font-weight: 800;
    color: #3d2c36;
  }
  .down-list .num{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: .16rem;
    padding-bottom: .29rem;
    border-bottom: 1px solid #ebebeb;
  }
  .down-list .num p:nth-child(1) span:nth-child(1){
    color: #f76518;
  }
  .down-list .num p:nth-child(1) span:nth-child(2){
    margin-right: .29rem;
    font-size: .25rem;
    font-weight: 900;
    color: #f76518;
  }
  .down-list .num p:nth-child(2) span:nth-child(1){
    margin-right: .09rem;
    color: #b3b3b3;
  }
  .down-list .num p:nth-child(2) span:nth-child(2){
    color: #f76518;
  }
</style>
