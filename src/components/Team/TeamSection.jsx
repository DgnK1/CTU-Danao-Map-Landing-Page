import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import social icons

function TeamSection() {
  // Array of team members
  const teamMembers = [
    {
      name: "Andre Jarl Aniana",
      role: "Lead Developer",
      image: "https://readymadeui.com/team-1.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe",
      },
    },
    {
      name: "Mel James Calzada",
      role: "Open-Source Contributor",
      image: "images/Sunshine.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Akihiro Akio",
      role: "Free Lance Developer",
      image: "images/Sunshine1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Pia Monteron",
      role: "Senior Developer",
      image: "images/SunshineCover.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Angelito Valderama",
      role: "UI/UX Designer",
      image: "images/Sunshine1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Julius Kon",
      role: "Graphics Designer",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Charles Zoi",
      role: "CHUP-API Developer",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Judito Pepito",
      role: "API Developer",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Kyle Sabatin",
      role: "Prototype Developer",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Francis Sampacs",
      role: "Data Specialist",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
    {
      name: "Kervin O. Calibo",
      role: "Assets Specialist",
      image: "https://readymadeui.com/team-2.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        twitter: "https://twitter.com/markadair",
        github: "https://github.com/markadair",
      },
    },
  ];

  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-xl text-center font-medium text-gray-900 tracking-wide 
          bg-gray-50 rounded-[25px] px-6 py-3 mb-6 mx-auto w-fit">
            Our Team
          </p>
          <h2 className="text-slate-900 text-6xl tracking-wide font-medium">Meet our team</h2>
          <p className="text-base font-medium text-gray-600 tracking-wide text-center mt-6 mb-6 pl-80 pr-80">
            A squad of web3 proffesionals, designers, and developers who are passionate about creating innovative solutions.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:ml-4 md:mr-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center border rounded-lg"
            >
              {/* Image Section */}
              <img
                src={member.image}
                alt={member.name}
                className="xl:w-auto xl:h-64 lg:w-60 lg:h-60 md:w-50 md:h-50 object-cover rounded-lg"
              />

              {/* Details Section */}
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-sm font-medium text-green-400">{member.role}</p>
                <p className="text-sm text-slate-900 mt-2 md:mr-4 md:text-xs">{member.description}</p>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start mt-4 space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-600"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;