import React, { useEffect } from 'react';
import './Landing.css';
function Landing() {

    // Gallery
    useEffect(() => {
         
        const backBtn = document.getElementById("backBtn");
        const nextBtn = document.getElementById("nextBtn");
        const gallery = document.querySelector(".gallery");

        const scrollAmount = gallery.offsetWidth * 0.6;

        function updateButtonState() {
            backBtn.style.visibility = gallery.scrollLeft > 0 ? "visible" : "hidden";
            nextBtn.style.visibility = 
                gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth 
                ? "visible" 
                : "hidden";
        }

        backBtn.addEventListener("click", () => {
            gallery.scrollBy({
                left: -scrollAmount, 
                behavior: "smooth",  
            });
        });

        nextBtn.addEventListener("click", () => {
            gallery.scrollBy({
                left: scrollAmount,  
                behavior: "smooth", 
            });
        });

        gallery.addEventListener("scroll", updateButtonState);
        window.addEventListener("resize", updateButtonState);

        updateButtonState();

        return () => {
            backBtn.removeEventListener("click", () => {
                gallery.scrollBy({
                    left: -scrollAmount, 
                    behavior: "smooth",  
                });
            });

            nextBtn.removeEventListener("click", () => {
                gallery.scrollBy({
                    left: scrollAmount,  
                    behavior: "smooth", 
                });
            });

            gallery.removeEventListener("scroll", updateButtonState);
            window.removeEventListener("resize", updateButtonState);
        };
    }, []);

    useEffect(() => {
        const accordions = document.querySelectorAll(".accordion");
        const image = document.getElementById("accordionImage");

        if (accordions.length > 0) {
            const firstAccordion = accordions[0];
            const initialImage = firstAccordion.getAttribute("data-image");
            if (initialImage) {
                image.src = initialImage;
            }
        }

        accordions.forEach((accordion) => {
            accordion.addEventListener("click", function () {
                accordions.forEach((item) => {
                    if (item !== this) {
                        item.classList.remove("active");
                        item.nextElementSibling.classList.remove("active");
                        setTimeout(() => {
                            item.nextElementSibling.style.maxHeight = null;
                        }, 400); 
                    }
                });

                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                panel.classList.toggle("active");

                if (panel.style.maxHeight) {
                    setTimeout(() => {
                        panel.style.maxHeight = null;
                    }, 400); 
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }

                const newImage = this.getAttribute("data-image");
                if (newImage) {
                    image.style.opacity = 0;
                    setTimeout(() => {
                        image.src = newImage;
                        image.style.opacity = 1;
                    }, 400); 
                }
            });
        });

        return () => {
            accordions.forEach((accordion) => {
                accordion.removeEventListener("click", function () {
                });
            });
        };
    }, []);

    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item');
        const imageBackground = document.getElementById('imageBackground');
        const overlay = document.createElement('div'); 
        overlay.classList.add('image-overlay');
        imageBackground.parentElement.appendChild(overlay); 

        let activeItem = null; 

        gridItems.forEach((item) => {
            item.addEventListener('click', () => {
                const newImage = item.getAttribute('data-image');

                if (activeItem === item) {
                    imageBackground.classList.remove('active'); 
                    overlay.classList.remove('hidden'); 
                    activeItem = null; 
                } else {
                    imageBackground.style.backgroundImage = `url('${newImage}')`; 
                    imageBackground.classList.add('active'); 
                    overlay.classList.add('hidden'); 
                    activeItem = item; 
                }
            });
        });

        return () => {
            gridItems.forEach((item) => {
                item.removeEventListener('click', () => {
                });
            });
        };
    }, []);

    useEffect(() => {
        const navToggle = document.getElementById('navToggle');
        const navigation = document.querySelector('.navigation');

        navToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });

        return () => {
            navToggle.removeEventListener('click', () => {
                navigation.classList.toggle('active');
            });
        };
    }, []);

    return (
        <>
            {/* Navigation */}
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

            {/* Main Section */}
            <section className="main-container">
                {/* Background Image */}
                <div className="image-background" id="imageBackground"></div>

                {/* Header Section */}
                <header>
                    <p className="logo"><span className="brand">CTU Danao</span> Map Directory</p>
                    <h1>Made for work, <br /> designed to love</h1>
                    <p className="subtext">
                        Streamline workflows and gain clear visibility across teams <br />
                        to make strategic decisions with confidence.
                    </p>
                    <a href="#" className="btn-primary">Get Started <i className="fa-solid fa-arrow-right"></i></a>
                </header>

                {/* Bottom Section */}
                <section className="bottom-section">
                    {/* Floating Content Section */}
                    <div className="floating-card">
                        <p className="card-title">Where would you like to navigate?</p>
                        <div className="grid-icons">
                            <div className="grid-item" data-image="/images/EN CME.jpg">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>New Admin Building</span>
                            </div>
                            <div className="grid-item" data-image="/images/EN-ROOMS.jpg">
                                <i className="fa-solid fa-gear"></i>
                                <span>CoE Building</span>
                            </div>
                            <div className="grid-item" data-image="/images/COMLAB 1.jpg">
                                <i className="fa-solid fa-book"></i>
                                <span>Education Building</span>
                            </div>
                            <div className="grid-item" data-image="/images/CTU-8-2.jpg">
                                <i className="fa-solid fa-gear"></i><i className="fa-solid fa-book"></i>
                                <span>CME/ COE Building</span>
                            </div>
                            <div className="grid-item" data-image="/images/CTU-37-2.jpg">
                                <i className="fa-solid fa-computer"></i>
                                <span>CoT Building</span>
                            </div>
                            <div className="grid-item" data-image="/images/CTU-24-2.jpg">
                                <i className="fa-solid fa-basketball"></i>
                                <span>Kadasig Gym</span>
                            </div>
                            <div className="grid-item" data-image="/images/CTU-10-2.jpg">
                                <i className="fa-solid fa-cogs"></i>
                                <span>CTU Facility Centrum</span>
                            </div>
                            <div className="grid-item" data-image="/images/CTU-35-2.jpg">
                                <i className="fa-solid fa-box"></i>
                                <span>Oval</span>
                            </div>
                        </div>
                        <a href="#" className="btn-secondary">Get Started <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </section>
            </section>

            {/* Categories Section */}
            <section className="ctu-gallery">
                <header>
                    <h1>Every building at CTU, covered</h1>
                    <p className="subtext">What do you want to find on ATIN Map Directory</p>
                </header>

                <div className="ctu-gallery-container">
                    <i className="fa-solid fa-arrow-left" id="backBtn"></i>
                    <div className="gallery">
                        <div>
                            {/* box1 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box2 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box3 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box4 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* box5 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box6 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box7 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>

                            {/* box8 */}
                            <div className="gallery-box">
                                <div className="gallery-img">
                                    <img src="/images/CENTRUM.jpg" alt="CENTRUM" />
                                </div>
                                <div className="gallery-text">
                                    <a className="gallery-box-p-name">CTU Centrum</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className="fa-solid fa-arrow-right" id="nextBtn"></i>
                </div>
            </section>
        
            <section className="poss">
                {/* Heading */}
                <header>
                    <h1>
                    “...it’s going to do things you didn’t <br/> think were possible.”
                    </h1>
                </header>
                
                {/* Accordion and Image Container */}
                <div className="accordion-layout">
                    {/* Accordion Section */}
                    <div className="accordion-container">
                    <button className="accordion active" data-image="images/CENTRUM.jpg">
                        Flexible to the extreme
                    </button>
                    <div className="panel active">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                
                    <button className="accordion" data-image="images/EN CME.jpg">
                        Adopted by anyone
                    </button>
                    <div className="panel">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                
                    <button className="accordion" data-image="images/PWD.jpg">
                        Open & extendable
                    </button>
                    <div className="panel">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    </div>
                
                    {/* Image Container */}
                    <div className="image-container">
                    <img src="images/OVAL.jpg" alt="Accordion Image" id="accordionImage"/>
                    </div>
                </div>
            </section>
            
            {/* Contributors */}
            <section className="meet-power">
                {/* Header */}
                <header>
                
                    <h1>Meet the power</h1>

                </header>

                <div className="power-container">
                    
                    {/* box1 */}
                    <div className="power-box">

                    <div className="power-text">
                        {/* Title */} 
                        <a href="#" className="power-box-p-name">
                        monday work management
                        </a>
                        {/* Rating */}
                        <span className="power-span"/>
                        <span>Seamlessly connect projects, resources, & goals</span>
                    </div>

                    <ul>

                        <li id="p-getStarted">
                        <a href="#">Get Started</a>
                        </li>
                        
                        <li id="p-learnMore">
                        <a href="mailto:example@mail.com">Learn More</a>
                        </li>
                    
                    </ul>

                    <div className="power-img">
                        <img src="images/CENTRUM.jpg"/>
                    </div>

                    </div>

                    {/* box2 */}
                    <div className="power-box">

                    <div className="power-text">
                        {/* Title */}
                        <a href="#" className="power-box-p-name">
                        monday work management
                        </a>
                        {/* Rating */}
                        <span className="power-span"/>
                        <span>Seamlessly connect projects, resources, & goals</span>
                    </div>

                    <ul>

                        <li id="p-getStarted">
                        <a href="#">Get Started</a>
                        </li>
                        
                        <li id="p-learnMore">
                        <a href="mailto:example@mail.com">Learn More</a>
                        </li>
                    
                    </ul>

                    <div className="power-img">
                        <img src="images/CENTRUM.jpg"/>
                    </div>

                    </div>

                    {/* box3 */}
                    <div className="power-box">

                    <div className="power-text">
                        {/* Title */}
                        <a href="#" className="power-box-p-name">
                        monday work management
                        </a>
                        {/* Rating */}
                        <span className="power-span"/>
                        <span>Seamlessly connect projects, resources, & goals</span>
                    </div>

                    <ul>

                        <li id="p-getStarted">
                        <a href="#">Get Started</a>
                        </li>
                        
                        <li id="p-learnMore">
                        <a href="mailto:example@mail.com">Learn More</a>
                        </li>
                    
                    </ul>

                    <div className="power-img">
                        <img src="images/CENTRUM.jpg"/>
                    </div>

                    </div>

                    {/* box4 */}
                    <div className="power-box">

                    <div className="power-text">
                        {/* Title */}
                        <a href="#" className="power-box-p-name">
                        monday work management
                        </a>
                        {/* Rating */}
                        <span className="power-span"/>
                        <span>Seamlessly connect projects, resources, & goals</span>
                    </div>

                    <ul>

                        <li id="p-getStarted">
                        <a href="#">Get Started</a>
                        </li>
                        
                        <li id="p-learnMore">
                        <a href="mailto:example@mail.com">Learn More</a>
                        </li>
                    
                    </ul>

                    <div className="power-img">
                        <img src="images/CENTRUM.jpg"/>
                    </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                
                <div className="footer-bottom">
                    <span className="footer-owner">Made By Going to Internet</span>
                    <span class="copyright">© Copyright 2024 - Going to Internet</span>
                </div>
                
            </footer>

        </>
    );
}

export default Landing;