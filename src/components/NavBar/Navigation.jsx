import React from 'react';

const Navigation = () => {
    return (
        <nav className="navigation">
            <a href="index.html" className="logo">
                <img src="images/OTN logo.png" alt="logo" />
            </a>

            <ul className="menu">
                <li>
                    <a href="product-page.html">Products</a>
                </li>
                <li>
                    <a href="#">Solutions</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
            </ul>

            <div className="nav-btns">
                {/* Search Box */}
                <input type="checkbox" id="nav-search-btn" />
                <label htmlFor="nav-search-btn" className="nav-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <form action="">
                        {/* close */}
                        <label htmlFor="nav-search-btn" className="nav-search-close">
                            <i className="fa-solid fa-xmark"></i>
                        </label>
                        <div className="nav-search-box">
                            <input type="text" placeholder="Search Location" required />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </label>

                <ul>
                    <li id="contactUs">
                        <a href="mailto:example@mail.com">Contact Us</a>
                    </li>
                    <li id="getStarted">
                        <a href="#">Get Started <i className="fa-solid fa-arrow-right"></i></a>
                    </li>
                </ul>

                <a href="#" className="nav-toggle" id="navToggle">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;