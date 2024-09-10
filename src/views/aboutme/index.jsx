import React, { useContext, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import '../../styles/about.scss'
import { DarkModeContext } from '../../context/DarkModeContext'
import {removeDuplicates, introductionData, storyData, story_mode_data} from './data/data.jsx'
import AboutMe from './AboutMe.jsx'

function About({props}) {
  const {darkMode} = useContext(DarkModeContext)
  const [showStory, setShowStory] = useState(false)
  
  const filtered_intro_data = removeDuplicates(introductionData)
  const filtered_story_data = removeDuplicates(storyData, ['My Story?'])


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStory(true)
    }, 1000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [showStory])

  const handleTypingAnimationComplete =() => {
    props.setSkipToEnd(true)
  }

  return (
    <div className={`aboutpage-container ${darkMode ? 'color-light' : 'color-dark'} 
      fullDims
      flex
      jc-c
      align-c
    `}>
      {!props.skipToEnd &&
      <div className='about-div-wrapper'>
        {showStory &&
        <div>
          <div className='profile-picture-container'>
            <img src='https://firebasestorage.googleapis.com/v0/b/samyakshahportfolio.appspot.com/o/Samyak.jpg?alt=media&token=4b1d776b-f8d7-417a-99e4-c071894a4a5d' className='profile-picture'/>
          </div>
        <TypeAnimation
        sequence={[...story_mode_data, () => handleTypingAnimationComplete()]}
        speed={70}
        omitDeletionAnimation
        wrapper="span"
        cursor={true}
        style={{ fontSize: '20px', display: 'inline-block' }}
      />
      </div>}
      </div>}
      {props.skipToEnd &&
        <AboutMe props={{filtered_intro_data, filtered_story_data, darkMode}}/>
      }
    </div>
  )
}

export default About