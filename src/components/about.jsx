import Bounce from "react-reveal/Bounce";

export default function About() {
  return (
    <section id="about">
      <div class="inner-width">
        <h1 className="title">About</h1>
        <h1 className="section-title"></h1>
        <Bounce left>
          <div className="about-content">
            <img
              src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/kkpic/kkpic.png"
              alt="Kaushik here!"
              className="about-pic"
            />
            <div className="about-text">
              <h2> Hi! I'm Kaushik.</h2>
              <br></br>
              <h3>
                <span>Passionate</span>
                <span>Progressive</span>
                <span>Persistent</span>
              </h3>
              <p>
                An ardent student pursuing Computer Science at the SRM
                University (Kattankulathur), India. Enthused and ferverous with
                learning the upcoming trends in the{" "}
                <em>contemporary world of computers'</em>. Proficient and Highly
                skilled in various programming langauges in my domain. Being
                diligent and conscientious is what makes me an efficient and
                effective natural team-player. An influential person with adept
                communication skills.
              </p>
            </div>
          </div>
        </Bounce>
      </div>
    </section>
  );
}
