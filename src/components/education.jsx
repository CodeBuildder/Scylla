import Slide from "react-reveal/Slide";

export default function Education() {
  return (
    <section id="education">
      <div className="inner-width">
        <h1 className="title">Education</h1>
        <div className="section-title"></div>

        <div className="time-line">
          <Slide left>
            <div className="block">
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
            </div>
          </Slide>
          <Slide left>
            <div className="block">
              <h4>SRM University3</h4>
              <h3>2019-2023</h3>
              <h5>Bachelor of Technology in Computer Science Enginnering.</h5>
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
                </ul>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
