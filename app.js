var express = require('express')

var MySql = require('mysql')

var app = express()

var pool = MySql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'fangchanzhongjie',
	port:3306
})
app.get('/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,connection) => {
	if (err) throw err
	var sql = 'select * from one'
	connection.query(sql,(err,data) => {
		if (err) throw err
		res.send(data)
		connection.end()
	})
})
})

app.get('/two',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,connection) => {
	if (err) throw err
	var sql = 'select * from two'
	connection.query(sql,(err,data) => {
		if (err) throw err
		res.send(data)
		connection.end()
	})
})
})

app.get('/three',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,connection) => {
	if (err) throw err
	var sql = 'select * from three'
	connection.query(sql,(err,data) => {
		if (err) throw err
		res.send(data)
		connection.end()
	})
})
})

app.get('/four',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,connection) => {
	if (err) throw err
	var sql = 'select * from four'
	connection.query(sql,(err,data) => {
		if (err) throw err
		res.send(data)
		connection.end()
	})
})
})

app.listen(3000,function () {
	console.log('吃饭睡觉打豆豆')
})