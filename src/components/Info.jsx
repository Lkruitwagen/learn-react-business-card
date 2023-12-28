import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Info(){
    return (
        <div className="info--box">
            <div className="img--box"></div>
            <h1>Lucas Kruitwagen</h1>
            <span className="job--title">Chief Technology Officer</span>
            <a href="https://lkruitwagen.github.io/" className="personal--link">personal website</a>
            <div className="info--buttons">
                <a href="mailto:lucas.kruitwagen@gmail.com">
                    <button>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        <p className="button--label">Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/lucaskruitwagen/">
                <button className="button--secondary">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    <p className="button--label">Connect</p>
                </button>
                </a>
            </div>
        </div>
    )
}

export default Info