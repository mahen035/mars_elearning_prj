import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../store/Action";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const postData = {
      userName: name,
      email: email,
      password: password,
      address: address,
      userPhone: phoneno,
    };
   dispatch(addUserAction(postData));
   navigate('/enroll');
        
  };

  return (
    <div className="user">
      <form className="user_form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Add New User</h3>
        <label>User Name </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email Address </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Address </label>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label>Phone # </label>
        <input
          type="number"
          placeholder="Enter PhoneNumber"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
