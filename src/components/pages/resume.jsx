import React from "react";


import Resu from '../Assets/files/resume.pdf'
import Cover from '../Assets/files/cover.pdf'

function Resume () {
    return (
        <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Documents</h1>
          <p class="lead text-muted">If you click on the respective buttons, you will get the following documents.</p><p>
            <a Doc={Resu} class="btn btn-primary my-2">Resume</a>
            <a Doc={Cover} class="btn btn-secondary my-2">Cover Letter</a>
          </p>
        </div>
      </div>
    )
}

export default Resume;