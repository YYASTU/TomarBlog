import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_POST } from '../redux/Posts/postTypes';

const CreatePost = ({ onCreate }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setImageUrl(file.name); // Optionally, you can store the file name or URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      author,
      content,
      imageUrl,
    };
    dispatch({ type: CREATE_POST, payload: newPost });
    onCreate(newPost);
    // Reset the form
    setTitle('');
    setAuthor('');
    setContent('');
    setImageUrl('');
    setUploadedImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      
      {uploadedImage && (
        <div className="mb-4">
          <img src={uploadedImage} alt="Uploaded" className="w-full h-48 object-cover rounded-md mb-2" />
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
