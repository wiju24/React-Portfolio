import React from 'react';

import About from '../pages/About-Me'

function Main () {
    return (
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main class="px-3">
                <h1>Welcome to My World</h1>
                <p class="lead">Get a deeper dive of what the life of the Aspiring Developer Vijithiran is like!</p>
                <p class="lead">
                    <a href= {About} class="btn btn-lg btn-secondary fw-bold border-white bg-white">Let's Begin</a>
                </p>
            </main>
        </div>
    )
}

export default Main;