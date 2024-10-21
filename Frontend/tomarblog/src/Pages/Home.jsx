import React from 'react';
import SocialMediaPost from '../Components/SocialMediaPost';
import { useSelector } from 'react-redux';
import CreatePost from '../Components/CreatePost';

const Home = () => {
  const dummyPosts = [
    {
      title: "Exploring the Beauty of Nature",
      author: "Jane Doe",
      date: "2023-10-01",
      content: "Nature is a great source of inspiration for many. From majestic mountains to serene lakes, the beauty of the outdoors captivates us all.",
      imageUrl: "./Assets/isometric-blogging-concept_23-2148004575.jpg",
      likes: 10,
      comments: [
        { author: 'User1', text: 'Amazing view!' },
        { author: 'User2', text: 'So inspiring!' },
      ],
    },
    {
      title: "The Wonders of Technology",
      author: "John Smith",
      date: "2023-09-20",
      content: "Technology continues to evolve at a rapid pace, transforming the way we live, work, and communicate. Let's explore its wonders!",
      imageUrl: "../Assets/isometric-blogging-concept_23-2148004575.jpg",
      likes: 25,
      comments: [
        { author: 'User3', text: 'Incredible insights!' },
        { author: 'User4', text: 'Tech is the future!' },
      ],
    },
    {
      title: "Traveling the World: A Guide",
      author: "Emily Johnson",
      date: "2023-08-15",
      content: "Traveling opens up a world of experiences. Discover some of the best places to visit and how to make the most of your adventures.",
      imageUrl: "https://source.unsplash.com/featured/?travel",
      likes: 15,
      comments: [
        { author: 'User5', text: 'Love this guide!' },
        { author: 'User6', text: 'Can’t wait to travel!' },
      ],
    },
  ];
  const post = useSelector(state => state.post);
  console.log("these are the posts :" + post)


  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Home</h1>
      <div className="flex flex-col gap-6">
        {dummyPosts.map((post, index) => (
          <SocialMediaPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
      <CreatePost/>
    </div>
  );
};

export default Home;
