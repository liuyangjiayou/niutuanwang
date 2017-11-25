<template>
    <div>
      <div class="hotel-box">
        <div class="box">
          <div>
            <div class="hotel-list">
              <div>
                <ul class="hotel-img">
                  <li>
                    <img src="../../static/img/icon-1.png">
                    <div>
                      <p class="num-price">更多的优惠价格</p>
                      <p class="num-price">没有任何的隐形服务费</p>
                    </div>
                  </li>
                  <li>
                    <img src="../../static/img/icon-1.png">
                    <div>
                      <p class="num-price">更多的优惠价格</p>
                      <p class="num-price">没有任何的隐形服务费</p>
                    </div>
                  </li>
                  <li>
                    <img src="../../static/img/icon-1.png">
                    <div>
                      <p class="num-price">更多的优惠价格</p>
                      <p class="num-price">没有任何的隐形服务费</p>
                    </div>
                  </li>
                  <li>
                    <img src="../../static/img/icon-1.png">
                    <div>
                      <p class="num-price">更多的优惠价格</p>
                      <p class="num-price">没有任何的隐形服务费</p>
                    </div>
                  </li>
                </ul>
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
  .hotel-list{
    display: flex;
    flex-direction: row;
    padding-top: .13rem;
  }
  .hotel-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: .95rem;
    height: 1.08rem;
  }
  .hotel-img li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: .94rem;
  }
  .hotel-img li div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: .5rem;
    min-height : .5rem;
  }
  .hotel-img li img{
    width: .73rem;
    height: .72rem;
  }
  .hotel-img li .num-price{
    padding-left: .23rem;
    font-size: .13rem;
    color: #a28d7c;
  }
</style>
