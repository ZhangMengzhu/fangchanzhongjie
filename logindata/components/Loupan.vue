<template>
  <div class="hello">
    <h1>楼盘信息</h1>
   name:<input type="text" v-model="lp.name"><br/>
   price:<input type="text" v-model="lp.price"><br/>
   des:<input type="text" v-model="lp.des"><br/>
   img:<input type="text" v-model="lp.img"><br/>
   fenlei:<input type="text" v-model="lp.fenlei"><br/>
   <button @click="sumbit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'Loupan',
  props: {
    msg: String
  },
  data(){
    return {
      lp:{}
    }
  },
  methods:{
    sumbit(){
      this.$http.post('http:localhsot:')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    margin: 5px 0;
  }
</style>
