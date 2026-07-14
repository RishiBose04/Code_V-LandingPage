"use client";

import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style jsx>{`
        /* Flickering glow animation for Code_ text */
        @keyframes flicker-glow {
          0%, 100% {
            text-shadow: 
              0 0 8px rgba(255,255,255,0.95),
              0 0 16px rgba(255,255,255,0.8),
              0 0 24px rgba(255,255,255,0.6),
              0 0 32px rgba(100,200,255,0.5);
          }
          10% {
            text-shadow: 
              0 0 6px rgba(255,255,255,0.85),
              0 0 14px rgba(255,255,255,0.7),
              0 0 20px rgba(255,255,255,0.5),
              0 0 28px rgba(100,200,255,0.4);
          }
          20% {
            text-shadow: 
              0 0 10px rgba(255,255,255,1),
              0 0 20px rgba(255,255,255,0.9),
              0 0 30px rgba(255,255,255,0.7),
              0 0 40px rgba(100,200,255,0.6);
          }
          30% {
            text-shadow: 
              0 0 7px rgba(255,255,255,0.9),
              0 0 15px rgba(255,255,255,0.75),
              0 0 22px rgba(255,255,255,0.55),
              0 0 30px rgba(100,200,255,0.45);
          }
          50% {
            text-shadow: 
              0 0 12px rgba(255,255,255,1),
              0 0 24px rgba(255,255,255,0.95),
              0 0 36px rgba(255,255,255,0.8),
              0 0 48px rgba(100,200,255,0.7);
          }
          70% {
            text-shadow: 
              0 0 8px rgba(255,255,255,0.95),
              0 0 16px rgba(255,255,255,0.8),
              0 0 24px rgba(255,255,255,0.6),
              0 0 32px rgba(100,200,255,0.5);
          }
          85% {
            text-shadow: 
              0 0 5px rgba(255,255,255,0.8),
              0 0 12px rgba(255,255,255,0.65),
              0 0 18px rgba(255,255,255,0.45),
              0 0 26px rgba(100,200,255,0.35);
          }
        }

        /* Pulsing glow animation for the V logo */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.55;
            filter: blur(12px);
            transform: scale(1.02);
          }
          50% {
            opacity: 0.95;
            filter: blur(16px);
            transform: scale(1.08);
          }
        }

        /* Apply animation to Code_ text */
        :global(.hero-animated-text) {
          animation: flicker-glow 4s ease-in-out infinite;
        }

        /* Apply animation to logo glow */
        :global(.hero-logo-glow) {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container min-height-100vh d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div
          className="hero-inner d-flex flex-column align-items-center justify-content-center text-center w-100 position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="home-content hero-home-content pt-20 pt-md-0 text-center">
            <h2 className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
              {/* I'm Ronald Smith */}
            </h2>
            <h1
              className="hs-title-4 hero-main-title font-alt mb-60 mb-sm-40"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                textTransform: "none",
              }}
            >
              {/* 1. Animated 'Code_' Text with Flickering Glow */}
              <span className="hero-animated-text">
                <AnimatedText
                  text="Code_"
                  style={{ textTransform: "none" }}
                  charStyle={{
                    color: "#ffffff",
                    textShadow:
                      "0 0 8px rgba(255,255,255,0.95), 0 0 16px rgba(255,255,255,0.8)",
                  }}
                />
              </span>

              {/* 2. Logo Image with Pulsing Glow */}
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
                  className="hero-logo-glow"
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
    </>
  );
}
