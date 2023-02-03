import express from "express"
const app = express()

app.get("/", async (req, res)=>{
    return res.send("Server")
})

app.listen(3000, ()=> console.log("http://localhost:3000"))