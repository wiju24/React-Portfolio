import React from 'react';

// --- Importing images into the carousels for each of the applications --- //
import social from '../Assets/images/social.png';
import port from '../Assets/images/port.avif';
import party from '../Assets/images/party.jpg';

function portfolio () {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src= {port} class="d-block w-100" alt="Display profile"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Portfolio Using React</h5>
                    <p>Created a personal portfolio using React.js functionality.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src= {social} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Social Network API </h5>
                    <p>Social Network Application using API functionality from the NoSql MongoDB/</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src= {party} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Party Planner</h5>
                    <p>A Full-Stack application that can allow users to manage all type of venue requirements under one platform.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default portfolio;