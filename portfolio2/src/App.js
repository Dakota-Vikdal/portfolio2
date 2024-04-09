import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList'
import NavBar from './components/NavBar'
import About from './components/About'
import Home from './components/Home'
import CloudAnimation from './components/CloudAnimation'
import Resume from './components/Resume'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projectlist" element={<ProjectList />} />
        </Routes>
        <CloudAnimation />
      </Router>
      
      
    </div>
  );
}

export default App;
