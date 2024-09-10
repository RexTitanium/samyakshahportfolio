import React, { useState, useEffect, useContext } from 'react'
import '../../styles/homepage.scss'
import { DarkModeContext } from '../../context/DarkModeContext'
import { Modal } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home({scrollToWork}) {

  const [index, setIndex] = useState(0)

  const {darkMode} = useContext(DarkModeContext)
  const role_list = ['Software Developer','Artificial Intelligence','Machine Learning','Front End', 'Back End', 'Full Stack']
  
  const [openPDF, setOpenPDF] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % role_list.length);
    }, 2999)

    return () => clearInterval(interval);
  },[role_list.length])

  useEffect(() => {
    const div = document.getElementById('home-main');
    const onMouseMove = (e) => {
      let rect = e.currentTarget.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      const div = document.getElementById('home-main');
      div.style.background = darkMode
        ? `radial-gradient(circle at ${x}px ${y}px ,rgb(28, 12, 0) 1px 1px, #000000)`
        : `radial-gradient(circle at ${x}px ${y}px ,rgb(255, 242, 234) 1px 1px, #ffffff)`;
    };

    if (window.innerWidth > 768) {
      const div = document.getElementById('home-main');
      div.addEventListener('mousemove', onMouseMove);

      // Cleanup function to remove the event listener on component unmount
      return () => {
        div.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [darkMode]); // Dependency array includes darkMode


  const togglePDF = () => {
    setOpenPDF(!openPDF)
  }

  const navigate = useNavigate()

  const handleWorkBtn = () => {
    if (window.innerWidth <= 768) {
      scrollToWork()
    }
    else navigate('/work')
  }

  return (
    <div className={'homepage-container'} id='home-main'>
      <div className={`homepage-greetings`}>
        HI
      </div>
      <div className='homepage-introduction fullDims flex flexDirectionColumn jc-c align-c textAlignCenter gp-md'>
        <div className={`homepage-name ${darkMode ? 'txt-dark' : ''}`}>
          I am Samyak Shah
        </div>
        <div className="homepage-role">
          {role_list[index]}
        </div>
        <div className="homepage-desc">
          I solve real world problems with innovative solutions using AIML models and Full Stack Developement.
        </div>
        <div className='homepage-buttons'>
          <button onClick={() => handleWorkBtn()}>My Work</button>
          <button className='pointer' onClick={() => setOpenPDF(true)}>My Resume</button>
        </div>
      </div>
      <Modal
              open={openPDF}
              onClose={togglePDF}
              className='modal-narrow'
            >
              <iframe src='../../../assets/pdf/resume.pdf' className='fullDims'/>
            </Modal>
    </div>
  )
}

export default Home