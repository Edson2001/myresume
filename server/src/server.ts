import express from "express"
import puppeteer from "puppeteer-core"
import dotenv from "dotenv"
import core from "./core"

dotenv.config()

const app = express()
const appCore = core()

dotenv.config()

app.get("/", async (req, res)=>{
    return res.send("Server")
})

app.get('/pupp', async (req, res)=>{

    const browser = await puppeteer.launch({
        executablePath: process.env.ENV_EXECUTABLEPATH,
        headless: true
    })

    const page = await browser.newPage()
    await appCore.navigate(page)
    browser.close()
})

app.listen(process.env.ENV_SERVER_PORT || 3001)