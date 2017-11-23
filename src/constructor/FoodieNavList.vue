<template>
  <!--这是美食下的导航条列表组件-->
  <div>
    <div class="tab-box">
      <ul class="tab-list">
        <!--<li :class='active ? "active" : ""'>默认</li>-->
        <li @click="selectStyle ($event,index)" :class=' list.classname ? list.classname : ""' v-for="(list,index) in lists"><span>{{list.text}}</span><img v-if="list.arrow"
          src="" alt=""></li>
      </ul>
      <form class="tab-input">
        <div>
          <input type="checkbox" id="daijianjuan">
          <label for="daijinjuan">代金券</label>
        </div>
        <div>
          <input type="checkbox" id="mianyuyue">
          <label for="mianyuyue">代金券</label>
        </div>
        <div>
          <input type="checkbox" id="jusutui">
          <label for="jusutui">代金券</label>
        </div>
      </form>
    </div>
    <generalList></generalList>
  </div>

</template>
<script>
    import GeneralList from '../constructor/GeneralList.vue'
    export default {
        data(){
            return {
                active: true,
                lists : [
                  {text : '默认', classname : 'active',arrow : false},
                  {text : '销量', classname : '',arrow : true},
                  {text : '价格', classname : '',arrow : true},
                  {text : '好评', classname : '',arrow : true},
                  {text : '发布时间', classname : '',arrow : true},
                  {text : '价格区间', classname : '',arrow : true},
                ]
            }
        },
        components: {
          GeneralList,
        },
        methods: {
          selectStyle (event,index) {
              this.lists.forEach(function (item,index) {
                  if(event.target.innerHTML == item.text){
                      item.classname = 'active'
                  }else{
                    item.classname = ''
                  }
              });

          }
        }
    }
</script>
<style scoped>
  .tab-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .1rem 0 .15rem 0;
    height: .44rem;
    font-size: .16rem;
    color: #4f4f4f;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  .tab-list{
    display: flex;
    flex-direction: row;

  }
  .tab-list li{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 .2rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    border-right:1px solid #ebebeb;
    border-top:1px solid #ebebeb;
    border-bottom:1px solid #ebebeb;
    cursor: pointer;
  }
  .tab-list li img{
    display: flex;
    margin-left: .1rem;
    width: .12rem;
    height: .12rem;
    border: none;
  }
  .tab-list li.active{
    box-sizing: border-box;
    border-top: 3px solid #06af98;
    border-bottom: none;
  }
  .tab-input{
    display: flex;
    flex-direction: row;
  }
  .tab-input div{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: .32rem;
  }
  .tab-input div input{
    cursor: pointer;
  }
</style>
