var express=require('express')
var app=express()
var por=2222;
app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})
app.listen(port,()=>{
    console.log('server running')
})
