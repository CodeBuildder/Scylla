import Typical from "react-typical";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default function Home() {
  return (
    <section id="home">
      <div className="inner-width">
        <div className="content">
          <h1>
            <Typical
              steps={[
                "Codebuilder",
                1500,
                "Insightful",
                1500,
                "Ingenious",
                1500,
                "Influential",
                1500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <div className="sm">
            <BootstrapTooltip title="Follow me @ Twitter">
              <a
                href="https://twitter.com/KashKS20"
                target="_blank"
                className="fab fa-twitter"
              ></a>
            </BootstrapTooltip>
            <BootstrapTooltip title="Connect with me @ Linkedin">
              <a
                href="https://www.linkedin.com/in/kaushikkums/"
                target="_blank"
                className="fab fa-linkedin-in"
              ></a>
            </BootstrapTooltip>
            <BootstrapTooltip title="Fork me @ Github">
              <a
                href="https://github.com/Codebuilder2022"
                target="_blank"
                className="fab fa-github"
              ></a>
            </BootstrapTooltip>
            <BootstrapTooltip title="View my CloudLabs  @ QwikLab">
              <a
                href="https://www.qwiklabs.com/public_profiles/d523be57-a399-4e30-aa43-fff446440f54"
                target="_blank"
                className="fab fa-google"
              ></a>
            </BootstrapTooltip>
          </div>
          <div className="buttons">
            <a href="#contact">Contact me</a>
            <a
              href="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/Resume/Kaushik's+Resume+Formal.pdf"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
