import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image"; // Imported standard Next.js Image component for optimization

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden pt-100 pb-100 pt-sm-120 pb-sm-120">
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
            <AnimatedText
              text="Code_"
              style={{ textTransform: "none" }}
              charStyle={{
                color: "#ffffff",
                textShadow:
                  "0 0 8px rgba(255,255,255,0.95), 0 0 16px rgba(255,255,255,0.8)",
              }}
            />

            {/* 2. Logo Image Replacement */}
            <div
              className="hero-logo-wrap d-inline-block"
              style={{
                marginLeft: "0px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transform: "translateY(-8px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0) 70%)",
                  filter: "blur(12px)",
                  transform: "scale(1.02)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              <Image
                src="/assets/images/VLogo.png"
                alt="Logo"
                width={150}
                height={150}
                priority
                sizes="(max-width: 768px) 90px, 150px"
                style={{
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  width: "clamp(80px, 16vw, 150px)",
                  height: "auto",
                  maxWidth: "100%",
                  filter:
                    "drop-shadow(0 0 8px rgba(255,255,255,0.45)) drop-shadow(0 0 12px rgba(255,255,255,0.2))",
                }}
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
