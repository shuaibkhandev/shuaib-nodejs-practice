const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("Welcome to Home Page!");
        res.end();
    }else if(req.url == '/about'){
            res.write("Welcome to About Page!");
        res.end();
    }
})

server.listen(8000, ()=>{console.log("Server running on port no 8000");
})