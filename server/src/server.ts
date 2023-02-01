import express from "express"
import puppeteer from "puppeteer-core"
import dotenv from "dotenv"
const app = express()

dotenv.config()

app.get("/", async (req, res)=>{

    const browser = await puppeteer.launch({
        executablePath: process.env.ENV_EXECUTABLEPATH || '',
        headless: false,
    })

    const page = await browser.newPage()
    await page.goto('https://google.com')
    
    await page.screenshot({
        path: './app.png'
    })

    await page.pdf({
        path: 'app.pdf'
    })
    
    browser.close()

    return res.send("dlsd")

})

app.listen(3000, ()=> console.log("http://localhost:3000"))