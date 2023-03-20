import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ProjectOne from './pages/ProjectOne'
import ProjectTwo from './pages/ProjectTwo'
import ProjectThree from './pages/ProjectThree'
import ProjectFour from './pages/ProjectFour'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project-one' element={<ProjectOne />} />
          <Route path='/project-two' element={<ProjectTwo />} />
          <Route path='/project-three' element={<ProjectThree />} />
          <Route path='/project-four' element={<ProjectFour />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
