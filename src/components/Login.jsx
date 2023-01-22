import React, { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState();
  const handleChange = (event) => {
    event.preventDefault()
    props.setUser(user);
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="text"
          name="username"
          onChange={(event) => setUser(event.target.value)}
          placeholder="Username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
