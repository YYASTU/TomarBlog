import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux'
import { CREATE_POST } from '../redux/Posts/postTypes';
import store from '../redux/store';
import createPost from '../redux/Posts/postActions';
function Home() {
    
const posts = [
    {
      id: 1,
      title: 'First Blog Post',
      excerpt: 'This is a brief description of the first blog post.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      excerpt: 'This is a brief description of the second blog post.',
    },
    {
      id: 3,
      title: 'Third Blog Post',
      excerpt: 'This is a brief description of the third blog post.',
    },
  ];
  crea
  const createPost2 =() =>{
    store.dispatch(CREATE_POST);
  }
  const postID = useSelector(state => state.id)
  return (
    <div className="max-w-2xl mx-auto p-4">
        <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:underline">About</Link>
          </li>
          <li>
            <Link to="/profile" className="text-blue-500 hover:underline">Profile</Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.excerpt}</p>
          <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read more</a>
        </div>
      ))}

      <h1>FROM REDUX</h1>D
      POSTID: {postID}

      <button onClick={createPost2()}>create post</button>
    </div>
 

  )
}

export default Home