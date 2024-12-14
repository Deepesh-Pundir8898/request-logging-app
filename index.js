import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    const log = `[${new Date().toISOString()}] Method: ${req.method}, URL: ${req.url}, IP: ${req.ip}`;
    console.log(log);
    next();
})

// Include Morgan for Advanced Logging
app.use(morgan("tiny")); // Outputs concise logs like: GET / 200 3.456 ms

app.get('/' , (req,res)=>{
    res.send("Welcome to the Home Page")
})

app.get('/about' , (req,res)=>{
    res.send("Welcome to the About Page");
})

app.listen("8085",()=>{console.log("Server starting at port: 8085")})