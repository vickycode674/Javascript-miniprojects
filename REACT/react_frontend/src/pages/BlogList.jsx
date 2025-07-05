import React from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
    return (
        <div className="px-4 py-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-2">
                📚 Latest Blogs
            </h2>
            <div className="space-y-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
