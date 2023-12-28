import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return (
        <footer>
            <a href="https://github.com/Lkruitwagen"><FontAwesomeIcon className="icon"  icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/lucaskruitwagen/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href="https://twitter.com/LucasKruitwagen"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <a href="https://scholar.google.com/citations?user=Jw0EwYEAAAAJ&hl=en"><FontAwesomeIcon className="icon" icon={faGoogleScholar} /></a>
        </footer>
    )
}

export default Footer