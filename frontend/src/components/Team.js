// src/components/Team.js
import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Sarthak Bhatt",
      designation: "Team Lead",
      image: "/img/sarthak.jpeg",
      socials: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Abhishek Bisht",
      designation: "AI Engineer",
      image: "/img/abhishek.jpeg",
      socials: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Vaibhav Pant",
      designation: "Backend Developer",
      image: "/img/vaibhav.jpeg",
      socials: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Aditya Khatri",
      designation: "Backend Developer",
      image: "/img/khatri.jpeg",
      socials: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "500px" }}>
          <h6 className="text-success text-uppercase">हमारी टीम</h6>
          <h1 className="display-5">KrishiAI की प्रोफेशनल टीम</h1>
        </div>

        <div className="row g-5">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="row g-0 shadow rounded overflow-hidden">

                {/* Image */}
                <div className="col-10">
                  <div style={{ position: "relative", height: "360px" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: "12px 16px",
                        background: "#1B5E20",
                      }}
                    >
                      <h4 className="text-white mb-0">{member.name}</h4>
                      <span className="text-white">
                        {member.designation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-light py-5">

                    <a
                      className="btn rounded-circle bg-white shadow"
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fab fa-linkedin-in text-success"></i>
                    </a>

                    <a
                      className="btn rounded-circle bg-white shadow"
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fab fa-instagram text-success"></i>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
