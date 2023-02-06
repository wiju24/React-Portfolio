import React from 'react';
import dp from '../Assets/images/IMG_8492.jpg'
import to from '../Assets/images/toronto.jpg'
import current from '../Assets/images/currently.png'

function about () {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src= {dp} class="d-block w-100" alt="Display profile"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Vijithiran Navajeevayokan</h5>
                    <p>Aspiring Full-Stack Web Developer</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src= {to} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Born and Raised</h5>
                    <p>25 year old, born and raised in Toronto, Ontario, Canada.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src= {current} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>To get to this point</h5>
                    <p>Completed a Full Stack Web Development Certificate at the University of Toronto</p>
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

    );
}

export default about