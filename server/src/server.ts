import express from "express"
import puppeteer from "puppeteer-core"
const app = express()

app.get("/", async (req, res)=>{

    const puppeteerCore = await puppeteer.launch({
        executablePath: "C:\Program Files\Google\Chrome\Application\chrome.exe",
        headless: false,
        args:[
            '--disable-gpu'
        ]
    })

    puppeteerCore.close()

    return res.send("dlsd")

})

app.listen(3000, ()=> console.log("http://localhost:3000"))