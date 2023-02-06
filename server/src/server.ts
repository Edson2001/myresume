import express from "express"

import puppeteer from "puppeteer-core"
const app = express()
import fs from "fs"

app.get("/", async (req, res)=>{
    return res.send("Server")
    //C:/Program Files/Google/Chrome/Application/chrome.exe
})


app.get('/pupp', async (req, res)=>{
    const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://google.com')
    await page.screenshot({path: './src/name.png'})
    await browser.close()

    if(fs.existsSync(__dirname+'/name.png')){
        return res.send("n Server")
    }else{
        return res.send("s Server")
    }
})

app.listen(3003, ()=> console.log("http://localhost:3003"))