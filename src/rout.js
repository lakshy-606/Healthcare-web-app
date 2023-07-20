let express = require("express")
let app = express()
let path= require('path')
let cssstaticpath = path.join(__dirname, "CSS")
let AboutMSpath = path.join(__dirname,"Project/assets")
app.use(express.static(cssstaticpath))    
app.get("/" ,(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    })
app.get("/AboutMS",(req,res)=>{
    res.sendFile(path.join(AboutMSpath,"AboutMS.html"))
})

  
app.listen(8080, function(error){
    if(error) throw error
    console.log(__dirname)
})

