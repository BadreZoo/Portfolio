import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <footer id='footer'>
        <div className="footer-infos">
            <div className="footer-me">
                <h3>Badre.</h3>
                <p>Front end Developer</p>
            
            </div>
            <div className="footer-social-media">
                <h3>SOCIAL MEDIA</h3>
                <ul>
                    <li><a href="https://github.com/BadreZoo" target='_blank'  rel="noreferrer"> Github</a></li>
                    <li><a href="https://www.linkedin.com/in/badre-abouanane/" target='_blank'  rel="noreferrer"> Linkedin</a></li>
                </ul>
            </div>
            <div className="footer-explore">
                <h3>EXPLORE</h3>
                <ul>
                    <li> Home</li>
                    <li><a href="#skills-container"> Skills</a></li>
                    <li><a href="#project-container"> Project</a></li>
                    <li><a href="#aboutme"> About Me</a></li>
                </ul>
            </div>
           
        </div>

    </footer>
  )
}

export default Footer