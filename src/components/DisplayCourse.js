import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesAction } from "../store/Action";
import "./DisplayCourse.css";
import { Link } from "react-router-dom";

import { uName } from "./LoggedIn";

function DisplayCourse(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state;
  });
  
   useEffect(() => {
     dispatch(getCoursesAction());
  }, [dispatch]);

 
  const renderposts = () => {
    if (value.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <h1>Welcome {uName}!</h1>
        <h1 className="title"> Course List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th> Course Id</th>
              <th> Course Name</th>
              <th> Course Description</th>
              <th> Price</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {value.items.map((course) => (
              <tr key={course.courseId}>
                <td> {course.courseId}</td>
                <td> {course.courseName}</td>
                <td> {course.courseDesc}</td>
                <td> {course.courseFee}</td>
                <td>
                  <Link to="/enroll" className="enrol">
                    Enroll
                  </Link>
                  <Link to="/delete" className="delete">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return <div> {renderposts()}</div>;
}
export default DisplayCourse;
