<template>
  <div id="app">
    <header>
      <div id="logo"><img src="../images/logo.png" alt=""></div>
      <div id="nav">
        <router-link to="/">首页</router-link> 
        <router-link to="/loupan/1">全新楼盘</router-link>
        <router-link to="/loupan/2">二手楼盘</router-link>
        <router-link to="/loupan/3">全新商铺</router-link>
        <router-link to="/dongtai">楼市动态</router-link>
        <router-link to="/we">联系我们</router-link>  
      </div>
      <div class="tel"><img src="../images/tel.png">008-6666 6666
        <button id="dianhua">资讯电话</button>
      </div>
    </header>
   
    <router-view/>
     <footer> 地产REALSTATE  © 2020 All Rights Reserved.</footer>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 14px;
  }
#app {
  font-family: '微软雅黑';
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #000;
  padding: 0 40px;
}
header{
  width:100%;
  height:100px;
  margin: 0 auto;
}
#logo{
  width: 170px;
  height: 100px;
  float: left;
  margin-left: 40px;
  margin-top: 20px;
}
#nav{
  float: left;
  width:658px;
  height: 100px;  
  padding-left:100px;
}
#nav a{
  display:inline-block;
  padding: 0 20px;
  width: auto;
  height: 80px;
  line-height: 100px;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #000;
  border-bottom: 1px #000 solid;
}
.tel{
  float: left;
  /* width: 244px; */
  height: 100px;
  line-height: 100px;
  color: #8d9095;
  text-align: right;
}
#dianhua{
    font-family: 微软雅黑;
    font-size: 13px;
    padding: 6px 16px;
    border-width: 1px;
    border-color: rgb(58, 121, 232);
    background-color: rgb(58, 121, 232);
    color: rgb(255, 255, 255);
}
footer{
        float: left;
        height: 42px;
        width: 100%;
        color: #8d9095;
        font-family: "Open Sans",Helvetica,Arial,Verdana,sans-serif;
        padding: 4px 10px 4px 10px;
        background-color: #333333;
        line-height: 42px;
    }
</style>
