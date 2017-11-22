<template>
  <!--这是首页的title大标题-->
    <div class="scroll-box">
      <h3>{{this.title}}</h3>
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
</style>
