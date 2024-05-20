const express = require('express');
const router = require('./router');
 require('./DB.js')
const app = express();
const port = 4000;

app.use(express.json());
app.use("/api/v1/", router)

app.listen(port, ()=>{
    console.log(`Port is start on ${port} `);
})