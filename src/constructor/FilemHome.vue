<template>
  <!--这是电影首页-->
    <div>
      <!--这是电影首页轮播图-->
      <filmSwiper></filmSwiper>
      <hotCinema></hotCinema>
    </div>
</template>
<script>
  import FilmSwiper from '../constructor/FilmSwiper.vue'
  import HotCinema from '../constructor/HotCinema.vue'
    export default {
        data(){
            return {}
        },
        components: {
          FilmSwiper,
          HotCinema,
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
