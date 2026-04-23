import { useState, useEffect } from "react";
import axios from "axios";

function JobList() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/jobs")
      .then(res => setJobs(res.data));
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const apply = () => {
    axios.post("http://localhost:8080/applications", {
      ...form,
      jobId: selectedJob.id
    }).then(() => {
      alert("Application submitted!");
      setShowModal(false);
      setForm({ name: "", email: "" });
    });
  };

  return (
    <div className="page">  
      <div className="container">

        <h2 className="section-title">Available Jobs</h2>

        <input 
          className="search"
          placeholder="Search jobs, companies, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="job-grid">
          {jobs
            .filter((job) => {
              const query = search.toLowerCase();

              return (
                (job.title || "").toLowerCase().includes(query) ||
                (job.company || "").toLowerCase().includes(query) ||
                (job.location || "").toLowerCase().includes(query) ||
                (job.description || "").toLowerCase().includes(query)
              );
            })
            .map((job) => (
              <div key={job.id} className="job-card">

                <div className="job-header">
                  <div className="job-title">{job.title}</div>
                  <div className="company">{job.company}</div>
                </div>

                <div className="badges">
                  <span className="badge">{job.company}</span>
                  <span className="badge">{job.location}</span>
                </div>

                <p className="desc">{job.description}</p>

                <button 
                  className="apply-btn"
                  onClick={() => openModal(job)}
                >
                  Apply Now
                </button>

              </div>
            ))}
        </div>

        {showModal && (
          <div className="modal">
            <h3>Apply for {selectedJob.title}</h3>

            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button onClick={apply}>Submit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default JobList;