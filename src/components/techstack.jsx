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

export default function Techstack() {
  return (
    <section id="services" class="dark">
      <div class="inner-width">
        <h1 className="title">Tech Savvy</h1>
        <div class="section-title"></div>
        <div class="services">
          <div className="service">
            <CppTech />
          </div>
          <div className="service">
            <JavaTech />
          </div>
          <div className="service">
            <PythonTech />
          </div>
          <div className="service">
            <HTMLTech />
          </div>

          <div className="service">
            <JQueryTech />
          </div>
          <div className="service">
            <BootstrapTech />
          </div>
          <div className="service">
            <CSSTech />
          </div>

          <div className="service">
            <SassTech />
          </div>
          <div className="service">
            <TailwindcssTech />
          </div>
          <div className="service">
            <NextJSTech />
          </div>
          <div className="service">
            <TypescriptTech />
          </div>
          <div className="service">
            <JavascriptTech />
          </div>
          <div className="service">
            <NodeTech />
          </div>
          <div className="service">
            <MongoTech />
          </div>
          <div className="service">
            <ReactTech />
          </div>
          <div className="service">
            <GitTech />
          </div>
          <div className="service">
            <FirebaseTech />
          </div>
          <div className="service">
            <GoogleTech />
          </div>
          <div className="service">
            <DockerTech />
          </div>
          <div className="service">
            <AWSTech />
          </div>
        </div>
      </div>
    </section>
  );
}
