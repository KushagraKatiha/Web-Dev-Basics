const express = require("express")
const app = express()

const PORT = 5005;
const HOSTNAME = "localhost";

let counter = 0;

app.get("/" , (req, res)=>{  
    res.send(JSON.stringify({"counter":counter}))
})
app.get("/increment" , (req, res)=>{  
    counter++;
    res.send(JSON.stringify({"counter":counter}))
})
app.get("/decrement" , (req, res)=>{  
    counter--;
    res.send(JSON.stringify({"counter":counter}))
})

app.listen(PORT, ()=>{
    console.log(`Server is listning at ${HOSTNAME}:${PORT}`);
})