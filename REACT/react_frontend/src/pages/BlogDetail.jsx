import React from "react";
import { useParams,Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () =>{
    const {id} = useParams()
    const blog = blogs.find(b=>b.id===parseInt(id))

    if (!blog) {
    return <p className="text-center">Blog not found</p>;
    }
    return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-600 mb-2">Author: {blog.author}</p>
      <p className="mt-4">{blog.content}</p>

      <Link to="/" className="text-blue-600 hover:underline block mt-6">← Back to blogs</Link>
    </div>
  );
}
export default BlogDetail;
