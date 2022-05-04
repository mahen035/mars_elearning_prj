import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <h2>E Learning App</h2>
      <ul>
        <li>
          <Link to="/register"> User Registration</Link>
        </li>
        <li>
          <Link to="/login">Login Here</Link>
        </li>
        <li>
          <Link to="/getCourses">Get List of Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
