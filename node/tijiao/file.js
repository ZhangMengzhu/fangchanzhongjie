const express = require('express');
const static = require('express-static');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();


app.listen(8002);

app.use(multer({dest:'./public'}).any());

app.use('/file',(req,res)=>{
	// console.log(req.files)
	let allName = path.parse(req.files[0].originalname).ext;
	fs.rename('./'+req.files[0].path,req.files[0].path+allName,(err)=>{
		if(err) throw err;
		res.send('上传成功..')
	})
})

app.use(static('./public'));