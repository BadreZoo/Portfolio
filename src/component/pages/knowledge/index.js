import React from 'react'
import './style.scss'
import data from '../../../skills.json'
const Knowledge = () => {
  return (
    <section id='skills-container'>
        <div className="skills-title">
            <h1>Jetez un œil à mes compétences.</h1>
            <p>Ce sont mes compétences et cela contient toutes les technologies <br />
               et les langages de programmation que j'ai appris jusqu'à présent. <br />
                J'apprends constamment, donc je peux mettre à jour cette section plus souvent.</p>
        </div>
      
        <div className="skills">
         
         {data.map((skill)=>(
          <div className="skill-container">
            <img src={skill.img} height="30px" alt="" />
            <p>{skill.name}</p>
          </div>
         ))}
         
        </div>
    </section>
  )
}

export default Knowledge