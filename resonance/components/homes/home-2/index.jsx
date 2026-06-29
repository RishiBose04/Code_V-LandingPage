import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";

export default function Home2({ onePage = false, dark = false }) {
  return (
    <>
      {/* Modern Centered About Section with Background Video Showreel */}
      <section
        className={`page-section scrollSpysection pb-80 pt-120 position-relative overflow-hidden d-flex align-items-center ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Video Element */}
        <div className="about-video-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="about-video-element"
            src="/assets/videos/showreel.mp4" /* Replace with your actual video path */
          />
          {/* Ambient overlay tint to guarantee crisp text legibility */}
          <div className="about-video-overlay"></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-xl-7">
              <div className="wow fadeInUp">
                {/* Clean Symmetric Animated Header */}
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-40">
                  <span className="text-outline-2" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline">About</span>
                </h2>

                {/* Highly Scannable Glass-tinted Description Block */}
                <div className="about-content-card">
                  <p className="section-text mb-40">
                    {/* <span className="section-title-inline d-block mb-10">
                      Who We Are
                    </span> */}
                    We are a growing game studio powered by passionate
                    designers, developers, and artists. We create high-quality
                    mobile and PC games with a strong focus on fun, gameplay,
                    and immersive experiences. From early concepts to final
                    launch, we turn ideas into engaging games players enjoy and
                    remember.
                  </p>

                  <div className="local-scroll">
                    {onePage ? (
                      <a
                        href="#portfolio"
                        className="link-hover-anim underline align-middle text-uppercase fw-bold tracking-wider"
                        data-link-animate="y"
                        style={{ fontSize: "13px", letterSpacing: "1.5px" }}
                      >
                        <span className="link-strong link-strong-unhovered">
                          Explore Our Work{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Explore Our Work{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={`/bold-about${dark ? "-dark" : ""}`}
                        className="link-hover-anim underline align-middle text-uppercase fw-bold tracking-wider"
                        data-link-animate="y"
                        style={{ fontSize: "13px", letterSpacing: "1.5px" }}
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-section overflow-hidden">
        <Experience />
      </div>

      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section>

      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0`}
      />

      <section
        className={`page-section ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section>

      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>

      {/* Styled Layout Blocks */}
      <style>{`
        /* Complete Full-Bleed Video Canvas positioning */
        .about-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .about-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Combined Vignette + Color Layer for clean design aesthetics */
        .about-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(17,20,24,0.6) 0%, rgba(17,20,24,0.95) 100%);
          backdrop-filter: blur(1px);
        }

        /* Ambient layout spacing for the centered typography container */
        .about-content-card {
          padding: 20px 10px;
        }

        .about-content-card .section-text {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
        }

        .tracking-wider {
          letter-spacing: 1.5px;
        }

        .section-title-inline {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ffffff;
          font-weight: 700;
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}
