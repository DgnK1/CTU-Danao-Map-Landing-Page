import React from 'react';

function PossibilitiesSection() {
    return(
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
    );
};

export default PossibilitiesSection;