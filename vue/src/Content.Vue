<template>
  <div>
  <div class="main"  v-for='data in datas' v-bind:key = 'data.id'>
    <h3 class="jobTitle">{{ data.jobTitle }}</h3>
    <span class="salary">{{data.salary }}</span>
  <ul>
    <li class="city"><img src ='./img/a.jpg'>{{ data.city}}</li>
    <li class="department">{{ data.department }}</li>
    <li class="time">{{data.time}}</li>
  </ul>
</div>
  <p id ='more' @click='add()' ref="mymore">获取更多职位</p>
</div>
</template>

<script>
import axios from './axios.min.js'
import pub from './event.js'
export default {
  data(){
  return {
    datas:'',
    page : 1,
    size : 10,
    searchval :'',
    length : '',
  }
  },
  mounted (){
    this.send(this.size,this.searchval)
    
  },
  updated (){
    this.receive
  },
  methods : {
    send(size,searchval){
      let that = this;
      let url = 'http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp?'+'size='+size+'&'+'type=3'+'&jobTitle='+searchval
      axios.get(url).then(function (response) {
        // console.log(response.data.records)
        that.datas = response.data.records
        that.length = that.datas.length
        if(size > that.length){
          that.$refs.mymore.remove()
        }
      })
    },
    add(){
      this.page++;
      this.size = this.page * 10
      // console.log(this.size)
      this.send(this.size,'')
      },
    receive(){
      let _this = this
      pub.$on('searchval',(data)=>{
      _this.searchval = data
      })
      this.send(this.size,this.searchval)
    }
    }
}
</script>

<style scoped>
.main{
  width: 7.5rem;
  height: 1.8rem;
  padding: 0.4rem 0.3rem;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
}
  .main .jobTitle{
    font-size: 0.34rem;
    color: #333333;
    font-weight: normal;
    float: left;
  }
  .main .salary{
    font-size: 0.34rem;
    color: #333333;
    float: right;
  
  }
  ul{
    font-size: 0.28rem;
    color:#666666;
    position: absolute;
    top: 1.12rem;
    left: 0.3rem;
    display: flex;
    width: 6.88rem;
  }
    li img{
      width: 0.32rem;
      height: 0.32rem;
    }
    ul li{
    flex: 1;
    }
    ul li:nth-child(2){
      text-align: center;
    }
    ul li:nth-child(3){
      text-align: right;
    }
    #more{
      width: 100%;
      height:0.9rem;
      font-size: 0.3rem;
      text-align: center;
      color: #666666;
      line-height: 0.9rem;
      cursor: pointer;
    }
</style>
