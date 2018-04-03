const express = require('express');
const mysql =require('mysql')
const bodyparser = require('body-parser');
const app = express();



const pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'woaini00..',
	database:'item',
	port:3306
})

app.get('/',(req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if (err) throw err;
		con.query('select*from loupan' ,(err,rows)=>{
			//where id=${req.body.feilei}
			if(err) throw err;
			res.send(rows);
			// con.release();
		})
	})
})

app.get('/news',(req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if (err) throw err;
		con.query('select*from news' ,(err,rows)=>{
			//where id=${req.body.feilei}
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})

app.listen(8002,()=>{
	console.log('serve start')
})
// app.use(bodyparser.urlencoded({}));

// app.use(express.static('./public'));