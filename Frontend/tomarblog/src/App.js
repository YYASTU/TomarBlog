// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import BlogPost from './Components/BlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/posts/:id"
          element={<BlogPost title="Sample Title" content="Sample content for the blog post." />}
        />
      </Routes>
    </Router>
  );
};

export default App;
