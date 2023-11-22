import express from "express";
import {
  getPost,
  getAllPosts,
  createPost,
  addComment,
  deleteComment,
  likePost,
  unlikePost,
  savePost,
  unsavePost,
} from "../controllers/postControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPosts).post("/", protect, createPost);
router.get("/:id", protect, getPost);
router.post("/comment/:postID", protect, addComment);
router.delete("/comment/:commentID", protect, deleteComment);
router.put("/like/:postID", protect, likePost);
router.put("/unlike/:postID", protect, unlikePost);
router.put("/save/:postID", protect, savePost);
router.put("/unsave/:postID", protect, unsavePost);

export default router;
