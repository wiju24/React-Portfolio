import React from 'react';

// --- Importing any icons displayed for the header --- //
import Logo from '../components/Assets/icons/spyro.png';

// --- Importing any pages displayed for the header --- //
import About from '../components/pages/About-Me';
import Portfolio from '../components/pages/portfolio';
import Resume from '../components/pages/resume';
import Main from '../components/pages/main';



function Header () {
    return (
        <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use href={Logo}/></svg>
            <span class="fs-4">Wij's World</span>
          </a>
    
          <ul class="nav nav-pills">
            <li class="nav-item"><a href={Main} class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href={About} class="nav-link">About Me</a></li>
            <li class="nav-item"><a href={Portfolio}class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href={Resume} class="nav-link">Resume</a></li>
          </ul>
        </header>
      </div>
    )
}

export default Header;