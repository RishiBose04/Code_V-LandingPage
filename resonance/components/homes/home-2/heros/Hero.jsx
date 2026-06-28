import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image"; // Imported standard Next.js Image component for optimization

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Aesthetic Background Glow Element */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: "350px",
          height: "150px",
          background:
            "radial-gradient(circle, white 0%, rgba(168, 85, 247, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Home Section Content */}
      <div
        className="hero-inner d-flex flex-column align-items-center justify-content-center text-center w-100 position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="home-content hero-home-content pt-20 pt-md-0 text-center">
          <h2 className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
            {/* I’m Ronald Smith */}
          </h2>
          <h1
            className="hs-title-4 hero-main-title font-alt mb-60 mb-sm-40"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              textTransform:
                "none" /* Bypasses the template's global uppercase rule */,
            }}
          >
            {/* 1. Animated 'Code_' Text */}
            <AnimatedText text="Code_" style={{ textTransform: "none" }} />

            {/* 2. Logo Image Replacement */}
            <div
              className="hero-logo-wrap d-inline-block"
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/images/Code_V_LogoEdited.png"
                alt="Logo"
                width={170}
                height={170}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <br />
            {/* <AnimatedText text=" Based in Melburn." /> */}
          </h1>
        </div>
      </div>
    </div>
  );
}
