import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux'
import { CREATE_POST } from '../redux/Posts/postTypes';
import store from '../redux/store';
import createPost from '../redux/Posts/postActions';
import BlogPost from '../Components/BlogPost';
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
  const dummyPosts = [
    {
      title: "Exploring the Beauty of Nature",
      author: "Jane Doe",
      date: "2023-10-01",
      content: "Nature is a great source of inspiration for many. From majestic mountains to serene lakes, the beauty of the outdoors captivates us all.",
      imageUrl: "https://source.unsplash.com/featured/?nature",
      likes: 10,
    },
    {
      title: "The Wonders of Technology",
      author: "John Smith",
      date: "2023-09-20",
      content: "Technology continues to evolve at a rapid pace, transforming the way we live, work, and communicate. Let's explore its wonders!",
      imageUrl: "https://source.unsplash.com/featured/?technology",
      likes: 25,
    },
    {
      title: "Traveling the World: A Guide",
      author: "Emily Johnson",
      date: "2023-08-15",
      content: "Traveling opens up a world of experiences. Discover some of the best places to visit and how to make the most of your adventures.",
      imageUrl: "https://source.unsplash.com/featured/?travel",
      likes: 15,
    },
  ];
  return (
    <div className="max-w-2xl mx-auto p-4">
        
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      {dummyPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
        />
      ))}

      <button >create post</button>
    </div>
 

  )
}

export default Home