import Zoom from "react-reveal/Zoom";

export default function Experience() {
  return (
    <section id="services" class="dark">
      <div class="inner-width">
        <h1 className="title">Experience</h1>
        <div class="section-title"></div>
        <div class="services">
          <Zoom left>
            <div className="experience">
              <h4>COLLEGE CLUB</h4>
              <div className="exp-head">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/geny.png"
                  className="club-logo"
                  alt="GenY"
                ></img>
                <h2>GenY, SRMIST KTR</h2>
              </div>
              <div className="content-box">
                Nov 2020 - Present
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
                      Working with GenY Team on the Front-End and Back-end of
                      the team website.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom left>
            <div className="experience">
              <h4>COLLEGE CLUB</h4>
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
          </Zoom>
          <Zoom left>
            <div className="experience">
              <h4>INTERNSHIP</h4>
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
                      Developed the Front-End of the Events Portal.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom left>
            <div className="experience">
              <h1>Stay tuned for more!</h1>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
