import Bounce from "react-reveal/Bounce";
import { useEffect, useState } from "react";

const projectDetails = [
  {
    projectImageURL:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/schduler.png",
    projectImageALT: "OffTP",
    projectName: "OffTP",
    projectGitLink: "https://github.com/Codebuilder2022/SIH2022",
    projectSourceLink: "",
    projectDescription:
      "Our mobile application generates OTP in areas with no cellular area using an Algorithm that we have developed. You can use our app to connect as many as government websites as you want and generated unique OTP for each of these platforms without the need of internet/cellular signal.",
    Techstack: "JavaScript · React-Native · React · Express ",
  },
  {
    projectImageURL:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/schduler.png",
    projectImageALT: "Post.io",
    projectName: "Post.io",
    projectGitLink: "https://github.com/Codebuilder2022/Post.io",
    projectSourceLink: "",
    projectDescription:
      "An online aggregator platform for logistics companies to let the customers choose the best service provider on the basis of rate/service quality/reach and transit time. Live rates, Comparison, Tracking of goods, and Documentation all in one portal.",
    Techstack: "React · MongoDB · Express · Node · TypeScript",
  },
  {
    projectImageURL:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/schduler.png",
    projectImageALT: "Servicio",
    projectName: "Servicio",
    projectGitLink: "https://github.com/Codebuilder2022/DevFest-Hack",
    projectSourceLink: "",
    projectDescription:
      "A MERN Stack Website that connects utility helpers and users. Using React with TailwindCSS in Typescript. Uses USSD service to allow access to users without Internet.",
    Techstack: "React · MongoDB · Express · Node · TypeScript",
  },
  {
    projectImageURL:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/schduler.png",
    projectImageALT: "Chatter-Bot",
    projectName: "Chatter-Bot",
    projectGitLink: "https://github.com/Codebuilder2022/ChatterBot2.0",
    projectSourceLink: "",
    projectDescription:
      "Using Socket.io and NodeJS, this open-sourced Chat Application can be integrated with any Web App to create a private end-to-end connection.",
    Techstack: "JavaScript · ReactJS · Socket.io",
  },
];

export default function Experience() {
  const [projectDetail, setProjectDetail] = useState("");
  useEffect(() => {
    setProjectDetail(projectDetails);
  }, []);
  return (
    <section id="works" class="dark">
      <div class="inner-width">
        <h1 className="title">Projects</h1>
        <div class="section-title"></div>
        <div class="services">
          {projectDetail.length > 0 ? (
            projectDetail.map((detail) => (
              <Bounce bottom>
                <div className="project">
                  <div className="proj-container">
                    <div className="proj-head">
                      {/* <img
                        src={detail.projectImageURL}
                        className="proj-work"
                        alt={detail.projectImageALT}
                      ></img> */}
                      <h3>{detail.projectName}</h3>
                      <div className="proj-visit">
                        <a
                          className="proj-link1"
                          target="_blank"
                          href={detail.projectGitLink}
                        >
                          {" "}
                          GitHub <i class="fab fa-github"></i>
                        </a>
                        <a
                          className="proj-link2"
                          target="_blank"
                          href={detail.projectSourceLink}
                        >
                          {" "}
                          View <i class="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                    <div className="proj-content">
                      <p>{detail.projectDescription}</p>
                      <p className="tech-head">TechStack:</p>
                      <div className="proj-det">
                        <p className="proj-stack">{detail.Techstack}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Bounce>
            ))
          ) : (
            <Bounce bottom>
              <div className="project">
                <div className="proj-container">
                  <div className="proj-head">
                    <h3>
                      Do not see any projects here? Might be something tweaky
                      wrong with the servers, please check out my GitHub
                      profile!
                    </h3>
                  </div>
                </div>
              </div>
            </Bounce>
          )}
        </div>
      </div>
    </section>
  );
}
