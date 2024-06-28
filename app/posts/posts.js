"use client";
import { useOptimistic } from "react";

import { togglePostLike } from "./action";
import { Post } from "./post";

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimistic] = useOptimistic(
    posts,
    (currentPosts, postId) => {
      //Optimistic  post update
      const postIndex = currentPosts.findIndex((post) => post.id === postId);
      const optimisticPost = { ...currentPosts[postIndex] };

      optimisticPost.isLiked = optimisticPost.isLiked === 0 ? 1 : 0;
      optimisticPost.likes = optimisticPost.isLiked
        ? optimisticPost.likes + 1
        : optimisticPost.likes - 1;

      const optimisticPosts = [...currentPosts];
      optimisticPosts[postIndex] = optimisticPost;

      return optimisticPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  const postAction = async (postId) => {
    updateOptimistic(postId);
    await togglePostLike(postId);
  };

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={postAction} />
        </li>
      ))}
    </ul>
  );
}
