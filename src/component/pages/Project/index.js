import React from 'react'
import { Button } from 'semantic-ui-react'
import trvlsquad from './travelsquad.png'
import githubfinder from './Capture d’écran 2023-08-24 131521.png'
import './style.scss'
const Project = () => {
  return (
    <section id="project-container">
        <div className="project-main-title">
            <h1>Voici Mes Project(s).</h1>
            <p>Voici quelques projets que jais pu faire nottament en groupe durant ma foramtion sur les quels j'ai travaillé. <br />
            J'ai créé quelques projets qui m'aident à mieux comprendre la technologie que j'utilise (la suite est a venir⏳).</p>
        </div>
        <div className="projects">
            <div className="project">
                <img src={trvlsquad} height="130px" alt="" />
                <div className="project-desc">
                <h1>TravelSquad</h1>
                <p>TravelSquad est une application de mise en relation de voyageurs. Elle permet de réunir plusieurs personnes au sein d’un même groupe en fonction de leurs affinités et de leurs envies. Le groupe pourra alors se retrouver lors du voyage et ainsi profiter du lieu ensemble.</p>
                   </div>
                   <div className="redirect-project">
                   <Button primary ><a href="https://travelsquad.netlify.app/"  rel="noreferrer" target='_blank'> Live Website</a></Button>
                    
                   </div>
                   
                   
            </div>
            <div className="project">
                <img src={githubfinder} className='img-github' height="130px" alt="" />
                <div className="project-desc">
                <h1>GitHub Fidner</h1>
                <p>Explorez le monde de GitHub avec facilité grâce à GitHub User Searcher. Trouvez, découvrez et connectez-vous avec des utilisateurs GitHub en un clin d'œil.</p>
                   </div>
                   <div className="redirect-project">
                   <Button primary ><a href="https://findmyrepos.netlify.app/"  rel="noreferrer" target='_blank'> Live Website</a></Button>
                    
                   </div>
                   
                   
            </div>
           
            
        </div>
    </section>
  )
}

export default Project