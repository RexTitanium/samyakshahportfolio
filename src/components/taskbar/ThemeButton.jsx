import React, {useContext} from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function ThemeButton() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleTheme = () => {
        toggleDarkMode();
    }

  return (
    <div className='DarkThemeButton'>
        <button className={`theme-btn${darkMode ? ` btn-dark` : ' btn-light'}`} onClick={handleTheme}>
            {darkMode ? 
            <><DarkModeOutlinedIcon/></>
            : <><LightModeOutlinedIcon/></>    
        }
        </button>
    </div>
  )
}

export default ThemeButton