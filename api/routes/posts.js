const router = require("express").Router();
const Posts = require("../Model/post");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/Images");// first argument will be for handling error
  },
  filename: (req, file, cb) => {
    console.log(file);
    //cb(null,Date.now()+path.extname(file.originalname));
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// create post
router.post("/", upload.array("image"), async (req, res) => {
  try {
    const newPost = new Posts(
      {
        name: req.body.name,
        desc: req.body.desc,
        type: req.body.type,
        img: req.body.image,
        price: req.body.price,
        quantity: req.body.price,
      }
    );
    const post = await newPost.save();
    res.status(200).json(newPost);
  }
  catch (error) {
    res.status(500).json("file is unable to upload");
  }
});

// update post
router.put("/:id/:quantity", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    const qnty = post.quantity - req.params.quantity;
    await post.updateOne({ $set: { quantity: qnty } });
    res.status(200).json(post);
  }
  catch (error) {
    res.status(500).json("post is not available");
  }
})

// delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    await post.deleteOne();
    res.status(200).json("Post is deleted");
  }
  catch (e) {
    res.status(500).json("unable to delete post");
  }
})

module.exports = router;



/**----------------------------------------------------------------------------------------------------
 * create Post
 * delete post
 * update post
 */
