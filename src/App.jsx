import './App.scss';
import './Animations.scss'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Taskbar from './components/taskbar';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './views/home';
import Work from './views/work';
import Portfolio from './views/portfolio';
import Contact from './views/contact'
import './styles/bootstrap.scss'
import About from './views/aboutme';
import { useState } from 'react';

function App() {
  const [skipToEnd, setSkipToEnd] = useState(false)
  const [minimizeTaskbar, setMinimizeTaskbar] = useState(false)
  return (
    
    <Router>
        <DarkModeProvider setMinimizeTaskbar={setMinimizeTaskbar}>
              <Taskbar skipToEnd={skipToEnd} setSkipToEnd={setSkipToEnd} minimizeTaskbar={minimizeTaskbar} setMinimizeTaskbar={ setMinimizeTaskbar}/>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace={true} />}/>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/work' element={<Work />} />
                  <Route path='/mystory' element={<About props={{skipToEnd, setSkipToEnd}}/>} />
                  <Route path='/portfolio' element={<Portfolio/>} />
                  <Route path='/contactme' element={<Contact/>} />
                </Routes>
        </DarkModeProvider>
        </Router>
  );
}

export default App;
