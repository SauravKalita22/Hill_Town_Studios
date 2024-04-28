import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../assets/logo.svg';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMobileMenu(){
        setIsOpen(!isOpen);
    }
    return (
        <header className="bg-gray-100">
            <nav className="md:flex md:justify-center text-lg py-6 font-sans font-semibold">        
            <div className="flex md:flex md:items-center -my-6">
            <button className="block md:hidden" onClick={toggleMobileMenu}>
                {isOpen ? (
                    <Hamburger size={20} color="#333" duration={0.8} toggled={isOpen} toggle={toggleMobileMenu} />
                ) : (
                    <Hamburger size={20} color="#333" duration={0.8} toggled={isOpen} toggle={toggleMobileMenu} />
            )}
            </button>
            <div className="container flex flex-row items-center justify-center md:hidden">
            <Link to="/">
                <img src={logo} alt="Logo" className="w-20 mr-6"/>
            </Link>
            </div>
            </div>
            <ul className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                <li className="py-2 px-4 lg:px-8"><Link to="/">Home</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/OurServices">Our Services</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/OurWork">Our Work</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/BookOnline">Book Online</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/Blog">Blog</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/AboutUs">About Us</Link></li>
                <li className="py-2 px-4 lg:px-8"><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
        </nav>
        </header>
  )
}
