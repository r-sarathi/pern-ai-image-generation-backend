import prisma from "../db/dbConfig.js";
import { v2 as cloudinary } from "cloudinary";

const fetchPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      status: true,
      data: posts,
    });
  } catch (error) {
    console.log("Error raised: ", error);
    res.status(403).json({
      status: false,
      error: error.message,
    });
  }
};

const createPost = async (req, res) => {
  const { name, prompt, photo } = req.body;
  try {
    const photoUrl = await cloudinary.uploader.upload(photo, {
      folder: "PERN AI Image Generation",
    });
    const newPost = await prisma.post.create({
      data: {
        name: name,
        prompt: prompt,
        photoUrl: photoUrl.url,
      },
    });
    if (newPost) {
      res.status(200).json({
        status: true,
        data: newPost,
        message: "Post created successfully...!",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Internal server error..! Please try again later.",
      });
    }
  } catch (error) {
    console.log("Error raised: ", error);
    res.status(403).json({
      status: false,
      error: error.message,
    });
  }
};

export { fetchPosts, createPost };
