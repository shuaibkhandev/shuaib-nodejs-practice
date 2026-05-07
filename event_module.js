const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name)=>{
    console.log("Good Morning", name);
})
emitter.on("greet", (name)=>{
    console.log("Good Morning", name);
})

emitter.on("greet", (name)=>{
    console.log("Good Morning", name);
})


emitter.emit("greet", "Shuaib khan")