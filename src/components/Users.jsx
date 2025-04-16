// src/components/Users.jsx
import React from 'react';
import useFetch from './hooks/useFetch'; // Import custom GET hook
import usePost from './hooks/usePost';   // Import custom POST hook

const Users = () => {
  // Fetch the list of users from the API
  const { data: users, loading: loadingUsers } = useFetch("https://jsonplaceholder.typicode.com/users");

  // Setup for posting new users
  const { response, postData, loading: posting } = usePost("https://jsonplaceholder.typicode.com/users");

  // This function sends a new user to the API when the button is clicked
  const handleAddUser = () => {
    const newUser = {
      name: "Alice",
      email: "alice@example.com",
    };
    postData(newUser); // Send data using our custom hook
  };

  return (
    <div>
      <h2>User List</h2>

      {/* Show loading message while fetching users */}

      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (

        // Display the list of users
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

      )}

      {/* Button to add a new user using postData */}
      <button onClick={handleAddUser} disabled={posting}>
        {posting ? "Adding..." : "Add User"}
      </button>

      {/* Show response from the server after posting */}
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default Users;
