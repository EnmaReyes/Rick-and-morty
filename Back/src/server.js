require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./routes")


const PORT = 3003;

const server = express()
server.use(express.json())

server.use(morgan("dev"))
server.use(cors())

server.use("/", router);

server.listen(PORT, ()=>{
    console.log(`listen ${PORT}`);
}) 