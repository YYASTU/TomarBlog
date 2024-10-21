import React from 'react';

const SocialMediaPost = ({ title, author, date, content, imageUrl, likes, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center mt-2 text-gray-600">
          <p className="mr-2 font-semibold">{author}</p>
          <span className="text-sm">•</span>
          <p className="ml-2 text-sm">{new Date(date).toLocaleDateString()}</p>
        </div>
        <p className="mt-4 text-gray-700">{content}</p>
        
        <div className="flex items-center justify-between mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Like {likes}
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Share
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
          <ul className="mt-2">
            {comments.map((comment, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                <p className="font-semibold">{comment.author}</p>
                <p className="text-gray-600">{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
