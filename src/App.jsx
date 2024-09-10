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

  const portfolioView = useRef(null)
  const portfolioInView = useInView(portfolioView)
  
  const homeRef = useRef(null)
  const homeInView = useInView(homeRef)
  
  const workRef = useRef(null)
  const workInView = useInView(workRef)

  const contactRef = useRef(null)
  const contactInView = useInView(contactRef)

  const scrollToWork = () => workRef.current.scrollIntoView()  
  const scrollToHome = () => homeRef.current.scrollIntoView()
  const scrollToStory = () => storyView.current.scrollIntoView()
  const scrollToContact = () => contactRef.current.scrollIntoView()
  const scrollToPortfolio = () => portfolioView.current.scrollIntoView()
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

        <Router>
          <DarkModeProvider setMinimizeTaskbar={setMinimizeTaskbar}>
            
            <Taskbar skipToEnd={skipToEnd} setSkipToEnd={setSkipToEnd} minimizeTaskbar={minimizeTaskbar} setMinimizeTaskbar={ setMinimizeTaskbar} 
              storyInView={storyInView} portfolioInView={portfolioInView} homeInView={homeInView} scrollToHome={scrollToHome}
              scrollToContact={scrollToContact} scrollToPortfolio={scrollToPortfolio} scrollToStory={scrollToStory}
              scrollToWork={scrollToWork} workInView={workInView} contactInView={contactInView}
            />

            <Routes>
              <Route path="*" element={<Navigate to="/" replace={true} />}/>
            </Routes>
            <div className="fullDims" ref={homeRef}><Home scrollToWork={scrollToWork}/></div>
            <div style={{width: '100vw', height: '10vh'}}></div>
            <div className='fullDims flex jc-c align-c' ref={storyView}>
              {storyInView &&
              <>
                <About props={{skipToEnd, setSkipToEnd}}/>
              </>
              }
            </div>
              
            <div style={{width: '100vw', height: '10vh'}}></div>
            <div ref={workRef}><Work /></div>
            <div className='flex jc-c align-c'>
              <div ref={portfolioView} style={{minWidth: '10vw', minHeight: '10vh'}}>
              {portfolioInView &&
                <Portfolio/>
              }
              </div>
            </div>
            <div style={{width: '100vw', height: '10vh'}}></div>
            <Contact/>
            <div style={{width: '100vw', height: '10vh'}} ref={contactRef}></div>
          </DarkModeProvider>
        </Router>
        }
    </>
  );
}

export default App;
