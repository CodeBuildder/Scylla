import Zoom from "react-reveal/Zoom";
import { SiMongodb } from "react-icons/si";
import { SiSocketDotIo } from "react-icons/si";

export default function Experience() {
  return (
    <section id="works" class="dark">
      <div class="inner-width">
        <h1 className="title">Projects</h1>
        <div class="section-title"></div>
        <div class="services">
          <Zoom left>
            <div className="project">
              <div className="proj-container">
                <div className="proj-head">
                  <img
                    src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/schduler.png"
                    className="proj-work"
                    alt="Scheduler"
                  ></img>
                  <h3>The Scheduler</h3>
                  <div className="proj-visit">
                    <a
                      className="proj-link1"
                      target="_blank"
                      href="https://github.com/Codebuilder2022/theTaskManagerApp"
                    >
                      {" "}
                      GitHub <i class="fab fa-github"></i>
                    </a>
                    <a
                      className="proj-link2"
                      target="_blank"
                      href="https://thetaskmanagerapp.herokuapp.com"
                    >
                      {" "}
                      Source <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="proj-content">
                  <p>
                    Only Backend built that allows users to CRUD their accounts
                    and allows them to have individual Profile pictures and save
                    tasks.
                  </p>
                  <p className="tech-head">TechStack:</p>
                  <div className="proj-det">
                    <p className="proj-stack">
                      <i class="fab fa-node"></i>
                    </p>
                    <p className="proj-stack">
                      <SiMongodb />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom left>
            <div className="project">
              <div className="proj-container">
                <div className="proj-head">
                  <img
                    src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/decidola.PNG"
                    className="proj-work"
                    alt="Decidola"
                  ></img>
                  <h3>Decidola</h3>
                  <div className="proj-visit">
                    <a
                      className="proj-link1"
                      target="_blank"
                      href="https://github.com/Codebuilder2022/Decidola-theDecisionMaker"
                    >
                      {" "}
                      GitHub <i class="fab fa-github"></i>
                    </a>
                    <a
                      className="proj-link2"
                      target="_blank"
                      href="https://ksdecidola.herokuapp.com/"
                    >
                      {" "}
                      Source <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="proj-content">
                  <p>
                    Really hard to decide which task to deal with first? Worry
                    Not. Meet Decidola!
                  </p>
                  <p className="tech-head">TechStack:</p>
                  <div className="proj-det">
                    <p className="proj-stack">
                      <i class="fab fa-react"></i>
                    </p>
                    <p className="proj-stack">
                      <i class="fab fa-sass"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom left>
            <div className="project">
              <div className="proj-container">
                <div className="proj-head">
                  <img
                    src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/chatter-bot.png"
                    className="proj-work"
                    alt="Chatter-Bot"
                  ></img>
                  <h3>Chatter-Bot</h3>
                  <div className="proj-visit">
                    <a
                      className="proj-link1"
                      target="_blank"
                      href="https://github.com/Codebuilder2022/ChatterBot2.0"
                    >
                      {" "}
                      GitHub <i class="fab fa-github"></i>
                    </a>
                    <a
                      className="proj-link2"
                      target="_blank"
                      href="https://thechatterbotks.herokuapp.com/"
                    >
                      {" "}
                      Source <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="proj-content">
                  <p>
                    A fun place to add friends or family to your own private
                    chat-room. Custom User-Display can be used.
                  </p>
                  <p className="tech-head">TechStack:</p>
                  <div className="proj-det">
                    <p className="proj-stack">
                      <i class="fab fa-node"></i>
                    </p>
                    <p className="proj-stack">
                      <SiSocketDotIo />
                    </p>
                    <p className="proj-stack">
                      <i class="fab fa-css3-alt"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom left>
            <div className="project">
              <div className="proj-container">
                <div className="proj-head">
                  <img
                    src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/project-rev/budgify.PNG"
                    className="proj-work"
                    alt="Budgify"
                  ></img>
                  <h3>Budgify</h3>
                  <div className="proj-visit">
                    <a
                      className="proj-link1"
                      target="_blank"
                      href="https://github.com/Codebuilder2022/ChatterBot2.0"
                    >
                      {" "}
                      GitHub <i class="fab fa-github"></i>
                    </a>
                    <a
                      className="proj-link2"
                      target="_blank"
                      href="https://ksbudgify.herokuapp.com/"
                    >
                      {" "}
                      Source <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="proj-content">
                  <p>
                    Difficult to manage and keep a account of your daily
                    expenses? Meet Budgify.
                  </p>
                  <p className="tech-head">TechStack:</p>
                  <div className="proj-det">
                    <p className="proj-stack">
                      <i class="fab fa-react"></i>
                    </p>
                    <p className="proj-stack">
                      <i class="fab fa-sass"></i>
                    </p>
                    <p className="proj-stack">
                      <i class="fab fa-google-plus"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
