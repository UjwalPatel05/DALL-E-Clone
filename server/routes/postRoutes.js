import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";

dotenv.config();
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/", async(req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send({ success: true, data: posts });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: error.message });
    }
})

router.post("/", async(req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });
        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
})


export default router;