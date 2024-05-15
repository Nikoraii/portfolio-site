import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <div id="footer">
            <div>
                Built with {<FaHeart />}  by Nikola Stancic
            </div>
            <div className="footer-icons">
                <div>
                    <a href="https://github.com/Nikoraii" target="_blank" rel="noreferrer">
                        {<FaGithub />}
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/nikola-dev/" target="_blank" rel="noreferrer">
                        {<FaLinkedin />}
                    </a>
                </div>
            </div>
            <div className="copyright">
                &copy;{currentYear}
            </div>
        </div>
    )
}