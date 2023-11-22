import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";

// @desc    Get a post by ID
// @route   GET /api/posts/:id
// @access  Public
const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate("user", "username avatar");

  const comments = await Comment.find({ post: id }).populate(
    "user",
    "username avatar"
  );

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (!comments) {
    res.status(404);
    throw new Error("Comments not found");
  }

  res.json({ post, comments });
});

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate("user", "username avatar");

  if (!posts) {
    res.status(404);
    throw new Error("Posts not found");
  }

  res.json(posts);
});

// @desc    Create a post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const { caption, image } = req.body;

  if (!caption || !image) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const post = await Post.create({
    user: req.user._id,
    caption,
    image,
  });

  if (!post) {
    res.status(400);
    throw new Error("Post data is invalid");
  }

  res.status(201).json(post);
});

// @desc    add a comment
// @route   POST /api/posts/comment/:postID
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const { postID } = req.params;
  const { comment } = req.body;

  const post = await Post.findById(postID);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  const newComment = await Comment.create({
    user: req.user._id,
    post: postID,
    comment,
  });

  if (!newComment) {
    res.status(400);
    throw new Error("Comment data is invalid");
  }

  post.comments.push(newComment);

  const updatedPost = await post.save();

  if (!updatedPost) {
    res.status(400);
    throw new Error("Post data is invalid");
  }

  res.status(201).json({ updatedPost, comment: newComment });
});

// @desc    delete a comment
// @route   DELETE /api/posts/comment/:commentID
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const { commentID } = req.params;

  const comment = await Comment.findById(commentID);

  if (!comment) {
    res.status(404);
    throw new Error("Comment not found");
  }

  if (!comment.user.equals(req.user._id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await comment.remove();

  res.status(200).json({ message: "Comment deleted" });
});

// @desc    Like a post
// @route   PUT /api/posts/like/:postID
// @access  Private
const likePost = asyncHandler(async (req, res) => {
  const { postID } = req.params;

  const post = await Post.findById(postID);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.likes.includes(req.user._id)) {
    res.status(400);
    throw new Error("Post already liked");
  }

  post.likes.push(req.user._id);

  const updatedPost = await post.save();

  res.status(200).json({ message: "Post liked", post: updatedPost });
});

// @desc    Unlike a post
// @route   PUT /api/posts/unlike/:postID
// @access  Private
const unlikePost = asyncHandler(async (req, res) => {
  const { postID } = req.params;

  const post = await Post.findById(postID);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (!post.likes.includes(req.user._id)) {
    res.status(400);
    throw new Error("Post has not been liked yet");
  }

  post.likes = post.likes.filter((like) => !like.equals(req.user._id));

  const updatedPost = await post.save();

  res.status(200).json({ message: "Post unliked", post: updatedPost });
});

// @desc    Save a post
// @route   PUT /api/posts/save/:postID
// @access  Private
const savePost = asyncHandler(async (req, res) => {
  const { postID } = req.params;

  const post = await Post.findById(postID);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.saves.includes(req.user._id)) {
    res.status(400);
    throw new Error("Post already saved");
  }

  post.saves.push(req.user._id);

  const updatedPost = await post.save();

  res.status(200).json({ message: "Post saved", post: updatedPost });
});

// @desc    Unsave a post
// @route   PUT /api/posts/unsave/:postID
// @access  Private
const unsavePost = asyncHandler(async (req, res) => {
  const { postID } = req.params;

  const post = await Post.findById(postID);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (!post.saves.includes(req.user._id)) {
    res.status(400);
    throw new Error("Post has not been saved yet");
  }

  post.saves = post.saves.filter((save) => !save.equals(req.user._id));

  const updatedPost = await post.save();

  res.status(200).json({ message: "Post unsaved", post: updatedPost });
});

export {
  getPost,
  getAllPosts,
  createPost,
  addComment,
  deleteComment,
  likePost,
  unlikePost,
  savePost,
  unsavePost,
};
