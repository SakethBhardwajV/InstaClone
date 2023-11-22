import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.post("/logout", protect, logoutUser);
router.get("/:id", protect, getUser);

export default router;
