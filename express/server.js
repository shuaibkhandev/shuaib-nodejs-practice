import express from "express";
const app = express();
import path from "path";

const homePagePath = path.join(import.meta.dirname, "public", "index.html");
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))

app.get("/", (req, res)=>{
    console.log(import.meta.dirname);
    console.log(import.meta.filename);
    
    
    res.sendFile(homePagePath)
})

console.log(globalThis.process.env.PORT)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`);
    
})