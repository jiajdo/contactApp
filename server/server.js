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

//showing contact
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

//adding contacts
app.post("/createContact", async (req, res) => {
  
    try {
      const createContact = {
        name: req.body.name,
        email:  req.body.email,
        phone: req.body.phone,
        notes: req.body.notes
      };
      const result = await db.query(
        "INSERT INTO contacts(name, email, phone, notes) VALUES ($1, $2, $3, $4) RETURNING *",
        [createContact.name, createContact.email, createContact.phone, createContact.notes]
      );
      let response = result.rows[0];
      console.log(response);
      res.json(response);
    } catch (e) {
      console.log(error);
      return res.status(400).json({ error });
    }
  });

  app.post("/api/delete", async (req, res) => {
    try {
      const deleteEvent = {
        title: req.body.title,
        location: req.body.location,
        eventtime: req.body.eventtime,
      };
      const deleteResult = await db.query(
        "DELETE FROM events WHERE title=$1 AND location=$2 AND eventtime=$3 RETURNING *",
        [deleteEvent.title, deleteEvent.location, deleteEvent.eventtime]
      );
      let response = deleteResult.rows[0];
      console.log(response);
      res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  });

app.listen(PORT, () => {
    console.log(`Your man is at ${PORT}`)
})
