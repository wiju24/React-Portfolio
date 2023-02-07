import React from 'react';

// --- icons used for socials --- //
import Github from '../components/Assets/icons/github.gif';
import Linkedin from '../components/Assets/icons/linkedin.gif';
import Facebook from '../components/Assets/icons/facebook.gif';
import Logo from '../components/Assets/icons/spyro.png'

function Footer () {
    return (
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use href={Logo}/></svg>
            </a>
            <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Wiju's World Incorp.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="https://github.com/wiju24"><svg class="bi" width="24" height="24"><use href={Github}/></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/vijithiran-navajeevayokan/"><svg class="bi" width="24" height="24"><use href={Linkedin}/></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/vij25669/"><svg class="bi" width="24" height="24"><use href={Facebook}/></svg></a></li>
            </ul>
        </footer>
        </div>
    )
}

export default Footer;