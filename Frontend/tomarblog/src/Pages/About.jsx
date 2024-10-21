// src/About.js
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/Posts/postActions';
import axios from 'axios';


const About = () => {
  const dispatch = useDispatch();
    
    // Selectors to get the users and loading state from the Redux store
    const { users, loading, error } = useSelector(state => state); // Adjust based on your state structure

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p>This is the about page for the blog. Here you can share information about the blog, its purpose, and anything else you think your readers should know!</p>
      <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.userID}>{user.firstName}</li> // Adjust based on the actual user object structure
                ))}
            </ul>
    </div>
  );
};

export default About;
