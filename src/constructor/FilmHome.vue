<template>
  <!--这是电影首页内容-->
    <div>
      <!--这是电影首页轮播图-->
      <filmSwiper></filmSwiper>
      <!--这是电影首页的热么电影院的内容组件-->
      <hotCinema></hotCinema>
      <!--这是热门团购的内容-->
      <filmHot></filmHot>
    </div>
</template>
<script>
  import FilmSwiper from '../constructor/FilmSwiper.vue'
  import HotCinema from '../constructor/HotCinema.vue'
  import FilmHot from '../constructor/FilmHot.vue'
    export default {
        data(){
            return {}
        },
        components: {
          FilmSwiper,
          HotCinema,
          FilmHot,
        },
        methods: {}
    }
</script>
<style scoped>
  .main {
    width: 15rem;
    margin: 0 auto;
  }
</style>
