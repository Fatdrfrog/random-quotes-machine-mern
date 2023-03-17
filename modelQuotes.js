const { model, Schema } = require("mongoose");

const quotesSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  color: { type: Number, required: true },
});

module.exports.modelQuotes = model("Quotes", quotesSchema);
