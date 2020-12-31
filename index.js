const express = require('express')
const app = express()

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.listen(3000,(err)=>{
    if(err)
        console.log('Error occurred' + err);
    else
        console.log('Server started at port 3000')

})