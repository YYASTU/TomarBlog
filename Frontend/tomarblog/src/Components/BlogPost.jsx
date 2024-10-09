// src/BlogPost.js

import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="prose">
        {content}
      </div>
    </div>
  );
};

export default BlogPost;
