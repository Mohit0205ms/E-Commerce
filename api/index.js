const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require('fs');

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

/* Connection to MongoDB */
mongoose.connect("mongodb+srv://mohitsingh14534:tcIeEOPZNcrkrwr3@cluster0.fdv1up2.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Can not connect to MongoDB: " + e);
  });

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Setting view engine
// app.set('view engine', 'ejs');

// Handling endpoints
app.get("/", (req, res) => {
  res.render("admin");
});

app.get("/api", (req, res) => {
  res.render("index");
});

app.get("/api/login", (req, res) => {
  res.render("login");
});

// Uploading images to the server
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "images")); // Adjust the destination path as needed
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.array('images'), (req, res) => {
  try {
    res.status(200).json("Images uploaded successfully");
  } catch (err) {
    res.status(500).json("Unable to upload images to server");
  }
});
const imageDirectory = path.join(__dirname, "/public/images/");

app.post("/api/delete", async (req, res) => {
  const arr = req.body.img;
  const deletionPromises = arr.map((ele) => {
    return new Promise((resolve, reject) => {
      const imagePath = path.join(imageDirectory, ele);
      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.log("Unable to delete image: ", ele);
            reject(`Unable to delete image: ${ele}`);
          } else {
            console.log("Image deleted successfully: ", ele);
            resolve(`Image deleted successfully: ${ele}`);
          }
        });
      } else {
        console.log("File does not exist on server: ", ele);
        reject(`File does not exist on server: ${ele}`);
      }
    });
  });

  Promise.all(deletionPromises)
    .then((successMessages) => {
      res.status(200).json({ message: "All images deleted successfully", success: successMessages });
    })
    .catch((errorMessages) => {
      res.status(500).json({ error: "Some images could not be deleted", failed: errorMessages });
    });
})

// Handling routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
