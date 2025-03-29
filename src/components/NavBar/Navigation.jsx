import React, { useState } from 'react';

const Navigation = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearchBox = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center max-w-screen w-[90%] mx-auto px-4 py-4">
            {/* Logo */}
            <a href="index.html" className="logo">
                <img
                    className="max-w-40 max-h-10 object-contain"
                    src="images/OTN logo.png"
                    alt="logo"
                />
            </a>

            {/* Navigation Menu */}
            <ul
                className={`flex z-50 flex-col md:flex-row justify-center items-center pt-4 pb-4 absolute md:static top-16 left-0 w-full 
                    md:w-auto bg-white md:bg-transparent md:gap-4 md:p-4 transition-transform duration-300 ${
                    isMenuOpen ? '-translate-y-0' : '-translate-y-full'
                } md:translate-y-0`}
                id="menu"
            >
                <li>
                    <a
                        className="mx-4 p-2 rounded-full text-gray-500 font-medium transition-all 
                        duration-200 ease-in-out hover:text-white hover:bg-gray-600"
                        href="product-page.html"
                    >
                        Products
                    </a>
                </li>
                <li>
                    <a
                        className="mx-4 p-2 rounded-full text-gray-500 font-medium transition-all 
                        duration-200 ease-in-out hover:text-white hover:bg-gray-600"
                        href="#"
                    >
                        Solutions
                    </a>
                </li>
                <li>
                    <a
                        className="mx-4 p-2 rounded-full text-gray-500 font-medium transition-all 
                        duration-200 ease-in-out hover:text-white hover:bg-gray-600"
                        href="#"
                    >
                        Resources
                    </a>
                </li>
            </ul>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4" id="navBtns">
                {/* Search Button */}
                <button
                    onClick={toggleSearchBox}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                {/* Search Box */}
                {isSearchOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
                        <div className="relative bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-[600px]">
                            <button
                                onClick={toggleSearchBox}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                            <div className="flex items-center gap-2">
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
                                    type="text"
                                    placeholder="Search Location"
                                    required
                                />
                                <button
                                    className="w-12 h-12 flex justify-center items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Us and Get Started Buttons */}
                <ul className="hidden md:flex items-center gap-4">
                    <li>
                        <a
                            className="mx-4 p-2 rounded-full text-gray-500 font-medium border-blue-500 
                            transition-all duration-200 ease-in-out hover:bg-blue-600 hover:text-white"
                            href="mailto:example@mail.com"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Mobile Navigation Toggle */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden text-gray-500 hover:text-gray-700"
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;