import express from "express"

import puppeteer from "puppeteer-core"
const app = express()
import fs from "fs"

app.get("/", async (req, res)=>{

    //C:/Program Files/Google/Chrome/Application/chrome.exe

    const browser = await puppeteer.launch({
     executablePath: '/usr/bin/chromium-browser',
     headless: true
    })

    const page = await browser.newPage()
    await page.goto('https://google.com')
    await page.screenshot({path: './src/name.png'})
    await browser.close()

    if(fs.existsSync(__dirname+'/name.png')){
        console.log('exsite')
    }else{
        console.log('nao existe')
    }

    return res.send("Server")
})



app.listen(3003, ()=> console.log("http://localhost:3003"))