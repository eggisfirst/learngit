<template>
  <div class="nav">
    <div class="search">
      <input type="text" class="search-box" placeholder="请输入关键字">
      <div class="search-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchval : '',
    }
  },
  methods :{
    
  }
}
</script>


<style scoped>
  .nav{
  width: 7.5rem;
  height: 1rem;
  background: url(./img/top.jpg);
  background-size: 100% 100%;
  position: relative;
  }
    .nav .search{
      width: 3rem;
      height: 0.6rem;
      background: #313131;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.3rem;
      border-radius:0.5rem;
    }
      .nav .search .search-box{
        width: 2rem;
        position: absolute;
        height: 0.6rem;
        background: #313131;
        border: 0;
        outline:none;
        left: 0.3rem;
        line-height: 0.6rem;
        color: #cccccc;
        font-size: 0.22rem;
      }
      .nav .search .search-icon{
        background:url(./img/search.png);
        background-size: 100% 100%;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: 0.3rem;
        top: 50%;
        transform: translateY(-50%);
      }
</style>
