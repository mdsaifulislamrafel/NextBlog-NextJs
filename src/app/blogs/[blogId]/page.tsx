import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

// সাইড লোড হওয়ার সময় কিছু ডাটা আগে থেকেই লোড করে নিবে
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 4).map((post: { id: string }) => ({
    blogId: post.id,
  }));
};

// ডায়নামিক টাইটেল পরিবর্তন ফাংশন
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  return {
    title: blog.title,
    description: blog.description,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
