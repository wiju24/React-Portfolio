import React, {useState} from 'react';

// --- Importing the Main page of the Portfolio --- //
import main from './pages/main';

// --- Importing the header and footer components throughout the Portfolio --- //
import header from './header';
import footer from './footer';

// --- Importing the specific pages throughout the Portfolio --- //
import about from './pages/About-Me';
import portfolio from './pages/portfolio';
import resume from './pages/resume';
import socials from './pages/socials';

// --- Rendering the pages and returning current pages --- //

function container () {
    const [currentPage, setCurrentPage] = useState('main');

    const renderMain = () => {
        if (currentPage === 'main') {
            return <main/>;
        }

        if (currentPage === 'about') {
            return <About-Me/>;
        }

        if (currentPage === 'portfolio') {
            return <portfolio/>;
        }

        if (currentPage === 'resume') {
            return <resume/>;
        }

        if (currentPage === 'socials') {
            return <socials/>;
        }
    }

    const managePageChange = (page) => setCurrentPage(page);

    return (
        <div class= "App">
            <div>
                <header currentPage={currentPage} managePageChange={managePageChange}/>
            </div>

            <div>
                {renderMain()}
            </div>

            <div>
                <footer/>
            </div>
        </div>
    )
}

export default container;