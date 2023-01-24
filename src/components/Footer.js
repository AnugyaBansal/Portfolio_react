import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Sheopur(M.P)</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            1-2323-302-61
                        </h4>
                    </div>
                    <div className="email">
                        <a href="https://mail.google.com/mail/u/0/#inbox">
                            <h4>
                                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                bansalanugya66@gmail.com
                            </h4>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>
                        This is me Anugya Bansal. FullStack Developer Trainee at FunctionUp. I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <a href="https://www.linkedin.com/in/anugya-bansal-935761239/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
