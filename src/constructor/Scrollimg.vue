<template>
  <!--这是首页的横向条幅图片-->
  <div class="scroll-box">
    <div class="main">
      <img src="//m.360buyimg.com/babel/jfs/t12244/167/497756777/15155/28ae68e5/5a0cf69eN35720550.jpg!q90" alt="">
      <img src="//img14.360buyimg.com/da/jfs/t3868/196/463986658/14059/e9aa554f/58522bb1N60a5a8fc.jpg!q90" alt="">
      <img src="//img12.360buyimg.com/da/jfs/t3208/225/4741656758/19804/547b2ca4/58522b1bN916da74b.jpg!q90" alt="">
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

  .scroll-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 1.25rem;
    background-color: #e0e0e0;
    margin-bottom: .3rem;
  }
  .main {
    display: flex;
    flex-direction: row;
    width: 15rem;
    margin: 0 auto;
  }
  .scroll-box .main img{
    width: 33.33%;
    height: 1.25rem;
  }
</style>
