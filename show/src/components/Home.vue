<template>
  <div class="Home">
    <div id="luobo">
        <img :src="now" />
        <!-- <img src="../images/000.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: Object
  },
  data(){
    return{
      picArr:[''],
      now:['../images/000.jpg']
    }
  },
  created(){
    this.$http.get('http://localhost:8002').then(function(){})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#luobo{
  width: 1200px;
  height: 500px;
  background-color: skyblue;
  margin: 0 auto;
}
</style>
