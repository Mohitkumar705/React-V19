import { useState } from "react";
import "./Registation.css";

const LoginForm = () => {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const Data = {
            username,
            password,
        }
        console.log(Data);
    }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <label htmlFor="firstName">
            <b>username</b>
          </label>
          <input type="text"
            name="username"
            placeholder="Enter UserName"
            required 
                value={username}  onChange={(e) => setUser(e.target.value)}
            />

            <label htmlFor="firstName">
            <b>password</b>
          </label>
          <input type="text"
            name="password"
            placeholder="Enter password"
            required  value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
