const express = require('express')
const app = express()

const PORT = 8081;
const HOSTNAME = 'localhost';

let random = null;
let randomFunc = function(){
    random = Math.floor(100*Math.random())+1
}

app.get("/random",(req, res)=>{
    randomFunc();
    res.send({"random": random})
})

app.listen(PORT, ()=>{
    console.log(`Server is listning at ${HOSTNAME}:${PORT}`);
})

