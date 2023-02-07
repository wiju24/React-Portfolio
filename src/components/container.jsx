import React, {useState} from 'react';

// --- Importing the Main page of the Portfolio --- //
import Main from '../components/pages/main';

// --- Importing the header and footer components throughout the Portfolio --- //
import Header from '../components/header';
import Footer from '../components/footer';

// --- Importing the specific pages throughout the Portfolio --- //
import About from '../components/pages/About-Me';
import Portfolio from '../components/pages/portfolio';
import Resume from '../components/pages/resume';

// --- Rendering the pages and returning current pages --- //

function Container () {
    const [currentPage, setCurrentPage] = useState('Main');

    const renderMain = () => {
        if (currentPage === 'Main') {
            return <Main />;
        }

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }

        if (currentPage === 'Resume') {
            return <Resume />;
        }

    }

    const managePageChange = (page) => setCurrentPage(page);

    return (
        <div class= "App">
            <div>
                <Header currentPage={currentPage} managePageChange={managePageChange} />
            </div>

            <div>
                {renderMain()}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Container;