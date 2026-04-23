import React from "react";
import JobList from "./JobList";
import AddJob from "./AddJob";

function App() {
  return (
    <div>
      <h1>Simple Job Portal</h1>
      <AddJob />
      <JobList />
    </div>
  );
}

export default App;