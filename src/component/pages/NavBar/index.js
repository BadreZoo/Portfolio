import './style.scss'
function NavBar() {
  return (
  

      <nav className="navbar">
        <div className="logo-nav">Badre.</div>
        <ul className="nav-link">
          <li> <a href="/">Home</a></li>   
          <li><a href="#skills-container"> skills</a></li>
          <li> <a href="#project-container">Projects</a></li>
          <li> <a href="#aboutme">About me</a></li>
        </ul>
        <button className='mecontacter-btn'>Me contacter</button>
       
      </nav>

    
  );
}

export default NavBar;
