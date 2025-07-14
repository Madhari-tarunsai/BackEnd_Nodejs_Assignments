const express = require("express");
const app = express();

app.get("/books/:id", (req, res) => {
  console.log(req.params); // logs: { id: 'value' }
  const params = req.params;
  console.log(params.id); // logs: 'value'
  res.send(`books :${params.id}`); // sends: books :value
});

app.get("/books/:id/:name", (req, res) => {
  console.log(req.params);
  res.json(req.params); // sends: { id: 'value' }
});
app.get("/booksfilter", (req, res) => {
    console.log(req.query)
  res.json({
    message: "i am from filterapi",
    name: req.query.name,
    price: req.query.price,
    desc: req.query.desc,
  });
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
