import { useState } from "react"

import Resume from "../asset/resume.pdf"

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <h1><a href="#home">ES</a></h1>
                </div>
                <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                    <div className={
                        toggle ? "line1 line1-active" : "line1"
                    }></div>
                    <div className={
                        toggle ? "line2 line2-active" : "line2"
                    }></div>
                    <div className={
                        toggle ? "line3 line3-active" : "line3"
                    }></div>
                </div>
                <div className={
                    toggle ? "link-nav link-nav-active" : "link-nav"

                }>
                    <a href="#servis">Services</a>
                    <a href="#portofolio">Portofolio</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a href={Resume}><button className="btn-primer">Resume</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar