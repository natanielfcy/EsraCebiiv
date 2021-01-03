import express from "express";

import { getPosts, createPost, deletePost, updatePost, getSinglePost} from "../controllers/posts.js"

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.get("/:id", getSinglePost);

router.delete("/:id", deletePost);

router.patch("/:id", updatePost);

export default router; 