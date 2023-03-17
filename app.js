const { connect } = require("mongoose");
const express = require("express");
const cors = require("cors");
const { modelQuotes } = require("./modelQuotes");

const app = express();

connect("mongodb://127.0.0.1:27017/englishGroup")
  .then((res) => console.log("connection to DB is successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const created = await modelQuotes.createCollection();

  console.log(created);

  res.status(200).json("success");
});

app.post("/quote/create", async (req, res) => {
  const text = req.body.text;
  const author = req.body.author;
  const color = req.body.color;

  try {
    const newQuote = await modelQuotes.create({
      text: text,
      author: author,
      color: color,
    });
    newQuote.save();
    res.status(200).send("new quote successfuly created");
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

app.listen(5000, () => {
  console.log("node server is listening to port 5000");
});

// ('I need a cake').then((res)=>res).catch()

// const result = await ("I need a cake")
// console.log(result)
