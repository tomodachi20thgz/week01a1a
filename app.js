const express = require("express"); 
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //loads os code here
    let username = "Dean";
  res.render("landing", {data: username});
});

app.get("/playlist", (req, res) => {
    res.send("My Playlist");
    });

app.get("/playlist/:playId", (req, res) => {

    let id = req.params.playId;
    res.send(`SELECT * FROM playlist WHERE id = ${id}`);
    });

app.get("/products", (req, res) => {
    let queryp = req.query.q;
    res.send(`SELECT * FROM products WHERE name LIKE = ${queryp}`);
    });

app.listen(3000, (err) => {
    if (err) throw err;
  console.log(`listening port 3000`);
});

