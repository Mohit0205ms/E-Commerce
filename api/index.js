const express = require('express');
const app = express();
const { connected } = require('process');
const mongoose = require("mongoose");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

/* Connection to MongoDB */
mongoose.connect("mongodb+srv://mohitsingh14534:tcIeEOPZNcrkrwr3@cluster0.fdv1up2.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected to the mongoDB");
}).catch((e) => {
    console.log("Can not connect to the mongoDB " + e);
})

// middleWare
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded());// this is need to encode the url when ever we try to fetch code data from body that is send byb user
app.use("/images", express.static(path.join(__dirname, "public/images")));// when ever user try to fetch the image

// handling static files
app.set('view engine', 'ejs');

// handling end points
app.get("/",(req,res)=>{
    res.render("admin");
})
app.get("/api", (req, res) => {
    res.render("index");
});
app.get("/api/login",(req,res)=>{
    res.render("login");
});

// handling routes
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(8000, () => {
    console.log("server is runnig on port no 8000");
});

