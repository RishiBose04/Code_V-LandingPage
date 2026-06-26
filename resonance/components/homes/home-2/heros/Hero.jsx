import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex flex-column align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="hero-inner d-flex flex-column align-items-center justify-content-center text-center w-100">
        <div className="home-content hero-home-content pt-20 pt-md-0 text-center">
          <h2 className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
            {/* I’m Ronald Smith */}
          </h2>
          <h1 className="hs-title-4 hero-main-title font-alt mb-60 mb-sm-40">
            <AnimatedText text="Code_V" />
            <br />
            {/* <AnimatedText text=" Based in Melburn." /> */}
          </h1>
        </div>
      </div>
      {/* Bottom Button */}
      <div className="hero-footer-button pt-4 pb-4 w-100 d-flex justify-content-center">
        <a
          href="#portfolio"
          className="btn btn-mod btn-circle btn-white btn-ellipse"
          data-btn-animate="ellipse"
        >
          <span className="btn-ellipse-inner">
            <span className="btn-ellipse-unhovered">Discover Projects</span>
            <span className="btn-ellipse-hovered" aria-hidden="true">
              Discover Projects
            </span>
          </span>
        </a>
      </div>
      {/* End Bottom Button */}
    </div>
  );
}
