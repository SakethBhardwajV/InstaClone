import { POSTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `${POSTS_URL}/${id}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: POSTS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    uploadPostImage: builder.mutation({
      query: (data) => ({
        url: UPLOADS_URL,
        method: "POST",
        body: data,
      }),
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: `${POSTS_URL}/comment/${data.postID}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    likePost: builder.mutation({
      query: (postID) => ({
        url: `${POSTS_URL}/like/${postID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
    unlikePost: builder.mutation({
      query: (postID) => ({
        url: `${POSTS_URL}/unlike/${postID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
    savePost: builder.mutation({
      query: (postID) => ({
        url: `${POSTS_URL}/save/${postID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
    unsavePost: builder.mutation({
      query: (postID) => ({
        url: `${POSTS_URL}/unsave/${postID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUploadPostImageMutation,
  useAddCommentMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useSavePostMutation,
  useUnsavePostMutation,
} = postSlice;
