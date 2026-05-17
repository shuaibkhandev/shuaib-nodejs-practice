import express from "express";
const app = express();
import path from "path";

// const homePagePath = path.join(import.meta.dirname, "public", "index.html");
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))
app.use(express.urlencoded({extended:true}));
// app.get("/profile/:username/blog/:slug", (req, res)=>{
//     const slug = req.params.slug.replaceAll("-"," ")
//     const username = req.params.username.replaceAll("-"," ")
    
//     res.send(` <h1>Article ${slug} by ${username}</h1>`)

// })

// app.get('/contact', (req, res) => {
//     console.log(req.query);
//     // res.redirect("/");
//     res.send("OK")
// })

app.post('/contact', (req, res) => {
    console.log(req.body);
    // res.redirect("/");
    res.send("OK")
})

// console.log(globalThis.process.env.PORT)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`);
    
})