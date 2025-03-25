import React from "react";

const MainSection = () => {
  return (
    <section className="main-container">
      {/* Background Image */}
      <div className="image-background" id="imageBackground"></div>

      {/* Header Section */}
      <header>
        <p className="logo">
          <span className="brand">CTU Danao</span> Map Directory
        </p>
        <h1>
          Made for work, <br /> designed to love
        </h1>
        <p className="subtext">
          Streamline workflows and gain clear visibility across teams <br />
          to make strategic decisions with confidence.
        </p>
        <a href="#" className="btn-primary">
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </a>
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
              <i className="fa-solid fa-gear"></i>
              <i className="fa-solid fa-book"></i>
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
          <a href="#" className="btn-secondary">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </section>
  );
};

export default MainSection;
