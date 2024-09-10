import './App.scss';
import './Animations.scss'
import { BrowserRouter as Router, HashRouter as HRouter, Route, Routes, Navigate } from 'react-router-dom';
import Taskbar from './components/taskbar';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './views/home';
import Work from './views/work';
import Portfolio from './views/portfolio';
import Contact from './views/contact'
import './styles/bootstrap.scss'
import About from './views/aboutme';
import { useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation, useIsPresent} from 'framer-motion'

function App() {
  const [skipToEnd, setSkipToEnd] = useState(false)
  const [minimizeTaskbar, setMinimizeTaskbar] = useState(false)

  const storyView = useRef(null)
  const storyInView = useInView(storyView)

  const workRef = useRef(null)

  const scrollToWork = () => workRef.current.scrollIntoView()  
  return (
    <>
    {window.innerWidth > 768 ?
      <Router>
        <DarkModeProvider setMinimizeTaskbar={setMinimizeTaskbar}>
              <Taskbar skipToEnd={skipToEnd} setSkipToEnd={setSkipToEnd} minimizeTaskbar={minimizeTaskbar} setMinimizeTaskbar={ setMinimizeTaskbar}/>
                <Routes>
                  <Route path="*" element={<Navigate to="/home" replace={true} />}/>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/work' element={<Work />} />
                  <Route path='/mystory' element={<About props={{skipToEnd, setSkipToEnd}}/>} />
                  <Route path='/portfolio' element={<Portfolio/>} />
                  <Route path='/contactme' element={<Contact/>} />
                </Routes>
        </DarkModeProvider>
        </Router>
        :

        <HRouter>
          <DarkModeProvider setMinimizeTaskbar={setMinimizeTaskbar}>
            <Home scrollToWork={scrollToWork}/>
            <div className='fullDims flex jc-c align-c'>
              <div ref={storyView} style={{minWidth: '10vw', minHeight: '10vh'}}>
              {storyInView &&
              <>
                <About props={{skipToEnd, setSkipToEnd}}/>
              </>
              }
              </div></div>
            <div ref={workRef}><Work /></div>
            <Portfolio/>
            <Contact/>
          </DarkModeProvider>
        </HRouter>
        }
    </>
  );
}

export default App;
