const express=require("express");
const multer=require("multer");
const cors=require("cors");
const stringSimilarity=require("string-similarity");
const path=require("path");

const app=express();

app.use(cors());
app.use(express.static("public"));
app.use("/uploads",express.static("uploads"));

const upload =multer({dest:"uploads/"});

const PRODUCTS=[
"apple iphone",
  "samsung galaxy",
  "laptop bag",
  "gaming keyboard",
  "nike shoes",
  "puma hoodie"
];

app.post("/api/upload",upload.single("image"),(req,res)=>{
    if(!req.file) return res.status(400).json({error:"Image required"});
    const filename=req.file.originalname.toLowerCase();
    const match=stringSimilarity.findBestMatch(filename,PRODUCTS).bestMatch;
    res.json({
        uploadedFile:  `/uploads/${req.file.fieldname}`,
        originalname:req.file.originalname,
        bestMatch:match.target,
        confidence:match.rating
    });
});


app.listen(3000,()=> console.log("Running!"));