import express from "express"
import puppeteer from "puppeteer-core"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

const app = express()


dotenv.config()

app.get("/", async (req, res)=>{
    return res.send("Server")
})


app.get('/pupp', async (req, res)=>{

    const browser = await puppeteer.launch({
        headless: true,
        args:[
            '--no--sandbox',
            '--disable-stuid-sandbox'
        ]
    })
    let page;

    (async ()=>{
       
        page = await browser.newPage()
        await page.goto('https://google.com')
        await page.screenshot({path: './src/name.png'})
        
        //await browser.close()
    
        if(fs.existsSync(__dirname+'/name.png')){
            return res.send("n Server")
        }else{
            return res.send("s Server")
        }
    })()
    .then(error=> res.send(error))
    .finally(async ()=> page.close())
})

app.listen(3003, ()=> console.log("http://localhost:3003"))