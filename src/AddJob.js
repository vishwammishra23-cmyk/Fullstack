import React, { useState } from "react";
import axios from "axios";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:8080/jobs", job)
      .then(() => {
        alert("Job posted!");
        window.location.reload();
      });
  };

  return (
    <div className="page"> {/* ✅ FIX: prevents navbar overlap */}
      <div className="container">

        <div className="card">
          <h2>Post a Job</h2>

          <div className="form">
            <input name="title" placeholder="Job Title" onChange={handleChange} />
            <input name="company" placeholder="Company" onChange={handleChange} />
            <input name="location" placeholder="Location" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange} />
          </div>

          <button className="primary" onClick={handleSubmit}>
            Post Job
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddJob;