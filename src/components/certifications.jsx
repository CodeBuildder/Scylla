import Bounce from "react-reveal/Bounce";
import TCSModal from "../content/tcsModal";
import GCPModal from "../content/gcpModal";
import NodeJSModal from "../content/nodeModal";
import ReactJSModal from "../content/reactModal";
import ACEModal from "../content/aceModal";

export default function Certification() {
  return (
    <section id="certification">
      <div className="inner-width">
        <h1 className="title">Certification</h1>
        <div className="section-title"></div>
        <div className="time-line">
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/tata.jpg"
                  alt="TCS"
                />
                <div className="info2">
                  <TCSModal />
                </div>
              </div>
              <h3> Career Edge - Knockdown the Lockdown</h3>
              <h6>Tata Consultancy Services</h6>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <img
                  src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/cloudlogo1.png"
                  alt="Google Cloud"
                />
                <div className="info2">
                  <GCPModal />
                </div>
              </div>
              <h3> #30DaysCloudGoogle</h3>
              <h6>Google Cloud </h6>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <img
                  src="https://play-lh.googleusercontent.com/VyIvp4Wl7DOFnIcsxrIw0pq43zUd8Yb4n96DpDRDrSsBkxIodDMMDfQk4XunNT5oDJ7Z=s180"
                  alt="NodeJS"
                  className="icon"
                />
                <div className="info2">
                  <NodeJSModal />
                </div>
              </div>
              <h3>Complete NodeJS Stack</h3>
              <h6>Udemy </h6>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <img
                  src="https://play-lh.googleusercontent.com/VyIvp4Wl7DOFnIcsxrIw0pq43zUd8Yb4n96DpDRDrSsBkxIodDMMDfQk4XunNT5oDJ7Z=s180"
                  alt="ReactJS"
                  className="icon"
                />
                <div className="info2">
                  <ReactJSModal />
                </div>
              </div>
              <h3>Complete ReactJS Stack</h3>
              <h6>Udemy</h6>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <img
                  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/32916853"
                  alt="Google Cloud"
                  className="icon"
                />
                <div className="info2">
                  <ACEModal />
                </div>
              </div>
              <h3>Google Cloud: Associate Cloud Engineer</h3>
              <h6>Google Cloud</h6>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="blockcertif">
              <div className="info1">
                <div className="info2"></div>
              </div>
              <h1>Achieving more out there! 🎯</h1>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}
