import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import Portfolio from "./Portfolio";
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
                    Code_V Studios is an independent game development studio
                    based in India. Our team of 15+ developers specializes in
                    hybrid casual games. We build fun, innovative, and
                    high-quality games that deliver memorable experiences.
                    <span className="d-block mt-2">
                      To create evergreen games that millions of players love
                      and remember.
                    </span>
                    <span className="d-block mt-1">
                      Play today. Remember forever.
                    </span>
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

      {/* Vision & Mission Section */}
      <section
        className={`page-section ${dark ? "bg-dark-1 light-content" : ""} pt-80 pb-80`}
        id="vision-mission"
      >
        <div className="container">
          <div className="vision-mission-wrapper wow fadeInUp">
            {/* Vision Card */}
            <div className="vision-card">
              <div className="vision-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="vision-card__title">Vision</h3>
              <p className="vision-card__text">
                To create evergreen games that millions of players love and remember.
              </p>
              <div className="vision-card__glow"></div>
            </div>

            {/* Mission Card */}
            <div className="mission-card">
              <div className="mission-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="mission-card__title">Mission</h3>
              <p className="mission-card__text">
                We build fun, innovative, and high-quality games that deliver memorable experiences across mobile and PC.
              </p>
              <div className="mission-card__glow"></div>
            </div>
          </div>
        </div>
      </section>

      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0`}
      />

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

        /* Vision & Mission Section Styling - Sharp Bold Theme */
        .vision-mission-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 992px) {
          .vision-mission-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 60px;
          }
        }

        /* Vision Card - Sharp Bold Design */
        .vision-card {
          position: relative;
          background: rgba(17, 20, 24, 0.8);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 0;
          padding: 50px 40px;
          overflow: hidden;
          transition: all 0.3s ease;
          clip-path: polygon(
            0 0,
            calc(100% - 20px) 0,
            100% 20px,
            100% 100%,
            20px 100%,
            0 calc(100% - 20px)
          );
        }

        .vision-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          z-index: 0;
        }

        .vision-card:hover {
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
        }

        .vision-card > * {
          position: relative;
          z-index: 1;
        }

        .vision-card__icon {
          width: 80px;
          height: 80px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.4);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          clip-path: polygon(
            0 0,
            calc(100% - 12px) 0,
            100% 12px,
            100% 100%,
            12px 100%,
            0 calc(100% - 12px)
          );
        }

        .vision-card:hover .vision-card__icon {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.8);
          transform: scale(1.05);
        }

        .vision-card__icon svg {
          color: #60a5fa;
          transition: all 0.3s ease;
        }

        .vision-card:hover .vision-card__icon svg {
          color: #3b82f6;
        }

        .vision-card__title {
          font-size: 36px;
          font-weight: 800;
          color: #60a5fa;
          margin-bottom: 20px;
          letter-spacing: -1px;
          text-transform: uppercase;
          font-family: inherit;
        }

        .vision-card__text {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          font-weight: 400;
        }

        .vision-card__glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          pointer-events: none;
          transition: all 0.5s ease;
          z-index: 0;
        }

        .vision-card:hover .vision-card__glow {
          opacity: 1.5;
          transform: scale(1.3);
        }

        /* Mission Card - Sharp Bold Design */
        .mission-card {
          position: relative;
          background: rgba(17, 20, 24, 0.8);
          border: 2px solid rgba(168, 85, 247, 0.3);
          border-radius: 0;
          padding: 50px 40px;
          overflow: hidden;
          transition: all 0.3s ease;
          clip-path: polygon(
            20px 0,
            100% 0,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0 100%,
            0 20px
          );
        }

        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 50%, rgba(168, 85, 247, 0.1) 100%);
          z-index: 0;
        }

        .mission-card:hover {
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
          transform: translateY(-4px);
        }

        .mission-card > * {
          position: relative;
          z-index: 1;
        }

        .mission-card__icon {
          width: 80px;
          height: 80px;
          background: rgba(168, 85, 247, 0.1);
          border: 2px solid rgba(168, 85, 247, 0.4);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          clip-path: polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
          );
        }

        .mission-card:hover .mission-card__icon {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.8);
          transform: scale(1.05);
        }

        .mission-card__icon svg {
          color: #c084fc;
          transition: all 0.3s ease;
        }

        .mission-card:hover .mission-card__icon svg {
          color: #a855f7;
        }

        .mission-card__title {
          font-size: 36px;
          font-weight: 800;
          color: #c084fc;
          margin-bottom: 20px;
          letter-spacing: -1px;
          text-transform: uppercase;
          font-family: inherit;
        }

        .mission-card__text {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          font-weight: 400;
        }

        .mission-card__glow {
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
          pointer-events: none;
          transition: all 0.5s ease;
          z-index: 0;
        }

        .mission-card:hover .mission-card__glow {
          opacity: 1.5;
          transform: scale(1.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .vision-card,
          .mission-card {
            padding: 40px 30px;
          }

          .vision-card__title,
          .mission-card__title {
            font-size: 28px;
          }

          .vision-card__text,
          .mission-card__text {
            font-size: 16px;
          }

          .vision-card__icon,
          .mission-card__icon {
            width: 70px;
            height: 70px;
          }

          .vision-card__icon svg,
          .mission-card__icon svg {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
