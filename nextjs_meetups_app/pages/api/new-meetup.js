import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
// this code will never end up on the client side, thus its a secure place to have connection credetials in it.

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivuvf.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    //NoSQL DB-> collections kinda like tables, and documents are like entries
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup created!" });
  }
}

export default handler;
