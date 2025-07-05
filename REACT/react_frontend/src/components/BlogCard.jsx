import React from "react";

import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    return (
        <div className="border p-4 rounded shadow-sm mb-4 bg-white">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-500">By {blog.author}</p>
            <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                Read more
            </Link>
        </div>
    )
}

export default BlogCard;
