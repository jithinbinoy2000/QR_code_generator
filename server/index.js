const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')
app.use(express.json());
app.use(cors());
app.use(routes)
PORT = 3000
app.listen(PORT,()=>{
    console.log("Server started at port 3000");
})
