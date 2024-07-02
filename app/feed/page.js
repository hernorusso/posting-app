import { Posts } from "../posts";
import { getPosts } from "@/lib/posts";

export const generateMetadata = async () => {
  const posts = await getPosts();
  const numberOfPost = posts.length;

  return {
    title: `Browse all our ${numberOfPost} posts!`,
    description: "Browse all our posts!",
  };
};

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
