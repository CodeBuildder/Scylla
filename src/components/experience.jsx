import Bounce from "react-reveal/Bounce";

export default function Experience() {
  return (
    <section id="experience" class="dark">
      <div class="inner-width">
        <h1 className="title">Experience</h1>
        <div class="section-title"></div>
        <div class="services">
          <Bounce bottom>
            <div className="experience">
              <h4>COLLEGE CLUB</h4>
              <h3>Web/App Development Lead</h3>
              <div className="exp-head">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/IEEE.png"
                  alt="IEEE"
                  className="club-logo"
                ></img>
                <h2>IEEE SRM Student Branch</h2>
              </div>
              <div className="content-box">
                July 2021 - Present
                <p className="exp-content">
                  <ul type="disc">
                    <li className="span">
                      {" "}
                      Developed React-Native Application for team project.
                    </li>
                    <li className="span">
                      {" "}
                      Workshops and mentoring on various Web-based projects.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="experience">
              <h4>COLLEGE CLUB</h4>
              <h3>Technical Executive</h3>
              <div className="exp-head">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/alexa.png"
                  className="club-logo"
                  alt="Alexa"
                ></img>
                <h2>Alexa Developers, SRMIST KTR</h2>
              </div>
              <div className="content-box">
                Dec 2020 - Present
                <p className="exp-content">
                  <ul type="disc">
                    <li className="span">
                      Conducted a 2-day workshop on Fundamentals and some
                      Advanced concepts of AWS.
                    </li>
                    <li className="span">
                      Working on the backend of the team website using Node and
                      Typescript.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="experience">
              <h4>INTERNSHIP</h4>
              <h3>Software Developer</h3>
              <div className="exp-head">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/techanalogy.png"
                  alt="TA"
                ></img>
              </div>
              <div className="content-box">
                Apr 2021 - Present
                <p className="exp-content">
                  <ul type="disc">
                    <li className="span">
                      Developed the Front-End of the Events Portal.{" "}
                      <a href="https://events.techanalogy.org/">
                        @events-techanalogy.
                      </a>
                    </li>
                    <li className="span">
                      {" "}
                      Managed and oversaw the team for production-ready
                      projects.
                    </li>
                    <li className="span">
                      {" "}
                      Managed and lead the team and developed registration
                      portals with payment integration which were viewed by over
                      2000 people.{" "}
                    </li>
                    <li className="span">
                      One of the key speakers for the event Cloud Net, a 6 Day
                      Cloud Computing Workshop. Mentored over 150 students from
                      colleges across India.{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Bounce>

          <Bounce bottom>
            <div className="experience">
              <h4>COLLEGE CLUB</h4>
              <h3>Web Developer</h3>
              <div className="exp-head">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/geny.png"
                  className="club-logo"
                  alt="GenY"
                ></img>
                <h2>GenY, SRMIST KTR</h2>
              </div>
              <div className="content-box">
                Nov 2020 - Nov 2021
                <p className="exp-content">
                  <ul type="disc">
                    <li className="span">
                      Built a File-Uploader application using NodeJS and Multer
                      as part of the team project.
                    </li>
                    <li className="span">
                      Working with GenY Team on the Front-End and Back-end of
                      the team website.
                    </li>

                    <li className="span">
                      Worked on developing a CRM (MERN) as part of the team
                      website.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}
