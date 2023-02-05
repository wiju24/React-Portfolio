import React from 'react';

// --- icons used for social links --- //
import icons from 'https://icons8.com/';
import github from '../components/Assets/icons/github.gif';
import linkedin from '../components/Assets/icons/linkedin.gif';
import facebook from '../components/Assets/icons/facebook.gif';
import copyright from '../components/Assets/icons/copyright.png'

function footer () {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="copyright">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <icon icons={copyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Wiju's World. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/wiju24"
                    target="_blank"
                    className="item3"
                >
                    <icon icons={github} />
                </a>
                <a
                    href="https://www.linkedin.com/in/vijithiran-navajeevayokan/"
                    target="_blank"
                    className="item4"
                >
                    <icon icons={linkedin} />
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="item5"
                >
                    <icon icons={facebook} />
                </a>
            </div>
        </footer>
    )
}

export default footer;