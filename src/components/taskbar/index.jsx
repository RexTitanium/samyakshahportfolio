import React, {useContext, useState} from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import ThemeButton from './ThemeButton.jsx'
import '../../styles/taskbar.scss'
import CloseIcon from '../../assets/svg/CloseIcon.tsx'
import UpArrowIcon from '../../assets/svg/UpArrowIcon.tsx'
import ReloadIcon from '../../assets/svg/ReloadIcon.tsx'
import FastForwardIcon from '../../assets/svg/FastForwardIcon.tsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Modal, Tooltip } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'


function Taskbar({skipToEnd, setSkipToEnd, minimizeTaskbar, setMinimizeTaskbar}) {
  const {darkMode} = useContext(DarkModeContext)
  const location = useLocation()
  const [pathname, setPathname] = useState('')
  const [openPDF, setOpenPDF] = useState(false)
  const githubLink = 'https://www.github.com/RexTitanium/'
  const linkedInLink = 'https://www.linkedin.com/in/samyakkshah/'
  const [reloadIcon, setReloadIcon] = useState(false)

  
  

  React.useEffect(() => {
    setPathname((location.pathname).replace('/',''))
  }, [location]);

  const togglePDF = () => {
    setOpenPDF(!openPDF)
  }

  const handleTaskbarBtn = () => {
    setMinimizeTaskbar(!minimizeTaskbar)
  }

  
  const handleRedirect= (e) => {
    const newWindow = window.open(e, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

  const handleReload = () => {
    setReloadIcon(true)
    setTimeout(() => {
      window.location.reload(true) 
    }, 2000);
  }

  return (
    <div className="transition-150-ease">
      <div className={`transition-150-ease ${minimizeTaskbar ? 'taskbar-minimized' : 'taskbar-container'}`}>
        {minimizeTaskbar ? 
          <div className={`taskbar-wrapper-minimized ${darkMode ? 'taskbar-dark': 'taskbar-light' }`}>
            <div className={`move-up taskbar-minimized-up-arrow-container ${darkMode ? 'taskbar-dark': 'taskbar-light' }`} onClick={handleTaskbarBtn}>
              <div className={`open-taskbar-btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>
                <UpArrowIcon/>
              </div>
            </div>
          </div>
          :
          <><div className={`taskbar-wrapper ${darkMode ? 'taskbar-dark': 'taskbar-light' }`}>
            <div className="taskbar-links">
              <Link to='home' className={pathname === 'home' ? 'link-active' :''}>
                Home
              </Link>
              <Link to='mystory' className={pathname === 'mystory' ? 'link-active' :''}>
                Story
              </Link>
              <Link to='work' className={pathname === 'work' ? 'link-active' :''}>
                Work
              </Link>
              <Link to='portfolio' className={pathname === 'portfolio' ? 'link-active' :''}>
                Portfolio
              </Link>
              <Link to='contactme' className={pathname === 'contactme' ? 'link-active' :''}>
                Contact
              </Link>
            </div>
            <div className={`social-media-links flex flexDirectionRow ${window.innerWidth <= 768 ? 'jc-l' : 'jc-c'} align-c gp-sm`}>
              <GitHub className='github-logo transition-150-ease pointer' onClick={() => handleRedirect(githubLink)}/>
              <LinkedIn className='linkedIn-logo transition-150-ease pointer' onClick={() => handleRedirect(linkedInLink)}/>
            </div>
            <div className={`flex flexDirectionRow ${window.innerWidth <= 768 ? 'jc-r' : 'jc-c'} align-c gp-xsm`} >
              <ThemeButton/>
              <div className={`close-btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={handleTaskbarBtn}>
                <CloseIcon />
              </div>
            </div>
          </div>
          </>
        }
      </div>
      {pathname === 'mystory' &&
            <div>
              <div className={`reload-component-container${minimizeTaskbar ? '-minimized' : ''} flex gp-sm jc-c align-c`}>
                <Tooltip title={'Restart Story Mode'} arrow placement='top'><div className={`reload-component br-circle ${minimizeTaskbar && 'no-shadow'} ${darkMode ? 'taskbar-dark' : 'taskbar-light'} ${reloadIcon ? 'reload-animation' : ''}`} onClick={() => {handleReload()}}><ReloadIcon /></div></Tooltip>
                <Tooltip title={skipToEnd ? 'Back To Story Mode':'Skip Story Mode'} arrow placement='top'><div className={`${skipToEnd ? 'gb-component': 'ff-component'} ${minimizeTaskbar && 'no-shadow'} ${darkMode ? 'taskbar-dark' : 'taskbar-light'} flex justifyContenCenter align-c`} onClick={() => setSkipToEnd(!skipToEnd)}>
                  {skipToEnd ? <FastForwardIcon className='goback-icon' /> :<FastForwardIcon/>}</div></Tooltip>
                </div>
            </div>
            }
      {pathname === 'portfolio' &&
            <div className={`pdf-component-container${minimizeTaskbar ? '-minimized' : ''}`}>
              <div className={`pdf-component ${minimizeTaskbar && 'no-shadow'} ${darkMode ? 'taskbar-dark' : 'taskbar-light'}`} onClick={!minimizeTaskbar && togglePDF}>PDF</div>
            </div>}
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

export default Taskbar

