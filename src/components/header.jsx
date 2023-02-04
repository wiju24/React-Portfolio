import React from 'react';

function header ({managePageChange}) {
    return (
    <div class="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#about" onClick= {() => managePageChange('about')}>
                <i class="fas fa-home"></i>
                <p>About Me</p>
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick= {() => managePageChange('portfolio')}>
                <i class="fas fa fa-dashboard"></i>
                <p>Portfolio</p>
              </a>
            </li>
            <li>
              <a href="#resume" onClick= {() => managePageChange('resume')}>
                <i class="fas fa-line-chart"></i>
                <p>Resume and Cover Letter</p>
              </a>
            </li>
            <li>
              <a href="#socials" onClick= {() => managePageChange('socials')}>
                <i class="fas fa-newspaper-o"></i>
                <p>Socials</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>  
    )
}

export default header