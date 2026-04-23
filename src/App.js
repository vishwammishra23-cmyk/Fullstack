import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import JobList from "./JobList";
import AddJob from "./AddJob";

function App() {
  return (
    <Router>

      <Navbar />   

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/admin" element={<AddJob />} />
      </Routes>

    </Router>
  );
}

export default App;