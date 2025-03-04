"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/apis/blog.slice";
import { Blog } from "@/types";

// export const metadata = {
//     title: "NexaBlog | Blogs"
// }

const BlogsPage = () => {
  // const res = await fetch('http://localhost:5000/blogs', {
  //     cache: "no-store"
  // })
  // const blogs = await res.json();
  const {data: blogs} = useGetBlogsQuery(undefined);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore all latest <span className="text-teal-600">Blog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
