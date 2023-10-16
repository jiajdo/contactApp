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

app.get("/contacts", async(req, res) => {
    try {
        const {rows: contacts} = await db.query (`SELECT * FROM contacts`)
        console.log({contacts})
        res.send(contacts)
    }
    catch(e) {
        console.log(e)
        return res.status(400).json({error})

    }
})




app.listen(PORT, () => {
    console.log(`Your man is at ${PORT}`)
})
