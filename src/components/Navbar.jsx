import logo from "../assets/MHlogo.png"

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return(
        <nav className="mb-20 flex items-center justify-between py-6">

            <div className="flex flex-shrink-0 items-center">
                <img className="w-16 opacity-80" src={logo} alt="logo"/>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/mayurhedaoo100" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/hedaoomayur/" target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/hedaoomayur/" target="_blank"><FaInstagram/></a>
                <a href="https://x.com/HedaooMayur" target="_blank"><FaSquareXTwitter/></a>
            </div>
        </nav>
    )
};

export default Navbar;