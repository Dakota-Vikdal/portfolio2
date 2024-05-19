import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import ProjectList from './components/ProjectList'
import NavBar from './components/NavBar'
import About from './components/About'
import Home from './components/Home'
import CloudAnimation from './components/CloudAnimation'
// import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  function handleLoaded() {
    setIsLoaded(isLoaded => !isLoaded)
  }

  useEffect(() => {
    const delay = 1000
    const timer = setTimeout(() => {
      handleLoaded();
    }, delay)
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      {isLoaded ? (
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/projectlist" element={<ProjectList />} />
          </Routes>
          <Footer/>
          <CloudAnimation />
        </Router>
        
        
      </div>
      ) : (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
