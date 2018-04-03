<template>
    <div>
        <div class="c-tit">
            <p> 全新商铺</p> 
            <span class="c-span"> - New Apartment -  </span>
        </div>
        <div class="item" v-for="i in arr">
            <img :src="i.img" alt="">
            <ul>
                <li><p class="first">{{i.name}}</p></li>
                <li>{{i.des}}</li>
                <li>{{i.price}}</li>
                <li>{{i.fenlei}}</li>
            </ul>
        </div>
        <div class="gengduo">
            <a href="#">浏览更多商铺</a>
        </div>

        
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arr:[]
            }
        },
        created(){
            this.$http.get('http://localhost:8002/').then((e)=>{
              return this.arr=e.body;
            })
        
        }
    }
</script>
<style>
.c-tit{
  display: block;
  width: 100%;
    float: left;
  height: 96px;
  background-color: rgb(247, 247, 247);
  padding: 25px 0px 22px;
  font-family: 微软雅黑;
  box-sizing: border-box;
}
.c-tit p{
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    color: #000000;
    padding: 0 0px 0 10px;
}
.c-span{
    font-family: arial;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: #aaaaaa;
    display: block;
    padding: 4px 0px 0 5px;
}
.item{
    float: left;
    width:33%;
    height:322px;
}
.item img{
    width:98%;
    height:160px;
}
.item ul{
    list-style: none;
}
.first{
    display: block;
    font-size:15px;
    line-height: 35px;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left:15px;
   
}
.item ul li{
    color: #000000;
    font-size: 13px;
    font-family: 微软雅黑;
    line-height: 22px;
    text-align: left;
    padding-left:20px; 
     box-sizing: border-box;
     margin-left: 1%;
}
.gengduo{
    width: 100%;    
    float: left;
    height: 68px;
    background-color: #dfdfdf;
}
.gengduo a{
    display: block;
    width: 138px;
    height: 38px;
    line-height: 38px;
    margin: 15px auto;
    border:1px rgb(58, 121, 232) solid; 
    color: #000;
}
</style>