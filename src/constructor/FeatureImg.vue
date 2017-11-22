<template>
  <div>
    <ul class="feature-box">
      <li><img src="../../static/img/huoguo-1.png" alt=""></li>
      <li><img src="../../static/img/huoguo-1.png" alt=""></li>
      <li><img src="../../static/img/huoguo-1.png" alt=""></li>
      <li><img src="../../static/img/huoguo-1.png" alt=""></li>
      <li><img src="../../static/img/huoguo-1.png" alt=""></li>
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
  .feature-box {
    display: flex;
    flex-direction: row;
    width: 15.12rem;
    margin: 0 auto;
  }
  .feature-box li{
    margin-right: .26rem;
    width: 2.8rem;
    height: 1.81rem;
    border: 1px solid #e0e0e0;
  }
  .feature-box li:nth-child(5){
    margin-right: 0;
  }
  .feature-box li img{
    width: 100%;
    height: 100%;
  }
</style>
