import { PostForm } from "./post-form";
import { createPost } from "./actions";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
