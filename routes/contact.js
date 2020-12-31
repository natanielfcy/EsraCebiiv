import express from "express";

import { sendEmail } from "../controllers/contact.js"

const router = express.Router();

router.get("/", sendEmail);

export default router; 