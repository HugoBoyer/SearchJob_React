import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/NavBar';
import { Home } from './components/Home';
import { JobSearch } from './components/JobSearch';
import { Contact } from './components/Contact';


function App() {

  return (
    <Router>
      <div className="p-6 max-w-4xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App
