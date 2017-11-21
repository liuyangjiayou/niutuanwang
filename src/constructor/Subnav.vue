<template>
  <!--这是首页全部分类下面的侧边导航菜单-->
    <div>
      <ul class="list-box">
        <li>
          <div class="left-text">
            <span>酒店/客栈</span>
          </div>
          <div class="right-text">
            <span>经济型酒店</span>
            <span class="arrow"> > </span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>电影/在线选座</span>
          </div>
          <div class="right-text">
            <span class="arrow"> > </span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>KTV</span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>休闲娱乐</span>
          </div>
          <div class="right-text">
            <span>足疗按摩</span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>周边游/旅游</span>
          </div>
          <div class="right-text">
            <span class="arrow"> > </span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>生活服务</span>
          </div>
          <div class="right-text">
            <span>婚纱摄影</span>
            <span>个性写真</span>
            <span class="arrow"> > </span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>丽人</span>
          </div>
          <div class="right-text">
            <span>美发</span>
            <span>美甲美瞳</span>
            <span class="arrow"> > </span>
          </div>
        </li>
        <li>
          <div class="left-text">
            <span>今日新单</span>
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
  .list-box{
    width: 3.09rem;
    box-sizing: border-box;
    padding-left: .14rem;
    padding-right: .1rem;
    padding-top: .2rem;
    border: 1px solid #ededed;
    border-top: none;
    font-size: .16rem;
  }
  .list-box li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: .06rem;
    width: 100%;
    height: .68rem;
    border-top: 1px solid #ededed;
  }
  .list-box .left-text{
    font-size: .18rem;
    font-weight: 900;
    color: #2a2a2a;
  }
  .list-box .right-text{
    color: #989898;
  }
  .list-box .arrow{
    color: #e2e2e2;
  }
</style>
