import express from "express"
const app = express()
import * as html_to_pdf from  'html-pdf-node'
//import Convert from "./core/Convert"

app.get("/", async (req, res)=>{
    let options = { format: 'A4' };
   console.log('l,,l,f,d,fd,fdl,fdl,fdl,')
    let file = { url: "https://example.com" };
    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
      console.log("PDF Buffer:-", pdfBuffer);
    });
    return res.send("Server")
})



app.listen(3003, ()=> console.log("http://localhost:3000"))