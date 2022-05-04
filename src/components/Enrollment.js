import React from "react";
import { currentUser } from "../store/Reducer";
import { useSelector } from "react-redux";
const Enrollment = () => {
  const user = useSelector(currentUser);
  return (
    <div>
      <h1>Hi {user}! Thanks for your enrollment </h1>
    </div>
  );
};

export default Enrollment;
