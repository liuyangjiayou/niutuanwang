<template>
  <!--这是分类导航的组件-->
  <div>
    <div class="classify-box">
      <div class="classify-nav-box">
        <div class="classify-nav">
          <p>全部</p>
          <span class="arrow"> > </span>
          <select name="select" @change="a($event)" id="">
            <option value="美食">美食</option>
            <option value="酒店">酒店</option>
            <option value="电影">电影</option>
            <option value="丽人">丽人</option>
            <option value="旅游">旅游</option>
            <option value="娱乐休闲">娱乐休闲</option>
            <option value="外卖">外卖</option>
            <option value="生活服务">生活服务</option>
          </select>
          <span class="del"> × </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <classifyMapNav></classifyMapNav>
      <classifyList></classifyList>
      <classifyPeolie></classifyPeolie>
    </div>
  </div>
</template>
<script>
  import ClassifyMapNav from '../constructor/ClassifyMapNav.vue'
  import ClassifyList from '../constructor/ClassifyList.vue'
  import ClassifyPeolie from '../constructor/ClassifyPeolie.vue'
    export default {
        data(){
            return {}
        },
        components: {
          ClassifyMapNav,
          ClassifyList,
          ClassifyPeolie,
        },
        methods: {
            a(event){
              console.log(1);
              console.log(event.target.value);
            }
        }
    }
</script>
<style scoped>
  .classify-box{
    width: 100%;
    box-sizing: border-box;
    padding: 0 .25rem;
  }
  .classify-nav-box{
    width: 100%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .classify-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: .69rem;
    font-size: .18rem;
    color: #565656;
  }
  .classify-nav p{
    margin-right: .14rem;
    width: .61rem;
    height: .28rem;
    line-height: .28rem;
    border: 2px solid #52c2b2;
    text-align: center;
  }
  .classify-nav .arrow{
    margin-right: .14rem;
  }
  .classify-nav select{
    width: .73rem;
    height: .33rem;
    border: 2px solid #52c2b2;
    color: #565656;
  }
  .classify-nav .del{
    display: block;
    width: .27rem;
    height: .28rem;
    line-height: .28rem;
    border: 2px solid #52c2b2;
    border-left: none;
    text-align: center;
  }
</style>
