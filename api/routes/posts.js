const router = require("express").Router();
const Posts = require("../Model/post");

// creating post
router.post("/", async (req, res) => {
  try {
    const newPost = new Posts(
      {
        name: req.body.name,
        desc: req.body.desc,
        type: req.body.type,
        img: req.body.images,
        price: req.body.price,
        quantity: req.body.quantity,
      }
    );
    console.log(newPost);
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

router.post("/delete",(req,res)=>{
  Posts.find({})
  .then(result => res.json(result))
  .catch(err => console.log(err));
});

// under testing 
router.post("/product",async(req,res)=>{
  try{
    Posts.findById(req.body.id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  }catch(e){
    res.status(500).json("product not found in server.");
  }
})

// delete Post
router.delete("/delete/:id", async (req, res) => {
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
