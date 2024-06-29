import { Router } from "express";
import { createPost, fetchPosts } from "../controllers/PostController";
import { createImage } from "../controllers/DallEController";

const router = Router();

// post routes
router.get("/fetchPosts", fetchPosts);
router.post("/createPost", createPost);

// ai routes
router.post("/generateImage", createImage);

export default router;
