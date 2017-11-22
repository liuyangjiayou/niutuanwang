<template>
    <div class="roll-box">
      <div class="roll-box-logo">
        <img src="../../static/img/lingjuan-3.png" alt="">
      </div>
      <ul class="roll-box-list">
        <li>
          <div>
            <img src="../../static/img/juan-1.png" alt="">
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/img/juan-1.png" alt="">
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/img/juan-1.png" alt="">
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/img/juan-1.png" alt="">
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/img/juan-1.png" alt="">
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
  .roll-box{
    display: flex;
    flex-direction: row;
    margin-top: .4rem;
  }
  .roll-box-list{
    display: flex;
    flex-direction: row;
  }
  .roll-box-logo{
    box-sizing: border-box;
    padding-bottom: .3rem;
    width: 2.37rem;
    height: 2.69rem;
  }
  .roll-box-logo img{
    width: 100%;
    height: 100%;
  }
  .roll-box-list li{
    width: 2.52rem;
    height: 2.69rem;
    box-sizing: border-box;
    padding: .1rem 0 .44rem .2rem;
    background-color: #fff;
  }
  .roll-box-list li div{
    box-sizing: border-box;
    padding-right: .19rem;
    height: 100%;
    border-right: 1px solid #e4e4e4;
  }
  .roll-box-list li:nth-child(5) div{
    border-right : none;
  }
  .roll-box-list li img{
    width: 100%;
    height: 100%;
  }
</style>
