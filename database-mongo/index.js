var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hamHome");

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  pssword: String,
  photo: String,
  name: String,
  age: String,
  phoneNumber: Number,
  posts: Array,
});

var User = mongoose.model("User", userSchema);

var selectAllUser = function (callback) {
  User.find({}, function (err, users) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

var postSchema = mongoose.Schema({
  imagesrc: String,
  price: Number,
  rooms: String,
  adress: String,
  rating: Number,
  description: String,
  date: String,
  availibility: Boolean,
});

var Post = mongoose.model("Post", postSchema);

var selectAllPost = function (callback) {
  Post.find({}, function (err, posts) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, posts);
    }
  });
};

module.exports.Post = Post;
module.exports.selectAllPost = selectAllPost;
module.exports.selectAllUser = selectAllUser;
