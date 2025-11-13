import PostCard from "./PostCard";
import { posts } from "../data/content";

function RecentPosts() {
  return (
    <section
      id="posts"
      className="flex flex-col bg-[var(--page-bg)] py-5 mx-auto text-[var(--text)]"
    >
      <div className="flex justify-between items-center max-w-[850px] w-full mx-auto px-5">
        <p className="font-normal text-[22px] text-[var(--text)] m-0">
          Recent posts
        </p>
        <p className="font-normal text-base text-[var(--accent)] m-0">
          View all
        </p>
      </div>
      <div className="flex justify-between gap-5 max-w-[850px] w-full mx-auto px-5 py-5 flex-col md:flex-row items-center md:items-start">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}

export default RecentPosts;
