<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <p>{{ date }}</p>
    <p class="lead">
      {{ main }}
    </p>
    
  </div>
</template>
<script>
// import moment from "moment";

export default {
  data() {
    return {
      title : 'hello',
      date : new Date(),
      main : 'haha',
    };
  },
  components : {
   
  }
  // filters : {
  //   moment : function(value){
  //     return moment(value).format("MMM Do")
  //   }
  // }
};
</script>

<style scoped>
.content{
  font-size: 0.2rem;
  width: 100%;
  background: #333333;
}




</style>






