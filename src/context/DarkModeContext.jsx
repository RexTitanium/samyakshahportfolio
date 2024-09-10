import { NavigateBeforeRounded, NavigateNextRounded } from "@mui/icons-material";
import React, {useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        if (window.location.pathname === '/home') {
            const div = document.getElementById('home-main')
            div.style.background = darkMode ? `radial-gradient(circle at center ,rgb(255, 242, 234) 1px 1px, #ffffff)` : `radial-gradient(circle at center ,rgb(28, 12, 0) 1px 1px, #000000)`
        }
        setDarkMode(!darkMode);
    };

    const navigate = useNavigate()
    const links = ['/home','/mystory','/work','/portfolio','/contactme']
    const handlePrev = () => {
        props.setMinimizeTaskbar(true)
        const index = links.findIndex((link) => link === window.location.pathname);
        if (index > 0) {
            navigate(links[index - 1]);
        } else {
            // Optional: Navigate to the last link if on the first one or do nothing.
            navigate(links[links.length - 1]);
        }
    };

    const handleNext = () => {
        
        props.setMinimizeTaskbar(true)
        const index = links.findIndex((link) => link === window.location.pathname);
        if (index < links.length - 1) {
            navigate(links[index + 1]);
        } else {
            // Navigate to the first link if the user is on the last link
            navigate(links[0]);
        }
    };

    return(
        <div className={`app-main ${darkMode ? 'app-dark' : 'app-light'}`}>
            {window.innerWidth > 768 && <div className={`arrow-left ${darkMode ? 'color-light' : 'color-dark'}`} onClick={()=> handlePrev()}><NavigateBeforeRounded /></div>}
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
            
            {window.innerWidth > 768 && <div className={`arrow-right ${darkMode ? 'color-light' : 'color-dark'}`} onClick={()=> handleNext()}><NavigateNextRounded /></div>}
        </div>
    )
};

export {DarkModeContext, DarkModeProvider};