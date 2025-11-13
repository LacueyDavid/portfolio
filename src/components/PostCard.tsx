import type { Post } from "../types";

function PostCard({ title, date, tags, description }: Post) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 max-w-[418px] p-5 rounded-md">
      <p className="font-bold text-[26px] text-[#21243d] dark:text-gray-100 m-0">
        {title}
      </p>
      <p className="font-normal text-lg text-[#21243d] dark:text-gray-300 pt-5 m-0">
        {date} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {tags}
      </p>
      <p className="text-base text-[#21243d] dark:text-gray-300 pt-5 m-0 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default PostCard;
