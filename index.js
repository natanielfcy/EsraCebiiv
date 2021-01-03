import express from "express";
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoutes from "./routes/posts.js"
import contactRoutes from "./routes/contact.js"


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get("/", (req,res) => {
    

    res.json({
        author:"Esra Cebi",
        message: "ismail server"
    });
})
app.use("/posts", postRoutes);
app.use("/contact", contactRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    })
}).catch(error => {
    console.log(error.message);
})





