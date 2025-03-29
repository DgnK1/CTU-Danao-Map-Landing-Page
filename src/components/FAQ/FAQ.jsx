import React, { useState } from "react";

function GallerySection() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="FAQ mt-16 mb-16 px-4 py-4 max-w-4xl mx-auto
    justify-center items-center">
      <p className="text-xl text-center font-medium text-gray-900 tracking-wide 
      bg-gray-200 rounded-[25px] px-6 py-3 mb-12 mx-auto w-fit">
        FAQ
      </p>
      <header>
        <h1 className="text-5xl font-semibold text-gray-900 tracking-wide text-center mb-12">
          Have Any <h1 className="inline-block text-red-600">Questions?</h1>
        </h1>
        <p className="text-xl font-medium text-gray-600 tracking-wide text-center mb-6">
          Find the answers here
        </p>
      </header>

      <div className="max-w-3xl justify-center items-center mx-auto mb-12 bg-white rounded-lg shadow-md p-6">
        <div id="accordion-flush">
          {[
            {
              title: "What is CTU Danao Map Directory?",
              content: (
                <>
                  <p className="mb-2 pl-8 pr-8 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tempore minus vero accusamus libero? Reprehenderit placeat ipsa officiis 
                    ab doloribus impedit illo facere, quam magnam similique ratione laboriosam asperiores animi nesciunt.
                  </p>
                  <p className="text-gray-500 pl-8 pr-8 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                      get started
                    </a>{" "}
                    and start using our map.
                  </p>
                </>
              ),
            },
            {
              title: "How to use it because I am a dumbass?",
              content: (
                <>
                  <p className="mb-2 pl-8 pr-8 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tempore minus vero accusamus libero? Reprehenderit placeat ipsa officiis 
                    ab doloribus impedit illo facere, quam magnam similique ratione laboriosam asperiores animi nesciunt.
                  </p>
                  <p className="pl-8 pr-8 text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                      get started
                    </a>{" "}
                    and start using our map.
                  </p>
                </>
              ),
            },
            {
              title: "How do I get started?",
              content: (
                <>
                  <p className="pl-8 pr-8 mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tempore minus vero accusamus libero? Reprehenderit placeat ipsa officiis 
                    ab doloribus impedit illo facere, quam magnam similique ratione laboriosam asperiores animi nesciunt.
                  </p>
                  <p className="pl-8 pr-8 text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                      get started
                    </a>{" "}
                    and start using our map.
                  </p>
                </>
              ),
            },
          ].map((item, index) => (
            <div key={index}>
              <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right 
                text-gray-500 border-b-4 border-gray-900 bg-gray-100 dark:text-gray-700 dark:border-gray-600 gap-16 mb-2`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index}
              >
                <span
                  className={`${
                    activeAccordion === index ? "font-bold text-green-700" : "font-medium"
                  }`}
                >
                  {item.title}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform transition-transform duration-500 ${
                    activeAccordion === index ? "rotate-90" : "rotate-0"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  activeAccordion === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-300">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;