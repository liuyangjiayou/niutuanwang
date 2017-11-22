<template>
    <div>
      <div class="classify-nav-box">
        <div>
          <p>全部</p>
          <span> > </span>
          <select name="select" @change="a($event)" id="">
            <option value="0">选择品牌</option>
            <option value="1">选择品牌1</option>
            <option value="2">选择品牌2</option>
            <option value="3">选择品牌3</option>
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {
            a(event){
              console.log(1);
              console.log(event.target.value);
            }
        }
    }
</script>
<style scoped>

</style>
