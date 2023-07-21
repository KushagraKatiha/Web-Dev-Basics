const express = require('express')
const app = express()

const PORT = 5003;
const HOSTNAME = 'localhost';

app.get("/" , (req, res)=>{  
    res.send(JSON.stringify({"msg":"I am homepage"}))
})
app.get("/about" , (req, res)=>{  
    res.send(JSON.stringify({"msg":"I am about page"}))
})
app.get("/contact" , (req, res)=>{  
    res.send(JSON.stringify({"email":"support@pwskills.com"}))
})

app.listen(PORT, ()=>{
    console.log(`Server is listning at ${HOSTNAME}:${PORT}`);
})