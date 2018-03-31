<template>
<div>
  <div class="nav"></div>
  <div class="methods"></div>
  <ul>
    <h1 class="jobTitle"></h1>
    <li class="city">工作地点：</li>
    <li class="department">需求部门：</li>
    <li class="count">招聘人数：</li>
    <li class="salary">薪资范围</li>
    <li class="startTime">发布时间</li>
    <li class="endTime">截止时间：</li>
  </ul>
  <div class="jobdc">
    <h2>工作职责:</h2>
    <div class="descript"></div>
  </div>
  <div class="jobqf">
    <h2>任职资格:</h2>
    <div class="qualification"></div>
  </div>  
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  body{
    background: #fefefe;
  }
  .nav{
  width: 7.5rem;
  height: 1rem;
  background: url(./img/top.jpg);
  background-size: 100% 100%;
  }
  .methods{
    background-image: url(./img/phone.png);
    background-size: 100% 100%;
    width: 6.9rem;
    height: 0.9rem;
    margin :0.3rem auto;
  }
  ul{
    width: 6.9rem;
    margin: 0 0.3rem;
    font-family: 'MicrosoftYaHei'
  }
  .jobTitle{
    font-weight: bold;
    font-size: 0.36rem;
    color: #333333;
  }
  ul li{
    font-size: 0.24rem;
    color: #666666;
    line-height: 0.48rem;
  }
  h2{
    color: #333333;
    font-size: 0.32rem;
  }
  .descript, .qualification{
    font-size: 0.24rem;
    line-height: 0.48rem;
    color: #909090;
  }
  .jobdc h2{
    display: block;
    margin-top: 0.28rem;
    margin-bottom: 0.18rem;
  }
  .jobqf h2{
    display: block;
    margin-top: 0.38rem;
    margin-bottom: 0.18rem;
  }
  .jobdc, .jobqf{
    margin: 0 0.3rem;
  }

</style>
