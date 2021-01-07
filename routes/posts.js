import express from "express";

import { getPosts, createPost, deletePost, getSinglePost} from "../controllers/posts.js"

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);


router.get("/:id", getSinglePost);

router.delete("/:id", deletePost);


export default router; 