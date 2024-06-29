import { Router } from "express";
import { createPost, fetchPosts } from "../controllers/PostController.js";
import { createImage } from "../controllers/DallEController.js";

const router = Router();

// post routes
router.get("/fetchPosts", fetchPosts);
router.post("/createPost", createPost);

// ai routes
router.post("/generateImage", createImage);

export default router;
