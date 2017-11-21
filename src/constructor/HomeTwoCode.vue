<template>
    <div class="code-box">
      <div class="code-img">
        <img src="../../static/img/Code-2.png" alt="">
      </div>
      <div class="new-day">
        <h5>每日上新</h5>
        <p>吃喝玩乐最低价</p>
        <img src="../../static/img/meishi-3.png" alt="">
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
  .code-box{
    display: flex;
    flex-direction: column;
    width: 2.46rem;
    font-size: .16rem;
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
  .code-box .code-img{
    width: 100%;
    height: 1.5rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .code-box .code-img img{
    width: 100%;
    height: 100%;
  }
  .new-day{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new-day h5{
    margin-top: .72rem;
    font-weight: 400;
    font-size: .3rem;
  }
  .new-day p{
    margin-top: .14rem;
    color: #939393;
  }
  .new-day img{
    margin-top: .34rem;
    width: 100%;
  }
</style>
