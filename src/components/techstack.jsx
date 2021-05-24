import { HTMLTech } from "../Techstack/HTML";
import { CSSTech } from "../Techstack/CSS";
import { GoogleTech } from "../Techstack/GCP";
import { GitTech } from "../Techstack/git";
import { JavaTech } from "../Techstack/Java";
import { JavascriptTech } from "../Techstack/Javascript";
import { MongoTech } from "../Techstack/Mongo";
import { NodeTech } from "../Techstack/NodeJS";
import { PythonTech } from "../Techstack/Python";
import { ReactTech } from "../Techstack/ReactJS";
import { DockerTech } from "../Techstack/docker";
import { AWSTech } from "../Techstack/aws";
import { CppTech } from "../Techstack/cpp";
import { BootstrapTech } from "../Techstack/Bootstrap";
import { TypescriptTech } from "../Techstack/typescript";
import { SassTech } from "../Techstack/Sass";
import { JQueryTech } from "../Techstack/JQuery";
import { FirebaseTech } from "../Techstack/firebase";
import { TailwindcssTech } from "../Techstack/tailwindcss";
import { NextJSTech } from "../Techstack/nextjs";
import LightSpeed from "react-reveal/LightSpeed";

export default function Techstack() {
  return (
    <section id="tech" class="dark">
      <div class="inner-width">
        <h1 className="title">Tech Savvy</h1>
        <div class="section-title"></div>
        <div class="services">
          <LightSpeed left>
            <div className="service">
              <CppTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <JavaTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <PythonTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <HTMLTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <JQueryTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <BootstrapTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <CSSTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <SassTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <TailwindcssTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <NextJSTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <TypescriptTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <JavascriptTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <NodeTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <MongoTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <ReactTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <GitTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <FirebaseTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <GoogleTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <DockerTech />
            </div>
          </LightSpeed>
          <LightSpeed left>
            <div className="service">
              <AWSTech />
            </div>
          </LightSpeed>
        </div>
      </div>
    </section>
  );
}
