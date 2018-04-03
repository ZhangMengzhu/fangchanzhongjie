<template>
  <div class="about">
      <div v-for="i in state">
          <router-link :to="'/detail/'+i.id">
          <Item :content="i" />
          </router-link>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        state:[]
      }
    },
   watch:{
     '$route'(){
       this.$http.post('http://localhost:8002',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
     }
   },
    created(){
      this.$http.get('http:localhost:8002',{fenlei:this.$route.params.fenlei}
      ,{emulateJSON:true}).then(e=>this.state=e.body)
    }
  }
</script>
