import React, { useState, useEffect } from "react";

import Bounce from "react-reveal/Bounce";

import CertificateModal from "../content/certificateModal";

const certificationsDetails = [
  {
    certificateName: "Google Cloud: Associate Cloud Engineer",
    certifiedBy: "Google Cloud",
    certificateImageSRC:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/32916853",
    certificateImageALT: "Google Cloud",
  },
  {
    certificateName: "AWS Academy Graduate",
    certifiedBy: "Amazon Web Services",
    certificateImageSRC:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/certificates/aws+academy.png",
    certificateImageALT: "Amazon Web Services",
  },
  {
    certificateName: "#30DaysCloudGoogle",
    certifiedBy: "Google Cloud",
    certificateImageSRC:
      "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/cloudlogo1.png",
    certificateImageALT: "Google Cloud, India",
  },
  {
    certificateName: "Google IT Support Professional",
    certifiedBy: "Google",
    certificateImageSRC:
      "https://www.credly.com/earner/earned/badge/0121ee83-507e-4c17-bd8b-b24fdf974bd4",
    certificateImageALT: "Google Cloud, India",
  },
  // {
  //   certificateName: "Career Edge - Knockdown the Lockdown",
  //   certifiedBy: "Tata Consultancy Services",
  //   certificateImageSRC:
  //     "https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/images/logo/tata.jpg",
  //   certificateImageALT: "Tata Consultancy Services",
  // },
];

export default function Certification() {
  const [certificate, setCertificate] = useState("");

  useEffect(() => {
    setCertificate(certificationsDetails);
  }, []);

  return (
    <section id="certification">
      <div className="inner-width">
        <h1 className="title">Certification</h1>
        <div className="section-title"></div>
        <div className="time-line">
          {certificate.length > 0 ? (
            certificate.map((item) => (
              <Bounce bottom>
                <div className="blockcertif">
                  <div className="info1">
                    <img
                      src={`${item.certificateImageSRC}`}
                      alt={`${item.certificateImageALT}`}
                      className="icon"
                    />
                    <div className="info2">
                      <CertificateModal props={item} />
                    </div>
                  </div>
                  <h3> {item.certificateName}</h3>
                  <h6>{item.certifiedBy}</h6>
                </div>
              </Bounce>
            ))
          ) : (
            <Bounce bottom>
              <div className="blockcertif">
                <h3>
                  Hey, Don't see any certificates? Hold on right there!
                  <br />
                  <br />
                  I got plenty to display, please check out my resume to see all
                  of them. They might be down due to servers.
                  <br />
                  <br />
                  PS: Feel free to Hit Me Up for Funding my Servers xD!
                </h3>
              </div>
            </Bounce>
          )}
        </div>
      </div>
    </section>
  );
}
