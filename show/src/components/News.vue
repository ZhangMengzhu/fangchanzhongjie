<template>
    <div class="nnn">
        <div class='news'>
            <div class="n-top">
            <div id='box'></div>
            <p>楼市动向 - NEWS</p>
            <a href="#">阅读更多</a>
            </div>
            <ul v-for='i in news'>
                <li>{{i.title}}
                <li>{{i.news}}</li>
                </li>
            </ul> 
        </div>
    <div class='news2'>
        <div class="n-top">      
            <div id='box'></div>
            <p>联系我们</p>
            <span>-CONTACT</span>
        </div>  
        <ul>
            <li>Tom</li><br>
            <li>188 0000 0000 / 008-6666 6666</li><br>
            <li>Tom</li><br>
            <li>188 0000 0000 / 008-6666 6666</li><br>
            <li>Tom</li><br>
            <li>188 0000 0000 / 008-6666 6666</li><br>
        </ul>
    </div>
    <div class='news3'>
        <div class="n-top">
            <div id='box'></div>
            <p>在线表单</p>
            <span>-FORM</span>
        </div>
        <ul>
            <li><input type="text" placeholder='称呼'></li>
            <li><input type="text" placeholder='邮箱'></li>
            <li><input type="text" placeholder='电话'></li>
            <li><textarea name="" id="" cols="23" rows="3" placeholder='内容'></textarea></li>
            <li><input type="text" placeholder='验证码'></li>
            <li><button>提交</button></li>
        </ul>
        </div>
            <div class='news4'>
                <div class="n-top">
                    <div id='box'></div>
                    <p>地址</p>
                    <span>-ADDRESS</span>
                </div>
        <ul>
        <li>郵箱：info@realestate.com</li>
        <li>地址：上海市静安区南京西路时代大厦</li>
        </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                news:[]
            }
        },
        methods:{

        },
        created(){
            this.$http.get('http://localhost:8002/news')
.then(e=>this.news=e.body)
        }
    }
</script>
<style>
.news{
    width:100%;
    background:rgb(247, 247, 247);
    float:left;
}
.news ul li{
    padding: 8px 10px;
}
.news ul li:nth-child(1){
    line-height: 14px;
}
.news ul li:nth-child(2){
    line-height: 22px;  
    color: #8d9095;
}
ul{
    float:left;
}
li{
    list-style:none;
    float:left;
    clear: both;
}
.n-top p{
    text-align:left;
    float:left;
    margin-left:25px;
    line-height: 60px;
}
.n-top{
    width: 100%;
    height: 64px;
}
.news a{
    display: block;
    float:left;     
    margin-top:15px;
    border:1px solid #000;
    font-family: 微软雅黑;
    font-size: 13px;
    padding: 3px 10px;
    color: #000;
    margin-left: 10px;
}
#s{
    margin-top:1000px;
}
.news2{
    width:100%;
    background:rgb(247, 247, 247);
    float:left;
    margin-top:20px;
    padding: 0px 10px; 
    box-sizing: border-box;
}
.n-top span{
    float:left;
    line-height: 60px;
    font-size: 13px;
    font-weight:bold;
    color: #000;
    margin-left:5x;
}
.news2 ul li:nth-child(1){
    font-weight:bold;
    color:#000;
    margin-bottom:10px;
}
.news2 ul li:nth-child(5){
    font-weight:bold;
    color:#000;
    margin-bottom:10px;
}
.news2 ul li:nth-child(9){
    font-weight:bold;
    color:#000;
    margin-bottom:10px;
}
.news2 ul li{
    color:#0000CD;;
}
.news3{
    width:100%;
    background:rgb(247, 247, 247);
    float:left;
    margin-top:20px;
}
.news3 ul li{
    border-bottom:1px #ccc solid;
    margin-top:10px;
    margin-left: 25px;
    line-height: 24px;
}
.news3 ul li:nth-child(6){
    border:0;
}
.news3 ul li:nth-child(5){
    margin-right:100px;
}
.news3 ul li input{
    border:0;
    outline:none;
    background:rgb(247, 247, 247);
}
.news3 ul li textarea{
    border:0;
    outline:none;
    background:rgb(247, 247, 247);
}
.news3 button{
    float:left;
    font-size: 12px;
    line-height: 12px;
    background-color: #393939;
    border: 1px solid #393939;
    padding: 8px 45px 8px 45px !important;
    text-align:center;
    }
.news4{
    width:100%;
    background:rgb(247, 247, 247);
    float:left;
    margin-top:20px;
}

#box{
    width:20px;
    height:20px;
    float:left;
    background:#000;
    margin-top:16px;
    margin-left:15px;
}
</style> 