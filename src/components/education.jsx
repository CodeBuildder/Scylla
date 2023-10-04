import Slide from "react-reveal/Slide";

export default function Education() {
  return (
    <section id="education">
      <div className="inner-width">
        <h1 className="title">Education</h1>
        <div className="section-title"></div>

        <div className="time-line">
          <Slide left>
            {/* <div className="block">
              <h4>Indian School Muscat</h4>
              <h3>2017-2019</h3>
              <p>
                <i>High School Diploma</i>
              </p>
              <p>
                <ul type="disc">
                  <br></br>
                  <li>
                    Represented the Indian School Muscat U-17 Basketball team.
                  </li>
                </ul>
              </p>
            </div> */}
            <div className="block">
              <h4>Boston University</h4>
              <h3>2023-2025</h3>
              <p>
                <i>Master of Science in Computer Information Systems</i>
              </p>
              <p>
                <ul type="disc">
                  <br></br>
                  Progressing each day, you never know, the next time you have a
                  look at this, it just might be full with achievements!
                </ul>
              </p>
            </div>
          </Slide>
          <Slide left>
            <div className="block">
              <h4>SRM University</h4>
              <h3>2019 - 2023</h3>
              <p>
                <i>Bachelor of Technology in Computer Science Enginnering </i>
              </p>
              <p>
                <ul type="disc">
                  <br></br>
                  <li>
                    Head of Web and Application at IEEE SRM Student Branch
                  </li>
                  <li>
                    Head of Technical and Advisory President at Salesforce
                    Student Chapter
                  </li>
                  <li>Completed and Worked on 3 Research based Projects</li>
                  <li>
                    {" "}
                    Successfully published 2 papers at IEEE Xplore and Spring
                    CCIS
                  </li>
                </ul>
              </p>
            </div>
          </Slide>
          <Slide left>
            <div className="blockmid">
              <h4>Additional Acheivements</h4>
              <p>
                <ul type="disc">
                  <br></br>
                  <li>
                    Partcipated in the 2015-16 NBA Camp held in Chennai, India.
                  </li>
                  <li>
                    Took part in the 30 days Google Cloud Camp, organized by
                    Google Cloud.
                  </li>
                  <li>
                    Successfully finished both the Cloud Learning Track and
                    Machine Learning Track in 20 days.
                  </li>
                </ul>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
