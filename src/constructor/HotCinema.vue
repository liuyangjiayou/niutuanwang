<template>
  <!--电影首页的热门电影院内容-->
  <div class="hot-cinema">
    <!--这是电影列表的左半部分-->
    <div class="hot-cinema-left">
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
      <div class="left-box">
        <div class="left-box-title">
          <p>星美国际影城(海悦天地店)</p>
          <p><span>地址：</span><span>桥西区裕华西路66号海悦天地五层</span></p>
        </div>
        <div class="btn">
          <div class="tuangou"><p><span>¥</span><span>99</span><span>起</span></p>
            <button>团购购票</button>
          </div>
          <div class="xuanzuo"><p><span>¥</span><span>29</span><span>起</span></p>
            <button>选座购票</button>
          </div>
        </div>
      </div>
      <div class="left-box">
        <div class="left-box-title">
          <p>星美国际影城(海悦天地店)</p>
          <p><span>地址：</span><span>桥西区裕华西路66号海悦天地五层</span></p>
        </div>
        <div class="btn">
          <div class="tuangou"><p><span>¥</span><span>99</span><span>起</span></p>
            <button>团购购票</button>
          </div>
          <div class="xuanzuo"><p><span>¥</span><span>29</span><span>起</span></p>
            <button>选座购票</button>
          </div>
        </div>
      </div>
      <div class="left-box">
        <div class="left-box-title">
          <p>星美国际影城(海悦天地店)</p>
          <p><span>地址：</span><span>桥西区裕华西路66号海悦天地五层</span></p>
        </div>
        <div class="btn">
          <div class="tuangou"><p><span>¥</span><span>99</span><span>起</span></p>
            <button>团购购票</button>
          </div>
          <div class="xuanzuo"><p><span>¥</span><span>29</span><span>起</span></p>
            <button>选座购票</button>
          </div>
        </div>
      </div>
      <div class="left-box">
        <div class="left-box-title">
          <p>星美国际影城(海悦天地店)</p>
          <p><span>地址：</span><span>桥西区裕华西路66号海悦天地五层</span></p>
        </div>
        <div class="btn">
          <div class="tuangou"><p><span>¥</span><span>99</span><span>起</span></p>
            <button>团购购票</button>
          </div>
          <div class="xuanzuo"><p><span>¥</span><span>29</span><span>起</span></p>
            <button>选座购票</button>
          </div>
        </div>
      </div>
    </div>
    <!--这是电影列表的右半部分-->
    <div class="hot-cinema-right">
      <div class="right-title">
        <p>即将上映</p>
        <p>
          <span>全部</span>
          <span> > </span>
        </p>
      </div>
      <!--这是电影页面的右侧小列表-->
      <ul>
        <li class="right-list">
          <div class="img-box">
            <img src="../../static/img/xiaotupai-1.png" alt="">
          </div>
          <div>
            <div class="list-title">生化危机6：终章</div>
            <div class="people-num">135671人想看</div>
            <div class="synopsis">"终篇重新改，女神在归来"</div>
            <div>2017-02待定</div>
          </div>
        </li>
        <li class="right-list">
          <div class="img-box">
            <img src="../../static/img/xiaotupai-1.png" alt="">
          </div>
          <div>
            <div class="list-title">生化危机6：终章</div>
            <div class="people-num">135671人想看</div>
            <div class="synopsis">"终篇重新改，女神在归来"</div>
            <div>2017-02待定</div>
          </div>
        </li>
        <li class="right-list">
          <div class="img-box">
            <img src="../../static/img/xiaotupai-1.png" alt="">
          </div>
          <div>
            <div class="list-title">生化危机6：终章</div>
            <div class="people-num">135671人想看</div>
            <div class="synopsis">"终篇重新改，女神在归来"</div>
            <div>2017-02待定</div>
          </div>
        </li>
        <li class="right-list">
          <div class="img-box">
            <img src="../../static/img/xiaotupai-1.png" alt="">
          </div>
          <div>
            <div class="list-title">生化危机6：终章</div>
            <div class="people-num">135671人想看</div>
            <div class="synopsis">"终篇重新改，女神在归来"</div>
            <div>2017-02待定</div>
          </div>
        </li>
      </ul>
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
  .hot-cinema {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15.40rem;
    margin: .15rem auto 0;
  }
  /*这是电影列表的左半部的样式*/
  .hot-cinema-left{
    border: 1px solid #ededed;
  }
  .header-left {
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
  .header-left p span {
    font-size: .23rem;
    font-weight: 900;
  }
  .header-left p span:nth-child(1) {
    color: #fc5700;
  }
  .header-left .list {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header-left ul {
    display: flex;
    flex-direction: row;
  }
  .header-left ul li {
    padding: 0 .16rem;
    border-right: 2px solid #ededed;
    color: #2cb5a5;
    cursor: pointer;
  }
  .left-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .4rem .36rem .4rem .4rem;
    width: 10.08rem;
    height: .95rem;
  }
  .left-box-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .left-box .btn div {
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .left-box-title p:nth-child(1) {
    font-size: .22rem;
    font-weight: 900;
    color: #634e6d;
  }
  .left-box-title p:nth-child(2) {
    margin-top: .14rem;
    font-size: .19rem;
    color: #222222;
  }
  .left-box-title p:nth-child(2) span:nth-child(1) {
    color: #969696;
  }
  .left-box .btn button {
    border-radius: .05rem;
    width: 1.45rem;
    height: .36rem;
    outline: none;
  }
  .left-box .btn .tuangou button {
    background-color: #2dbfb2;
    color: #fff;
  }
  .left-box .btn .xuanzuo {
    margin-top: .15rem;
  }
  .left-box .btn .xuanzuo button {
    background-color: #fd7e09;
    color: #fff;
  }
  .left-box .btn div span:nth-child(1) {
    margin-right: .03rem;
    font-size: .17rem;
    color: #f0602b;
  }
  .left-box .btn div span:nth-child(2) {
    margin-right: .03rem;
    font-size: .21rem;
    font-weight: 900;
    color: #f0602b;
  }
  .left-box .btn div span:nth-child(3) {
    margin-right: .43rem;
    font-size: .19rem;
    color: #9d9d9d;
  }
  /*这是电影列表的右半部的样式*/
  .hot-cinema-right{
    box-sizing: border-box;
    padding: 0 .4rem 0 .23rem;
    width: 3.74rem;
    border: 2px solid #f0f0f0;
  }
  .right-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.06rem;
  }
  .right-list{
    display: flex;
    flex-direction: row;
    padding-bottom: .3rem;
    border-bottom: 2px solid #f0f0f0;
  }
  .right-list .img-box{
    margin-right: .17rem;
    width: .96rem;
  }
  .right-list .img-box img{
    width: 100%;
    height: 1.29rem;
  }
  .right-list .list-title{
    font-size: .2rem;
    font-weight: 900;
    color: #736074;
  }
  .right-list .people-num{
    margin-top: .13rem;
    font-size: .18rem;
    font-weight: 900;
    color: #ff5100;
  }
  .right-list .synopsis{
    margin-top: .13rem;
    line-height: .26rem;
    font-size: .18rem;
    color: #515151;
  }
  .right-list div:last-child{
    margin-top: .13rem;
    font-size: .18rem;
    font-weight: 600;
    color: #a08d93;
  }
</style>
