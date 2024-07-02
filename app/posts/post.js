import Image from "next/image";

import { formatDate } from "@/lib/format";

import LikeButton from "./like-icon";

const Post = ({ post, action }) => {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} alt={post.title} fill />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : undefined}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export { Post };
