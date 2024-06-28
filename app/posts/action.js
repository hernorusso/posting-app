"use server";
import { updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";

const togglePostLike = async (postId) => {
  try {
    await updatePostLikeStatus(postId, 2);
  } catch (error) {
    throw new Error("Failed when updating like status. Please try again!");
  }
  revalidatePath("/feed");
};

export { togglePostLike };
