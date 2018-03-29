<template>
  <div>
  <div class="main"  v-for='data in datas' :key = 'data.id'>
    <h3 class="jobTitle">{{ data.jobTitle }}</h3>
    <span class="salary">{{data.salary }}</span>
  <ul>
    <li class="city">{{ data.city}}</li>
    <li class="department">{{ data.department }}</li>
    <li class="time">{{data.time}}</li>
  </ul>
</div>
  <div id ='more' @click='add()'>获取更多职位</div>
</div>
</template>

<script>
import axios from './axios.min.js'
export default {
  data(){
  return {
    datas:'',
    page : 1,
    size : '',
    searchval :'',

  }
  },
  mounted : function(){
    this.send()
  },
  methods : {
    send(size,searchval){
      let that = this;
      let url = 'http://oa.derucci.net:8901/derucci/workflow/controller/queryPositionPage.jsp?'+'size =20'+'&'+'type=3'
      axios.get(url).then(function (response) {
        console.log(response.data.records)
        that.datas = response.data.records
      })
    },
    add(){
      this.page++;
     
      console.log(this.size)
      this.send(this.size,'')
    }
  },
  computed : {

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
    left: 0.62rem;
    display: flex;
    width: 6.88rem;
  }
    ul li{
    flex: 1;
    }
    ul li:nth-child(3){
      text-align: center;
    }
    #more{
      width: 100%;
      height:0.9rem;
      font-size: 0.4rem;
      text-align: center;
      color: #666666;
      line-height: 0.9rem;
      cursor: pointer;
    }
</style>
