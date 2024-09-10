import React, { useContext } from 'react'
import '../../styles/portfoliopage.scss'
import { DarkModeContext } from '../../context/DarkModeContext'
import { portfolio_data } from './data/data'
import Carousel from './carousel'

function Portfolio() {
  const {darkMode} = useContext(DarkModeContext)
  const {technical_skills, professional_experience, achievements_certifications} = portfolio_data
  return (
    <div className={`portfolio-container gp-lg`}>
      <div className={`generic-container  ${darkMode ? 'bg-dark-grey' : 'bg-light-grey'}`}>
        <div className={`textAlignCenter sub-title ${darkMode ? 'color-light' : 'color-dark'}`}>
            {technical_skills.title}
          </div>
          <div className={`carousel-container ${darkMode ? 'bg-dark': 'bg-light'}`}>
            <Carousel data={technical_skills} darkMode={darkMode}/>
          </div>
        </div>
      <div className={`generic-container ${darkMode ? 'bg-dark-grey' : 'bg-light-grey'}`}>
        <div className={`textAlignCenter sub-title ${darkMode ? 'color-light' : 'color-dark'}`}>
            {achievements_certifications.title}
        </div>
        <div className='flex flexDirectionColumn gp-md'>
            {achievements_certifications.list.map((item) => {
              return(
                <div className={`px-md br-sm ${darkMode ? 'bg-dark color-light' : 'bg-light color-dark'}`}>
                  {item}
                </div>
              )
            })
            }
        </div>
      </div>
      <div className={`generic-container ${darkMode ? 'bg-dark-grey' : 'bg-light-grey'}`}>
        <div className={`textAlignCenter sub-title ${darkMode ? 'color-light' : 'color-dark'}`}>
          {professional_experience.title}
        </div>
        {professional_experience.list.map((exp) => {
              return(
                <div className={`px-md br-sm ${darkMode ? 'bg-dark color-light' : 'bg-light color-dark'}`}>
                  <div className='flex flexDirectionRow jc-sb'>
                    <div>{exp.position} | {exp.location}</div>
                    <div>{exp.duration}</div>
                  </div> 
                  <div className='flex flexDirectionRow gp-md'>
                    <i>{exp.company} </i>
                    <img className='company-logo' style={{width: 'auto', height: '2vh'}} src={`/assets/images/${exp?.companyLogo}`} alt='company logo' />
                  </div>
                  <ul>
                    {exp.responsibilities.map((bp) => {
                      return(
                        <li>
                          {bp}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )
            })
            }
      </div>
    </div>
  )
}

export default Portfolio