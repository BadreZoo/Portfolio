import './App.scss'
import { Icon } from 'semantic-ui-react'
import Presentation from '../pages/Presentation';
import Knowledge from '../pages/knowledge';
import Exp from '../pages/Exp';
import Project from '../pages/Project';
import AboutMe from '../pages/AboutMe';
import Footer from '../pages/Footer';
import emailjs from '@emailjs/browser';
import React, { useRef,useState } from 'react';

function App() {
  const [toggleContact,setToggleContact]=useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_miofym9',
    'template_dq22ah7',
    form.current,
     'Nzk5Axg8ru41j4ZAh')

      .then((result) => {
          console.log(result.text);
          alert("message envoyé")
      
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (

    <div id={`App ${toggleContact ? "Active" : "disabled"}`} >

<nav className="navbar">
        <div className="logo-nav">Badre.</div>
        <ul className="nav-link">
          <li> <a href="/">Home</a></li>   
          <li><a href="#skills-container"> skills</a></li>
          <li> <a href="#project-container">Projects</a></li>
          <li> <a href="#aboutme" >About me</a></li>
        </ul>
        
        <button className='mecontacter-btn' onClick={()=>setToggleContact(!toggleContact)}>Me contacter</button>
       
       
      </nav>
     
        {toggleContact &&
        
         <div className="toggle-contactme" >
          <div className="close-div" onClick={()=>setToggleContact(false)}>
                <Icon className='close-icon' size='big' disabled name='delete' />
          </div>

          <h1 className='title-contactme'>Contact me</h1>
           <form className='form-contact' ref={form} onSubmit={sendEmail} >
         <label>Name</label>
         <input type="text" name="user_name" />
         <label>Email</label>
         <input  type="email" name="user_email" />
         <label>Message</label>
    <textarea  name="message">
    </textarea>
         <div className="send-btn">
         <input className='input-sendemail' type="submit" value="Send" />
         </div>
       </form>
      
       </div>}
      

<Presentation />
<Knowledge/>
<Exp/>
<Project/>
<AboutMe/>
<Footer/>

    </div>
  );
}

export default App;

 



      