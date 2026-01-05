import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1: Brand */}
                <div>
                    <h2 className="text-xl font-bold">MyWebsite</h2>
                    <p className="text-sm mt-2 text-gray-400">
                        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-400 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <ul className="flex gap-4 text-gray-400 text-xl">
                        <li><a href="#"><FaFacebook className="hover:text-white" /></a></li>
                        <li><a href="#"><FaTwitter className="hover:text-white" /></a></li>
                        <li><a href="#"><FaInstagram className="hover:text-white" /></a></li>
                        <li><a href="#"><FaLinkedin className="hover:text-white" /></a></li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
