import React from 'react';

const BlogPost = ({ title, author, date, content, imageUrl, likes }) => {
  imageUrl = './TomarBlog/TomarBlog/Frontend/tomarblog/src/Assets/isometric-blogging-concept_23-2148004575.jpg'
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden gap-3">
      <img src="https://img.freepik.com/free-vector/isometric-blogging-concept_23-2148004575.jpg?t=st=1728986723~exp=1728990323~hmac=89292511e15e29ae35ba527d615c2cce0567173eed53f7f4128621d42c2e57c2&w=740" alt={title} className="w-full h-48 object-cover mt-15" />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center mt-2 text-gray-600">
          <p className="mr-2">{author}</p>
          <span className="text-sm">•</span>
          <p className="ml-2 text-sm">{new Date(date).toLocaleDateString()}</p>
        </div>
        <p className="mt-4 text-gray-700">{content}</p>
        <div className="flex items-center justify-between mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Like {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
