const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        desc:{
            type:String,
            require:true
        },
        type:{
            type:String,
            require:true
        },
        img:{
            type:[],
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        quantity:{
            type:Number,
            requires:true
        }
    }
)
module.exports = mongoose.model("Post",PostSchema);