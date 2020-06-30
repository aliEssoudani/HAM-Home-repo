var express = require("express");
var bodyParser = require("body-parser");
var samplePosts = require("../database-mongo/data.js")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var posts = require("../database-mongo");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../react-client/dist"));


app.post("/posts", (req, res) => {
  console.log(req.body);
  posts.Post.create(req.body);
});

const insertSamplePosts = function() {
  samplePosts.samplePosts.map((element)=> {
    posts.Post.find({description : element.description},function (err, docs) {
      if (docs.length === 0) {
        posts.Post.create(element)
    .then(() => posts.db.disconnect());
      }
    })
  })
};
insertSamplePosts();

app.get("/posts", (req, res) => {
  posts.selectAllPost((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/items", function (req, res) {
  items.selectAll(function (err, data) {
    console.log(data);
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
