"use server";
import { updatePostLikeStatus } from "@/lib/posts";

const togglePostLike = async (postId) => {
  try {
    await updatePostLikeStatus(postId, 2);
  } catch (error) {
    throw new Error("Failed when updating like status. Please try again!");
  }
};
export { togglePostLike };
