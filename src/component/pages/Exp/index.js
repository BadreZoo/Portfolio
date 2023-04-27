import React from 'react'
import './style.scss'
const Exp = () => {
  return (
    <section className="exp-container">
        <div className="exp-main-title">
            <h1>Mes experience</h1>
            <h3>Ce sont les formations dans lesquelles j'ai travaillé et j'ai pu acquérir de l'expérience.</h3>
        </div>
            <div className="exp1">
                <div className="logo-exp1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" height="50px" alt="" />
                </div>
                <div className="exp1-text">
                    <div className="exp-title">
                        <h1>ÉCOLE O’CLOCK TÉLÉPRÉSENTIEL 798 HEURES</h1>
                        <h6>Developpeur web full stack</h6>
                    </div>
                    <p className='exp-desc' >
                    FORMATION DÉVELOPPEUR WEB ET WEB MOBILE NIVEAU V 3 mois de socle (HTML5, CSS3, JavaScript, PHP, MySQL) 1 mois de spécialisation en React.JS 1 mois de projet professionnalisant
                    </p>
                 
                </div>
                
            </div>
    </section>
  )
}

export default Exp