import React, { useState } from "react";

const MainSection = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("/images/EN CME.jpg");
  const [isBlurred, setIsBlurred] = useState(true);

  const handleItemClick = (index, image) => {
    if (activeItem === index) {
      setActiveItem(null);
      setBackgroundImage("/images/EN CME.jpg");
      setIsBlurred(true);
    } else {
      setActiveItem(index);
      setBackgroundImage(image);
      setIsBlurred(false);
    }
  };

  return (
    <section className="max-w-376 relative bg-gray-100 margin-auto text-center overflow-hidden 
    mx-auto my-0 px-0 py-4 rounded-[2.5rem]">
      {/* Background Image */}
      <div
        id="imageBackground"
        className={`absolute top-[80%] left-[90%] transform -translate-x-1/2 
        -translate-y-[30%] w-[90%] h-1/2 bg-center bg-contain 
        bg-no-repeat transition-[background-image,filter] duration-1000 ease-in-out z-[1] ${
          isBlurred ? "blur-[10px]" : ""
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Header Section */}
      <header className="mb-2">
        <p className="text-base font-bold text-gray-700 mb-4">
          <span className="brand">CTU Danao</span> Map Directory
        </p>
        <h1 className="text-5xl font-extralight text-gray-900 tracking-wide text-center mb-12">
          Made for nav, <br /> designed to love
        </h1>
        <p className="flex justify-center items-center text-base text-gray-700 mb-6">
          Streamline workflows and gain clear visibility across teams <br />
          to make strategic decisions with confidence.
        </p>

        <a href="#" className="inline-block bg-green-600 text-white text-base no-underline 
        font-semibold transition-colors duration-300 transform hover:bg-blue-900 focus:outline-none focus:ring
         focus:ring-blue-300 focus:ring-opacity-80 px-6 py-3 rounded-[25px]
        mx-0 my-4" 
        id="buttonPrimary">
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </a>
      </header>

      {/* Bottom Section */}
      <section className="relative flex justify-end items-end min-h-[500px] overflow-hidden">
        {/* Floating Content Section */}
        <div className="relative bg-white p-6 rounded-xl shadow-[10px_10px_4px_4px_rgba(194,14,14,1)] 
        z-10 max-w-104 text-center mr-16 mb-16">
          <p className="text-base font-semibold mb-6 text-gray-700">Where would you like to navigate?</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "New Admin Building", icon: "fa-briefcase", image: "/images/CTU-2-2.jpg" },
              { label: "CoE Building", icon: "fa-gear", image: "/images/CTU-5-2.jpg" },
              { label: "Education Building", icon: "fa-book", image: "/images/CTU-14-2.jpg" },
              { label: "CME/ COE Building", icon: "fa-gear fa-book", image: "/images/CTU-8-2.jpg" },
              { label: "CoT Building", icon: "fa-computer", image: "/images/CTU-37-2.jpg" },
              { label: "Kadasig Gym", icon: "fa-basketball", image: "/images/CTU-24-2.jpg" },
              { label: "CTU Facility Centrum", icon: "fa-cogs", image: "/images/CTU-10-2.jpg" },
              { label: "Oval", icon: "fa-box", image: "/images/CTU-35-2.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                id="grid-item"
                className={`bg-gray-100 text-gray-700 p-2 rounded-md text-center text-base 
                  font-medium flex flex-col justify-center
                items-center gap-2 transition-all duration-500 ease-in-out transform cursor-pointer ${
                  activeItem === index ? "scale-105" : "hover:scale-105"
                }`}
                data-image={item.image}
                onClick={() => handleItemClick(index, item.image)}
              >
                <i className={`text-blue-500 text-base fa-solid ${item.icon}`}></i>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="inline-block bg-green-600 text-white text-base no-underline 
          font-semibold transition-colors duration-300 transform hover:bg-blue-900 focus:outline-none focus:ring
         focus:ring-blue-300 focus:ring-opacity-80 px-6 py-3 rounded-[25px]
          mx-0 my-4" 
          id="buttonSecondary">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </section>
  );
};

export default MainSection;