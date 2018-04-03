<template>
  <div class="home">
    <Home /><!-- 轮播 -->
    <div class="content">
        <div class="conleft">
            <div class="c-top">
               <Picture /><!-- 图片 -->
            </div>
            <div class="c-con">
                <Content />
                <Content />
                <Content />
            </div>
        </div>
        <div class="conright">
            <News />
        </div>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Picture from '@/components/Picture.vue'
import Content from '@/components/Content.vue'
import News from '@/components/News.vue'

export default {
  name: 'home',
  components: {
    Home,
    Picture,
    Content,
    News
  }
}
</script>
<style>
  .content{
  width: 1108px;
  height: 1000px;
  margin: 0 auto;
  margin-top:80px;
}
.conleft{
  float: left;
  width:800px;
}
.c-top{
  width: 100%;
  height: 280px;
}
.c-top img{
  width: 48%;
  height: 45%;
  margin-left: 1%;
  margin-top: 1%;
}
.conright{
  float: right;
  width: 260px;
}
.c-con{
  width: 800px;
  height: 500px;
  margin: 5px 0;
}
</style>
