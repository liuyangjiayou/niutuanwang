<template>
  <!--这是吃货秒杀组件-->
  <div class="foodie-seckill">
    <div class="header-img">
      <!--这是时间那一部分需要定位-->
      <div></div>
    </div>
    <ul class="seckill-list">
      <li>
        <div>
          <img src="../../static/img/meishi4-2.png" alt="">
        </div>
        <p>林溪晚亭古法烤鱼</p>
        <div class="text">
          <div class="left">
            <span>¥<span class="num">390</span></span>
          </div>
          <div class="right">
            <span>¥ <del class="num">500</del></span>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="../../static/img/meishi4-2.png" alt="">
        </div>
        <p>林溪晚亭古法烤鱼</p>
        <div class="text">
          <div class="left">
            <span>¥<span class="num">390</span></span>
          </div>
          <div class="right">
            <span>¥ <del class="num">500</del></span>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="../../static/img/meishi4-2.png" alt="">
        </div>
        <p>林溪晚亭古法烤鱼</p>
        <div class="text">
          <div class="left">
            <span>¥<span class="num">390</span></span>
          </div>
          <div class="right">
            <span>¥ <del class="num">500</del></span>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="../../static/img/meishi4-2.png" alt="">
        </div>
        <p>林溪晚亭古法烤鱼</p>
        <div class="text">
          <div class="left">
            <span>¥<span class="num">390</span></span>
          </div>
          <div class="right">
            <span>¥ <del class="num">500</del></span>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="../../static/img/meishi4-2.png" alt="">
        </div>
        <p>林溪晚亭古法烤鱼</p>
        <div class="text">
          <div class="left">
            <span>¥<span class="num">390</span></span>
          </div>
          <div class="right">
            <span>¥ <del class="num">500</del></span>
          </div>
        </div>
      </li>
    </ul>
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
  .foodie-seckill {
    margin-top: .2rem;
    width: 100%;
    border-bottom: .05rem solid #fd245b;
  }

  .foodie-seckill .header-img {
    width: 100%;
    height: .69rem;
    background: url('../../static/img/miaosha-1.png') no-repeat;
    background-size: cover;
  }

  .seckill-list {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-top: .13rem;
    padding-left: .04rem;
    width: 100%;
  }

  .seckill-list li {
    display: flex;
    flex-direction: column;
    margin-right: .27rem;
    width: 2.76rem;
  }

  .seckill-list li div {
    width: 100%;
    height: 1.69rem;
  }

  .seckill-list li img {
    width: 100%;
    height: 100%;
  }

  .seckill-list li p {
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-bottom: 1px solid #e0e0e0;
    font-size: .2rem;
    font-weight: 900;
  }

  .seckill-list li .text {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-top: .14rem;
    height: .7rem;
  }

  .seckill-list li .text .left, .seckill-list li .text .right {
    display: flex;
    flex-direction: row;
    height: .57rem;
  }

  .seckill-list li span {
    font-size: .12rem;
    font-weight: 900;
    color: #f95b8e;
  }

  .seckill-list li .num {
    font-size: .22rem;
    font-weight: 900;
    color: #f95b8e;
  }

  .seckill-list li .text .right {
    justify-content: flex-end;
    font-size: .12rem;
    font-weight: 900;
    color: #bec3c6;
  }

  .seckill-list .right .num {
    font-size: .14rem;
    font-weight: 900;
    color: #bec3c6;
  }

  .seckill-list .right span {
    font-size: .14rem;
    font-weight: 900;
    color: #bec3c6;
  }
</style>
