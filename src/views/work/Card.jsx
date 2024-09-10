import { Modal, Tooltip } from '@mui/material'
import React, { useContext, useState , useEffect} from 'react'
import CloseIcon from '../../assets/svg/CloseIcon.tsx'
import ExpandIcon from '../../assets/svg/ExpandIcon.tsx'
import MinimizeIcon from '../../assets/svg/MinimizeIcon.tsx'
import GithubIcon from '../../assets/svg/GithubIcon.tsx'
import { DarkModeContext } from '../../context/DarkModeContext.jsx'
import { useNavigate } from 'react-router-dom'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Clipboard from 'react-clipboard-animation'
import { ArrowOutwardRounded } from '@mui/icons-material'
import {CssIcon, GitIcon, PythonIcon, NodeIcon, TfIcon, HtmlIcon, ReactIcon, ExpressIcon, JsIcon, MongoIcon, OpenCVIcon, FirebaseIcon, ReduxIcon} from '../../assets/svg/skills/SkillIcons.tsx'

function Card(props) {

    const {card} = props

    const {darkMode} = useContext(DarkModeContext)
    const [toggleMax, setMax] = useState(false)
    const [showLinks, setShowLinks] = useState(false)
    const [copied, setCopied] = useState('')
    const [openModal, setOpenModel] = useState(false)
    const [startWebsite, setStartWebsite] = useState(false)
    const [linkToShow, setLinkToShow] = useState('')
    const [isLoading, setLoading] = useState(true)
    
    const getIconComponent = (skillName) => {
        const linkCheck = {
          'CSS': <CssIcon />,
          'Git': <GitIcon />,
          'Python': <PythonIcon />,
          'Node': <NodeIcon />,
          'TensorFlow': <TfIcon />,
          'HTML': <HtmlIcon />,
          'React': <ReactIcon />,
          'Express': <ExpressIcon />,
          'JavaScript': <JsIcon />,
          'MongoDB': <MongoIcon />,
          'OpenCV': <OpenCVIcon />,
          'Firebase': <FirebaseIcon />,
          'Redux': <ReduxIcon/>
        };
      
        // Return the icon component or null if not found
        return (
            <div className='flex flexDirectionColumn gp-sm jc-c align-c'>
                {linkCheck[skillName]}
                <div>{skillName}</div>
            </div> 
            );
    };


    const handleOpenModal = (e) => {
        setLinkToShow(e)
        setOpenModel(true)
    }

    const handleStartWebsite = () => {
        if(startWebsite) {
            handleRedirect(linkToShow)
        }
        else {
            setStartWebsite(true)
            setTimeout(() => {
                setLoading(false)
            },2500)
        }
    }

    const handleCloseModal = () => {
        setOpenModel(false)
        setStartWebsite(false)
        setLoading(true)
    }

    const handleMaximize = () => {
        setMax(!toggleMax)
    }

    const handleRedirect= (e) => {
        const newWindow = window.open(e, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
          if (copied) setCopied(false)
        }, 1000)
    
        return () => clearTimeout(timeout)
      }, [copied])

    const navigate = useNavigate();
  return (
    <div className="card-container">
        <div onClick={() => handleOpenModal(card.projectLink)}>
            <div className={`transition-150-ease card-bg-img-container`} >
                <img src={`/assets/images/website_snapshots/${card?.imageLink}`} alt='placeholder'/>
            </div>
            <div className={`transition-150-ease card-links-container`} >
                <div className='card-links-list-wrapper'>
                    
                    {card?.title ? 
                        <div className="project-title flex flexDirectionColumn gp-md" >
                            <div className="project-heading">
                                {card?.title}
                            </div>
                            <div className="project-description">
                                {card?.description}
                            </div>
                        </div> 
                        : <></>
                    }
                </div>
            </div>
        </div>
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            className={`transition-150-ease modal ${toggleMax ? 'fullDims' : 'br-md'}`}
        >
           <div className={`${window.innerWidth <= 768 ?'fullHeight':'fullDims'} flex flexDirectionColumn ${darkMode ? 'bg-dark-grey' : 'bg-light-grey'} `}>
            <div className="navbar flex px-sm jc-sb align-c gp-xlg">
                <div className={`navbar-link-text ${darkMode ? 'border-dark': 'border-light'}`}>
                    <input className='fullWidth' value={linkToShow} id='link-text-input'/>
                    <div className='copy-box'>
                        <Clipboard
                            copied={copied}
                            setCopied={setCopied}
                            text={linkToShow}
                            color='#797979'
                        />
                    </div>
                </div>
                
                <div className="navbar-buttons flex flexDirectionRow jc-c align-c gp-sm">
                    <div className={`transition-150-ease close-red-btn btn-blue`} onClick={handleMaximize}>
                        {toggleMax ? 
                        <MinimizeIcon />
                        :
                        <ExpandIcon/>
                        }
                    </div>
                    <div className={`close-red-btn btn-red`} onClick={handleCloseModal}>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
            <div className={`${window.innerWidth <= 768 ?'fullHeight px-sm':'fullDims'} transition-150-ease flex ${startWebsite && !(window.innerWidth <= 768) ? 'flexDirectionRow' : 'flexDirectionColumn'} `}>
                {!startWebsite &&
                    <div className='card-modal-header-container px-md'>
                         
                    <div className='card-modal-info-container flex flexDirectionColumn'>
                        <div className="card-modal-header">
                            <div className="card-modal-title">
                                {card.title}
                            </div>
                            {card.technologies && <div className='card-modal-technologies'>
                                {card.technologies.map((tech) => {
                                        return getIconComponent(tech)
                                })}
                            </div>}                            
                        </div>
                        <div className='card-modal-info-wrapper'>
                        <div className="card-modal-description">
                            {card.description}
                        </div>
                        
                        {card.caution && <div className={`card-caution`}>{card.caution}</div>}
                        </div>
                    </div>
                    </div>
                }
                <div className={`transition-150-ease card-links-list ${startWebsite ? `modal-sidebar ${window.innerWidth <= 768 ?'': 'px-md'}` : 'absolute'}`}>
                    <Tooltip title={startWebsite ? 'Open In New Window' : 'Start Website'} arrow placement='right'>
                        {card?.projectLink ? 
                            <div className="project-link" onClick={() => handleStartWebsite()}>
                                {startWebsite ? 
                                    <ArrowOutwardRounded/>
                                    :
                                    <>Open Project Website <PlayArrowRoundedIcon/></>
                                }
                            </div> : 
                            <></>
                        }
                    </Tooltip>
                    <Tooltip title='Open Github Repository' arrow placement='right'>
                        {card?.githubLink ? 
                            <div className='github-link' onClick={() => handleRedirect(card.githubLink)}>
                                {startWebsite ? 
                                <OpenInNewRoundedIcon sx={{width: '20px'}}/>
                                :
                                <><div className='flex flexDirectionRow gp-sm align-c jc-c'><GithubIcon/> Go to Repository</div> <OpenInNewRoundedIcon sx={{width: '20px'}}/></>}
                            </div>:<></>
                        }
                    </Tooltip>
                </div>
                {startWebsite ? 
                    isLoading ?
                    <div className='loading'>
                        <div class="meter">
                            <span style={{width: '100%'}}><span class="progress"></span></span>
                        </div>
                    </div>
                    :
                    <div className="website-container">
                        <iframe src={linkToShow} style={{width: '100%', height: '100%'}}/>
                    </div>
                :
                <></>    
                }
            </div>
            </div>
        </Modal> 
    </div>
  )
}

export default Card