const router = require('express').Router();
const User = require("../Model/user");

// register
router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        if (req.body.email === "admin0205@gmail.com") {
            res.status(500).json("this email can not be cosidered");
        }
        else {
            const newUser = new User(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    phone: req.body.phone
                }
            )
            const user = await newUser.save();
            res.status(200).json(user);
        }
    } catch (e) {
        res.status(500).json("not found");
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        if (req.body.email==="admin0205@gmail.com" && req.body.password==="mohit#chitkara@") {
            res.status(200).render("admin");
        }
        else {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                res.status(404).json("user not found");
            }
            else if (user.password !== req.body.password) {
                res.status(400).json("Wrong pasword");
            }
            else {
                res.status(200).json(user);
            }
        }
    }
    catch (e) {
        res.status(500).json("error -> " + e);
    }
});

// add to cart
router.post("/cart/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.body.id);
        if(!user.cart.includes(req.params.id)){
            await user.updateOne({$push:{cart : req.params.id}});
            res.status(200).json("we are succesfuly added item to cart");
        }
        else{
            res.status(403).json("you already includes this user");
        }
    }
    catch(err){
        console.log("we can not add this item to cart "+err);
        res.status(500).json("some error on add to cart on api side.");
    }
})



module.exports = router;