import cors from "cors";
import express from "express";
import "dotenv/config";
import db from "./db-connection.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080

app.get('/', (req,res)=> {
    res.send("Your home page works!");
})

app.listen(PORT, () => {
    console.log(`Your man is at ${PORT}`)
})
