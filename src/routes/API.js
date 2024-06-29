import { Router } from "express";
import { createPost, fetchPosts } from "../controllers/PostController";

const router = Router();

// post routes
router.get("/fetchPosts", fetchPosts);
router.post("/createPost", createPost);
