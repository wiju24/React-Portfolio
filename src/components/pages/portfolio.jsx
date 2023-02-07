import React from "react";

import Party from '../Assets/images/party.jpg'
import Port from '../Assets/images/port.avif'
import Social from '../Assets/images/social.png'

function Portfolio () {
    return (
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={Social} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Social Network API</text></svg>

                <div class="card-body">
                <p class="card-text">This application is a Social Network application using the API backend of MongoDB and Insomnia</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" href= "https://github.com/wiju24/Social-Network-API" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
                </div>
            </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={Port} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">React Portfolio</text></svg>

            <div class="card-body">
              <p class="card-text">This application is a Personal Portfolio using the Front end technology of React.js</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" href = "https://github.com/wiju24/React-Portfolio" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={Party} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">PartyPlanner</text></svg>

            <div class="card-body">
              <p class="card-text">This application is a Party Planner application with a Full-Stack technology.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" href = "https://github.com/wiju24/Party-planner" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Portfolio;