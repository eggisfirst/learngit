<template>
  <div id="app">
    <app-nav></app-nav>
    <app-pic></app-pic>
    <app-content>
      <router-link to="/app-content/jobDetails">1</router-link>
      <router-view></router-view>
    </app-content>
    
  </div>
</template>


<script>
document.addEventListener('DOMContentLoaded',function(){  
document.documentElement.style.fontSize = document.documentElement.clientWidth /750 *100 + 'px'     
}) 
export default {
 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
body{
  background: #fefefe
}
</style>
