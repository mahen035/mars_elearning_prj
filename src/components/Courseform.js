import React, { useState } from "react";

const Courseform = () => {
  const [c_name, setC_Name] = useState("");
  const [c_desp, setC_Desp] = useState("");
  const [c_fees, setC_Fees] = useState(0);

  return (
    <div className="course">
      <form className="course_form">
        <h3>Add New Course</h3>
        <label htmlFor="">Course Name </label>
        <input
          type="text"
          placeholder="Enter Course Name"
          value={c_name}
          onChange={(e) => setC_Name(e.target.value)}
        />
        <br />
        <label htmlFor="">Course Description </label>
        <input
          type="text"
          placeholder="Enter Course description"
          value={c_desp}
          onChange={(e) => setC_Desp(e.target.value)}
        />
        <br />
        <label htmlFor="">Course Fees </label>
        <input
          type="number"
          placeholder="Enter Fees"
          value={c_fees}
          onChange={(e) => setC_Fees(e.target.value)}
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

export default Courseform;
