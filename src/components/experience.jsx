import React, { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";

const experienceDetails = [
  {
    experienceType: "INTERNSHIP",
    jobTitle: "Cloud Engineer Analyst",
    companyLogo:
      "https://www.startupjobsportal.com/wp-content/uploads/2022/07/1_y0S5M5eIaZnxzyyMqaDF6g.png",
    companyName: "Searce Inc",
    duration: "June 2022 - June 2023",
    descrption: [
      "Worked on 2+ Cloud Infrastructure Migration projects from India and US.",
      "Configured Google Managed Prometheus for Client.",
      "Developed Automation Shell scripts using Python.",
    ],
    skills:
      "Google Cloud Platform (GCP) · Docker · Python · Prometheus · Grafana · Terraform · Google Kubernetes Engine (GKE)",
  },
  {
    experienceType: "INTERNSHIP",
    jobTitle: "Software Developer",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP4H6tc1w8rWVrwRvD8sDaPl6IuypN5zq8w&usqp=CAU",
    companyName: "Norinco Pvt Ltd.",
    duration: "Nov 2021 - Jun 2022",
    descrption: [
      "Developed a scalable backend architecture using NestTS and PostgreSQL.",
      "Built a React-Native Mobile Application for various logistics purposes.",
    ],
    skills:
      "ReactJS · NestJS · PostgreSQL · React Native · TypeScript · Data Migration",
  },
  {
    experienceType: "INTERNSHIP",
    jobTitle: "Software Development Engineer",
    companyLogo:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/magnox.png",
    companyName: "Magnox Technologies Pvt Ltd.",
    duration: "Nov 2021 - Feb 2022",
    descrption: [
      " Single Handedly architected a robust and scalable Ed Tech platform using React-Native.",
      "Utilized best industry practices to develop and design the applications.",
    ],
    skills: "styled-components · React Native · JavaScript",
  },
  {
    experienceType: "INTERNSHIP",
    jobTitle: "Software Development Engineer",
    companyLogo:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/techanalogy.png",
    companyName: "Tech Analogy",
    duration: "Apr 2021 - Nov 2021",
    descrption: [
      " Managed and lead the team and developed registration portals with payment integration which were viewed by over 2000 people.",
      "One of the key speakers for the event Cloud Net, a 6 Day Cloud Computing Workshop. Mentored over 150 students from colleges across India.",
    ],
    skills:
      "ReactJS · Collaboration · Leadership · Team Management · React Native · TypeScript · Agile Methodology",
  },
  {
    experienceType: "COLLEGE ORGANIZATION",
    jobTitle: "Head of Web/App Development",
    companyLogo:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/IEEE.png",
    companyName: "IEEE SRM Student Branch",
    duration: "July 2021 - Present",
    descrption: [
      "Heading a Team of 35+ members",
      "Upskilling and mentoring on various Web-based projects.",
      "Organized 3+ workshops for the internal Team.",
      "Trained and Mentored the team for external workshops which had over 200+ participants.",
      "Directing and Guiding members from various tech domains for their personal upskillment.",
    ],
    skills:
      "Conflict Management · Adaptability · Leadership · Resourcefulness · Time management",
  },
  {
    experienceType: "COLLEGE ORGANIZATION",
    jobTitle: "Technical Executive",
    companyLogo:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/alexa.png",
    companyName: "Alexa Developers, SRMIST KTR",
    duration: "Dec 2020 - Oct 2021",
    descrption: [
      "Conducted a 2-day workshop on Fundamentals and some Advanced concepts of AWS.",
      "Working on the backend of the team website using Node and Typescript",
    ],
    skills: "Typescript · NodeJS ",
  },
  {
    experienceType: "COLLEGE ORGANIZATION",
    jobTitle: "Web Developer",
    companyLogo:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/geny.png",
    companyName: "GenY, SRMIST KTR",
    duration: "Nov 2020 - Nov 2021",
    descrption: [
      " Built a File-Uploader application using NodeJS and Multer as part of the team project.",
      "Worked on developing a CRM (MERN) as part of the team website.",
    ],
    skills: "ReactJS · GitHub",
  },
  {
    jobTitle: "",
    companyLogo:
      "https://images.unsplash.com/photo-1538589085637-33f227415e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNoaWV2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    companyName: "Achieving More Out There! 🎯",
    duration: "",
    descrption: [],
  },
];

export default function Experience() {
  const [experience, setExperiemce] = useState("");
  useEffect(() => {
    setExperiemce(experienceDetails);
  }, []);
  return (
    <section id="experience" class="dark">
      <div class="inner-width">
        <h1 className="title">Experience</h1>
        <div class="section-title"></div>
        <div class="services">
          {experience.length > 0 ? (
            experience.map((item) => (
              <Bounce bottom>
                <div className="experience">
                  <h4>{item.experienceType}</h4>
                  <h3>{item.jobTitle}</h3>
                  <div className="exp-head">
                    <img
                      src={`${item.companyLogo}`}
                      className="club-logo"
                      alt={item.companyName}
                    ></img>
                    <h2>{item.companyName}</h2>
                  </div>
                  <div className="content-box">
                    {item.duration}
                    <p className="exp-content">
                      {item.descrption.map((desc) => (
                        <ul type="disc">
                          <li className="span">{desc}</li>
                        </ul>
                      ))}
                    </p>
                    <div className="proj-det">
                      <p className="proj-stack">{item.skills}</p>
                    </div>
                  </div>
                </div>
              </Bounce>
            ))
          ) : (
            <Bounce bottom>
              <div className="experience">
                <h4>
                  Looks Empty? Don't think I got no experience, mgiht be some
                  issue with the servers. Let's have a cup of coffee, maybe I'll
                  blow your minds. ❤️‍🔥
                </h4>
              </div>
            </Bounce>
          )}
        </div>
      </div>
    </section>
  );
}
