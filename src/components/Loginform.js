import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/Action";
import { useNavigate } from "react-router-dom";

import "./Loginform.css";

const Loginform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const value = useSelector((state) => {
  //   return state;
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (value) {
  //     navigate("/userprofile");
  //   }
  // }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      userName: name,
      email: email,
      password: password,
    };
    dispatch(loginAction(postData));
    navigate('/loggedIn');
  };

  return (
    <>
      <h3>Login Here</h3>
      <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
          <label>Name: </label>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Email: </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Loginform;
