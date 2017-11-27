<template>
    <div class="hot-cinema">
      <div>
        <div class="header-left">
          <p><span>热门</span><span>电影院</span></p>
          <div class="list">
            <ul>
              <li>裕华区</li>
              <li>桥西区</li>
              <li>长安区</li>
              <li>桥东区</li>
              <li>晋州市</li>
              <li>无极县</li>
              <li>新乐市</li>
            </ul>
            <select name="select" id="">
              <option value="全部影院">全部影院</option>
              <option value="全部影院">全部影院</option>
              <option value="全部影院">全部影院</option>
              <option value="全部影院">全部影院</option>
              <option value="全部影院">全部影院</option>
              <option value="全部影院">全部影院</option>
            </select>
          </div>
        </div>
      </div>
      <div></div>
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
  .hot-cinema{
    width: 15.40rem;
    margin: .15rem auto 0;
  }
  .header-left{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: .23rem;
    box-sizing: border-box;
    width: 10.84rem;
    height: .78rem;
    border: 1px solid #ededed;
  }
  .header-left .list{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header-left ul{
    display: flex;
    flex-direction: row;
  }
</style>
