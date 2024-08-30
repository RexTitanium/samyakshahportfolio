import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../../styles/contact.scss';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Tooltip } from '@mui/material';
import mojs from "@mojs/core";
function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })
  
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm('service_z6wraiv', 'template_waajedl', form.current,'w3nFg01_N5ium1Zii')
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
    setFormData({
      from_name: '',
      from_email: '',
      message: ''
    })
    window.alert('message sent successfully!')
  };
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={`contact-container fullDims flex ${window.innerWidth <= 768 ? 'flexDirectionColumn' : 'flexDirectionRow'} jc-c align-c  ${!darkMode && 'contact-container-light'}`}>
      <div className="contact-wrapper mail-details">
        <div>You can mail me at:</div>
        <Tooltip title='Open Mail' arrow placement='bottom' ><a href='mailto:s4samyak@gmail.com'>s4samyak@gmail.com</a></Tooltip>
      </div>
      {window.innerWidth <= 768 ? 
        <div className='hr'></div>
        : 
        <div className='vr'></div>}

      <div className="contact-wrapper flex flexDirectionColumn jc-c align-c gp-lg">
        <div className='contact-header'>
          Contact Me
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='input-label-container'>
            <label>Name</label>
            <input type="text" name='from_name' required placeholder='' value={formData.from_name} onChange={(e) => setFormData({...formData, from_name: e.target.value})}/>
          </div>
          <div className='input-label-container'>
            <label>Email</label>
            <input type="email" name='from_email' value={formData.from_email} onChange={(e) => setFormData({...formData, from_email: e.target.value})} required placeholder=''/>
          </div>
          <div className='input-label-container'>
          <label>Message</label>
          <textarea name="message" role='textbox' value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
          </div>
          <div className='form-submit-button'>
            <button className='submit-btn' id='submit-btn' type="submit" value="Send">
              <span className="text">SUBMIT</span>
              <div className="checkmark"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact