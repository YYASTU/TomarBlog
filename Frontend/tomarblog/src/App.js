// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import BlogPost from './Components/BlogPost';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Components/Navbar';
import Settings from './Pages/Settings';
import Message from './Pages/Message';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {
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
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<Message />} />
          <Route
            path="/posts/:id"
            element={<BlogPost title="Sample Title" content="Sample content for the blog post." />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
