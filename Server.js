const express = require("express");
const app = express();
const items = require('./Items');

console.log(items);

app.get("/api/items", (req,res)=>{
    res.json(items);
})

app.listen(3000, ()=> {
    console.log(`PORT 3000 - working`)
})