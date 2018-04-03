const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'user',
	port:3306
})

//查
router.use('/list',(req,res)=>{
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM user ORDER BY id DESC`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})

//删除
router.use('/del',(req,res)=>{
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`DELETE FROM user WHERE id = ${req.body.id}`,(err,rows)=>{
			if(err) throw err;
			if(rows != '' || rows !=null){
				con.query('SELECT * FROM user',(err,rows)=>{
					if(err) throw err;
					res.send(rows);
					con.release()
				})
			}
		})
	})
})

//平均值
router.use('/avg',(req,res)=>{
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT AVG(id) AS num FROM user`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})

//模糊搜索
router.use('/search',(req,res)=>{
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM user WHERE user LIKE '%${req.body.search}%'`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})






module.exports = router;