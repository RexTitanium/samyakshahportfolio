import React from 'react'
import {CssIcon, GitIcon, PythonIcon, NodeIcon, TfIcon, HtmlIcon, ReactIcon, ExpressIcon, JsIcon, MongoIcon, OpenCVIcon} from '../../assets/svg/skills/SkillIcons.tsx'

function AboutMe({props}) {
    const intro = props.filtered_intro_data
    const story = props.filtered_story_data
  return (
    
    <div className={`non-story flex ${window.innerWidth <= 768 ? 'flexDirectionColumn' : 'flexDirectionRow'} jc-c align-c`}>
      <div className='flex flexDirectionColumn gp-md align-c'>
        <div className='profile-picture-container'>
          <img src='https://firebasestorage.googleapis.com/v0/b/samyakshahportfolio.appspot.com/o/Samyak.jpg?alt=media&token=4b1d776b-f8d7-417a-99e4-c071894a4a5d' className='profile-picture'/>
        </div>
        <div className='aboutme-desc-container'>
          <div className="aboutme-desc-intro">
            {intro.join(' ')}  
          </div>
          <div className='aboutme-desc-story'>
            <div className="aboutme-story-header">
              My Story?
            </div>
            <div className="aboutme-desc-content">
              {story.join(' ')}
            </div>
          </div>
        </div>
      </div>
      <div className='top-skills flex jc-c align-c gp-md'>
        <div className='skill-row'>
          <div><CssIcon /> <div>CSS</div></div>
          <div><GitIcon/><div>Git</div></div>
          <div><PythonIcon/><div>Python</div></div>
        </div>
        <div className='skill-row'>
          <div><NodeIcon /> <div>Node</div></div>
          <div><TfIcon /> <div>TensorFlow</div></div>
          <div className='center-skill-div'>My Top Skills</div>
          <div><ReactIcon /> <div>React</div></div>
          <div><ExpressIcon /> <div>Express</div></div>
        </div>
        <div className='skill-row'>
          <div><HtmlIcon /> <div>HTML</div></div>
          <div><JsIcon/> <div>JavaScript</div></div>
          <div><MongoIcon/> <div>MongoDB</div></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe